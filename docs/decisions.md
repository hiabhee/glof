# Architecture decisions

## ADR-001 — Build a research evidence explorer, not an alert system

**Status:** Accepted

GlacierLens communicates reviewed historical evidence for glacier retreat, lake change, terrain, and documented GLOF context. It does not issue real-time alerts, forecast failure, or provide evacuation guidance.

## ADR-002 — South Lhonak is the first configuration, not a one-off build

**Status:** Accepted

The POC is configured for South Lhonak Lake and South Lhonak Glacier. Feature modules, APIs, layer definitions, metric schemas, and screen layouts must support arbitrary site IDs. A new site is added with its configuration, assets, citations, and validation—not duplicated UI code.

## ADR-003 — Use curated, trusted boundaries in the MVP

**Status:** Accepted

Published or inventory geometries are the authoritative boundary sources for the MVP. Any future GeoAI-derived geometry is stored as a separate method/version, visually labelled as model output, and validated before it can appear alongside reference boundaries.

## ADR-004 — Prepare data through a reproducible pipeline; serve static approved outputs

**Status:** Accepted

The Earth Engine-enabled pipeline obtains and processes source data. The user-facing product reads versioned outputs and metadata. This protects reproducibility, keeps credentials private, reduces runtime complexity, and supports deployment at scale.

## ADR-005 — Timeline is 2016–2026, contingent on imagery quality

**Status:** Accepted

Annual observations are selected from a consistent seasonal window where possible. The 2023 event receives dedicated pre-/post-event states. The 2026 state means the most recent reviewed observation available during 2026, not a fabricated or low-quality annual snapshot.

## ADR-006 — Polish is a functional requirement

**Status:** Accepted

The paper-demonstration interface must be calm, legible, source-forward, and presentation ready. 3D is used to explain terrain and spatial relationships; the core analytical experience remains readable in 2D and in exported figures.
