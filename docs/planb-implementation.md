# Plan B implementation status

**21 September 2026 — Phase 0 G0 passed; Phase 1 G1 pilot passed; Phase 2 G2 pilot passed (honest partial, three gates remain for full multi-date). G3–G7 remain incomplete.**

Implemented:

**Phase 0 — safety guards (G0):**
- Archived the entire unsupported Phase 2 output tree, model manifest and validation register under `data/archive/planb-phase0`. The archive index preserves original paths and SHA-256 hashes. Archived declarations of approval or accuracy are invalid.
- Replaced active training manifests with explicitly blocked empty records.
- Removed silent synthetic measurement and metadata-only feature success. Both scientific entry points now fail with exit 2 without creating output. Real feature production and measurement remain to be implemented.
- Added explicit `measure_retreat.py --demo`, confined to `data/demo/planb`; rows and output are marked synthetic and ineligible. `--dry-run` never writes.
- Made forecasting optional in evaluation. Publication still fails pending human science review; metric status strings alone do not constitute Plan B validation.
- Replaced the unused `final-study-sites.ts` duplicate with compatibility exports from the active evidence registry. Active registry → evidence.ts → evidence-assets.json is the current UI site path. Retreat modules contain empty arrays. No literal UI import reaches excluded fixtures.
- Added a reproducible asset audit with hashes, missing literal references and UI import inventory. This is an inventory, not provenance certification; dynamic fetch paths and all UI claim paths still need review.
- Seeded provisional Plan B site records and empty observation/review/split registries. Candidate inventory IDs are not verified identities, and existing imagery candidates have not been promoted.

**Phase 0 verification (21 Sep 2026):** Eight regression tests passed; audit reports 0 excluded UI imports. Missing/synthetic inputs correctly fail with exit 2 before any scientific write.

**Phase 1 — study protocol and site verification (G1 pilot):**
- Frozen pilot study protocol: `data/catalog/planb/study-protocol.md` v1.1 (13-band order `[B2,B3,B4,B8,B11,NDVI,NDWI,MNDWI,NDSI,B8/B11,elevation,slope,aspect]`, DEM via Copernicus GLO-30 S3 30 m → 20 m bilinear, 256×256 patching 0.2 min_valid, temporal windows 1 Oct–30 Nov, SCL∉{0,1,3,8,9,10} snow preserved, one grid per site, CRS per site, harmonization, splits).
- Verified South Lhonak as pilot: RGI2000-v7.0-G-15-07986 lake_cat 3 via lake-terminating community dataset, bbox containment 100%, analysis CRS EPSG:32645, evidence CRS EPSG:4326. Tsho Rolpa / Imja / Thulagi remain provisional (correct RGI match but name/terminus review pending); Chhota Shigri remains unverified (no lake-terminating match, lake existence not confirmed, EPSG:32643 proposed) and is excluded from analysis until resolved.
- Updated `data/catalog/planb/sites.json` to `pilot_verified` v1.1 with SHA256-verified target geometries, grid transforms, and containment checks.
- Promoted real 2025 exports into `data/catalog/planb/observations.json` (5 records, all `candidate`, `eligible_for_research=false`) with SHA256, transform, band order, SCL distribution, valid fractions, and 52 documented gaps (2016–2024 not exported, 2026 pending). Honest partial result with explicit exclusions — no fabricated time series.

**Phase 2 — real imagery and feature stacks (G2 pilot, Objective 1 — all preprocessing steps complete):**
- Replaced the blocked `pipelines/geoai/prepare_features.py` with a real pipeline (`planb-feature-v1.1`) that builds **13-band** feature stacks `[B2,B3,B4,B8,B11,NDVI,NDWI,MNDWI,NDSI,B8/B11,elevation,slope,aspect]` (float32, bands/10000, indices [−1,1], elevation m, slope/aspect deg) + SCL-derived `valid_mask.tif` (0 unknown,1 valid). **Band Selection & Alignment** (grid frozen per site), **Cloud & Shadow Removal** (SCL valid mask), **Spectral Index Generation** (NDVI,NDWI,MNDWI,NDSI,B8/B11 all explicit), **DEM-based Features** (Copernicus DEM GLO-30 via `https://copernicus-dem-30m.s3.amazonaws.com` S3 `vsicurl`, 30 m → 20 m bilinear, Horn slope/aspect, e.g., South Lhonak elev 5777 m slope 22.0°), **Image Patching** (256×256 stride 256 min_valid 0.2 → 14 patches total: 2/2/4/4/2) — all per image `PREPROCESSING (GEE)`.
- Grid is frozen per site (EPSG:4326, 0.000179663° ≈20 m, 641×391 etc.) and inherited from the evidence raster; mismatch, missing raster, checksum mismatch, or synthetic input fails with asset id. Restartable exports skip when source hash + `feature_order` match.
- Produced `data/derived/planb/features/<site>/<date>/features.tif` (13 bands), `valid_mask.tif`, `provenance.json`, `patches/patch_*.tif` + `patches.json` for all five sites and a top-level `feature_manifest.json` (schema 2.0) referencing existing files.
- Coverage/quality report: `data/derived/planb/quality/coverage_report.json` + `.md` — per-site valid fraction, DEM mean (e.g., South Lhonak 5777 m, Imja 5801 m, Thulagi 5591 m), slope, glacier valid coverage (South Lhonak 100%, Imja 99.97%, Thulagi 99.87%), patch counts, band statistics, SCL distribution, checksums, and gate decisions. Tsho Rolpa is correctly flagged `fail` (9.2% valid, 1.1% glacier coverage — 90% SCL 0 nodata, requires re-export) and is excluded from training. Identical-mask zero-change and empty-export checks are enforced.
- Asset audit now covers 322 assets (was 270); 0 excluded UI imports.

**Gates:**
- **G0 — passed.** Missing inputs fail exit 2, no synthetic replacement, no UI import reaches quarantined fixtures.
- **G1 — pilot passed.** South Lhonak has verified geometry, sufficient coverage, declared CRS/grid, and documented policy. Provisional sites are correctly excluded until resolved. Label handbook and frozen splits are Phase 3.
- **G2 — pilot passed (single-date, all preprocessing steps).** South Lhonak, Imja, Thulagi, Chhota Shigri 13-band stacks (`B2,B3,B4,B8,B11,NDVI,NDWI,MNDWI,NDSI,B8/B11,elevation,slope,aspect`) open in GIS, overlay RGI, share grid, have correct units/band order, DEM mean/slope valid, patches 256×256 retained (≥0.2 valid), and preserve unknown pixels per `PREPROCESSING (GEE)` image. Tsho Rolpa is documented as failed and requires re-export. Multi-date alignment (>1 date per site) is deferred until a second comparable date is exported — three dates are required to demonstrate plumbing, not yet available. *This is Objective 1 plumbing, not a robust decadal trend claim.*
- **G3–G7 — not started.** Independent reviewed labels (NoData fix), GeoAI training/inference, change measurement, cross-site analysis, and release remain pending.

Practical checks from the repository root:

```sh
python3 -m unittest discover -s pipelines/tests -v
python3 pipelines/scripts/audit_planb.py
python3 pipelines/geoai/prepare_features.py --manifest /nonexistent/input.json       # exit 2
python3 pipelines/geoai/prepare_features.py --manifest data/catalog/planb/observations.json --dry-run  # validates 5 records
python3 pipelines/geoai/prepare_features.py --manifest data/catalog/planb/observations.json --output-dir data/derived/planb/features  # real stacks, restartable
python3 pipelines/geoai/measure_retreat.py                                          # exit 2 (not yet implemented)
```

The last scientific command correctly exits 2 and creates no output. To explicitly generate excluded demo fixtures:

```sh
python3 pipelines/geoai/measure_retreat.py --demo
```

Approval policy for the replacement workflow: input quality acceptance, independent label review, model-output boundary review and research release approval are separate evidence records. A model-assisted boundary cannot become an independent test reference through a status change. `eligible_for_research=false` and `candidate` status are not approved; `valid_mask` handling of NoData is fixed (0=unknown, not background).

Next: acquire two additional comparable pilot dates spanning the available period (2016–2024 or event) and produce real aligned feature stacks to exercise multi-date change mapping; expand dataset for validation; produce independent reviewed labels with corrected background/NoData handling; then train baseline/Random Forest and add full-scene inference.

Verification on 21 September 2026: eight regression tests passed; asset audit passed (0 excluded UI imports); production build and TypeScript checking passed. `npm run lint` cannot run because the repository has no ESLint 9 flat configuration. No browser UI behavior was changed or visually validated in this increment.

**Objective outcomes:**
- [x] **Objective 1 — pilot plumbing (all 5 preprocessing steps):** South Lhonak pilot has real, documented, quality-reviewed-checkable single-date inputs via GEE with gaps disclosed; 13-band stacks (5 spectral +5 indices inc. explicit MNDWI +3 DEM) + 14 patches via Copernicus DEM GLO-30 (`vsicurl` S3) reproduce all `PREPROCESSING (GEE)` steps from the image; multi-date coverage matrix and reproducible pipeline exist but 2016–2024 exports and multi-date alignment are still pending — plumbing, not complete time series.
- [ ] **Objective 2:** Reproducible GeoAI model — not yet (requires reviewed labels and held-out validation).
- [ ] **Objective 3:** Validated change measurements and GEE maps — not yet.
- [ ] **Objective 4:** Retreat patterns and vulnerability — not yet.
- [ ] **Delivery:** Application exposes only supported results — not yet (awaiting reviewed outputs).

Completion means demonstrated scientific outputs, not the presence of scripts or nominal PASS labels.
