# South Lhonak provisional change analysis

**Status:** provisional owner-approved geometry; not independently reviewed and not suitable for model training, evaluation, publication-grade measurement, or GLOF prediction.

## Date measurements

| Date | Draft glacier area (km²) | Candidate lake area (km²) |
| --- | ---: | ---: |
| 2017-11-19 | 12.802 | 1.150 |
| 2019-10-15 | 12.594 | 1.359 |
| 2022-11-30 | 12.531 | 1.713 |

## Interval changes

| Interval | Draft glacier change (km²) | Candidate lake change (km²) |
| --- | ---: | ---: |
| 2017-11-19 → 2019-10-15 | -0.208 | +0.209 |
| 2019-10-15 → 2022-11-30 | -0.063 | +0.354 |

## Interpretation guardrails

- Glacier values come from the project-owner-approved drafts, which began from an RGI 2000 reference outline minus the date-specific lake candidate.
- Lake values are spectral candidates, not reviewed shorelines. Shadow, ice, and turbid water can alter them.
- The area trend is therefore a **workflow demonstration**, not a defensible observed retreat rate.
- Terminus retreat, elevation-band change, risk ranking, and GeoAI model training are deliberately not computed from this package.

## Files

- `measurements.csv` — date and interval tables for charts.
- `summary.json` — machine-readable provenance and measurements.
- `2017-11-19_to_2019-10-15-change.geojson` and `2019-10-15_to_2022-11-30-change.geojson` — glacier/lake gain and loss polygons for GIS display.
