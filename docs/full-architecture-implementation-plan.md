# GlacierLens — implementation plan and source of truth

**Current status reconciled: 27 September 2026.**

**We have a working experimental South Lhonak pilot, not a completed or independently validated research system.** Data preparation, experimental glacier training/inference and provisional boundary-based change calculations exist. Reliable glacier-and-lake validation, uncertainty-aware changes and regional pattern analysis remain unfinished.

## Current plan authority

The current sections above the historical-plan divider below are the authoritative planning/status record. They supersede outdated status statements in `docs/planb-implementation.md`, `docs/roadmap.md`, `docs/phase-2-geoai-retreat-forecasting.md` and `data/catalog/planb/geoai-training-pilot.md`. This document does not override executable checks or upgrade the evidence status of assets. Some implementation work remains uncommitted; local existence does not mean it has been pushed or released.

## Agreed scope

| Item | Current decision |
| --- | --- |
| First deliverable | Complete one South Lhonak experimental glacier–lake pilot, then expand. |
| Dates | **2017-11-19, 2019-10-15, 2022-11-30**. The third year is 2022, not 2020 or 2012. |
| Inputs | Sentinel-2 surface reflectance and Copernicus DEM terrain features. Analytical SR starts in 2017. |
| Model split | Train on 2017 and 2019; test on 2022. No separate validation scene currently exists. |
| Labels | The owner explicitly approved derived glacier boundaries for experimental training. Redrawing them is not a prerequisite for continuing that authorized route. |
| Evidence limit | Owner approval is not independent validation. Agreement with derived labels is not established real-world accuracy. |
| Later expansion | More years/sites and the October-2023 event pair; these are not prerequisites for the three-date demo. |
| Not adopted | Landsat, alternative study sites and external training datasets have been discussed, but no replacement of the current pilot has been implemented or agreed. |
| Deferred | Forecasting, operational alerts, GLOF probability, flood routing and exposure modelling. |

Dataset-first labelling remains an option: verify each outline's location, source acquisition date, licence and mapping method. A dataset's release year is not its imagery year. Glacier outlines do not automatically provide lake shorelines.

## Architecture: what exists now

```text
Sentinel-2 + DEM + historical inventories
                  |
                  v
Quality review, common-grid features and alignment checks
                  |
         +--------+--------+
         v                 v
Glacier Random Forest   Lake spectral candidates
         |                 |
         +--------+--------+
                  v
Boundary review, measurements and uncertainty
                  |
                  v
Multi-date change maps, charts and evidence downloads
                  |
                  v
Later: additional sites and spatial/temporal pattern analysis
```

| Architecture stage | Current evidence | Remaining work |
| --- | --- | --- |
| Acquisition/preprocessing | Three-date pilot feature stacks and valid masks; G2 passes. | Reproducibility and grid/NoData regression checks; broader coverage later. |
| GeoAI delineation | Experimental binary glacier Random Forest and XGBoost models trained; XGBoost 2022 probability, mask, polygon and full-scene diagnostic layers exported. | Diagnose errors and validate lake detection separately. U-Net/SegFormer is not implemented. |
| Feature extraction | Provisional polygon areas and geometry differences. | Terminus distance, terrain/elevation summaries and uncertainty. |
| Multi-temporal analysis | Two provisional interval outputs exist. | Validated change maps, common valid coverage, detection limits and GEE change exports. |
| Visualization | Timeline, Pilot Change, GeoAI panel and downloads; local mobile/simplification work. | Correct georeferenced comparison/error layers, report-driven metrics and responsive verification. |
| Regional analysis | Not complete. | Verified additional sites, geographic holdouts and bounded susceptibility analysis. |

An end-to-end released-data path through the previously proposed PostGIS/FastAPI/object-store/tile architecture has not been demonstrated. Static versioned assets are sufficient for the first pilot. The full serving stack remains a later delivery milestone, not a prerequisite for inspecting model errors.

## Evidence inventory and measured results

Paths are relative to the repository root:

- Inputs: `data/derived/planb/features/south-lhonak-approved-feature-manifest.json` and per-date assets under `data/derived/planb/features/south-lhonak/`.
- Approved source polygons: `data/owner-approved-boundaries/south-lhonak-<date>-glacier.geojson`.
- Experimental authorization: `data/catalog/owner-approved-glacier-masks.json`.
- Model and saved metrics: `data/derived/phase2/models/segmentation/phase-2-seg-rf-v2.1/` and `data/derived/phase2/models/segmentation/phase-2-seg-xgb-v1.0/`.
- Public inference: `apps/web/public/geoai/south-lhonak/2022-11-30/`.
- Provisional change results: `apps/web/public/change-analysis/south-lhonak/`.
- Implementation: `pipelines/geoai/build_training_masks.py`, `train_segmentation.py`, `predict_segmentation.py`, `evaluate_segmentation_full_scene.py`, and `pipelines/scripts/generate_provisional_change_analysis.py`.

The 13 feature bands are B2, B3, B4, B8, B11, NDVI, NDWI, MNDWI, NDSI, B8/B11, elevation, slope and aspect. MNDWI and NDSI have the same green/SWIR formula here; they are not independent information sources.

### Glacier models

Saved model `phase-2-seg-rf-v2.1` is a `RandomForestClassifier`, with evidence status `owner_approved_experimental`. The saved evaluation uses **20,000 sampled 2022 pixels**:

| Metric | Saved result |
| --- | --- |
| Glacier IoU | 0.5045 |
| F1 / Dice | 0.6706 |
| Precision | 0.7373 |
| Recall | 0.6150 |

These are agreement scores against derived owner-approved labels, not independent scientific accuracy. Geographic validation is absent. There is no trained/evaluated lake model. The 2022 prediction report records threshold 0.5 and 23,233 predicted glacier pixels.

The comparable experimental `XGBClassifier` run `phase-2-seg-xgb-v1.0` uses the same frozen temporal split, feature order, 20,000-pixel-per-scene sampling ceiling, seed and 0.5 threshold. Its saved 2022 sampled-label agreement is IoU **0.530**, F1/Dice **0.693**, precision **0.767**, and recall **0.632**. This is a modest improvement over the saved RF agreement, not evidence of independent real-world accuracy or a reason to retire the RF before full-scene diagnostics and independent validation. Its 2022 export is at `data/derived/phase2/predictions/phase-2-seg-xgb-v1.0/south-lhonak/2022-11-30/` and contains 22,741 predicted glacier pixels.

The XGBoost full-scene evaluator is saved at `data/derived/phase2/evaluations/phase-2-seg-xgb-v1.0/south-lhonak/2022-11-30/`. On 230,195 shared valid pixels, it records 17,268 true positives, 5,473 false positives, 10,314 false negatives and 20,436 ignored pixels; IoU is 0.522 and F1 is 0.686. It also exports individual TP/FP/FN/TN/ignored maps and a combined error-class map. These are diagnostics against the same owner-approved derived labels, not independent validation.

The glacier labels use a historical RGI footprint adjusted using dated spectral lake candidates. They do not independently establish glacier-wide boundaries for every date; shared historical geometry can propagate systematic errors across training and test labels.

A prior conversational full-scene audit was not saved as a reproducible report. Its numbers must not be mixed with the sampled report above. The next evaluation must save confusion counts, coverage, metrics, projected areas and asset hashes. Compare predicted/reference areas over **the same valid footprint**, not a masked prediction against an entire polygon.

2022 has already been inspected. It can support transparent diagnostics, but repeated tuning against it would make it development data, not an untouched final test. Establish separate validation and a fresh final holdout before stronger claims.

### Provisional change measurements

| Date | Glacier polygon area (km²) | Lake candidate area (km²) |
| --- | --- | --- |
| 2017-11-19 | 12.801892 | 1.149537 |
| 2019-10-15 | 12.593980 | 1.358957 |
| 2022-11-30 | 12.531210 | 1.713200 |

These are measurements of input geometry, **not GeoAI-predicted areas**. Interval loss/gain geometries exist. Lake polygons remain candidates, not independently reviewed shorelines. Terminus retreat is uncomputed: area loss is not retreat distance. Uncertainty and independent change validation are incomplete. Three irregular observations describe two intervals, not a detailed annual trend.

## Checks rerun on 27 September 2026

| Check | Actual result | Meaning |
| --- | --- | --- |
| `validate_research_readiness.py` | PASS, exit 0 | Current G2 provenance, sources, review, coverage and co-registration requirements are met. This does not independently recertify the imagery or algorithm. |
| `validate_geoai_training_readiness.py` | BLOCKED, exit 2 | Independent dated labels are not registered in `reviewed-glacier-masks.json`. |
| `python -m unittest discover -s pipelines/tests -v` | PASS, 16 tests | Includes full-scene evaluator tests: perfect agreement, shared-valid ignored handling and shifted-grid rejection. |

There are two separate routes: the **authorized experimental pilot**, which already trained using owner-approved labels, and an **independently validated research release**, which still requires defensible independent references. Do not remove the latter's checks just to make a gate pass.

## Known inconsistencies and technical risks

1. Older status documents, training-preparation notes and the split snapshot incorrectly say no model exists or approved experimental labels are excluded. This file supersedes those planning statements; underlying metadata still needs reconciliation.
2. The provisional change summary still prohibits training/evaluation. Preserve its provenance while recording the separate experimental authorization consistently in generators, manifests and UI; do not silently promote it to independent truth.
3. `temporal-explorer.tsx` scales an RGI illustration using polygon bounds and synthesizes a lake ellipse. This is not a reliable georeferenced overlay and cannot validate alignment.
4. Mask/feature validation needs affine-transform checks in addition to dimensions/CRS; inference should explicitly enforce valid-mask semantics.
5. General inference export needs proper geographic GeoJSON conversion for projected inputs and metric-area calculation. The current geographic pilot does not validate arbitrary CRS handling.
6. UI metrics should come from versioned reports rather than hardcoded values, with sampled/full-scene evaluation clearly distinguished.

## Ordered next steps and acceptance tests

### A. Make the existing 2022 prediction inspectable — next action

Build a full-scene evaluator that checks grids, intersects valid coverage, and exports true-positive, false-positive, false-negative and ignored-pixel maps. Save confusion counts, IoU/F1/precision/recall, comparable projected areas, model settings and hashes. Replace illustrative overlays with actual georeferenced source/prediction geometry on matching imagery.

**Tests:** Identical reference/prediction gives perfect agreement on valid pixels; a shifted grid is rejected; ignored pixels do not count as background; several recognizable locations align visually; area comparisons use one common valid domain.

### B. Diagnose and improve glacier segmentation

Inspect whether errors originate in labels, alignment, shadow, seasonal snow, debris or model behaviour; do not assume a cause before inspection. Evaluate external outlines by source date and overlap. Keep the authorized derived labels usable for experiments. Establish separate validation data or clearly limited spatially blocked validation within training data. Compare an index/terrain baseline with Random Forest. Add representative labels before implementing U-Net/SegFormer.

**Tests:** Whole acquisitions remain in one temporal fold; neighbouring/overlapping patches do not leak across validation folds; feature order is enforced; runs preserve configuration and provenance. Freeze acceptance criteria before evaluating new final-test data rather than inventing a passing score afterward.

### C. Complete the lake branch

Obtain or review dated shorelines independently from glacier labels. Mark obscured edges unknown. Evaluate NDWI/MNDWI candidates, then train/evaluate a lake or multiclass model for the full AI architecture.

**Tests:** Lake overlap and area have separate references and valid coverage; inspect shadow/snow confusion; glacier predictions are never labelled lake predictions; uncertain shorelines remain flagged.

### D. Produce defensible change analysis

Preserve provisional results and create a separately versioned analysis from reviewed outputs. Compute persistence/loss/gain, area differences and actual interval-adjusted rates. Include boundary-resolution, alignment and unknown-coverage uncertainty with a detection limit. Define dated terminus lines before reporting retreat distance. Generate reproducible GEE-side change exports.

**Tests:** Identical polygons give zero change; gain minus loss reconciles with net area change; mismatched CRS fails; obscured termini are indeterminate; independently verify at least one interval. Never infer full glacier retreat from lake subtraction alone.

### E. Finish the simple pilot interface and reproducible release

Keep the main journey to date selection, imagery/boundaries, date comparison, model agreement and evidence downloads. Load metrics from reports. Publish methods, limitations and a release manifest with retrieval instructions for large assets.

**Tests:** Explore Imagery is accessible on phone/tablet/desktop; all three dates load matching assets; overlays remain aligned on resize; Pilot Change explains its difference from GeoAI results; every figure traces to a report; a clean environment reproduces the documented pipeline.

### F. Expand toward the complete research architecture

Verify additional sites and dated labels; run geographic holdouts; analyze spatial/temporal patterns and a transparent sensitivity-tested susceptibility index. Implement the full versioned database/API/tile-serving path if retaining that deployment design.

**Tests:** Unverified sites remain excluded; per-site metrics are reported; index weights/missing-data rules are published; no index is presented as GLOF probability; released figures resolve to exact sources and processing versions.

## Practical commands

Run from the repository root:

```sh
# Expected PASS for the current pilot input gate.
.venv/bin/python pipelines/scripts/validate_research_readiness.py

# Expected BLOCKED until independent labels are registered.
# Separate from the authorized experimental route.
.venv/bin/python pipelines/scripts/validate_geoai_training_readiness.py

# Rerun these after implementation changes.
.venv/bin/python -m unittest discover -s pipelines/tests -v
npm run build
```

Only the first two commands were rerun for this documentation reconciliation. No fresh full-suite, production-build or browser pass is claimed here.

## Current definition of done

### Experimental pilot

- [x] Three-date G2 input-readiness gate passes.
- [x] Owner-approved experimental label manifest exists.
- [x] Glacier Random Forest trained and 2022 prediction exported.
- [x] Provisional input-boundary change measurements generated.
- [x] Saved XGBoost full-scene evaluation and correctly georeferenced error maps, against experimental owner-approved derived labels.
- [ ] Separately evaluated lake delineation.
- [ ] Uncertainty-aware change outputs with coverage limitations.
- [ ] Verified simple responsive UI and reproducible release package.

### Full objectives and architecture

- [ ] Independent glacier/lake validation and neural segmentation evaluated, or an explicitly agreed revision of the model architecture.
- [ ] Validated area/terminus change, uncertainty and GEE change maps.
- [ ] Multi-site spatial/temporal patterns and bounded susceptibility assessment.
- [ ] Versioned serving architecture and evidence-backed research release.

Update this file whenever a milestone changes: record date, evidence paths, checks run and limitations. Distinguish implemented, experimentally evaluated, independently validated and released. Do not infer scientific completion from code existence, owner approval or passing software tests alone.

---

# Historical architecture proposal — 22 September 2026

**Archive/context only.** Everything below preserves the original design and its then-current assumptions. Its status statements, phase numbers, dates, estimated durations, immediate backlog and mandatory sequencing are historical, not current instructions. Use the reconciled scope, ordered milestones and checks above for execution. The broader technical design below remains reference material for later expansion.

**Status (22 September 2026): not yet on track for a completed research release.** The project has a credible start: a Next.js evidence viewer, 32 candidate multi-date Sentinel-2 feature stacks across five sites, a documented preprocessing protocol, and fail-closed research gates. It does **not** yet have quality-accepted observations, stable-terrain alignment, reviewed dated labels, a trained/validated GeoAI model, real change measurements, cross-site analysis, a working API/database/tile-serving layer, or approved lake boundaries. Therefore the dashboard must continue to show only evidence and candidate status until the gates below pass.

This plan implements the six boxes in the supplied architecture and the four objectives. It deliberately separates scientific production from web presentation: Google Earth Engine (GEE) runs in controlled pipeline jobs; the browser never runs GEE or promotes outputs.

## 1. Target system and scope decisions

```mermaid
flowchart LR
  A[Inventories + Sentinel-2 + DEM + lake references] --> B[GEE acquisition]
  B --> C[Quality, common grid and feature pipeline]
  C --> D1[Glacier segmentation]
  C --> D2[Lake segmentation]
  D1 --> E[Reviewed glacier boundaries]
  D2 --> E2[Reviewed lake boundaries]
  E --> F[Area, terminus and change measurements]
  E2 --> F
  F --> G[Retreat-pattern and vulnerability analysis]
  E --> H[Versioned assets]
  E2 --> H
  F --> I[PostGIS + API]
  G --> I
  H --> J[Web map, charts, reports]
  I --> J
```

### Scope that must be frozen before implementation

1. **Scientific unit:** one named glacier complex and its associated lake(s) per site. The five named sites remain a target set, but only South Lhonak is currently verified for analysis. Sites with unresolved identity or lake association are excluded, not “filled in.”
2. **Time policy:** annual late-post-monsoon observations (1 October–30 November) from 2016–2025 where available; a separate pre/post October-2023 event pair; 2026 only after its observation window and review. Do not silently substitute a different season.
3. **Two segmentation products:** `glacier_mask` is the primary product for Objectives 2–4. `lake_mask` is required by the architecture for lake growth and glacier–lake relationships. They need separate label definitions, models/baselines, and validation; a glacier model must not be claimed to detect lakes.
4. **Vulnerability meaning:** a transparent relative *retreat/lake-change susceptibility index*, not GLOF probability, flood routing, exposure, or an early-warning score. Its inputs and weights must be published.
5. **Release principle:** only reviewed boundaries and validated measurements are published in the analytical UI. Candidate imagery may be displayed only with a clear “not approved for measurement” status.

## 2. Gap assessment against the requested architecture

| Architecture stage | Current state | What prevents completion |
| --- | --- | --- |
| 1. Data acquisition | 32 real candidate Sentinel-2 exports; inventories and DEM path are documented. | Every record is a candidate; early SR provenance needs correction/re-export; required source assets are not all locally versioned; some sites/dates lack usable coverage. |
| 2. Preprocessing in GEE | 13-band feature stacks, SCL quality masking, DEM features, common per-site grids, and patches exist. | Manual scene acceptance and measured inter-date co-registration are absent. The current research-readiness gate correctly blocks use. |
| 3. AI lake/glacier detection | Training/measurement commands are intentionally blocked without approved labels. Lake candidates use a threshold rule only. | No reviewed masks, no baseline/model evaluation, no uncertainty product, no accepted dated lake boundary series. |
| 4. Feature extraction | Feature rasters exist; no released measurements. | Area, terminus, elevation-band, perimeter/aspect and lake relation calculations need implementation and validation on reviewed geometry. |
| 5. Multi-temporal change analysis | No approved boundary pairs or change maps. | Requires aligned, reviewed boundaries; uncertainty/detection limits; a GEE-side change-map export and GIS verification. |
| 6. Output and visualization | Evidence-oriented Next.js UI exists. | It is not connected to the specified FastAPI/PostGIS/object-store architecture and must not display unsupported analytical results. |

## 3. Architecture to implement

### A. Data and processing layer

Create a `pipelines/` workflow with explicit stages. Each stage writes immutable, versioned outputs under `data/derived/planb/<stage>/<run-id>/` and a manifest record. Raw downloads/exports stay separate from derived products.

```text
data/catalog/planb/                 # Small, version-controlled metadata/evidence
  sites.json                        # identity, AOI, CRS, glacier/lake references
  observations.json                 # one record for each attempted date
  reviews.json                      # human scene/boundary decisions
  splits.json                       # frozen train/test assignments
  source-register.json              # licence/version/access/checksum
  model-registry.json               # approved model runs only
data/derived/planb/                 # reproducible outputs; large rasters outside Git
  raw/<site>/<observation>/
  imagery/<site>/<observation>/
  features/<site>/<observation>/
  labels/<site>/<observation>/
  predictions/<model-run>/<site>/<observation>/
  boundaries/<boundary-run>/<site>/<observation>/
  measurements/<measurement-run>/
  change-maps/<change-run>/<site>/<pair>/
  validation/<run-id>/
  release/<release-id>/
```

Every observation, model output, boundary and measurement must retain: `site_id`, date/window, source scene IDs, source and output hashes, CRS/grid, processing version, status, quality notes, reviewer decision, and parent asset IDs. A status transition is evidence, not a string change:

```text
candidate -> quality_accepted -> label_reviewed -> predicted
predicted -> boundary_reviewed -> measured -> released
```

### B. Serving and application layer

Implement the documented split rather than embedding measurements in TypeScript files.

| Component | Responsibility | First implementation |
| --- | --- | --- |
| Object storage / local equivalent | COG imagery, probability rasters, PMTiles/vector tiles, GeoParquet source assets and report files. | Local `data/derived` in development; S3-compatible bucket in deployment. |
| PostGIS | Sites, observation metadata, boundary metadata/geometries, measurements, events, citations and release state. | Docker Compose database plus migrations and seed from released manifests. |
| FastAPI | Read-only versioned endpoints; validates `released` state before returning a layer or metric. | `/sites`, `/sites/{id}/observations`, `/layers`, `/metrics`, `/changes`, `/risk`, `/provenance`. |
| Tile service | Raster COG and vector tile delivery, cache headers, date-specific URLs. | TiTiler or equivalent for COGs; PMTiles/vector tiles for approved vectors. |
| Next.js client | Map/time slider, paired-date comparison, layer legend, measurement chart, provenance and downloads. | Replace static hard-coded analytical values with API calls; retain local fixtures only as explicitly demo-labelled data. |

The API must expose a revision (`release_id`/`run_id`) with every response. UI requests must state the target date/pair and never calculate a scientific result in the browser.

## 4. Execution plan and quality gates

The phases are ordered by dependency. Work on interface scaffolding may overlap with acquisition, but no later scientific gate can be declared complete early.

### Phase 0 — establish a reproducible environment and research contract (2–4 days)

**Do**

1. Create a pinned Python environment with Rasterio/GDAL, GeoPandas, PyTorch or TensorFlow, scikit-learn, Earth Engine API, and tests. Add a lock file or container so the test suite runs identically for every contributor.
2. Move GEE project ID, authentication and bucket credentials to local `.env`/secret management. Remove project identifiers from narrative documentation where they are not necessary.
3. Finish the source register: each Sentinel, DEM, RGI/GLIMS, NASA HMA, ICIMOD, and reference-boundary item needs licence, version, access date, citation, local artifact location and SHA-256.
4. Freeze the label handbook for both classes: glacier, lake, background and ignored/unknown. Specify debris-covered ice, seasonal snow, shadow, supraglacial ponds, proglacial lake water and disconnected snow fields.
5. Finalize a reviewer workflow: analyst A digitizes; analyst B independently reviews test labels; disagreements are stored as a decision record. Model-assisted polygons cannot become independent test truth.

**Exit gate G1+ (environment and contract):** a clean clone runs all tests; every eligible site has verified identity/AOI/metric CRS; label and split policies are versioned; unresolved sites are excluded.

**Practical tests**

```sh
python3 -m unittest discover -s pipelines/tests -v
python3 pipelines/scripts/audit_planb.py
python3 pipelines/scripts/validate_catalog.py
```

The current suite has an environment failure because `rasterio` is missing from the interpreter used for the test command. Fixing this is an immediate prerequisite, not a scientific pass.

### Phase 1 — obtain and approve the multi-temporal data set (3–10 days, export queues permitting)

**Do**

1. Correct the 2016 collection strategy. Sentinel-2 SR Harmonized begins in 2017; use a clearly labelled compatible Level-1C/TOA path for 2016 **or** begin the SR analytical series in 2017. Never call pre-2017 data SR.
2. For each eligible site, inventory all scenes within the fixed window, score cloud/shadow/snow and terminus visibility, and record both accepted and rejected options.
3. Export at least three comparable South Lhonak dates spanning early, middle and late periods; include a dedicated pre-/post-event pair. For each subsequent site, require at least two usable dates before it is added to comparative analysis.
4. Export spectral bands (`B2,B3,B4,B8,B11`), SCL/quality bands, scene metadata and a reproducible RGB preview. Preserve individual scene IDs even if a composite is used.
5. Run common-grid processing and feature construction. Continuous bands use documented interpolation; categorical masks use nearest-neighbour; invalid pixels stay `unknown`, never background.
6. Measure co-registration on stable bedrock using a reproducible algorithm and manual spot checks. Store residual displacement per pair; reject/realign pairs exceeding 0.5 pixel.
7. A reviewer checks glacier terminus and lake edge visibility for every candidate and moves only defensible records to `quality_accepted`.

**Exit gate G2:** South Lhonak has three or more manually accepted, source-complete, aligned observations; each source asset is locally resolvable and hashed; no unresolved pre-SR provenance; alignment residual is <=0.5 pixels for every usable pair.

**Practical tests**

```sh
python3 pipelines/scripts/validate_research_readiness.py
python3 pipelines/geoai/prepare_features.py --manifest data/catalog/planb/observations.json --dry-run
python3 pipelines/scripts/validate_alignment.py --help
```

Expected now: readiness **fails**. Expected after this phase: it passes only for eligible, approved site/date records.

### Phase 2 — construct independent labels and transparent baselines (4–10+ days; reviewer-dependent)

**Do**

1. Digitize glacier and lake masks for the quality-accepted South Lhonak dates against imagery, DEM hillshade and external references. Assign `255` to cloud/shadow/ambiguous pixels. Do not make a geometry complete-looking by guessing hidden edges.
2. Have the independent reviewer inspect all held-out labels before model tuning. Record agreement measures (IoU, boundary distance) and reconcile only training labels; retain original independent test labels.
3. Build two non-ML benchmarks:
   - glacier: NDSI/NDVI plus terrain/shadow rules, morphology and inventory-constrained cleanup;
   - lake: NDWI/MNDWI plus slope/terrain and connected-component rules.
4. Create the training-mask raster and verify it matches each feature raster exactly in CRS, transform, dimensions and NoData semantics.
5. Populate frozen temporal and leave-one-glacier-out splits by whole acquisition, never pixels or neighbouring patches from the same scene.

**Exit gate G3:** review records exist; every training/testing pair is spatially matched; labels are independently held out; baseline outputs and error maps are reproducible.

**Practical tests**

```sh
python3 pipelines/geoai/build_training_masks.py --reviews data/catalog/planb/reviews.json
python3 pipelines/geoai/train_segmentation.py --help
# Add a test that deliberately shifts a label grid by one pixel; it must fail.
```

### Phase 3 — train, evaluate and review GeoAI segmentation (5–10 days)

**Do**

1. Start with a Random Forest pixel/patch baseline using the 13 features. It is fast, inspectable and reveals data errors early.
2. Add a U-Net or SegFormer only after the baseline and label count justify it. Feed 13-channel tiles, mask ignored pixels in the loss, use augmentation that does not change terrain meaning, and maintain a separate model for glacier/lake unless a multi-class model demonstrably improves both.
3. Save model config, code revision, random seed, feature schema, train/validation/test asset hashes, threshold and post-processing parameters.
4. Evaluate on chronological holdouts and leave-one-glacier-out folds. Report IoU/F1/Dice, precision/recall, boundary Hausdorff or mean distance, glacier area error and lake area error by site/date/quality class.
5. Produce probability rasters, masks, uncertainty masks and vectorized polygons. Flag low-confidence terminus/lake-edge regions for human review.
6. A glacier analyst reviews predictions. Only reviewed boundaries become `boundary_reviewed`; retain raw prediction separately.

**Exit gate G4:** both baseline and GeoAI metrics are computed from held-out labels; all claims identify sample count and folds; GeoAI either has a documented improvement or the baseline remains the approved method. No target accuracy threshold may be invented after inspection.

**Practical tests**

```sh
# Same input and seed must yield equivalent metrics/model manifest.
python3 pipelines/geoai/train_segmentation.py ...
python3 pipelines/geoai/evaluate_models.py ...
# Alter feature-band order, inject a train/test duplicate, or replace unknown with background:
# each must fail validation.
```

### Phase 4 — calculate features, boundaries and validated multi-temporal change (4–8 days)

**Do**

1. Implement `measure_retreat.py` to consume only `boundary_reviewed` glacier/lake vectors plus their quality masks. It must fail on candidates, model-only boundaries or mismatched grids.
2. Calculate glacier area (km²), lake area (km²), perimeter, elevation-band area, terminus position along a documented centreline, terminus retreat distance, annualized rate, glacier–lake distance/adjacency and lake-growth change.
3. Compute uncertainty: spatial resolution/boundary buffer error, alignment residual, cloud/unknown coverage, date interval and method variance. Report detection limits and mark small changes as indeterminate.
4. Build pairwise GEE change layers (e.g. NDSI/NDWI difference, classified glacier/lake persistence/loss/gain) from the same approved date pair. Export rasters and polygons with the pair ID; do not rely on a visually attractive screenshot.
5. Validate one South Lhonak interval independently in QGIS/GIS against published values where method compatibility permits. Investigate material disagreement before extension.

**Exit gate G5:** at least one approved glacier and lake interval has reproduced metrics, uncertainty, validated change map, and an audit trail from published number to source scene.

**Practical tests**

```sh
python3 pipelines/geoai/measure_retreat.py --boundary-manifest <approved-manifest>
# Identical boundary pair -> zero change within tolerance.
# Mismatched CRS -> hard failure.
# An ignored/cloud terminus -> result marked indeterminate, not a numeric retreat.
```

### Phase 5 — extend to five sites and analyse patterns/vulnerability (10–20+ days)

**Do**

1. Resolve the remaining four site identities and repeat G2–G5; do not train them merely because a raster exists.
2. Assemble a tidy measurement table keyed by `site_id`, observation date, method/version and uncertainty. Use actual intervals rather than pretending each pair is one year apart.
3. Analyze temporal patterns: area/terminus rates, breakpoints, pre/post-event comparison, elevation-band loss, lake-growth co-change and data gaps. Normalize comparison where appropriate, but preserve absolute values.
4. Analyze spatial patterns: map retreat magnitude/rate, elevation/aspect/slope/debris/terminus-lake context and uncertainty.
5. Define a sensitivity-tested relative vulnerability index. Example components: normalized recent retreat rate, glacier–lake adjacency/change, low-elevation terminus fraction and data-quality penalty. Publish weights, normalization, missing-data rule and a sensitivity run with alternative weights. Do not call this a GLOF risk probability.
6. Have a domain reviewer verify the interpretation and limitations.

**Exit gate G6:** cross-site plots include only approved data; every map has uncertainty/provenance; the vulnerability index is reproducible, sensitivity-tested and plainly bounded.

### Phase 6 — publish the API, map products and reports (3–6 days)

**Do**

1. Add PostGIS migrations and import scripts that only ingest `released` manifest items. Keep asset metadata linked to the exact file hash and model/measurement run.
2. Build FastAPI read endpoints, OpenAPI tests and signed/controlled tile URLs. Enforce `release_status == released` at query time.
3. Publish approved COGs and vector/PMTiles assets. Verify map projection, legends, units and rendering at desktop/mobile widths.
4. Update the web client: date/time selector, side-by-side imagery/change slider, glacier and lake boundaries, uncertainty overlay, area/terminus charts, vulnerability map, provenance drawer, downloads and report export.
5. Add visible statuses: `candidate`, `reviewed`, `released`, `gap`, and `indeterminate`. Hide forecast/alert language because it is outside the accepted objectives.
6. Produce a research-release report: methods, sources, model results, measurements, limitations, full reproducibility commands and a frozen release manifest.

**Exit gate G7:** a reviewer can follow any displayed figure/metric backwards to released assets and code/configuration; API rejects non-released data; no UI text overstates GLOF risk or model validation.

## 5. Delivery order and realistic milestones

| Milestone | Outcome | Depends on | Evidence |
| --- | --- | --- | --- |
| M0 | Reproducible environment and verified contract | none | working geospatial test environment, source register, label policy |
| M1 | South Lhonak approved multi-date input | M0 | G2 passes |
| M2 | Reviewed glacier and lake references | M1 + human reviewer | G3 passes |
| M3 | Validated segmentation and reviewed dated boundaries | M2 | G4 passes |
| M4 | First real glacier/lake change result | M3 | G5 passes |
| M5 | Five-site patterns and bounded susceptibility analysis | M4 repeated per site | G6 passes |
| M6 | API-backed dashboard and research release | M5 | G7 passes |

The hard dependency is human review. Engineering can accelerate exports, validation, schemas and UI scaffolding, but it cannot manufacture independent glacier/lake truth or declare a candidate scene scientifically usable.

## 6. Immediate backlog (next 10 actions)

1. Repair the pinned pipeline environment so Rasterio-backed tests run, then record the exact interpreter/dependency version.
2. Run the authoritative readiness gate and preserve its current failures as the baseline.
3. Decide and document the 2016 policy (Level-1C versus starting the analytical SR series in 2017), then re-export/relabel affected records.
4. Version required source assets locally and complete their source-register entries.
5. Select and manually inspect three South Lhonak dates plus the 2023 event pair.
6. Run and record stable-terrain co-registration for all selected pairs; realign or reject failures.
7. Mark only reviewed scenes `quality_accepted`; leave all others as candidates/rejected.
8. Digitize and independently review glacier and lake masks for the accepted pilot dates.
9. Implement and test transparent glacier/lake baselines before training a neural network.
10. Implement measurement/change-map contracts and build the FastAPI/PostGIS schema in parallel, keeping it disconnected from unreleased research data.

## 7. Definition of done

The requested architecture is complete only when all of the following are demonstrably true:

- Objective 1: every included site/date has documented, quality-accepted multi-temporal Sentinel-2 input, preprocessing, provenance and alignment evidence.
- Objective 2: reproducible glacier (and architecture-required lake) delineation has independent held-out validation, uncertainty outputs and reviewed boundaries.
- Objective 3: approved dated boundaries yield reproducible area/terminus/lake changes and exported GEE change maps with uncertainty and unknown pixels retained.
- Objective 4: the multi-site spatial/temporal analysis and susceptibility index use only validated measurements and state their geographic/scientific limitations.
- Product architecture: released assets flow through object storage/PostGIS/FastAPI to the web UI; every displayed result resolves to a release manifest, source, method and review record.

Passing code tests alone is not enough. The final scientific gates require actual imagery inspection, independent label review and domain sign-off.
