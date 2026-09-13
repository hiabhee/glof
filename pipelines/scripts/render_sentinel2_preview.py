"""Render one candidate Sentinel-2 RGB preview for human review.

The PNG is a local review artifact, not an approved application asset.
"""

from __future__ import annotations

import argparse
from datetime import date
import json
from pathlib import Path

import requests

from inventory_sentinel2 import windows


def main() -> int:
    parser = argparse.ArgumentParser(description="Render a Sentinel-2 candidate preview.")
    parser.add_argument("--project", required=True)
    parser.add_argument("--window", required=True, help="Timeline window ID, such as 2023-pre.")
    parser.add_argument("--manifest", type=Path, default=Path("data/catalog/south-lhonak.manifest.json"))
    parser.add_argument("--output-dir", type=Path, default=Path("data/derived/review"))
    args = parser.parse_args()

    import ee

    manifest = json.loads(args.manifest.read_text())
    chosen_window = next((window for window in windows(manifest) if window["id"] == args.window), None)
    if not chosen_window:
        raise ValueError(f"Unknown timeline window: {args.window}")

    ee.Initialize(project=args.project)
    west, south, east, north = manifest["study_area"]["coordinates_wgs84"]
    study_area = ee.Geometry.Rectangle([west, south, east, north])
    candidates = (
        ee.ImageCollection("COPERNICUS/S2_HARMONIZED")
        .filterBounds(study_area)
        .filterDate(chosen_window["start"], chosen_window["end"])
        .filter(ee.Filter.lte("CLOUDY_PIXEL_PERCENTAGE", 90))
        .sort("CLOUDY_PIXEL_PERCENTAGE")
    )
    image = candidates.first()
    scene_id = image.id().getInfo()
    scene_date = ee.Date(image.get("system:time_start"))
    same_day_mosaic = candidates.filterDate(scene_date, scene_date.advance(1, "day")).mosaic()
    url = same_day_mosaic.visualize(bands=["B4", "B3", "B2"], min=0, max=3000).getThumbURL(
        {"region": study_area, "dimensions": 1024, "format": "png"}
    )
    response = requests.get(url, timeout=60)
    response.raise_for_status()
    args.output_dir.mkdir(parents=True, exist_ok=True)
    output = args.output_dir / f"south-lhonak-{args.window}-{scene_id}.png"
    output.write_bytes(response.content)
    print(json.dumps({"window": args.window, "scene_id": scene_id, "output": str(output), "rendered_on": date.today().isoformat()}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
