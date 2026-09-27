"""Evaluate a complete segmentation raster on its shared valid footprint.

The evaluator fails closed when prediction and reference grids differ.  It
never turns ignored pixels (255/nodata) into background, and exports both
machine-readable counts and map layers for diagnostic review.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import sys
from datetime import datetime
from pathlib import Path

import numpy as np

IGNORED_VALUE = 255
CLASS_CODES = {"true_negative": 0, "true_positive": 1, "false_positive": 2, "false_negative": 3, "ignored": 255}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--prediction", type=Path, required=True, help="0/1/255 glacier prediction raster")
    parser.add_argument("--reference", type=Path, required=True, help="0/1/255 reference-mask raster")
    parser.add_argument("--output-dir", type=Path, required=True)
    parser.add_argument("--model-metrics", type=Path, help="Optional training metrics JSON to preserve model provenance")
    return parser.parse_args()


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def fail_if_grid_mismatch(prediction, reference) -> None:
    if prediction.width != reference.width or prediction.height != reference.height:
        raise ValueError("grid mismatch: raster dimensions differ")
    if prediction.crs != reference.crs:
        raise ValueError("grid mismatch: CRS differs")
    if prediction.transform != reference.transform:
        raise ValueError("grid mismatch: affine transform differs")


def pixel_area_m2(dataset) -> np.ndarray:
    """Return a per-pixel metric area array for projected or geographic grids."""
    if dataset.crs is None:
        raise ValueError("raster has no CRS; comparable metric areas cannot be calculated")
    if dataset.crs.is_projected:
        determinant = abs(dataset.transform.a * dataset.transform.e - dataset.transform.b * dataset.transform.d)
        return np.full((dataset.height, dataset.width), determinant, dtype=np.float64)
    if not dataset.crs.is_geographic:
        raise ValueError("raster CRS is neither projected nor geographic")
    from pyproj import Geod
    geod = Geod(ellps="WGS84")
    area = np.empty((dataset.height, dataset.width), dtype=np.float64)
    for row in range(dataset.height):
        for col in range(dataset.width):
            corners = [
                dataset.transform * (col, row), dataset.transform * (col + 1, row),
                dataset.transform * (col + 1, row + 1), dataset.transform * (col, row + 1),
            ]
            lon, lat = zip(*corners)
            area[row, col] = abs(geod.polygon_area_perimeter(lon, lat)[0])
    return area


def metrics_from_arrays(prediction: np.ndarray, reference: np.ndarray, areas: np.ndarray) -> tuple[dict, dict[str, np.ndarray]]:
    ignored = (prediction == IGNORED_VALUE) | (reference == IGNORED_VALUE)
    valid = ~ignored
    if not valid.any():
        raise ValueError("no shared valid pixels remain after applying ignored masks")
    invalid_codes = np.unique(np.concatenate((prediction[valid], reference[valid])))
    if not np.isin(invalid_codes, [0, 1]).all():
        raise ValueError(f"valid pixels must contain only 0 or 1; found {invalid_codes.tolist()}")
    tp = valid & (prediction == 1) & (reference == 1)
    fp = valid & (prediction == 1) & (reference == 0)
    fn = valid & (prediction == 0) & (reference == 1)
    tn = valid & (prediction == 0) & (reference == 0)
    counts = {"true_positive": int(tp.sum()), "false_positive": int(fp.sum()), "false_negative": int(fn.sum()), "true_negative": int(tn.sum()), "ignored": int(ignored.sum())}
    precision = counts["true_positive"] / (counts["true_positive"] + counts["false_positive"]) if counts["true_positive"] + counts["false_positive"] else 0.0
    recall = counts["true_positive"] / (counts["true_positive"] + counts["false_negative"]) if counts["true_positive"] + counts["false_negative"] else 0.0
    iou = counts["true_positive"] / (counts["true_positive"] + counts["false_positive"] + counts["false_negative"]) if counts["true_positive"] + counts["false_positive"] + counts["false_negative"] else 0.0
    f1 = 2 * precision * recall / (precision + recall) if precision + recall else 0.0
    report = {
        "shared_valid_pixels": int(valid.sum()), "ignored_pixels": counts["ignored"], "confusion_counts": counts,
        "iou": iou, "f1": f1, "precision": precision, "recall": recall,
        "comparable_areas_m2": {
            "prediction": float(areas[valid & (prediction == 1)].sum()),
            "reference": float(areas[valid & (reference == 1)].sum()),
            "true_positive": float(areas[tp].sum()), "false_positive": float(areas[fp].sum()),
            "false_negative": float(areas[fn].sum()),
        },
    }
    return report, {"true_positive": tp, "false_positive": fp, "false_negative": fn, "true_negative": tn, "ignored": ignored}


def write_outputs(output_dir: Path, profile: dict, layers: dict[str, np.ndarray]) -> dict[str, str]:
    import rasterio
    output_dir.mkdir(parents=True, exist_ok=True)
    profile.update(count=1, dtype="uint8", nodata=IGNORED_VALUE, compress="deflate")
    paths = {}
    error_classes = np.full(layers["ignored"].shape, IGNORED_VALUE, dtype=np.uint8)
    for name, mask in layers.items():
        data = np.where(mask, 1, 0).astype(np.uint8)
        if name != "ignored":
            data[layers["ignored"]] = IGNORED_VALUE
        path = output_dir / f"{name}.tif"
        with rasterio.open(path, "w", **profile) as dst:
            dst.write(data, 1)
            dst.set_band_description(1, name)
            dst.update_tags(label_definition="1=class member, 0=other shared-valid pixel, 255=ignored")
        paths[name] = str(path)
    for name, code in CLASS_CODES.items():
        if name in layers:
            error_classes[layers[name]] = code
    path = output_dir / "error_classes.tif"
    with rasterio.open(path, "w", **profile) as dst:
        dst.write(error_classes, 1)
        dst.set_band_description(1, "segmentation_error_classes")
        dst.update_tags(label_definition="0=true_negative, 1=true_positive, 2=false_positive, 3=false_negative, 255=ignored")
    paths["error_classes"] = str(path)
    return paths


def main() -> int:
    args = parse_args()
    try:
        import rasterio
        with rasterio.open(args.prediction) as predicted_src, rasterio.open(args.reference) as reference_src:
            fail_if_grid_mismatch(predicted_src, reference_src)
            prediction, reference = predicted_src.read(1), reference_src.read(1)
            report, layers = metrics_from_arrays(prediction, reference, pixel_area_m2(predicted_src))
            outputs = write_outputs(args.output_dir, predicted_src.profile.copy(), layers)
            report.update({
                "schema_version": "1.0", "generated_at": datetime.now().astimezone().isoformat(),
                "evidence_status": "owner_approved_experimental", "evaluation_scope": "full scene; shared valid footprint only",
                "prediction": {"path": str(args.prediction), "sha256": sha256(args.prediction)},
                "reference": {"path": str(args.reference), "sha256": sha256(args.reference)},
                "grid": {"crs": str(predicted_src.crs), "transform": list(predicted_src.transform)[:6], "width": predicted_src.width, "height": predicted_src.height},
                "outputs": outputs,
                "limitations": "Reference labels are owner-approved derived boundaries, not independent scientific truth. This diagnostic must not be presented as independent accuracy.",
            })
            if args.model_metrics:
                if not args.model_metrics.exists():
                    raise ValueError(f"model metrics are missing: {args.model_metrics}")
                report["model_metrics"] = {"path": str(args.model_metrics), "sha256": sha256(args.model_metrics)}
        (args.output_dir / "full_scene_evaluation.json").write_text(json.dumps(report, indent=2) + "\n")
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"[evaluate_segmentation_full_scene] BLOCKED: {exc}", file=sys.stderr)
        return 2
    print(f"[evaluate_segmentation_full_scene] OK: IoU={report['iou']:.3f}, F1={report['f1']:.3f}, valid={report['shared_valid_pixels']}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
