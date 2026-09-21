# Next acquisition — 2 more pilot dates (Objective 1 → Objective 2)

**Why:** Plan B Phase 2 requires 3 comparable dates for pilot plumbing (not trend). Only 2025-11-29 exists; `data/catalog/planb/observations.json` documents 52 gaps. Two dates spanning available period (e.g., 2019-11-14 and 2022-11-03 from `data/catalog/south-lhonak.candidate-scenes.md`) will exercise alignment, feature grid reuse, and change mapping.

**Ready pipeline (no code change):**

```sh
# 1. Inventory (already shows 2016-24 candidates for south-lhonak)
.venv/bin/python pipelines/scripts/inventory_sentinel2.py --project YOUR_GEE_PROJECT_ID --manifest data/catalog/south-lhonak.manifest.json

# 2. Export two dates (uses COPERNICUS/S2_SR_HARMONIZED, SCL valid ≥0.65, single-date, SHA + transform recorded)
.venv/bin/python pipelines/scripts/prepare_site_evidence.py --project YOUR_GEE_PROJECT_ID --site-id south-lhonak --years 2019 2022

# 3. Promote to planb manifest (hash, transform, band_order, SCL dist) — append to data/catalog/planb/observations.json and re-run:
.venv/bin/python pipelines/geoai/prepare_features.py --manifest data/catalog/planb/observations.json --output-dir data/derived/planb/features --overwrite

# 4. Verify G2 again:
.venv/bin/python pipelines/scripts/audit_planb.py
cat data/derived/planb/quality/coverage_report.json
```

**Grid guard:** `prepare_features.py:site_grids` will `BLOCKED: grid mismatch` if second date has different CRS/transform/width/height — per `study-protocol.md:108` one grid per site.

**After 3 dates:** proceed to Phase 3 (`label-handbook.md` + `build_training_masks.py` 255 nodata) and Phase 4 (`train_segmentation.py` temporal ≤2021/>2022 split per `splits.json:1`).

