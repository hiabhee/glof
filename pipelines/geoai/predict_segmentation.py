"""Create a map-ready glacier prediction from a trained segmentation model.

The output keeps probability and binary rasters together with a GeoJSON
prediction.  It propagates the model's evidence status so that exploratory
labels can never silently appear as validated science.
"""
from __future__ import annotations

import argparse
import json
from datetime import datetime
from pathlib import Path

import numpy as np

EXPECTED_ORDER = ["B2", "B3", "B4", "B8", "B11", "NDVI", "NDWI", "MNDWI", "NDSI", "B8/B11", "elevation", "slope", "aspect"]


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--model", type=Path, required=True)
    parser.add_argument("--feature", type=Path, required=True)
    parser.add_argument("--site-id", required=True)
    parser.add_argument("--observation-date", required=True)
    parser.add_argument("--data-status", choices=("reviewed", "owner_approved_experimental"), required=True)
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--threshold", type=float, default=0.5)
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    if not 0 < args.threshold < 1:
        raise ValueError("threshold must be between 0 and 1")
    import joblib
    import rasterio
    from rasterio.features import shapes
    from shapely.geometry import shape, mapping
    from shapely.ops import unary_union

    model = joblib.load(args.model)
    with rasterio.open(args.feature) as src:
        if list(src.descriptions) != EXPECTED_ORDER:
            raise ValueError("feature band order does not match the frozen segmentation schema")
        values = src.read().astype(np.float32)
        profile = src.profile.copy()
        valid = np.isfinite(values).all(axis=0)
        samples = np.moveaxis(values, 0, -1).reshape(-1, values.shape[0])
        probability = np.full(samples.shape[0], np.nan, dtype=np.float32)
        usable = np.isfinite(samples).all(axis=1)
        probability[usable] = model.predict_proba(samples[usable])[:, 1]
        probability = probability.reshape(src.height, src.width)
        binary = ((probability >= args.threshold) & valid).astype(np.uint8)
        geometry_parts = [shape(geom) for geom, value in shapes(binary, mask=binary.astype(bool), transform=src.transform) if value == 1]
        if not geometry_parts:
            raise ValueError("model predicted no glacier pixels at this threshold")
        merged = unary_union(geometry_parts)
        area_m2 = None
        if src.crs and src.crs.is_projected:
            area_m2 = merged.area
        profile.update(count=1, dtype="float32", nodata=np.nan, compress="deflate")
        args.output_dir.mkdir(parents=True, exist_ok=True)
        probability_path = args.output_dir / "glacier_probability.tif"
        with rasterio.open(probability_path, "w", **profile) as dst:
            dst.write(probability, 1)
            dst.set_band_description(1, "glacier_probability")
            dst.update_tags(data_status=args.data_status, threshold=str(args.threshold))
        profile.update(dtype="uint8", nodata=255)
        binary_path = args.output_dir / "glacier_prediction.tif"
        with rasterio.open(binary_path, "w", **profile) as dst:
            dst.write(np.where(valid, binary, 255).astype(np.uint8), 1)
            dst.set_band_description(1, "glacier_prediction")
            dst.update_tags(data_status=args.data_status, threshold=str(args.threshold), label_definition="0=non-glacier, 1=predicted glacier, 255=invalid")
        geojson = {
            "type": "FeatureCollection",
            "features": [{"type": "Feature", "properties": {
                "site_id": args.site_id, "observation_date": args.observation_date,
                "data_status": args.data_status, "model_type": type(model).__name__,
                "threshold": args.threshold, "predicted_pixel_count": int(binary.sum()),
                "area_m2": area_m2,
                "limitations": "Exploratory prediction: model evidence follows the training-label status and is not an independent boundary measurement." if args.data_status == "owner_approved_experimental" else None,
            }, "geometry": mapping(merged)}],
        }
        geojson_path = args.output_dir / "glacier_prediction.geojson"
        geojson_path.write_text(json.dumps(geojson, indent=2) + "\n")
        report = {"generated_at": datetime.now().astimezone().isoformat(), "site_id": args.site_id, "observation_date": args.observation_date, "model": str(args.model), "feature": str(args.feature), "data_status": args.data_status, "threshold": args.threshold, "predicted_pixel_count": int(binary.sum()), "probability_raster": str(probability_path), "prediction_raster": str(binary_path), "prediction_geojson": str(geojson_path)}
        (args.output_dir / "prediction_report.json").write_text(json.dumps(report, indent=2) + "\n")
    print(f"[predict_segmentation] OK: wrote {geojson_path}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
