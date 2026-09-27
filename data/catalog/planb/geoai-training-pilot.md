# South Lhonak GeoAI pilot — training preparation

**Status:** preparation only. No GeoAI model has been trained from these project-owner-approved drafts.

## Frozen pilot split

| Scene | Role | Current label state |
| --- | --- | --- |
| 2017-11-19 | Train | Independent dated glacier boundary required |
| 2019-10-15 | Train | Independent dated glacier boundary required |
| 2022-11-30 | Held-out chronological test | Independent dated glacier boundary required |

The 2022 label is never used to select model features, thresholds, or hyperparameters. With one glacier and three dates, this is a plumbing pilot only; it cannot demonstrate geographic generalization.

## What must happen before training

1. An analyst redraws each dated glacier boundary from the accepted `features.tif`, valid-mask, true-colour composite, and DEM context. The old RGI-derived drafts are only visual context.
2. A second reviewer checks the full terminus and at least 20% of random glacier tiles, documenting ambiguous snow, debris, shadow, and lake-edge decisions.
3. Register only the resulting `approved_reviewed` GeoJSON files in `data/catalog/reviewed-glacier-masks.json`.
4. Run the readiness command below. It must pass before masks are rasterized or the model command is run.

```bash
.venv/bin/python pipelines/scripts/validate_geoai_training_readiness.py
```

## Commands unlocked after the gate passes

```bash
.venv/bin/python pipelines/geoai/build_training_masks.py \
  --reviews data/catalog/reviewed-glacier-masks.json \
  --masks-dir data/derived/phase2/masks

.venv/bin/python pipelines/geoai/train_segmentation.py \
  --masks-manifest data/derived/phase2/masks/training_mask_manifest.json \
  --features-manifest data/derived/planb/features/south-lhonak-approved-feature-manifest.json
```

Expected output: a random-forest segmentation model and a **2022-only** temporal holdout report (IoU, F1, precision, recall, calibration). Do not use that test result to tune the model.
