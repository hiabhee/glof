"""List candidate Sentinel-2 observations for one GlacierLens site manifest.

This creates a candidate inventory only. An analyst must still inspect local cloud,
shadow, seasonal snow, lake visibility, and geometric alignment before approval.
"""

from __future__ import annotations

import argparse
from datetime import date
import json
from pathlib import Path


def windows(manifest: dict) -> list[dict[str, str]]:
    strategy = manifest["temporal_strategy"]
    annual = strategy["annual_window"]
    years = [year for year in strategy["years"] if year != 2023]
    result = [
        {
            "id": str(year),
            "start": f"{year}-{annual['start_month']:02d}-01",
            "end": f"{year}-{annual['end_month']:02d}-30",
            "kind": "annual",
        }
        for year in years
    ]
    result.extend({**window, "kind": "event"} for window in strategy["event_windows"])
    return result


def main() -> int:
    parser = argparse.ArgumentParser(description="Inventory Sentinel-2 candidates for a GlacierLens site.")
    parser.add_argument("--project", required=True)
    parser.add_argument("--manifest", type=Path, default=Path("data/catalog/south-lhonak.manifest.json"))
    parser.add_argument("--limit", type=int, default=5, help="Candidates retained per time window.")
    args = parser.parse_args()

    import ee

    manifest = json.loads(args.manifest.read_text())
    ee.Initialize(project=args.project)
    west, south, east, north = manifest["study_area"]["coordinates_wgs84"]
    study_area = ee.Geometry.Rectangle([west, south, east, north])

    report = {"site_id": manifest["site_id"], "collection": "COPERNICUS/S2_HARMONIZED", "windows": []}
    for window in windows(manifest):
        collection = (
            ee.ImageCollection("COPERNICUS/S2_HARMONIZED")
            .filterBounds(study_area)
            .filterDate(window["start"], window["end"])
            .filter(ee.Filter.lte("CLOUDY_PIXEL_PERCENTAGE", 90))
            .sort("CLOUDY_PIXEL_PERCENTAGE")
            .limit(args.limit)
        )
        properties = collection.map(
            lambda image: ee.Feature(
                None,
                {
                    "scene_id": image.id(),
                    "acquired_at": image.date().format("YYYY-MM-dd'T'HH:mm:ss'Z'"),
                    "cloud_percent_scene": image.get("CLOUDY_PIXEL_PERCENTAGE"),
                    "mgrs_tile": image.get("MGRS_TILE"),
                },
            )
        )
        candidates = properties.getInfo()["features"]
        report["windows"].append(
            {
                **window,
                "queried_on": date.today().isoformat(),
                "candidate_count_returned": len(candidates),
                "candidates": [feature["properties"] for feature in candidates],
            }
        )

    print(json.dumps(report, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
