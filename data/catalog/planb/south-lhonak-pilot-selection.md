# South Lhonak pilot selection — pending reviewer acceptance

**Decision date:** 22 September 2026  
**Purpose:** lock the candidate dates to be inspected before any `quality_accepted` status, feature production for research, alignment result, label, training, or measurement is created.

## Annual SR pilot dates

| Role | Selected observation | Why selected | Current status |
| --- | --- | --- | --- |
| Early training-era candidate | `2017-11-19` | First available annual SR candidate after the frozen 2017 SR-series start; 99.70% local valid-pixel fraction. | `candidate`; exported locally; reviewer decision required. |
| Mid-series training-era candidate | `2019-10-15` | Same annual window, 99.83% local valid-pixel fraction; gives a two-year baseline interval. | `candidate`; exported locally; reviewer decision required. |
| Chronological holdout candidate | `2022-11-30` | Same annual window, effectively 100% local valid-pixel fraction; lies after the frozen <=2021 training / >=2022 test split. | `candidate`; exported locally; reviewer decision required. |

The 2016-11-16 record is explicitly excluded from the SR analytical series. It may remain visible as contextual imagery, but cannot enter features, labels, training, change or measurement products.

## Isolated 2023 event pair

| Role | Candidate acquisition | Candidate scene from inventory | Required action |
| --- | --- | --- | --- |
| Pre-event | `2023-09-16` | `20230916T043709...T45RXM` | Export a dedicated event-window SR asset, then review it. |
| Post-event | `2023-10-24` | `20231024T044841...T45RXM` | Export a dedicated event-window SR asset, then review it. |

The event pair is not part of the annual trend or segmentation split. It is only used for a separately labelled pre/post-event change product after both observations are accepted and aligned.

## Reviewer checklist (your task)

For every selected annual date and each event date after export, record one of `quality_accepted` or `rejected` in `data/catalog/planb/reviews.json`, with a reason and reviewer/date. Confirm:

1. The glacier terminus is visible and not obscured by cloud, cloud shadow or unresolvable seasonal snow.
2. The lake edge is visible enough for a defensible shoreline label.
3. Debris-covered glacier extent is interpretable against the imagery/terrain context.
4. Apparent cloud/SCL classifications are credible at the terminus rather than only across the full study bbox.
5. The scene is appropriate for the stated annual or event comparison.

Do not mark a record accepted merely because its aggregate valid-pixel fraction is high.

## Co-registration decision (implementation-owned)

After at least two annual records are reviewer-accepted, measure each later annual scene against `2017-11-19` on a stable-terrain mask that excludes the RGI glacier footprint, South Lhonak Lake, mapped shadows/clouds, and moving moraine/debris. The stable mask is an explicit reviewed input and must contain at least 256 pixels.

Use B4 phase correlation, record row/column shift and residual in `data/catalog/planb/alignment.json`, and accept only residuals <=0.5 pixel. A failed pair is not resampled silently: it is either corrected in a separately versioned registration run and remeasured, or excluded. The event pair is aligned separately and never used to justify the annual series.
