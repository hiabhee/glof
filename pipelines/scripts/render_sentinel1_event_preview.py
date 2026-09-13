"""Render a Sentinel-1 VV SAR event-context preview for South Lhonak."""

from __future__ import annotations

import argparse
import json
from pathlib import Path

import requests


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--project", required=True)
    parser.add_argument("--date", required=True, help="UTC acquisition date, YYYY-MM-DD")
    parser.add_argument("--label", required=True)
    parser.add_argument("--manifest", type=Path, default=Path("data/catalog/south-lhonak.manifest.json"))
    parser.add_argument("--output-dir", type=Path, default=Path("data/derived/review"))
    args = parser.parse_args()
    import ee

    manifest = json.loads(args.manifest.read_text())
    west, south, east, north = manifest["study_area"]["coordinates_wgs84"]
    ee.Initialize(project=args.project)
    area = ee.Geometry.Rectangle([west, south, east, north])
    start = ee.Date(args.date)
    image = (
        ee.ImageCollection("COPERNICUS/S1_GRD")
        .filterBounds(area)
        .filterDate(start, start.advance(1, "day"))
        .filter(ee.Filter.eq("instrumentMode", "IW"))
        .filter(ee.Filter.listContains("transmitterReceiverPolarisation", "VV"))
        .select("VV")
        .first()
    )
    scene_id = image.id().getInfo()
    url = image.visualize(min=-25, max=0).getThumbURL({"region": area, "dimensions": 1024, "format": "png"})
    response = requests.get(url, timeout=60)
    response.raise_for_status()
    args.output_dir.mkdir(parents=True, exist_ok=True)
    output = args.output_dir / f"south-lhonak-s1-{args.label}-{args.date}-{scene_id}.png"
    output.write_bytes(response.content)
    print(json.dumps({"scene_id": scene_id, "output": str(output)}))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
