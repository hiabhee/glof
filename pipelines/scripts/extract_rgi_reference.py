"""Extract published RGI lake-terminating glacier outlines around a study area.

The source GeoPackage remains the authoritative reference. The output is a small
derived GeoJSON for inspection and later web-tile preparation.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path
import sqlite3

from shapely import from_wkb
from shapely.geometry import box, mapping


ENVELOPE_BYTE_COUNTS = {0: 0, 1: 32, 2: 48, 3: 48, 4: 64}


def geopackage_wkb(geometry: bytes) -> bytes:
    if geometry[:2] != b"GP":
        raise ValueError("Geometry is not a GeoPackage geometry binary.")
    envelope_type = (geometry[3] >> 1) & 0b111
    return geometry[8 + ENVELOPE_BYTE_COUNTS[envelope_type] :]


def main() -> int:
    parser = argparse.ArgumentParser(description="Extract RGI reference outlines around a GlacierLens site.")
    parser.add_argument("--manifest", type=Path, default=Path("data/catalog/south-lhonak.manifest.json"))
    parser.add_argument(
        "--source",
        type=Path,
        default=Path("data/derived/reference/lake-terminating/dataset/outlines/RGI2000-v7.0-G-15_south_asia_east_laketerminating.gpkg"),
    )
    parser.add_argument("--output", type=Path, default=Path("data/derived/reference/south-lhonak-rgi-v7-reference.geojson"))
    args = parser.parse_args()

    manifest = json.loads(args.manifest.read_text())
    west, south, east, north = manifest["study_area"]["coordinates_wgs84"]
    search_area = box(west, south, east, north)
    connection = sqlite3.connect(args.source)
    table_name = connection.execute("SELECT table_name FROM gpkg_contents").fetchone()[0]
    quoted_table = f'"{table_name}"'
    rows = connection.execute(
        f"SELECT geom, rgi_id, lake_cat, image_id, image_date, inventory_doi, contributor FROM {quoted_table}"
    )

    features = []
    for geometry, rgi_id, lake_cat, image_id, image_date, inventory_doi, contributor in rows:
        shape = from_wkb(geopackage_wkb(geometry))
        if shape.intersects(search_area):
            features.append(
                {
                    "type": "Feature",
                    "properties": {
                        "rgi_id": rgi_id,
                        "lake_cat": lake_cat,
                        "image_id": image_id,
                        "image_date": image_date,
                        "inventory_doi": inventory_doi,
                        "contributor": contributor,
                        "source": "GLIMS-RGI lake_terminating dataset; RGI v7 Region 15",
                        "source_url": "https://github.com/GLIMS-RGI/lake_terminating",
                    },
                    "geometry": mapping(shape),
                }
            )

    collection = {"type": "FeatureCollection", "features": features}
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(collection, indent=2))
    print(f"Extracted {len(features)} RGI reference outline(s) to {args.output}.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
