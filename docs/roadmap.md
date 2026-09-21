> **Plan B takes precedence (21 September 2026).** Validated GeoAI delineation is a core research objective. Forecasting, scenarios and operational alerts are deferred. Legacy Phase 2 accuracy, approval and readiness claims are superseded and unverified. Historical inventory geometry is context, not dated independent truth. See [Plan B implementation status](planb-implementation.md).

# POC delivery plan

## Phase 0 — Research contract (1–2 days)

- Freeze the study boundary and intended dates.
- Create the data catalogue and source/licence register.
- Define a standard seasonal acquisition window and quality threshold.
- Set up local-only Earth Engine configuration and confirm the project can read the required collections.
- Choose the measurements to report and their exact methods.

**Output:** a versioned data manifest and methodology note.

## Phase 1 — Static evidence prototype (3–5 days)

- Prepare a small set of clean historical and pre-/post-event scenes.
- Create reviewed lake and glacier geometries for each chosen date.
- Produce terrain, slope, hillshade, and downstream-path layers.
- Build a static case-study page with map and change chart.

**Output:** a credible, inspectable South Lhonak story without live processing.

## Phase 2 — Interactive MVP (1–2 weeks)

- Add date selection, swipe/side-by-side comparison, overlays, and chart linking.
- Add 3D terrain mode and the evidence/hazard-context panel.
- Add metadata drawer and evidence-sheet export view.
- Test on desktop and mobile-width layouts.

**Output:** the demonstrable GlacierLens MVP.

## Phase 3 — Scientific review and hardening (3–5 days)

- Run geometry, metric, and event validation checks.
- Add uncertainty notes and provenance to every layer.
- Have a domain reviewer test interpretations and terminology.
- Freeze a reproducible tagged POC release.

**Output:** a paper/demo-ready case study.

## Decisions needed before building the application

The main product decisions are now settled: research-paper demonstration, trusted/inventory boundaries for the first release, Google Earth Engine available for the preparation pipeline, and a 2016–2026 timeline. The remaining implementation prerequisite is the local Earth Engine project configuration, which will be stored outside version control.
