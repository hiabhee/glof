"""Verify local Earth Engine access for the GlacierLens preparation pipeline.

Usage:
    python pipelines/scripts/preflight_gee.py --project YOUR_GEE_PROJECT_ID

Authenticate locally first if required with:
    earthengine authenticate
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path
import sys


REQUIRED_COLLECTIONS = (
    "COPERNICUS/S2_HARMONIZED",
    "GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED",
    "COPERNICUS/DEM/GLO30_2024_1",
)


def main() -> int:
    parser = argparse.ArgumentParser(description="Verify Earth Engine access for GlacierLens.")
    parser.add_argument("--project", required=True, help="Your Google Earth Engine cloud project ID.")
    parser.add_argument(
        "--manifest",
        type=Path,
        default=Path("data/catalog/south-lhonak.manifest.json"),
        help="Path to a GlacierLens site manifest.",
    )
    args = parser.parse_args()

    try:
        import ee
    except ImportError:
        print("Earth Engine API is not installed. Install pipelines/requirements.txt first.", file=sys.stderr)
        return 2

    manifest = json.loads(args.manifest.read_text())
    try:
        ee.Initialize(project=args.project)
        collection_checks = {
            collection_id: ee.ImageCollection(collection_id).limit(1).size().getInfo()
            for collection_id in REQUIRED_COLLECTIONS
        }
    except Exception as error:  # Earth Engine raises multiple exception classes.
        print(f"Earth Engine preflight failed: {error}", file=sys.stderr)
        print("If this is an authentication error, run `earthengine authenticate` locally and retry.", file=sys.stderr)
        return 1

    result = {
        "site_id": manifest["site_id"],
        "gee_project": args.project,
        "required_collections": collection_checks,
        "status": "ready",
    }
    print(json.dumps(result, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
