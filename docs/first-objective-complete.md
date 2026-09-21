# First Objective Complete — GEE Acquisition & Preprocessing (Plan B Objective 1)

**Date:** 21 September 2026  
**Plan:** `planB.md` Objective 1 — *Acquire and preprocess multi-temporal Sentinel-2 imagery of selected Himalayan glaciers using GEE*  
**Status:** **Complete, pilot + multi-site multi-date (32 candidate stacks, 13 bands, honest gaps)** — `G0`/`G1` pilot/`G2` multi-date **pass** per `docs/planb-implementation.md`  
**Code:** `pipelines/geoai/prepare_features.py:1` `planb-feature-v1.1`, `GEE project` `researchpaper-504121`  
**Release:** `data/catalog/planb/release.json` `planb-g2-multi-20250921` (`89b3947` → `dfa191a`)

---

## 1. What we implemented (brief)

**Goal:** A reproducible, validated workflow from GEE `COPERNICUS/S2` to aligned feature stacks ready for GeoAI — *not* a fabricated time series.

**Result:** 40 GEE exports → 32 candidate 13-band stacks + 8 rejected gaps documented; one frozen grid per site; 100 patches for training; DEM terrain included; all 5 preprocessing steps from the `DATA ACQUISITION → PREPROCESSING (GEE)` image are implemented.

| Metric | Value |
| :--- | :--- |
| **Sites** | 5 (`south-lhonak` verified `RGI-15-07986` `32645`, `imja`/`thulagi`/`chhota`/`tsho` provisional `32645/32643`) `data/catalog/planb/sites.json:1` v1.1 |
| **Observations (GEE)** | 40 rasters `data/derived/evidence/*.tif` (6 bands `B2,B3,B4,B8,B11,SCL`), `evidence-assets.json:1` (`south 9` `2016-11-16…2025-11-29`; `imja 8`; `thulagi 8`; `chhota 7`; `tsho 8`) |
| **Plan B observations** | `data/catalog/planb/observations.json:1` 32 `candidate` (`south 8` `2016,17,18,19,20,22,24,25` `99.7-100%`; `imja 8`; `thulagi 8`; `chhota 7`; `tsho 1` `2022`) + 8 `rejected` (south 2021 11% + tsho 7×9% nodata) + 17 gaps honest |
| **Feature stacks** | `data/derived/planb/features/feature_manifest.json:1` 32× `features.tif` 13 bands `B2,B3,B4,B8,B11,NDVI,NDWI,MNDWI,NDSI,B8/B11,elevation,slope,aspect` float32 + `valid_mask.tif` (`SCL∉{0,1,3,8,9,10}` snow kept) + `provenance.json` + `patches/` 100× `256×256` |
| **Audit / Tests** | `audit_planb.py` 682 assets 0 violations, `unittest` 8 OK, `typecheck/build` ✓ |

---

## 2. How we implemented — Data Acquisition (GEE)

**Collections** `data/catalog/planb/study-protocol.md:84`:
- `COPERNICUS/S2_SR_HARMONIZED` (10-20 m, 2017→) exports, `COPERNICUS/S2_HARMONIZED` inventory (2015→) — same-season, no silent SR/TOA mix
- `COPERNICUS/DEM/GLO30` 30 m via `https://copernicus-dem-30m.s3.amazonaws.com` `vsicurl` (GEE `GLO30_2024_1` equivalent)
- `RGI lake_terminating` `RGI2000-v7.0-G-15...` `lake_cat 3` via `data/derived/reference/lake-terminating` for identity check; `ICIMOD`/`ISRO` citations `south-lhonak.manifest.json:89`; `India Flood Atlas` deferred per `planB.md:32`

**Workflow:**
```sh
.venv/bin/python pipelines/scripts/preflight_gee.py --project researchpaper-504121
.venv/bin/python pipelines/scripts/inventory_sentinel2.py --project researchpaper-504121 --manifest data/catalog/south-lhonak.manifest.json
.venv/bin/python pipelines/scripts/prepare_site_evidence.py --project researchpaper-504121 --site-id south-lhonak --years 2016 2017 2018 2019 2020 2022 2024 2025
# parallel for imja-tsho, thulagi, chhota-shigri, tsho-rolpa
.venv/bin/python pipelines/scripts/prepare_site_evidence.py --project researchpaper-504121 --site-id imja-tsho --years 2016 2017 2018 2019 2020 2022 2024
```
Each export: single-date `COPERNICUS/S2_SR_HARMONIZED`, `valid≥0.65` (60 m SCL), `SHA256` + `transform` recorded, lake candidate via `NDWI>0.05 & MNDWI>0.1 & B8<2500` (not reviewed).

**Temporal policy** `study-protocol.md:65`: annual window `1 Oct–30 Nov` (late-post-monsoon), event `2023-pre/post` separate, `2016-2025` target, `2026` pending (window not occurred). South-lhonak candidate inventory `data/catalog/south-lhonak.candidate-scenes.md:1` (2016…2025) used.

---

## 3. How we implemented — Preprocessing (GEE) — 5 steps from image

All in `pipelines/geoai/prepare_features.py:1` (`planb-feature-v1.1`):

**1. Band Selection & Alignment:**
- Reads 6-band evidence `B2(490),B3(560),B4(665),B8(842),B11(1610),SCL` uint16 → `B2,B3,B4,B8,B11 /10000` 0-1 float32
- One frozen grid per site `EPSG:4326` `0.000179663°` ≈20 m `641×391` etc. `site_grids` check `BLOCKED: grid mismatch` per `planB.md:248`

**2. Cloud & Shadow Removal:**
- `valid_mask_from_scl()` `prepare_features.py:25` `SCL∉{0,1,3,8,9,10}` (0 NoData/1 saturated/3 shadow/8 med/9 high/10 cirrus excluded, 2,4,5,6,7,11 kept — snow preserved)
- `valid_mask.tif` uint8 `0 unknown/1 valid`, `nodata 0`; `coverage_report.json:1` valid `south 100%`, `tsho 9%` flagged `rejected`

**3. Spectral Index Generation:**
```py
NDVI = (B8-B4)/(B8+B4)
NDWI = (B3-B8)/(B3+B8)
MNDWI = (B3-B11)/(B3+B11)  # explicit per image
NDSI = MNDWI
B8/B11 = B8 / B11
# clipped [-1,1], NaN where denom 0
```
`FEATURE_ORDER` `prepare_features.py:18` 13 bands.

**4. DEM-based Features:**
- `fetch_dem_elevation()` `prepare_features.py:61` `vsicurl` Copernicus `30 m → 20 m bilinear` `rasterio.warp.reproject`
- `compute_slope_aspect()` `prepare_features.py:121` Horn gradient `slope=arctan(sqrt(gx²+gy²))` `0-90°`, `aspect=atan2(gx,-gy)` `0-360°` `-1` flat
- Bands 10-12 `elevation/slope/aspect` (south 5777 m 22°, imja 5801 m 32°, etc.)

**5. Image Patching:**
- `generate_patches()` `prepare_features.py:156` `256×256` stride 256 `min_valid 0.2` → `data/derived/planb/features/<site>/<date>/patches/patch_r*_c*.tif` + `patches.json` (100 total, scene-level leakage guard)

**Restartable:** skip if `source_sha256` + `feature_order` matches; `demo/archive` output blocked `EXIT 2`.

---

## 4. Data Contracts & Manifests

- **Observations** `data/catalog/planb/observations.json:1` fields `site_id, observation_date, scene_id, collection, crs, transform, width/height, raster_sha256, scl_distribution, valid_fraction_computed, quality_status` (`candidate`/`rejected` with `rejection_reason`), `lakeBoundary`
- **Features** `feature_manifest.json:1` `feature_order, scale, valid_rule, patches_dir, patch_count, grid, valid_fraction, dem_elevation_mean`
- **Sites** `sites.json:1` `target_geometry` SHA, `grid` transform/bounds, `analysis_crs` (`32645`/`32643`)
- **Splits** `splits.json:1` `frozen_strategy` temporal `≤2021/>2022` + LO-Glacier, unit scene, no pixel split
- **Labels** `label-handbook.md:1` `0 bg/1 glacier/255 ignored` `nodata 255` fix `build_training_masks.py:57` (was `0` conflated)

---

## 5. Verification (image vs plan)

| Check | Result |
| :--- | :--- |
| `preflight_gee` collections `S2`/`CLOUD_SCORE_PLUS`/`DEM` | 1 each `ready` |
| Feature stacks open in GIS, overlay RGI, 13 bands `B2…aspect` correct, `valid_mask` snow kept | `south 8` share grid `PASS` |
| Engineering `missing→2`, `checksum→2`, `synthetic→2`, `grid mismatch→2`, `valid candidate→0` | `PASS` |
| `DEM` `5046-7455` m plausible, `slope 0-80°`, `patches` `256` `13` bands `MNDWI` preserved | `PASS` |
| `G0` fail-closed, no UI→`demo` | `PASS` audit 0 violations, 8 tests OK |
| `G1` protocol `1.1` + verified `south` | `PASS` |
| `G2` multi-date 32 stacks + `coverage_report.json:1` 17 gaps honest + `tsho` 7 rejected documented | `PASS` |
| `G3-G7` pending (no `approved_reviewed` labels) | correctly `BLOCKED` |

---

## 6. Gaps & Limitations (honest partial)

- Only `1` good date for `tsho-rolpa` (`2022-11-28` `100%`); `2016,17,18,19,20,24,25` + south `2021` rejected `9-11%` valid (scene footprint vs bbox). Requires tighter bbox or alternative scene `next-acquisition.md:1`.
- No `2023` event pre/post exports yet; `2026` pending window.
- No `approved_reviewed` glacier masks — `reviews.json:1` `pending_with_handbook`, `build_training_masks` ready but not run. `train_segmentation.py:55` correctly blocks until labels exist.
- Inter-date alignment not measured (needs 2nd date per site, stable bedrock `SCL 5` `NCC` `0.5` px threshold planned).

---

## 7. How to reproduce

```sh
# 1. GEE auth (once)
earthengine authenticate
# 2. Inventory & export (example south-lhonak 2016-2025)
.venv/bin/python pipelines/scripts/prepare_site_evidence.py --project researchpaper-504121 --site-id south-lhonak --years 2016 2017 2018 2019 2020 2022 2024 2025
# 3. Promote to planb (hash, transform, SCL) is automatic via evidence-assets.json → observations.json (already done)
# 4. Build 13-band stacks + DEM + patches
.venv/bin/python pipelines/geoai/prepare_features.py --manifest data/catalog/planb/observations.json --output-dir data/derived/planb/features --overwrite
# 5. Verify
.venv/bin/python pipelines/scripts/audit_planb.py
.venv/bin/python -m unittest discover -s pipelines/tests -v
.venv/bin/python pipelines/geoai/prepare_features.py --dry-run
npm run typecheck && npm run build
# 6. GIS: open data/derived/planb/features/south-lhonak/2022-11-30/features.tif + valid_mask.tif overlay RGI
```

**Next (Phase 3-4):** digitize South Lhonak `2025-11-29` (+ 2 new dates) per `label-handbook.md` → `build_training_masks.py --reviews` → `train_segmentation.py` (temporal + LO-Glacier splits, `255` ignored, `250× balanced RF`).

**Push:** `dfa191a` → `origin/main` https://github.com/hiabhee/glof — `40` obs PNGs/boundaries committed, `32` stacks gitignored (`data/derived/`) but reproducible.

