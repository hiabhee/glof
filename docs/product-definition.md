# Product definition and MVP

## The problem

Satellite imagery, inventories, terrain data, and published GLOF studies are usually explored in separate tools. This makes it hard to communicate a connected, evidence-based explanation of how glacier retreat, lake growth, terrain, and downstream exposure relate.

## What we are making

GlacierLens is a browser-based 3D Himalayan explorer. A user chooses a glacier lake, moves through time, and sees satellite imagery, glacier and lake boundaries, terrain, measured change, and the downstream context in one place.

The product's central question is:

> What changed at this glacier–lake system, what evidence supports that conclusion, and why does the site warrant attention?

## Final study scope

The final release is intentionally limited to **five lake–glacier systems**. South Lhonak is the evidence-ready anchor case; the other four are admitted only after the same provenance and quality gates pass:

1. South Lhonak Lake — South Lhonak Glacier (India)
2. Tsho Rolpa — Tsho Rolpa Glacier (Nepal)
3. Imja Tsho — Imja Glacier (Nepal)
4. Thulagi Lake — Thulagi Glacier (Nepal)
5. Chhota Shigri Lake — Chhota Shigri Glacier (India)

The registry may contain intake records before their imagery and boundaries are approved, but the explorer must never imply that an intake record has the same evidence coverage as South Lhonak.

## First study site

| Item | Decision |
| --- | --- |
| Lake | South Lhonak Lake |
| Associated glacier | South Lhonak Glacier |
| Location | North Sikkim, India; approximate study centre 27.9128° N, 88.1967° E |
| Narrative | Long-term retreat and lake expansion, then the 4 October 2023 GLOF |
| Product framing | Retrospective analysis and visual evidence explorer |

South Lhonak is chosen because it has published pre-event hazard work, clear satellite-visible change, and a documented outburst. This makes it suitable for validation; it must not be described as a current real-time warning product.

## Primary users

1. **Researcher / faculty reviewer** — inspect evidence, methodology, and limitations.
2. **Student analyst** — compare satellite dates and interpret measured change.
3. **Public or policy audience** — understand the spatial relationship between glacier, lake, terrain, and exposed valley.

## POC / MVP boundary

### In scope

- One curated site: South Lhonak Lake and South Lhonak Glacier.
- Annual observations from 2016–2025 plus the latest quality-approved 2026 observation; September/October 2023 are dedicated event states.
- A 2D map with an optional 3D terrain/globe view.
- A small, cloud-screened set of satellite scenes or seasonal composites.
- Timeline states spanning historical change and the 2023 event.
- Lake and glacier boundary overlays for selected dates.
- Trusted published or inventory boundaries only. GeoAI outputs are deliberately deferred to a later, separately labelled comparison layer.
- Derived indicators: lake area, glacier area or terminus change, lake–glacier distance where supportable, elevation, slope, and downstream flow path.
- A transparent hazard-context panel with source, date, method, and confidence for every shown value.
- Pre-event versus post-event comparison and a shareable case-study view.

### Explicitly out of scope for the MVP

- Real-time monitoring, alerts, evacuation advice, or forecasting.
- A claim that a model can predict a GLOF.
- Automatic analysis for every Himalayan lake.
- Fully automated glacier/lake segmentation without human quality review.
- Hydrodynamic flood-depth modelling.
- Individual-level exposure or personal data.

## Definition of done

The MVP is successful when a user can complete this sequence without interpretation from the development team:

1. Open South Lhonak.
2. Scrub the timeline from an early reference year to September 2023 and then post-event imagery.
3. See the lake and glacier boundaries change with the selected date.
4. Read the measured change and its provenance.
5. Turn on terrain and downstream context.
6. Understand the documented event, the evidence used, and the limits of the analysis.

## Product principles

- **Evidence before aesthetics:** every number and overlay has provenance.
- **Interpretability before a single score:** show contributing indicators rather than a black-box risk label.
- **Curated before global:** establish scientific credibility at one site before scaling.
- **Uncertainty is visible:** clouds, seasonal snow, date gaps, and uncertain delineations are part of the result.
- **Scale by configuration:** adding a future lake must be data/configuration work, not a copy of application code.
