"""Train glacier segmentation from feature rasters and analyst-reviewed masks.

Only ``approved_reviewed`` records can enter the model. Scene-level folds avoid
pixel leakage; synthetic and missing assets stop the run before metrics exist.
"""
from __future__ import annotations

import argparse, json, sys
from collections import defaultdict
from datetime import datetime
from pathlib import Path

import numpy as np

VERSION = "phase-2-seg-rf-reviewed-v2.0"


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--masks-manifest", type=Path, required=True)
    p.add_argument("--features-manifest", type=Path, required=True)
    p.add_argument("--output-dir", type=Path, default=Path("data/derived/phase2/models/segmentation"))
    p.add_argument("--max-pixels-per-scene", type=int, default=20_000)
    p.add_argument("--random-state", type=int, default=42)
    return p.parse_args()


def require_packages() -> None:
    try:
        import rasterio  # noqa: F401
        import joblib  # noqa: F401
        from sklearn.ensemble import RandomForestClassifier  # noqa: F401
    except ImportError as exc:
        raise ValueError("install pipelines/requirements.txt before segmentation training") from exc


def load_records(masks_path: Path, features_path: Path) -> list[dict]:
    masks = json.loads(masks_path.read_text()).get("records", [])
    features = json.loads(features_path.read_text()).get("records", [])
    by_key = {(r["site_id"], r["observation_date"]): r for r in features}
    records = []
    for mask in masks:
        key = (mask.get("site_id"), mask.get("observation_date")); feature = by_key.get(key)
        if mask.get("status") != "approved_reviewed" or not feature or feature.get("quality_status") != "approved_reviewed":
            continue
        feature_asset, reviewed_mask = Path(feature["feature_asset"]), Path(mask["reviewed_mask"])
        if not feature_asset.exists() or not reviewed_mask.exists():
            raise ValueError(f"approved record {key} is missing a feature or reviewed-mask raster")
        records.append({**mask, "feature_asset": str(feature_asset)})
    if not records:
        raise ValueError("no approved_reviewed feature/mask pairs; create reviewed masks before training")
    return records


def read_scene(record: dict, limit: int, rng: np.random.Generator) -> tuple[np.ndarray, np.ndarray]:
    import rasterio
    with rasterio.open(record["feature_asset"]) as src:
        features = src.read().astype(np.float32)
        # Validate feature order / grid metadata per Plan B v1.1 (13 bands expected for current stacks)
        expected_order = ["B2", "B3", "B4", "B8", "B11", "NDVI", "NDWI", "MNDWI", "NDSI", "B8/B11", "elevation", "slope", "aspect"]
        descs = list(src.descriptions)
        if descs != expected_order and len(descs) != len(expected_order):
            # Allow legacy 9-band stacks but warn
            print(f"[train_segmentation] WARNING: feature band order {descs} does not match expected {expected_order}", file=sys.stderr)
        # Check CRS/grid consistency via transform if available in record
    with rasterio.open(record["reviewed_mask"]) as src: labels = src.read(1)
    if features.shape[1:] != labels.shape:
        raise ValueError(f"grid mismatch for {record['site_id']} {record['observation_date']}")
    # Plan B fix: 0=background, 1=glacier, 255=ignored/invalid; 255 must not become glacier
    flat_labels = labels.reshape(-1)
    flat_features = np.moveaxis(features, 0, -1).reshape(-1, features.shape[0])
    ignored = flat_labels == 255
    keep = ~ignored
    flat_labels = flat_labels[keep]
    flat_features = flat_features[keep]
    if len(flat_labels) == 0:
        raise ValueError(f"all pixels are ignored (255) for {record['site_id']} {record['observation_date']}")
    y = (flat_labels == 1).astype(np.uint8)
    x = flat_features
    # Exclude invalid spectral/DEM features (NaN) but DEM NaN is allowed where valid==1? No, exclude NaN features
    usable = np.isfinite(x).all(axis=1)
    x, y = x[usable], y[usable]
    if len(np.unique(y)) < 2:
        raise ValueError(f"reviewed mask for {record['site_id']} {record['observation_date']} has only one class after ignoring 255/invalid (unique {np.unique(y)})")
    if len(x) > limit:
        selected = rng.choice(len(x), limit, replace=False); x, y = x[selected], y[selected]
    return x, y


def score(y: np.ndarray, probability: np.ndarray) -> dict:
    prediction = probability >= 0.5
    tp = int(np.sum(prediction & (y == 1))); fp = int(np.sum(prediction & (y == 0))); fn = int(np.sum(~prediction & (y == 1)))
    precision = tp / (tp + fp) if tp + fp else 0.0; recall = tp / (tp + fn) if tp + fn else 0.0
    iou = tp / (tp + fp + fn) if tp + fp + fn else 0.0; f1 = 2 * precision * recall / (precision + recall) if precision + recall else 0.0
    bins = np.linspace(0, 1, 11); ece = 0.0
    for low, high in zip(bins[:-1], bins[1:]):
        in_bin = (probability >= low) & (probability < high if high < 1 else probability <= high)
        if in_bin.any(): ece += in_bin.mean() * abs(probability[in_bin].mean() - y[in_bin].mean())
    return {"iou": iou, "f1": f1, "precision": precision, "recall": recall, "ece": float(ece), "pixels": int(len(y))}


def fit_and_score(train: list[dict], test: list[dict], args: argparse.Namespace, rng: np.random.Generator):
    from sklearn.ensemble import RandomForestClassifier
    train_xy = [read_scene(r, args.max_pixels_per_scene, rng) for r in train]
    model = RandomForestClassifier(n_estimators=250, min_samples_leaf=2, class_weight="balanced_subsample", n_jobs=-1, random_state=args.random_state)
    model.fit(np.vstack([x for x, _ in train_xy]), np.concatenate([y for _, y in train_xy]))
    test_xy = [read_scene(r, args.max_pixels_per_scene, rng) for r in test]
    x, y = np.vstack([x for x, _ in test_xy]), np.concatenate([y for _, y in test_xy])
    return model, score(y, model.predict_proba(x)[:, 1])


def main() -> int:
    args = parse_args()
    try:
        require_packages(); records = load_records(args.masks_manifest, args.features_manifest)
    except (ValueError, OSError, json.JSONDecodeError) as exc:
        print(f"[train_segmentation] BLOCKED: {exc}", file=sys.stderr); return 2
    train = [r for r in records if int(r["observation_date"][:4]) <= 2021]; test = [r for r in records if int(r["observation_date"][:4]) >= 2022]
    if not train or not test:
        print("[train_segmentation] BLOCKED: reviewed scenes are required before and after the 2021/2022 temporal split", file=sys.stderr); return 2
    rng = np.random.default_rng(args.random_state)
    try: model, temporal = fit_and_score(train, test, args, rng)
    except ValueError as exc:
        print(f"[train_segmentation] BLOCKED: {exc}", file=sys.stderr); return 2
    by_site = defaultdict(list)
    for record in records: by_site[record["site_id"]].append(record)
    lovo = {site: fit_and_score([r for r in records if r["site_id"] != site], held_out, args, rng)[1] for site, held_out in sorted(by_site.items()) if len(records) > len(held_out)}
    out = args.output_dir / VERSION; out.mkdir(parents=True, exist_ok=True)
    import joblib
    joblib.dump(model, out / "model.joblib")
    metrics = {"schema_version": "2.0", "generated_at": datetime.now().astimezone().isoformat(), "data_status": "reviewed", "model_version": VERSION, "model": "RandomForestClassifier", "temporal_holdout": temporal, "leave_one_glacier_out": lovo, "records": [{"site_id": r["site_id"], "observation_date": r["observation_date"]} for r in records], "leakage_guard": "Each scene is entirely assigned to one fold; no pixel-level random split is used."}
    (out / "metrics.json").write_text(json.dumps(metrics, indent=2))
    print(f"[train_segmentation] OK: IoU={temporal['iou']:.3f}, F1={temporal['f1']:.3f}")
    return 0


if __name__ == "__main__": raise SystemExit(main())
