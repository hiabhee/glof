"""Generate a transparent, provisional South Lhonak change-analysis package.

This command measures only geometry that the project owner accepted in QGIS and
the date-specific Sentinel-2 lake candidates.  It intentionally does *not*
report terminus retreat or a GLOF risk score: those require independently
reviewed dated glacier and lake boundaries.
"""
from __future__ import annotations

import argparse
import csv
import json
from datetime import date, datetime, timezone
from pathlib import Path


DATES = ("2017-11-19", "2019-10-15", "2022-11-30")
SITE_ID = "south-lhonak"
ANALYSIS_CRS = "EPSG:32645"
STATUS = "provisional_owner_approved_not_independently_reviewed"


def read_geometry(path: Path):
    from shapely.geometry import shape

    payload = json.loads(path.read_text())
    features = payload.get("features", [])
    if len(features) != 1 or not features[0].get("geometry"):
        raise ValueError(f"{path} must contain exactly one geometry feature")
    return shape(features[0]["geometry"]), features[0].get("properties", {})


def transform_geometry(geometry, source_crs: str, target_crs: str):
    from rasterio.warp import transform_geom
    from shapely.geometry import shape

    # Preserve full precision: rounding WGS84 coordinates can collapse tiny
    # polygon components in raster-derived lake edges and make valid UTM
    # difference geometries invalid on export.
    return shape(transform_geom(source_crs, target_crs, geometry.__geo_interface__, precision=-1))


def area_km2(geometry) -> float:
    return round(float(geometry.area) / 1_000_000, 6)


def write_feature_collection(path: Path, features: list[dict]) -> None:
    path.write_text(json.dumps({"type": "FeatureCollection", "features": features}, indent=2) + "\n")


def make_feature(geometry_utm, properties: dict) -> dict:
    from shapely.geometry import mapping

    geometry_wgs84 = transform_geometry(geometry_utm, ANALYSIS_CRS, "EPSG:4326")
    # Raster-edge vertices can become minute self-intersections after inverse
    # projection. Repair only the display/export geometry; measurements above
    # are calculated from the original valid UTM geometry.
    if not geometry_wgs84.is_valid:
        geometry_wgs84 = geometry_wgs84.buffer(0)
    if geometry_wgs84.is_empty or not geometry_wgs84.is_valid:
        raise ValueError(f"could not create a valid WGS84 export geometry for {properties['change_class']}")
    return {"type": "Feature", "properties": properties, "geometry": mapping(geometry_wgs84)}


def make_report(records: list[dict], intervals: list[dict]) -> str:
    lines = [
        "# South Lhonak provisional change analysis",
        "",
        "**Status:** provisional owner-approved geometry; not independently reviewed and not suitable for model training, evaluation, publication-grade measurement, or GLOF prediction.",
        "",
        "## Date measurements",
        "",
        "| Date | Draft glacier area (km²) | Candidate lake area (km²) |",
        "| --- | ---: | ---: |",
    ]
    lines.extend(f"| {row['observation_date']} | {row['glacier_area_km2']:.3f} | {row['lake_area_km2']:.3f} |" for row in records)
    lines += ["", "## Interval changes", "", "| Interval | Draft glacier change (km²) | Candidate lake change (km²) |", "| --- | ---: | ---: |"]
    lines.extend(
        f"| {row['from_date']} → {row['to_date']} | {row['glacier_area_change_km2']:+.3f} | {row['lake_area_change_km2']:+.3f} |"
        for row in intervals
    )
    lines += [
        "",
        "## Interpretation guardrails",
        "",
        "- Glacier values come from the project-owner-approved drafts, which began from an RGI 2000 reference outline minus the date-specific lake candidate.",
        "- Lake values are spectral candidates, not reviewed shorelines. Shadow, ice, and turbid water can alter them.",
        "- The area trend is therefore a **workflow demonstration**, not a defensible observed retreat rate.",
        "- Terminus retreat, elevation-band change, risk ranking, and GeoAI model training are deliberately not computed from this package.",
        "",
        "## Files",
        "",
        "- `measurements.csv` — date and interval tables for charts.",
        "- `summary.json` — machine-readable provenance and measurements.",
        "- `2017-11-19_to_2019-10-15-change.geojson` and `2019-10-15_to_2022-11-30-change.geojson` — glacier/lake gain and loss polygons for GIS display.",
    ]
    return "\n".join(lines) + "\n"


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--boundary-directory", type=Path, default=Path("data/owner-approved-boundaries"))
    parser.add_argument("--lake-directory", type=Path, default=Path("apps/web/public/boundaries"))
    parser.add_argument("--output-directory", type=Path, default=Path("data/derived/planb/change-analysis/south-lhonak"))
    args = parser.parse_args()
    try:
        args.output_directory.mkdir(parents=True, exist_ok=True)
        records: list[dict] = []
        geometries: dict[str, tuple[object, object]] = {}
        for observation_date in DATES:
            glacier_path = args.boundary_directory / f"south-lhonak-{observation_date}-glacier.geojson"
            lake_path = args.lake_directory / f"south-lhonak-{observation_date}-lake-candidate.geojson"
            glacier_wgs84, glacier_properties = read_geometry(glacier_path)
            lake_wgs84, lake_properties = read_geometry(lake_path)
            if glacier_properties.get("status") != "project_owner_approved_pending_independent_review":
                raise ValueError(f"{glacier_path} is not an owner-approved provisional boundary")
            glacier = transform_geometry(glacier_wgs84, "EPSG:4326", ANALYSIS_CRS)
            lake = transform_geometry(lake_wgs84, "EPSG:4326", ANALYSIS_CRS)
            if not glacier.is_valid or not lake.is_valid:
                raise ValueError(f"invalid glacier or lake geometry for {observation_date}")
            geometries[observation_date] = (glacier, lake)
            records.append({
                "site_id": SITE_ID,
                "observation_date": observation_date,
                "status": STATUS,
                "glacier_boundary_asset": str(glacier_path),
                "lake_candidate_asset": str(lake_path),
                "glacier_area_km2": area_km2(glacier),
                "lake_area_km2": area_km2(lake),
                "terminus_retreat_m": None,
                "terminus_retreat_status": "not_computed: independent dated terminus lines are required",
            })

        intervals: list[dict] = []
        for older, newer in zip(DATES, DATES[1:]):
            old_glacier, old_lake = geometries[older]
            new_glacier, new_lake = geometries[newer]
            glacier_loss = old_glacier.difference(new_glacier)
            glacier_gain = new_glacier.difference(old_glacier)
            lake_growth = new_lake.difference(old_lake)
            lake_reduction = old_lake.difference(new_lake)
            if not all(geometry.is_valid for geometry in (glacier_loss, glacier_gain, lake_growth, lake_reduction)):
                raise ValueError(f"invalid change geometry for {older} to {newer}")
            elapsed_days = (date.fromisoformat(newer) - date.fromisoformat(older)).days
            record = {
                "site_id": SITE_ID,
                "from_date": older,
                "to_date": newer,
                "elapsed_days": elapsed_days,
                "elapsed_years": round(elapsed_days / 365.25, 4),
                "status": STATUS,
                "glacier_area_change_km2": round(area_km2(new_glacier) - area_km2(old_glacier), 6),
                "lake_area_change_km2": round(area_km2(new_lake) - area_km2(old_lake), 6),
                "glacier_loss_km2": area_km2(glacier_loss),
                "glacier_gain_km2": area_km2(glacier_gain),
                "lake_growth_km2": area_km2(lake_growth),
                "lake_reduction_km2": area_km2(lake_reduction),
                "terminus_retreat_m": None,
                "terminus_retreat_status": "not_computed: area difference is not a terminus measurement",
            }
            intervals.append(record)
            output = args.output_directory / f"{older}_to_{newer}-change.geojson"
            base = {"site_id": SITE_ID, "from_date": older, "to_date": newer, "status": STATUS, "crs_for_measurement": ANALYSIS_CRS}
            features = [
                make_feature(glacier_loss, {**base, "change_class": "glacier_loss", "area_km2": area_km2(glacier_loss)}),
                make_feature(glacier_gain, {**base, "change_class": "glacier_gain", "area_km2": area_km2(glacier_gain)}),
                make_feature(lake_growth, {**base, "change_class": "lake_growth", "area_km2": area_km2(lake_growth)}),
                make_feature(lake_reduction, {**base, "change_class": "lake_reduction", "area_km2": area_km2(lake_reduction)}),
            ]
            write_feature_collection(output, features)

        summary = {
            "schema_version": "1.0",
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "site_id": SITE_ID,
            "analysis_crs": ANALYSIS_CRS,
            "status": STATUS,
            "purpose": "Provisional owner-reviewed workflow demonstration of area and spatial change.",
            "prohibited_uses": ["GeoAI training", "model evaluation", "publication-grade change measurement", "GLOF risk prediction"],
            "records": records,
            "intervals": intervals,
            "method": "Areas and geometry differences computed in EPSG:32645 from project-owner-approved glacier drafts and Sentinel-2 spectral lake candidates.",
            "limitations": "Glacier drafts were initialized from an RGI 2000 reference; lake candidates are not reviewed shorelines. Independent dated delineation/review is required for final claims.",
        }
        (args.output_directory / "summary.json").write_text(json.dumps(summary, indent=2) + "\n")
        with (args.output_directory / "measurements.csv").open("w", newline="") as handle:
            fields = ["record_type", "site_id", "from_date", "to_date", "observation_date", "elapsed_days", "elapsed_years", "glacier_boundary_asset", "lake_candidate_asset", "glacier_area_km2", "lake_area_km2", "glacier_area_change_km2", "lake_area_change_km2", "glacier_loss_km2", "glacier_gain_km2", "lake_growth_km2", "lake_reduction_km2", "terminus_retreat_m", "terminus_retreat_status", "status"]
            writer = csv.DictWriter(handle, fieldnames=fields, lineterminator="\n")
            writer.writeheader()
            for row in records:
                writer.writerow({"record_type": "observation", **row})
            for row in intervals:
                writer.writerow({"record_type": "interval", **row})
        (args.output_directory / "README.md").write_text(make_report(records, intervals))
        print(f"[change-analysis] OK: wrote {len(records)} dates and {len(intervals)} intervals to {args.output_directory}")
        return 0
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"[change-analysis] BLOCKED: {exc}")
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
