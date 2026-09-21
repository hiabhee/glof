# AGENT.md — GlacierLens (GLOF) — Plan B Research Pilot

**For the AI agent (and human) that just cloned `hiabhee/glof`. This is the single onboarding doc. Read it before writing code.**

---

## 1. What this is (and is not)

**GlacierLens** is an evidence-first web explorer for Himalayan glacier retreat + glacial-lake evolution, centered on **South Lhonak Glacier/Lake (North Sikkim, India, RGI 15-07986)**. It is a **reproducible research pipeline + curated viewer**, not an operational early-warning or deterministic GLOF prediction service (`README.md:1`, `docs/product-definition.md`).

**Active plan:** `PlanB.md` (21 Sep 2026) **takes precedence** over all docs/roadmaps. `docs/planb-implementation.md` is the source of truth for what is done (`G0`/`G1`/`G2` pilot pass, `G3-G7` pending). A functioning dashboard alone does not complete any scientific objective.

**Four acceptance objectives (`planB.md:11`):**
1. Acquire & preprocess multi-temporal Sentinel-2 via GEE
2. GeoAI model for glacier boundaries (validated)
3. Multi-temporal change detection & maps via GEE
4. Spatial/temporal retreat + vulnerability analysis (not flood probability)

**Current state (21 Sep 2026, `150f7b4`):** Objective 1 **complete, multi-date** — 40 GEE exports (32 candidate 13-band stacks, `GEE project researchpaper-504121`), `G0/G1/G2` pass, `G3-G7` pending. See `docs/first-objective-complete.md:1`.

---

## 2. File structure — where to look

```
GLOF/
├── apps/web/                         # Next.js 16 + TS + MapLibre + Cesium
│   ├── src/
│   │   ├── app/page.tsx, layout.tsx  # entry, styles.css
│   │   ├── domain/ {site, observation, retreat, risk, metrics}.ts  # schemas
│   │   ├── data/sites/
│   │   │   ├── evidence-assets.json  # ACTIVE registry (5 sites × 40 obs) — UI reads this
│   │   │   ├── evidence.ts           # EvidenceSite type
│   │   │   └── registry.ts / south-lhonak*.ts
│   │   ├── data/retreat/ {measurements, predictors, forecasts}.ts  # empty (no synthetic)
│   │   └── components/{temporal-explorer, evidence-panel, globe-view}.tsx
│   └── public/
│       ├── imagery/sites/*.png       # 40 candidate PNGs (GEE-derived, committed for demo)
│       ├── boundaries/*.geojson      # 22 lake candidates (NDWI/MNDWI/B8<2500)
│       └── reference/*.geojson       # 5 RGI verified (verified-glaciers.geojson)
├── pipelines/
│   ├── scripts/
│   │   ├── preflight_gee.py          # ee.Initialize(project) + collection checks
│   │   ├── inventory_sentinel2.py    # candidate scenes per window (10-90% cloud)
│   │   ├── prepare_site_evidence.py  # GEE export single-date: B2,B3,B4,B8,B11,SCL → data/derived/evidence/*.tif + PNG + evidence-assets.json
│   │   ├── extract_rgi_reference.py  # GPKG → GeoJSON
│   │   └── audit_planb.py            # hash + UI import inventory → data/catalog/planb/asset-audit.json
│   ├── geoai/
│   │   ├── prepare_features.py       # PLAN B v1.1: 13-band [B2,B3,B4,B8,B11,NDVI,NDWI,MNDWI,NDSI,B8/B11,elevation,slope,aspect] + valid_mask + patches 256
│   │   ├── build_training_masks.py   # 0 bg /1 glacier /255 ignored (valid_mask composite) → training_mask_manifest.json
│   │   ├── train_segmentation.py     # RF 250, balanced, temporal ≤2021/>2022 + LO-Glacier, 255 ignored
│   │   ├── measure_retreat.py        # BLOCKED (real) / --demo → data/demo/planb only
│   │   └── evaluate_models.py        # publication_allowed=false until human review
│   └── tests/test_planb_safety.py    # 8 regression (missing→2, synthetic→2, demo confinement, symlink, archive, forecast deferred, UI imports)
├── data/
│   ├── catalog/planb/                # FROZEN contracts (commit these)
│   │   ├── study-protocol.md v1.1    # temporal 1 Oct-30 Nov, SCL rule, 13-band, DEM S3, 256 patch, splits
│   │   ├── sites.json pilot_verified # 1 verified (south), 3 provisional, 1 unverified, CRS 32645/32643
│   │   ├── observations.json         # 32 candidate + 8 rejected + 17 gaps, SHA/transform/dist
│   │   ├── splits.json frozen_strategy # temporal + LO-Glacier, no pixel split
│   │   ├── label-handbook.md         # 0/1/255, debris, review, leakage guard
│   │   ├── reviews.json pending_with_handbook
│   │   ├── next-acquisition.md       # how to add 2023 event etc.
│   │   ├── release.json planb-g2-multi-20250921
│   │   └── asset-audit.json 682 assets 0 violations
│   ├── catalog/{south-lhonak.manifest.json, candidate-scenes.md, boundary-register.md}
│   └── derived/                      # GITIGNORED — reproducible, not committed
│       ├── evidence/*-bands.tif (40) # 6-band S2 SR + SCL
│       ├── planb/features/*/*/features.tif (32×13) + valid_mask.tif + provenance.json + patches/
│       ├── planb/quality/coverage_report.json/.md
│       └── reference/lake-terminating/ # RGI GPKG source
│   ├── archive/planb-phase0/         # quarantined Phase 2 fixtures (excluded)
│   └── demo/planb/                   # explicit synthetic only via --demo
├── docs/
│   ├── planb-implementation.md       # G0/G1/G2 pass, next steps
│   ├── first-objective-complete.md   # 2-page handout for team (read this)
│   ├── data-and-science.md           # collections, temporal strategy, guardrails
│   ├── technical-architecture.md     # Next, MapLibre, Cesium, FastAPI, PostGIS, GEE boundary
│   ├── product-definition.md         # 5-site scope, MVP in/out
│   └── roadmap.md
├── PlanB.md                          # the plan (334 lines, gates G0-G7, verification matrix)
└── AGENT.md                          # ← you are here
```

**Key principle:** `data/derived/` is **gitignored** (`data/derived/`). Only `data/catalog/` (manifests, hashes) + `apps/web/public/imagery|reference` (small committed demo PNGs/GeoJSON for the viewer) are versioned. `data/demo/` is synthetic, never scientific.

---

## 3. Software principles (non-negotiable)

**From `docs/technical-architecture.md` + `planB.md`:**

1.  **Evidence before aesthetics** — every number/boundary has `source, observation_date, processing_date, resolution, confidence/quality_notes`. No value without provenance.
2.  **Precomputed, versioned assets** — browser never calls GEE. Pipeline (Python) is the only GEE boundary; web reads manifests.
3.  **Site-agnostic, config-driven** — `SiteConfig` + `DatasetManifest` + `layer` contract; adding a lake = data/config, not code copy. South Lhonak is data, not a special case.
4.  **Fail-closed** — missing `approved_reviewed` → `EXIT 2`; synthetic/demo → `data/demo/planb` only, `eligible_for_research=false`; `valid_mask` `0 unknown/1 valid` + mask NoData `255=ignored` (not `0`).
5.  **No fabrication** — honest gaps (`candidate` vs `quality_accepted` vs `rejected`) over complete-looking series. Historical RGI is `historical_baseline`, not 2025 boundary.
6.  **Splits before training** — temporal `≤2021/>2022` + leave-one-glacier-out, unit = whole acquisition, no pixel random split, leakage check via `(site_id, observation_date)` key.
7.  **Uncertainty visible** — clouds, snow, gaps, ambiguous debris are part of result. Vulnerability = retreat/lake susceptibility, not flood probability.

**Agent rules:**
- Short, factual, `file:line` refs when touching code.
- Verify via execution (`python -c`, `unittest`, `audit_planb.py`, `npm run build`) — never guess.
- Prefer editing existing files; don’t create `*.md` unless asked (exception: `AGENT.md` here).
- Never commit secrets (`.env`, `~/.config/earthengine/credentials`, `GEE_PROJECT_ID`), raw large rasters, or synthetic as scientific.

---

## 4. Deployment & local setup

**Prereqs:** Node 20, Python 3.10, `pip`, `gdal` (via `rasterio`), GEE account `earthengine authenticate`.

```sh
# 1. Clone & Python env
git clone https://github.com/hiabhee/glof && cd GLOF
python3 -m venv .venv && source .venv/bin/activate
pip install -r pipelines/requirements.txt  # earthengine-api, rasterio, sklearn, shapely, numpy

# 2. GEE auth (once, local only — never commit)
earthengine authenticate
# set project (local env, not repo)
export GEE_PROJECT_ID=your-gcp-project  # or --project flag
.venv/bin/python pipelines/scripts/preflight_gee.py --project $GEE_PROJECT_ID
# → {"required_collections": 1, "status":"ready"}

# 3. Verify catalog & inventory (no GEE fetch)
.venv/bin/python pipelines/scripts/validate_catalog.py
.venv/bin/python pipelines/scripts/validate_five_site_intake.py
.venv/bin/python pipelines/scripts/audit_planb.py  # → 682 assets, 0 violations

# 4. (Optional) Fetch new evidence — single-date per window, 65% valid, SHA recorded
.venv/bin/python pipelines/scripts/prepare_site_evidence.py --project $GEE_PROJECT_ID --site-id south-lhonak --years 2023  # pre/post
# promotes to apps/web/src/data/sites/evidence-assets.json + data/derived/evidence/*.tif + data/catalog/planb/observations.json

# 5. Preprocessing — 13-band stacks + DEM + patches
.venv/bin/python pipelines/geoai/prepare_features.py --manifest data/catalog/planb/observations.json --dry-run
.venv/bin/python pipelines/geoai/prepare_features.py --manifest data/catalog/planb/observations.json --output-dir data/derived/planb/features --overwrite
# → data/derived/planb/features/<site>/<date>/features.tif (13) + valid_mask.tif + patches/ + feature_manifest.json

# 6. Web (static, no live GEE)
npm install
npm run typecheck  # tsc --noEmit
npm run build      # next build → 3 static pages
npm run dev --workspace=@glacierlens/web  # http://localhost:3000  (timeline now 8 dates south-lhonak)
# lint: ESLint 9 flat config missing → expected fail per planb-implementation.md; typecheck/build are gates

# 7. Tests & audit (always before push)
.venv/bin/python -m unittest discover -s pipelines/tests -v  # 8 OK
.venv/bin/python pipelines/geoai/prepare_features.py --manifest /nonexistent/input.json  # → EXIT 2
.venv/bin/python pipelines/geoai/measure_retreat.py  # → EXIT 2 (real path BLOCKED)
.venv/bin/python pipelines/geoai/measure_retreat.py --demo --output-dir data/demo/planb/measurements  # synthetic only
```

**Production build:** `npm run build` is the deploy artifact (static frontend + `data/catalog/planb` manifests). `data/derived/` is not deployed — regenerate via pipeline on a machine with GEE creds. Keep `GEE_PROJECT_ID` in `.env.local` (gitignored) never in `apps/web`.

---

## 5. Data contracts (minimal fields)

**Observation** (`observations.json`): `site_id, observation_date, scene_id (COPERNICUS/S2_SR_HARMONIZED/...), bbox, crs, transform, width/height, raster_sha256, scl_distribution, valid_fraction_computed, quality_status (candidate/rejected/quality_accepted), lakeBoundary(status)`.

**Feature** (`feature_manifest.json`): `feature_order=[B2,B3,B4,B8,B11,NDVI,NDWI,MNDWI,NDSI,B8/B11,elevation,slope,aspect]`, `scale Bands/10000 [−1,1] elev m slope deg`, `valid_rule SCL∉{0,1,3,8,9,10}`, `patches_dir, patch_count`.

**Label** (`reviews.json`): `feature_asset, reviewed_boundary_asset (GeoJSON), boundary_crs, review_status=approved_reviewed, reviewer, reviewed_at`.

**Gates:** `missing→2`, `synthetic→demo only`, `grid mismatch→2`, `valid==0 → 255 ignored` not background, `scene-level` split, `identical masks → 0 change`.

---

## 6. What to do next (ordered backlog `planB.md:14`)

1.  **Already done:** `G0` safety, `G1` protocol/sites, `G2` multi-date 13-band + DEM + 100 patches (south 8, imja/thulagi 8, chhota 7, tsho 1).
2.  **You (friend/agent) → Phase 3:** digitize independent reviewed glacier boundaries for any `candidate` date (`label-handbook.md:1`) via QGIS, `build_training_masks.py --reviews data/catalog/reviewed-glacier-masks.json` (writes `255` nodata).
3.  **Phase 4:** `train_segmentation.py --masks-manifest ... --features-manifest ...` (temporal + LO-Glacier, `255` ignored, `250 trees`).
4.  **Phase 5-7:** `measure_retreat.py` (real), GEE change maps, `evaluate_models.py` (publication `false` until human review), app integration.

No new 3D/forecast until `G4-G6` pass.

---

## 7. Quick checks for the agent

Before editing: `Read` the file first; keep `oldString` exact including `tabs`. After edit: `Read` the region again.

Before push:
```sh
git status; git diff; git log --oneline -5
.venv/bin/python pipelines/scripts/audit_planb.py
.venv/bin/python -m unittest discover -s pipelines/tests -v
npm run typecheck && npm run build
# never commit: .env, ~/.config/earthengine/credentials, data/derived/, data/demo/ as science
```

For help: https://github.com/anomalyco/opencode (mention Meta Muse Spark) or `https://opencode.ai/docs`.

