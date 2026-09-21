> **Current work:** [Plan B implementation status](../docs/planb-implementation.md). **Objective 1 pilot (GEE acquisition + preprocessing) is now plumbing-complete for South Lhonak:** study protocol, verified pilot, and real feature stacks exist; multi-date coverage remains honest gaps. Legacy feature preparation and retreat measurement now fail closed; explicit demo generation is excluded from research. Older commands below do not certify scientific readiness.

# GlacierLens data-preparation pipeline

The pipeline is the only layer permitted to use Google Earth Engine credentials. It produces reviewed, versioned assets for the web/API layers.

Initial jobs:

1. Verify GEE authentication and required collection access.
2. Select quality-approved Sentinel-2 observations for 2016–2026.
3. Generate documented imagery composites.
4. Register trusted lake/glacier boundary assets and their provenance.
5. Create terrain derivatives and record method metadata.

## First local check

1. Create and activate a Python virtual environment.
2. Install `pipelines/requirements.txt`.
3. Authenticate on the local machine with `earthengine authenticate` if needed.
4. Run `python pipelines/scripts/preflight_gee.py --project YOUR_GEE_PROJECT_ID`.

The repository's first site manifest is `data/catalog/south-lhonak.manifest.json`. Validate its schema at any time with `python pipelines/scripts/validate_catalog.py`.

## Candidate scene inventory

After a successful preflight, run:

```bash
.venv/bin/python pipelines/scripts/inventory_sentinel2.py --project YOUR_GEE_PROJECT_ID
```

This reports candidate scenes by date and whole-scene cloud percentage. It is not an approval workflow: candidates require visual review over the lake and glacier before becoming public assets.

## Reference-boundary extraction

The initial trusted glacier reference is drawn from the published GLIMS-RGI lake-terminating dataset. After the source GeoPackage has been placed in `data/derived/reference/`, run:

```bash
.venv/bin/python pipelines/scripts/extract_rgi_reference.py
```

The output is a small GeoJSON subset for the South Lhonak study area. It remains a baseline inventory outline; it must not be represented as a 2023 or 2026 glacier boundary.

Do not commit credentials, raw restricted data, or unreviewed generated assets.

## Plan B — Objective 1: multi-temporal Sentinel-2 via GEE (pilot)

**Study protocol:** `data/catalog/planb/study-protocol.md` (seasonal window 1 Oct–30 Nov, SCL rule SCL∉{0,1,3,8,9,10} snow preserved, one grid per site, harmonization policy).

**Verified pilot:** South Lhonak (RGI2000-v7.0-G-15-07986 lake_cat 3) — see `data/catalog/planb/sites.json` and `data/catalog/planb/observations.json` (5×2025 exports, 52 documented gaps, all `candidate`).

**Real feature production (replaces blocked command):**

```bash
# Validate without writing
.venv/bin/python pipelines/geoai/prepare_features.py --manifest data/catalog/planb/observations.json --dry-run

# Build 9-band stacks [B2,B3,B4,B8,B11,NDVI,NDWI,NDSI,B8/B11] + valid_mask.tif
.venv/bin/python pipelines/geoai/prepare_features.py --manifest data/catalog/planb/observations.json --output-dir data/derived/planb/features
# Outputs: data/derived/planb/features/<site>/<date>/features.tif, valid_mask.tif, provenance.json
# Top manifest: data/derived/planb/features/feature_manifest.json
# Coverage report: data/derived/planb/quality/coverage_report.md
```

Checks enforced: missing raster / SHA mismatch → exit 2 with asset id; synthetic/demo rejected; same-site grid mismatch rejected; low valid coverage (e.g., Tsho Rolpa 9.2%) warned and flagged `fail`. See `data/derived/planb/quality/coverage_report.md` for per-site valid fraction, glacier coverage, SCL distribution and gate decisions.

**Multi-date acquisition (remaining gaps):**

```bash
# South Lhonak inventory already shows 2016–2024 candidates (see data/catalog/south-lhonak.candidate-scenes.md)
# To fill gaps, run GEE exports for the study protocol windows:
.venv/bin/python pipelines/scripts/inventory_sentinel2.py --project YOUR_GEE_PROJECT_ID --manifest data/catalog/south-lhonak.manifest.json
.venv/bin/python pipelines/scripts/prepare_site_evidence.py --project YOUR_GEE_PROJECT_ID --site-id south-lhonak --years 2016 2017 2018 2019 2020 2021 2022 2024
# Then promote new rasters into data/catalog/planb/observations.json and re-run prepare_features.py
```

Target is at least three comparable pilot dates to exercise alignment and change mapping; three dates demonstrate plumbing, not a robust trend. All outputs remain `candidate` until manual terminus review promotes them to `quality_accepted`.

## Reviewed-model workflow (still gated)

The GeoAI commands do not use candidate imagery, historical inventory polygons,
or demo fixtures as training labels. Before training, each scene must have:

1. A co-registered feature GeoTIFF in the feature manifest (`data/derived/planb/features/feature_manifest.json`).
2. A same-grid binary glacier mask reviewed by an analyst.
3. `approved_reviewed` as the status in both feature and mask manifests.

Run the reviewed-only stages with:

```bash
.venv/bin/pip install -r pipelines/requirements.txt
.venv/bin/python pipelines/geoai/train_segmentation.py \
  --masks-manifest data/derived/phase2/masks/training_mask_manifest.json \
  --features-manifest data/derived/phase2/features/feature_manifest.json
.venv/bin/python pipelines/geoai/train_forecast.py \
  --measurements data/derived/phase2/measurements/reviewed_measurements.json
```

`reviewed_measurements.json` must be an object with `data_status: "reviewed"`
and a `measurements` list. Every measurement must include its approved status,
reviewed boundary asset, date, glacier area, and retreat distance. The commands
stop with exit code 2 when these conditions are not met. This is deliberate:
unreviewed observations cannot yield model metrics or forecasts.

To create those reviewed-mask rasters, copy
`data/catalog/reviewed-glacier-masks.example.json`, replace the placeholder
boundary and reviewer fields, then run:

```bash
.venv/bin/python pipelines/geoai/build_training_masks.py \
  --reviews data/catalog/reviewed-glacier-masks.json
```

The command projects each approved vector into the satellite raster grid,
creates a binary mask, and writes `training_mask_manifest.json`. It rejects
candidate, synthetic, scaled, model-derived, and historical-baseline vectors. **Note:** setting NoData to 0 conflates valid background with missing data — this is fixed by the Plan B `valid_mask.tif` (0=unknown) and remains Phase 3 work for `build_training_masks.py`.
