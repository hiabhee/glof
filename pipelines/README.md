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

## Reviewed-model workflow

The GeoAI commands do not use candidate imagery, historical inventory polygons,
or demo fixtures as training labels. Before training, each scene must have:

1. A co-registered feature GeoTIFF in the feature manifest.
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
candidate, synthetic, scaled, model-derived, and historical-baseline vectors.
