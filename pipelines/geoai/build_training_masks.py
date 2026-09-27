"""Rasterise glacier vectors into segmentation training masks.

Two explicit evidence tracks are supported: independently reviewed labels and
project-owner-approved experimental labels.  The latter can accelerate a pilot,
but every output remains marked experimental and must not be presented as an
independently validated result.
"""
from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime
from pathlib import Path


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--reviews", type=Path, required=True, help="Label manifest; see data/catalog/reviewed-glacier-masks.example.json")
    parser.add_argument("--masks-dir", type=Path, default=Path("data/derived/phase2/masks"))
    return parser.parse_args()


def load_reviews(path: Path) -> tuple[str, list[dict]]:
    if not path.exists():
        raise ValueError(f"review manifest does not exist: {path}")
    payload = json.loads(path.read_text())
    data_status = payload.get("data_status")
    permitted_statuses = {"reviewed", "owner_approved_experimental"}
    if data_status not in permitted_statuses:
        raise ValueError(f"label manifest must declare one of {sorted(permitted_statuses)}")
    records = payload.get("records")
    if not isinstance(records, list) or not records:
        raise ValueError("review manifest has no records")
    required = {"site_id", "observation_date", "feature_asset", "reviewed_boundary_asset", "review_status", "reviewer", "reviewed_at"}
    for record in records:
        missing = required - record.keys()
        if missing:
            raise ValueError(f"review record is missing {sorted(missing)}")
        expected_review_status = "approved_reviewed" if data_status == "reviewed" else "owner_approved_experimental"
        if record["review_status"] != expected_review_status:
            raise ValueError(f"{record['site_id']} {record['observation_date']} must be {expected_review_status}")
        source = str(record.get("boundary_source", "")).lower()
        if data_status == "reviewed" and any(blocked in source for blocked in ("candidate", "synthetic", "scaled", "model-derived", "historical baseline")):
            raise ValueError(f"{record['site_id']} {record['observation_date']} has a non-reviewable label source: {source}")
    return data_status, records


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
    import numpy as np

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
        # Plan B fix: separate codes — 0 background, 1 glacier, 255 ignored/invalid.
        # Fill unknown/invalid from valid_mask.tif (SCL-derived) if available.
        valid_path = Path(record.get("valid_mask", str(feature_path.parent / "valid_mask.tif")))
        if valid_path.exists():
            with rasterio.open(valid_path) as vm:
                if vm.width != src.width or vm.height != src.height or vm.crs != src.crs:
                    raise ValueError(f"valid_mask grid mismatch for {record['site_id']} {record['observation_date']}: {valid_path}")
                valid = vm.read(1)
                # Where valid==0, set to 255 (ignored) regardless of rasterized value
                mask = np.where(valid == 0, 255, mask).astype(np.uint8)
        else:
            # If no valid_mask, at least keep 0/1 but warn — still use 255 as nodata for future
            print(f"[build_training_masks] WARNING: no valid_mask found at {valid_path}; using 0/1 only (unknown will conflate)", file=sys.stderr)
        # Also treat feature nodata (e.g., NaN bands) as ignored — handled via valid_mask above; if still missing, keep 255
    profile.update(count=1, dtype="uint8", nodata=255, compress="deflate")
    output = masks_dir / record["site_id"] / f"{record['observation_date']}_reviewed.tif"
    output.parent.mkdir(parents=True, exist_ok=True)
    with rasterio.open(output, "w", **profile) as dst:
        dst.write(mask, 1)
        dst.update_tags(data_status=record["data_status"], review_status=record["review_status"], reviewer=record["reviewer"], reviewed_at=record["reviewed_at"], boundary_asset=str(boundary_path), label_definition="0=background, 1=glacier, 255=ignored/invalid (cloud, shadow, nodata, snow-ambiguous)")
    # Check that some glacier pixels remain (excluding ignored)
    if not np.any(mask == 1):
        raise ValueError(f"reviewed boundary does not overlap valid area for {record['site_id']} {record['observation_date']} (no glacier pixels with valid=1)")
    if not np.any(mask == 0):
        print(f"[build_training_masks] WARNING: {record['site_id']} {record['observation_date']} has no background pixels (all glacier or ignored)", file=sys.stderr)
    return {"site_id": record["site_id"], "observation_date": record["observation_date"], "feature_asset": str(feature_path), "reviewed_mask": str(output), "status": record["review_status"], "data_status": record["data_status"], "reviewer": record["reviewer"], "reviewed_at": record["reviewed_at"], "boundary_asset": str(boundary_path), "boundary_source": record["boundary_source"]}


def main() -> int:
    args = parse_args()
    try:
        data_status, reviews = load_reviews(args.reviews)
        for review in reviews:
            review["data_status"] = data_status
        records = [write_mask(record, args.masks_dir) for record in reviews]
    except (ValueError, OSError, json.JSONDecodeError) as exc:
        print(f"[build_training_masks] BLOCKED: {exc}", file=sys.stderr)
        return 2
    manifest = {"schema_version": "2.0", "generated_at": datetime.now().astimezone().isoformat(), "data_status": data_status, "records": records, "label_definition": "0=background, 1=glacier, 255=ignored/invalid (cloud, shadow, nodata, snow-ambiguous); nodata=255", "leakage_guard": "Records retain site and acquisition date so training assigns complete scenes to folds.", "limitations": "Owner-approved experimental labels originate from project-owner-approved derived boundaries and are not independently validated." if data_status == "owner_approved_experimental" else None}
    output = args.masks_dir / "training_mask_manifest.json"
    output.write_text(json.dumps(manifest, indent=2))
    print(f"[build_training_masks] OK: wrote {len(records)} reviewed masks to {output}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
