"""Create clearly labelled *draft* South Lhonak glacier outlines for review.

The draft starts with the correctly located 2000 RGI glacier inventory outline
and subtracts the date-specific Sentinel-2 lake candidate.  This is a useful
editing starting point around the terminus; it is deliberately not a dated
glacier measurement, a reviewed label, or a training target.
"""
from __future__ import annotations

import argparse
import json
from datetime import datetime, timezone
from pathlib import Path


DATES = ("2017-11-19", "2019-10-15", "2022-11-30")


def read_single_geometry(path: Path):
    from shapely.geometry import shape
    from shapely.ops import unary_union

    document = json.loads(path.read_text())
    geometries = [shape(feature["geometry"]) for feature in document.get("features", []) if feature.get("geometry")]
    if not geometries:
        raise ValueError(f"no geometry found in {path}")
    return unary_union(geometries)


def area_m2(geometry) -> float:
    from rasterio.warp import transform_geom
    from shapely.geometry import shape

    projected = transform_geom("EPSG:4326", "EPSG:32645", geometry.__geo_interface__)
    return float(shape(projected).area)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument(
        "--reference",
        type=Path,
        default=Path("data/derived/reference/south-lhonak-rgi-v7-reference.geojson"),
        help="Correctly located historical RGI reference outline in EPSG:4326.",
    )
    parser.add_argument(
        "--lake-directory",
        type=Path,
        default=Path("apps/web/public/boundaries"),
        help="Directory containing South Lhonak date-specific lake candidate GeoJSON files.",
    )
    parser.add_argument(
        "--output-directory",
        type=Path,
        default=Path("data/draft-boundaries/south-lhonak"),
        help="Dedicated draft location; this program never writes reviewed boundaries.",
    )
    args = parser.parse_args()

    try:
        from shapely.geometry import mapping

        reference = read_single_geometry(args.reference)
        if reference.is_empty or not reference.is_valid:
            raise ValueError("reference outline is empty or invalid")
        if reference.bounds[2] < 88.15:
            raise ValueError("reference outline is not located at the South Lhonak study area")

        args.output_directory.mkdir(parents=True, exist_ok=True)
        records = []
        for observation_date in DATES:
            lake_path = args.lake_directory / f"south-lhonak-{observation_date}-lake-candidate.geojson"
            if not lake_path.is_file():
                raise ValueError(f"missing lake candidate: {lake_path}")
            lake = read_single_geometry(lake_path)
            if lake.is_empty or not lake.is_valid:
                raise ValueError(f"lake candidate is empty or invalid: {lake_path}")

            # buffer(0) is a conservative topology cleanup before the difference.
            draft = reference.difference(lake.buffer(0))
            if draft.is_empty or not draft.is_valid:
                raise ValueError(f"draft geometry failed for {observation_date}")

            output = args.output_directory / f"south-lhonak-{observation_date}-glacier-draft.geojson"
            properties = {
                "site_id": "south-lhonak",
                "kind": "glacier",
                "observation_date": observation_date,
                "status": "draft_reference_adjusted_not_reviewed",
                "area_m2_draft": round(area_m2(draft), 1),
                "method": "2000 RGI historical glacier outline minus date-specific Sentinel-2 lake spectral candidate",
                "reference": str(args.reference),
                "lake_candidate": str(lake_path),
                "use": "Editable visual starting point only",
                "prohibited_use": "Do not use for measurements, evaluation, model training, or release until a human maps and approves this date-specific outline.",
                "limitations": "The old inventory footprint does not capture post-2000 changes away from the lake terminus; the spectral lake candidate can contain shadow, ice, or turbid-water errors.",
            }
            feature = {"type": "Feature", "properties": properties, "geometry": mapping(draft)}
            output.write_text(json.dumps({"type": "FeatureCollection", "features": [feature]}, indent=2) + "\n")
            records.append({
                "observation_date": observation_date,
                "draft_boundary": str(output),
                "status": properties["status"],
                "area_m2_draft": properties["area_m2_draft"],
            })

        manifest = {
            "schema_version": "1.0",
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "site_id": "south-lhonak",
            "status": "draft_reference_adjusted_not_reviewed",
            "purpose": "Human-editing package; not a research label package.",
            "records": records,
        }
        manifest_path = args.output_directory / "draft-manifest.json"
        manifest_path.write_text(json.dumps(manifest, indent=2) + "\n")
        print(f"[draft-boundaries] OK: wrote {len(records)} drafts and {manifest_path}")
        return 0
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"[draft-boundaries] BLOCKED: {exc}")
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
