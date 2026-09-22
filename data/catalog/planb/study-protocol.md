# Plan B Study Protocol — Phase 1–2 (Pilot Scope, Complete Preprocessing)

**Version:** 1.1 — 21 September 2026  
**Status:** Pilot frozen for South Lhonak; DEM + patching now implemented (not deferred).  
**Applies to:** Objective 1 (multi-temporal Sentinel-2 acquisition and preprocessing via GEE) and gates G1–G2.

This document freezes study definitions before model training or change measurement. It is the only source of temporal, spatial, quality, and grid decisions. Any later change requires a new version and a migration note.

## 1. Site registry and verification

All five systems are listed. Only South Lhonak is verified for end-to-end pilot work. The other four remain provisional until identity, geometry, and lake-association checks pass.

| Site ID | Target glacier (candidate) | RGI v7 candidate | Lake at site | Identity status | Lake-terminating category | Verification source | Analysis CRS | Study area bbox (WGS84) | Coverage check |
|---|---|---|---|---|---|---|---|---|---|
| south-lhonak | South Lhonak Glacier | RGI2000-v7.0-G-15-07986 | South Lhonak Lake (88.1967, 27.9128) | **verified** | 3 (>50 % terminus in lake, RGI lake-terminating table) | `data/derived/reference/south-lhonak-rgi-v7-reference.geojson` intersecting study bbox; lake-terminating outline `lake_cat=3` on 2000-12-26; bbox contains full RGI polygon (intersection ratio 1.0) | EPSG:32645 (UTM 45N) | [88.12, 27.87, 88.235, 27.94] | Contains full RGI historical extent, terminus at lake, surrounding moraine, and stable rock for co-registration. Verified by GIS overlay 21 Sep 2026. |
| tsho-rolpa | Trakarding Glacier (candidate) | RGI2000-v7.0-G-15-08533 | Tsho Rolpa (86.478, 27.862) | provisional | 3 — appears in lake-terminating table (2000-10-30) but glacier name association needs second-source confirmation (Rolwaling vs Trakarding naming) | Provisional match to lake-terminating outline; bbox contains RGI polygon 1.0 | EPSG:32645 (pending verification) | [86.44, 27.8, 86.57, 27.95] | Provisional — contains RGI polygon but terminus/stable-terrain inclusion not independently signed off. |
| imja-tsho | Imja–Lhotse Shar Glacier (candidate) | RGI2000-v7.0-G-15-06763 | Imja Tsho (86.923, 27.899) | provisional | 3 — lake-terminating table 2000-10-30 | Provisional match; bbox contains RGI polygon 1.0 | EPSG:32645 (pending) | [86.895, 27.865, 86.99, 27.96] | Provisional. |
| thulagi | Thulagi Glacier (candidate) | RGI2000-v7.0-G-15-06122 | Thulagi Lake (84.487, 28.491) | provisional | 3 — lake-terminating table 2002-12-05 | Provisional match; bbox contains RGI polygon 1.0 | EPSG:32645 (UTM 45N boundary case: lon 84.49 → zone 45) | [84.465, 28.47, 84.575, 28.565] | Provisional. |
| chhota-shigri | Chhota Shigri Glacier (candidate) | null — not in lake-terminating outlines | none (site label “Chhota Shigri Lake” inferred; no lake inventory match) | unverified | n/a — not found in lake-terminating dataset; may be land-terminating | No RGI lake-terminating match within bbox; full RGI region 14 search returned no terminus association | EPSG:32643 (UTM 43N, 77.5 E) pending | [77.49, 32.18, 77.565, 32.3] | Unverified — lake existence not confirmed; glacier identity requires full RGI join, not lake-terminating subset. **Excluded from analysis until resolved.** |

**Rule:** Any site with `identity_status != verified` is ineligible for training, evaluation, or comparative retreat claims. It may appear only as a provisional intake marker.

**Study area definition:** Each bbox is the search envelope used for GEE queries. For verified analysis it must contain:
- the full target glacier including accumulation area,
- the historical RGI extent plus a 1–2 km buffer for possible retreat/advance,
- the terminus and proglacial lake where applicable,
- at least 10 % stable, non-glacier bedrock or moraine for inter-date alignment checks,
- surrounding negative examples (ice-free valley, vegetation).

Current bboxes meet the RGI-containment test (verified via `shapely` intersection). Stable-terrain fraction and negative-example sufficiency will be quantified per observation during G2 review.

## 2. Glacier extent definition for labelling

Consistent across all dates:

- **Included as glacier (1):** clean ice, debris-covered ice that is morphologically part of the glacier body, connected accumulation zone. Disconnected snow patches < 0.01 km² are excluded.
- **Background (0):** bedrock, vegetation, moraine, water (except where glacier calves), seasonal snow outside the glacier mask.
- **Unknown/ignore (masked):** cloud, cloud shadow, saturated/defective, cirrus, and pixels where seasonal snow makes ice vs snow ambiguous and would corrupt the accumulation area. Snow (SCL=11) is *not* erased from the accumulation zone: it is kept as valid where the glacier outline can be reliably interpreted, otherwise flagged unknown. The decision is recorded per observation.
- **Lake water** is a separate optional layer, not part of the glacier mask. Glacier–lake contact is measured from independent masks.

Ambiguous debris termini require second-reviewer confirmation (see label handbook). adjoining branches that share a divide are treated as one complex unless the RGI divides them; that choice is frozen per site before labelling.

## 3. Temporal strategy

**Annual comparable window:** 1 October – 30 November (late post-monsoon / early winter). This matches `south-lhonak.manifest.json` `annual_window: {start_month:10, end_month:11}` and minimizes seasonal snow while preserving solar illumination.

**Event windows (South Lhonak only):**

- Pre-event: 2023-09-01 to 2023-10-03
- Post-event: 2023-10-05 to 2023-11-15
- Event comparison is isolated from the annual series; including it in a trend line requires an explicit sensitivity note.

**Years:** the surface-reflectance (SR) analytical series begins in **2017** and targets 2017–2025. The pre-2017 2016 export is retained only as non-analytical visual context because `COPERNICUS/S2_SR_HARMONIZED` is unavailable before 2017-03-28; it is excluded from SR feature generation, training, measurement and change analysis. 2026 is excluded until a scene inside the window is acquired **and** passes quality review — the window had not occurred on 21 Sep 2026.

**Selection rule per window:**

1. Query GEE `COPERNICUS/S2_HARMONIZED` (harmonized TOA, 2015-06-27 → present) within the window and study bbox.
2. Rank by `CLOUDY_PIXEL_PERCENTAGE` then by local valid-pixel fraction (60 m grid) and `selection_score = validFraction + 0.5 * snowFreeFraction`.
3. Keep the top candidate; if local validFraction < 0.65 over the study area, record a gap — do not upscale a cloudy scene.
4. Require usable coverage over the **glacier and terminus**, not just the bbox. A scene with > 90 % overall clear but an obscured terminus is **rejected**.
5. Prefer a single-date scene. A same-day mosaic is allowed only when the study area straddles a tile boundary; if used, record contributing `scene_id`s and evaluate seam effects. Multi-day composites are prohibited for boundary labelling unless explicitly documented with date range and limitations.

**Fallback/exclusion reasons (recorded per window):** `available`, `no_scene_meets_threshold`, `terminus_obscured`, `snow_prevents_interpretation`, `mosaic_required`, `future_window_pending`.

**Actual availability (South Lhonak candidate inventory, 9 Sep 2026):**

| Window | Candidate scene | Whole-scene cloud % | Status |
|---|---|---|---|
| 2016 | 20161030T044922...T45RXM | 0.0 | candidate — not yet exported |
| 2017 | 20171106T043949...T45RXM | 0.0 | candidate |
| 2018 | 20181030T044921...T45RXM | 0.0 | candidate |
| 2019 | 20191114T045041...T45RXM | 0.0 | candidate |
| 2020 | 20201009T044711...T45RXM | 0.0 | candidate |
| 2021 | 20211029T044919...T45RXM | 0.0 | candidate |
| 2022 | 20221103T044939...T45RXL | 0.0 | candidate |
| 2023-pre | 20230916T043709...T45RXM | 0.365 | candidate |
| 2023-post | 20231024T044841...T45RXM | 0.0 | candidate |
| 2024 | 20241028T044911...T45RXM | 0.0 | candidate |
| 2025 | 20251013T044751...T45RXM (inventory) / 20251129T044151...T45RXL (exported evidence) | 0.0 / 9.49 | **one real exported raster (2025-11-29)** |
| 2026 | — | — | pending — window not occurred |

Other sites: only the 2025-11 export exists; 2016–2024 inventories have not been run per site.

## 4. GEE collections and harmonization

| Use | Collection | Coverage | Resolution | Note |
|---|---|---|---|---|
| Primary optical timeline (verified multi-year visual + analysis baseline) | `COPERNICUS/S2_HARMONIZED` (L1C TOA, harmonized) | 2015-06-27 → present | 10 m (B2/B3/B4/B8) / 20 m (B11/SCL) | **Consistent across 2016–2025.** All approved comparisons must be same-season and same-collection. |
| Optional surface-reflectance analysis layer | `COPERNICUS/S2_SR_HARMONIZED` | 2017-03-28 → present (SR from 2017) | As above | May be added as a separately labelled analysis layer from 2017 onward. **Do not silently mix SR and TOA to fill 2016.** If both are used, document inter-product bias. |
| Quality | `GOOGLE/CLOUD_SCORE_PLUS/V1/S2_HARMONIZED` (in inventory) and SCL | — | — | SCL is the primary per-pixel quality mask for exports. Cloud Score+ may supplement scene ranking. |
| Terrain | `COPERNICUS/DEM/GLO30` (via `https://copernicus-dem-30m.s3.amazonaws.com`, 30 m, `COPERNICUS/DEM/GLO30_2024_1` in GEE) | 30 m | 30 m | Elevation sampled per feature grid via `vsicurl` + bilinear reproject; slope/aspect via Horn gradient. DEM stats recorded per observation. |

No composite may mix collections without a recorded harmonization method.

## 5. Per-pixel quality and valid masks

**SCL codes:** 0 NoData, 1 Saturated/defective, 2 Dark, 3 Cloud shadow, 4 Vegetation, 5 Bare, 6 Water, 7 Cloud low, 8 Cloud med, 9 Cloud high, 10 Cirrus, 11 Snow.

**Valid-pixel rule for feature stacks and training:**

```
valid = SCL ∉ {0,1,2,3,7,8,9,10}  AND  finite(B2,B3,B4,B8,B11)
unknown = SCL ∈ {0,1,2,3,7,8,9,10}  OR  invalid pixel
# SCL=4,5,6,11 are retained; snow/ice (11) is not erased.
# SCL=2 dark terrain and SCL=7 low-probability cloud/unclassified are excluded
# conservatively unless an observation-specific review records an exception.
clear = valid
snow_free = SCL != 11
```

Rationale: discarding SCL=11 would erase the accumulation zone. Ambiguous seasonal snow that prevents interpretation is instead set to unknown per observation and excluded from loss/gain maps.

**Quality metrics recorded per observation:** `cloudPercent` (scene property), `validFraction` (local, SCL-based at 60 m), `clearFraction`, `terminusUsable` (manual), `quality_status` (`candidate` → `quality_accepted` after review, or `rejected` with reason), `coverageOverGlacier` (when RGI-based denominator available).

## 6. Feature stack specification (Plan B G2)

**Grid:** One grid per site, inherited from the evidence raster and frozen per site. Initial planb grid:

- CRS: EPSG:4326 (geographic, display-equivalent). Analysis reprojection to site-specific UTM (32645/32643) occurs before metric measurement and is separately versioned.
- Pixel size: 0.000179663° ≈ 20 m at these latitudes (matches S2 20 m bands; 10 m bands resampled by nearest/bilinear as documented).
- Transform and extent: exactly as in `data/derived/evidence/<site>-<date>-bands.tif` (e.g., South Lhonak 641×391, bounds 88.1199,27.8699,88.2350,27.9401). No resampling across dates without a new version.

Future frozen grids will be UTM with documented resampling (categorical masks → nearest neighbor, continuous → bilinear/cubic).

**Inputs per evidence scene:** bands B2 (490 nm), B3 (560 nm), B4 (665 nm), B8 (842 nm), B11 (1610 nm) as uint16 scaled reflectance (scale factor 1/10000, units dimensionless), plus SCL.

**Derived features (float32):**

| Band index | Name | Formula (reflectance in 0–1 or DEM) | Notes |
|---|---|---|---|
| 0 | B2 | B2/10000 | Blue (490 nm) |
| 1 | B3 | B3/10000 | Green (560 nm) |
| 2 | B4 | B4/10000 | Red (665 nm) |
| 3 | B8 | B8/10000 | NIR (842 nm) |
| 4 | B11 | B11/10000 | SWIR1 (1610 nm) |
| 5 | NDVI | (B8−B4)/(B8+B4) | Vegetation, [−1,1] |
| 6 | NDWI | (B3−B8)/(B3+B8) | Water (Green−NIR) |
| 7 | MNDWI | (B3−B11)/(B3+B11) | Modified water (Green−SWIR) — explicit per image |
| 8 | NDSI | (B3−B11)/(B3+B11) | Snow/glacier (same as MNDWI, kept for image compliance) |
| 9 | B8/B11 | B8/B11 | Ice vs water ratio |
| 10 | elevation | Copernicus DEM GLO-30 (S3, bilinear to 20 m grid) | Metres, NaN where void |
| 11 | slope | `arctan(sqrt(gx²+gy²))` Horn/gradient | Degrees 0–90 |
| 12 | aspect | `atan2(gx,−gy)` | Degrees 0–360, −1 flat (<0.5°) |

**Mask:** `valid_mask` (uint8, 0=unknown/invalid, 1=valid) derived from SCL rule above; written as `valid_mask.tif` alongside `features.tif`. Training excludes unknown; change maps retain unknown. DEM voids are NaN in DEM bands but do not affect spectral validity.

**Order and units are contract:** `feature_order = [B2,B3,B4,B8,B11,NDVI,NDWI,MNDWI,NDSI,B8/B11,elevation,slope,aspect]` (13 bands, `planb-feature-v1.1`), `scale = Bands/10000, indices [−1,1], elevation m, slope/aspect deg`; mismatch fails.

**Patching:** Non-overlapping 256×256 tiles, stride 256, `min_valid 0.2`; partial edge tiles skipped. Patches written to `data/derived/planb/features/<site>/<date>/patches/patch_r*_c*.tif` + `patches.json` manifest; each patch retains band order and valid fraction.

## 7. Alignment and resampling

- Inter-date alignment is checked using stable bedrock/moraine (SCL=5 or vegetated rock) via normalized cross-correlation. Residual displacement > 0.5 pixel triggers correction or exclusion; residual is included in uncertainty.
- Resampling: categorical masks (valid_mask, future label masks) use nearest neighbor; continuous bands use bilinear. Both are recorded.

## 8. Provenance and manifest fields

Minimum record fields per Plan B data contracts:

| Record | Required content |
|---|---|
| Observation | `site_id, observation_date, scene_id, collection, processing_version, bbox, crs, transform, pixel_size_m, validFraction, terminusUsable, quality_status, rasterPath, imagePath, lakeBoundary(status), sha256, source_ids, band_order, scale_factor` |
| Label | `observation_date link, origin (independent vs model-assisted), geometry/mask assets, reviewer, reviewed_at, label_definition, unknown_regions, split` |
| Prediction | `run_id, source_observation, mask asset, prob semantics, polygonization, review state` |
| Measurement | `boundary pair, method, units, interval, valid domain, value, uncertainty, source hashes` |
| Evaluation | `split/input hashes, model version, metrics per scene/site, exclusions, uncertainty, review outcome` |

All assets record SHA-256 and generation time. No synthetic input may enter a scientific manifest; `eligible_for_research=false` and `review_candidate` are not approved.

States: `candidate` → `quality_accepted` → `label_reviewed` → `predicted` → `boundary_reviewed` → `released`; `rejected` with reason at any gate.

## 9. Splits and vulnerability definition

- **Splits:** Defined before training. Baseline is temporal (train ≤2021, test ≥2022) plus leave-one-glacier-out once multiple sites have ≥2 independent scenes each. Folds are by acquisition (scene), never by pixel. Split file is `data/catalog/planb/splits.json` — currently `not_frozen` until at least three piloted dates exist.
- **Vulnerability (Plan B):** susceptibility to observed glacier retreat and associated lake change. It is **not** GLOF probability, exposure, or hazard class. Indicators, normalization, weights, and missing-data rules will be published before any ranking, with sensitivity tests. No missing indicator may be counted as zero.

## 10. Verification gates for Objective 1

**G1 — Site and protocol gate:** This document exists; South Lhonak is verified with CRS, bbox containing full target, and documented seasonal/quality/grid policy; provisional sites are marked excluded.

**G2 — Imagery and feature gate (pilot):**

- Each `features.tif` opens in GIS, overlays the RGI glacier, and fully covers it.
- `features.tif` and `valid_mask.tif` share grid; band values are in [0,1] or [−1,1] as appropriate; SCL handling respects snow preservation.
- Obscured terminus, missing band, or shifted grid triggers explicit failure (tested via engineering verification matrix).
- Restartable exports: successful outputs are not re-downloaded; missing or checksum-mismatched inputs fail with asset ID.

## 11. Limitations and gaps

- Only one real exported raster per site (2025) exists; 2016–2024 are candidate scenes not yet exported or review-passed.
- DEM features are now included (elevation/slope/aspect via Copernicus GLO-30 S3, 30 m → 20 m bilinear, Horn gradient); 13-band stacks and 14 patches (2–4 per site) are produced. DEM voids are NaN.
- Inter-date alignment has not been measured across multiple dates. Until a stable-terrain residual of ≤0.5 pixel is independently recorded, no record may be promoted to `quality_accepted` or enter research analysis.
- Future 2026 observations are excluded.
- Label handbook and frozen splits are referenced but not supplied in this release — they are Phase 3 deliverables.

Any figure or metric claiming a 2016–2025 trend from current assets alone is fabricated.

## 12. References

- GLIMS-RGI lake-terminating community dataset (Armstrong & Bolch, RGI v7) — lake-terminating outlines and `lake_cat` definitions.
- Google Earth Engine: `COPERNICUS/S2_HARMONIZED`, `GOOGLE/CLOUD_SCORE_PLUS`, `COPERNICUS/DEM/GLO30`.
- South Lhonak manifest: `data/catalog/south-lhonak.manifest.json`.
- Evidence assets: `apps/web/src/data/sites/evidence-assets.json`.
- Plan B: `planB.md` Sections 4–5.
