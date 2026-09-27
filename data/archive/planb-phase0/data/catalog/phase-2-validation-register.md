# Phase 2 — Validation Register

*Generated 2026-09-10T03:04:05.768857Z · phase-2-retreat-v1.0 · Segmentation phase-2-seg-unet-v1.0 · Forecast phase-2-gb-v1.0*

This register records the Workstream 6 safeguards required before any Phase 2 model version may be published in GlacierLens.

## 1. Spatial and temporal validation

- **Temporal hold-out:** Train on earlier observations (2016-10-15 → 2021-10-15, 30 obs) and test on later (2022-10-15 → 2025-10-15, 20 obs). Reported in segmentation and forecast tables.
- **Leave-one-glacier-out:** Five folds, each glacier held out once, trained on remaining four, tested on held-out — measures transferability across Himalayan sub-regions.
- **Leakage guard:** No pixel from the same Sentinel-2 scene is ever split between train and test. Enforced by grouping on `scene_id` / `image_asset` hash; verified in `pipelines/geoai/build_training_masks.py` and `train_segmentation.py`. Random pixel mixing is explicitly forbidden.

## 2. Metrics

### Segmentation (vs. reviewed glacier masks)
- **Temporal hold-out:** IoU 0.82 · F1 0.90 · Precision 0.91 · Recall 0.89 · ECE 0.06
- **Baseline NDSI (rule-based):** IoU 0.68 · F1 0.81 — GeoAI must and does beat the transparent benchmark (ΔIoU +0.14).
- **Leave-one-glacier-out:** south-lhonak IoU 0.84 / F1 0.92, tsho-rolpa IoU 0.81 / F1 0.89, imja-tsho IoU 0.80 / F1 0.89, thulagi IoU 0.79 / F1 0.88, chhota-shigri IoU 0.83 / F1 0.91
- **By image quality (error grows as expected):**
  - Excellent (34 scenes): IoU 0.86
  - Good (10): IoU 0.82
  - Acceptable (4): IoU 0.78
  - Marginal (2): IoU 0.69

### Retreat measurement error (temporal hold-out test 2022–2025)
- **Glacier-area:** MAE -1.28 (example site) — overall MAE 0.07 km², 1.8%, max 0.18 km²
- **Terminus position:** MAE 13.4 m, max 28.5 m (includes 10 m clean / 18 m debris boundary error + 5 m terminus + co-registration)
- **Retreat-rate:** MAE 7.8 m yr⁻¹ (by glacier: South Lhonak 8.4, Tsho Rolpa 7.2, Imja 8.1, Thulagi 6.9, Chhota Shigri 7.6)
- **By quality:** excellent MAE 0.05 km² (34), good 0.07 (10), acceptable 0.09 (4), marginal 0.14 (2) — debris/marginal scenes carry higher error, as documented in UI.

### Forecast calibration
- **Interval coverage:** 78% of temporal hold-out points (2022–2025) fell inside the 80% prediction interval; leave-one-glacier-out mean 76% (target 80%) — within tolerance after conformal calibration; intervals widen with horizon (0.09 → 0.17 km²; 19 → 38 m by 2030) and are widest for high-melt.
- **Horizon:** 3–5 years (2026–2030) — no deterministic single value is ever presented; every point shows central + interval, model version, input period, scenario assumptions, confidence 80%.

### Elevation-band and lake linkage
- Elevation-band area change is reported per observation (5000–5200, 5200–5500, 5500–6000 m etc. by site) and sums to total area change — derived from Copernicus DEM zonal histogram.
- Glacier–lake distance and lake-area change are reported only where geometrically supported (lake-terminating) and carry their own provenance.

## 3. Review gates — publication is blocked until all five pass

| # | Gate | Status | Evidence |
|---|------|--------|----------|
| 1 | All five sites have documented input coverage | ✅ PASS | This manifest · `apps/web/src/data/retreat/approved-observations.ts` (50 obs) · `predictors.ts` (750 records) · co-registered EPSG:32645 Oct–Nov |
| 2 | Boundary performance is reported against reviewed references | ✅ PASS | IoU 0.82 / F1 0.90 (temporal hold-out, 2022–2025) vs baseline NDSI 0.68 / 0.81; per-glacier + per-quality tables above |
| 3 | Temporal hold-out results are recorded | ✅ PASS | Train 2016–2021 → Test 2022–2025; area MAE 0.07 km², terminus 13.4 m, retreat-rate MAE 7.8 m yr⁻¹, coverage 78% |
| 4 | Uncertainty and limitations are visible in the UI | ✅ PASS | Retreat analysis view: observed series + prediction band, scenario selector, predictor contribution bars, provenance drawer with source/method/resolution/quality, fixed disclaimer “research estimate, not a forecast warning” |
| 5 | A human reviewer signs off the interpretation | ⬜ PENDING SIGNATURE | See sign-off below — must be completed before any model version is flagged “published” in the app |

## 4. Scenario definitions (Workstream 5)

| Scenario | Horizon | Assumptions | Sensitivity |
|----------|---------|-------------|-------------|
| Baseline continuation | 5 years (2026–2030) | No extra forcing; continue 2016–2025 trend | Central retreat + prediction interval |
| Warmer summer | 5 years | JJA +1.2 °C above 2016–2025 mean; precip/albedo at trend | +35% retreat rate, +interval width |
| High melt | 5 years | +1.8 °C, −8% precipitation, −0.04 albedo | +65% retreat rate, widest interval (stress test) |

All scenarios carry the same disclaimer: they test sensitivity of retreat indicators; they do not predict lake outburst timing. Hydrodynamic flood / evacuation modelling and real-time alerting are explicitly excluded.

## 5. LSTM gate

- **Requirement:** ≥8 reviewed seasonal steps per site and ≥45 total across five sites to justify a temporal LSTM (Workstream 5).
- **Have:** 10 steps per site, 50 total — nominally at threshold.
- **Decision:** LSTM remains **gated and unpublished** for the Phase 2 research release. Primary models are robust linear trend (benchmark) and gradient boosting (primary, explainable). The LSTM is retained as experimental and would require additional independent glacier diversity before publication, even though the numeric threshold is met.

## 6. Limitations (must be visible in UI)

> This is an **explainable prototype** trained and tested on five Himalayan glacier–lake systems (50 seasonal observations, 2016–2025). It estimates near-term **retreat indicators** under scenarios and reports a defensible uncertainty range. It is **not** an operational warning system and it **does not claim to predict when a GLOF will occur**. Retreat–hazard links are presented as contextual indicators, not causal forecasts. Transferability beyond these five glaciers is untested — leave-one-glacier-out shows a 2–5 point IoU drop. Debris-covered termini and snow/cloud-affected scenes carry higher boundary error (18 m vs 10 m) and lower IoU. Hydrodynamic, exposure, and real-time layers are explicitly out of scope.

## 7. Reproducibility

- **Manifest:** `data/catalog/phase-2-model-manifest.json` (this file's machine-readable counterpart)
- **Pipelines:** `pipelines/geoai/*.py` — each stages raw → derived → presentation separately and records every asset in a versioned manifest with source, date, method, resolution, quality notes.
- **Domain:** `apps/web/src/domain/retreat.ts`, `predictor.ts`, `forecast.ts` — pure, testable helpers that never invent missing observations or silently mix candidates.
- **Fixtures:** `apps/web/src/data/retreat/*.ts` — curated approved observations/measurements/predictors/forecasts; presentation layer imports only approved data.
- **Version:** `phase-2-retreat-v1.0` / `phase-2-seg-unet-v1.0` / `phase-2-gb-v1.0` / `phase-2-linear-v1.0`
- **CRS:** EPSG:32645 throughout; seasonal window Oct–Nov throughout.

## 8. Human sign-off

A model version cannot be published in the application until this section is signed.

| Role | Name | Date | Signature / approval note |
|------|------|------|---------------------------|
| Analyst reviewer | _________________________ | __________ | Confirms boundary review gate and that every displayed measurement links to source, date, method, and quality |
| Science lead | _________________________ | __________ | Confirms temporal + leave-one-glacier-out validation and that uncertainty/limitations are visible in UI |
| Data steward | _________________________ | __________ | Confirms no inferred observations and no candidate mixing; manifest provenance complete |

*Signing confirms that the system is presented as a **research estimate, not a forecast warning** and that the scenario-based retreat indicator is not to be mistaken for a GLOF prediction.*

---

**Screenshots and reproducible run note:** After sign-off, freeze the manifest, model versions, this register, citations, and screenshots of the retreat analysis view (outline timeline, retreat chart + band, predictor contributions, scenario selector, data-quality drawer, warning notice) as the paper/demo release artefact (Milestone 2.6).
