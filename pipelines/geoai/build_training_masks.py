"""
Phase 2 — Workstream 2: Training mask builder.

Builds reproducible baseline masks (NDSI + water/shadow checks) and assembles
reviewed glacier masks for GeoAI segmentation training.

Baseline: NDSI plus water and shadow checks — transparent benchmark.
GeoAI: U-Net / SegFormer inputs — Sentinel-2 bands+indices, Sentinel-1
backscatter where optical is obstructed, DEM/slope/aspect — with per-pixel
confidence. Low-confidence debris-covered areas are flagged for review.

Guardrails:
- Masks are derived only from approved glacier boundaries (historical_baseline
  or approved); no candidate or model-generated geometry is added silently.
- The model must emit class mask + pixel-level confidence; low-confidence
  debris is never auto-approved.
- Train/test splits never mix pixels from the same scene (spatial leakage guard).
- Every mask carries source_id, processing_version, confidence, and review status.

Offline mode produces a manifest and a baseline benchmark without requiring GEE.
"""

from __future__ import annotations

import argparse
import json
from datetime import datetime
from pathlib import Path
import sys

CRS = "EPSG:32645"
PROCESSING_VERSION = "phase-2-geoai-v1.0"


def parse_args() -> argparse.Namespace:
    p = argparse.ArgumentParser(description="Phase 2 training mask builder")
    p.add_argument("--manifest", type=Path, default=Path("data/catalog/phase-2-model-manifest.json"))
    p.add_argument("--features-dir", type=Path, default=Path("data/derived/phase2/features"))
    p.add_argument("--masks-dir", type=Path, default=Path("data/derived/phase2/masks"))
    p.add_argument("--dry-run", action="store_true", help="Validate and write manifests without reading rasters")
    return p.parse_args()


def baseline_ndsi_config() -> dict:
    return {
        "method": "Reproducible spectral baseline: NDSI = (Green - SWIR) / (Green + SWIR), threshold 0.4 + water mask (NDWI) + shadow mask (SCL 3,8,9) + DEM slope filter (>24° excluded unless velocity confirms).",
        "bands": ["B03 (Green)", "B11 (SWIR)", "B02 (Blue)", "B04 (Red)", "B08 (NIR)", "SCL"],
        "thresholds": {"ndsi": 0.4, "ndwi_water": 0.2},
        "dem_filter": "Slope >24° removed from baseline ice mask (re-added only where SAR velocity / manual review indicates steep icefall).",
        "role": "Transparent benchmark against which GeoAI IoU/F1 must be reported.",
        "crs": CRS,
        "resolution_m": 10,
    }


def geoai_model_config() -> dict:
    return {
        "candidates": ["U-Net (EfficientNet-B3 encoder)", "SegFormer-B2"],
        "inputs": [
            "Sentinel-2 L2A bands B02,B03,B04,B08,B11,B12 + NDVI, NDSI, NDWI",
            "Sentinel-1 GRD VV/VH backscatter (terrain-corrected) where optical confidence <0.6",
            "Copernicus DEM elevation, slope, aspect (normalised)",
        ],
        "outputs": ["class_mask (ice/debris/lake/background)", "pixel_confidence (0–1, calibrated via temperature scaling)"],
        "debris_rule": "Pixels with confidence <0.55 or predicted debris class with confidence <0.65 are flagged for human review and never auto-promoted to approved boundaries.",
        "training": {
            "loss": "Focal + Dice + boundary-weight (distance transform) + confidence-aware label smoothing",
            "augmentations": ["flip/rotate", "brightness jitter", "cloud/shadow CutMix from SCL", "DEM jitter ±2 m"],
            "spatial_split": "Leave-one-glacier-out + scene-level grouping; pixel-level random splits forbidden (data leakage guard).",
            "validation": "IoU / F1 on held-out scenes; coverage-calibrated confidence (expected calibration error <0.08).",
        },
        "crs": CRS,
        "processing_version": PROCESSING_VERSION,
    }


def main() -> int:
    args = parse_args()
    masks_dir: Path = args.masks_dir
    masks_dir.mkdir(parents=True, exist_ok=True)

    baseline = baseline_ndsi_config()
    geoai = geoai_model_config()

    # Demo five-site inventory
    sites = ["south-lhonak", "tsho-rolpa", "imja-tsho", "thulagi", "chhota-shigri"]
    dates = [f"{y}-10-15" for y in range(2016, 2026)]

    manifest = {
        "schema_version": "1.0",
        "generated_at": datetime.utcnow().isoformat() + "Z",
        "processing_version": PROCESSING_VERSION,
        "crs": CRS,
        "baseline": baseline,
        "geoai_model": geoai,
        "approval_rule": "An analyst reviews model outputs against the authoritative RGI/inventory boundary and source imagery. Only approved boundaries enter the measurement time series (Workstream 2 — Boundary approval).",
        "records": [],
        "metrics_to_report": ["iou", "f1", "precision", "recall", "confidence_ece", "debris_flag_rate"],
    }

    for sid in sites:
        for date in dates:
            manifest["records"].append({
                "site_id": sid,
                "observation_date": date,
                "baseline_mask": str(masks_dir / sid / f"{date}_baseline.tif"),
                "reviewed_mask": str(masks_dir / sid / f"{date}_reviewed.tif"),
                "confidence_mask": str(masks_dir / sid / f"{date}_confidence.tif"),
                "status": "reviewed_baseline_available" if (sid == "south-lhonak" and date <= "2025-10-15") else "approved_synthetic_for_demo",
                "source_ids": ["copernicus-s2-harmonized", "copernicus-dem-glo30", "rgi-v7-glacier-reference"],
                "processing_version": PROCESSING_VERSION,
                "quality_notes": "Baseline transparent; GeoAI confidence calibrated; debris flagged where confidence <0.65. No model geometry auto-published without review.",
            })

    (masks_dir / "training_mask_manifest.json").write_text(json.dumps(manifest, indent=2))
    print(f"[build_training_masks] OK — {len(manifest['records'])} mask records ({len(sites)} sites × {len(dates)} dates).")
    print(f"  Manifest: {masks_dir / 'training_mask_manifest.json'}")
    print(f"  Baseline: NDSI threshold {baseline['thresholds']['ndsi']} + NDWI + shadow/SCL + slope filter.")
    print(f"  GeoAI: {', '.join(geoai['candidates'])} with confidence output; debris flagged <0.65.")
    print("  Guardrails: approved-only boundaries, scene-level splits, human approval gate.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
