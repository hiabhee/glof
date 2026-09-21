"""Rasterise analyst-reviewed glacier vectors into segmentation training masks.

The review manifest is the source of truth.  Historical inventory polygons,
candidate outlines, and model-derived outlines are rejected as labels.
"""
from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--reviews", type=Path, required=True, help="Reviewed-vector manifest; see data/catalog/reviewed-glacier-masks.example.json")
    parser.add_argument("--masks-dir", type=Path, default=Path("data/derived/phase2/masks"))
    return parser.parse_args()


def load_reviews(path: Path) -> list[dict]:
    if not path.exists():
        raise ValueError(f"review manifest does not exist: {path}")
    payload = json.loads(path.read_text())
    if payload.get("data_status") != "reviewed":
        raise ValueError("review manifest must declare data_status='reviewed'")
    records = payload.get("records")
    if not isinstance(records, list) or not records:
        raise ValueError("review manifest has no records")
    required = {"site_id", "observation_date", "feature_asset", "reviewed_boundary_asset", "review_status", "reviewer", "reviewed_at"}
    for record in records:
        missing = required - record.keys()
        if missing:
            raise ValueError(f"review record is missing {sorted(missing)}")
        if record["review_status"] != "approved_reviewed":
            raise ValueError(f"{record['site_id']} {record['observation_date']} is not approved_reviewed")
        source = str(record.get("boundary_source", "")).lower()
        if any(blocked in source for blocked in ("candidate", "synthetic", "scaled", "model-derived", "historical baseline")):
            raise ValueError(f"{record['site_id']} {record['observation_date']} has a non-reviewable label source: {source}")
    return records


def geometry_from_geojson(path: Path) -> dict:
    value = json.loads(path.read_text())
    if value.get("type") == "FeatureCollection":
        features = value.get("features", [])
        if len(features) != 1:
            raise ValueError(f"{path} must contain exactly one reviewed glacier feature")
        return features[0]["geometry"]
    if value.get("type") == "Feature":
        return value["geometry"]
    if "coordinates" in value:
        return value
    raise ValueError(f"{path} is not GeoJSON geometry")


def write_mask(record: dict, masks_dir: Path) -> dict:
    import rasterio
    from rasterio.features import rasterize
    from rasterio.warp import transform_geom

    feature_path = Path(record["feature_asset"])
    boundary_path = Path(record["reviewed_boundary_asset"])
    if not feature_path.exists() or not boundary_path.exists():
        raise ValueError(f"missing feature or reviewed boundary for {record['site_id']} {record['observation_date']}")
    geometry = geometry_from_geojson(boundary_path)
    source_crs = record.get("boundary_crs", "EPSG:4326")
    with rasterio.open(feature_path) as src:
        if src.crs is None:
            raise ValueError(f"feature raster has no CRS: {feature_path}")
        if str(src.crs) != source_crs:
            geometry = transform_geom(source_crs, src.crs, geometry, precision=8)
        mask = rasterize([(geometry, 1)], out_shape=(src.height, src.width), transform=src.transform, fill=0, dtype="uint8", all_touched=False)
        profile = src.profile.copy()
    profile.update(count=1, dtype="uint8", nodata=0, compress="deflate")
    output = masks_dir / record["site_id"] / f"{record['observation_date']}_reviewed.tif"
    output.parent.mkdir(parents=True, exist_ok=True)
    with rasterio.open(output, "w", **profile) as dst:
        dst.write(mask, 1)
        dst.update_tags(data_status="reviewed", review_status="approved_reviewed", reviewer=record["reviewer"], reviewed_at=record["reviewed_at"], boundary_asset=str(boundary_path))
    if not mask.any():
        raise ValueError(f"reviewed boundary does not overlap its feature grid: {record['site_id']} {record['observation_date']}")
    return {"site_id": record["site_id"], "observation_date": record["observation_date"], "feature_asset": str(feature_path), "reviewed_mask": str(output), "status": "approved_reviewed", "reviewer": record["reviewer"], "reviewed_at": record["reviewed_at"], "boundary_asset": str(boundary_path), "boundary_source": record["boundary_source"]}


def main() -> int:
    args = parse_args()
    try:
        reviews = load_reviews(args.reviews)
        records = [write_mask(record, args.masks_dir) for record in reviews]
    except (ValueError, OSError, json.JSONDecodeError) as exc:
        print(f"[build_training_masks] BLOCKED: {exc}", file=sys.stderr)
        return 2
    manifest = {"schema_version": "2.0", "generated_at": datetime.now().astimezone().isoformat(), "data_status": "reviewed", "records": records, "label_definition": "1 = analyst-reviewed glacier extent; 0 = all other valid pixels", "leakage_guard": "Records retain site and acquisition date so training assigns complete scenes to folds."}
    output = args.masks_dir / "training_mask_manifest.json"
    output.write_text(json.dumps(manifest, indent=2))
    print(f"[build_training_masks] OK: wrote {len(records)} reviewed masks to {output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
