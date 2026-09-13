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
