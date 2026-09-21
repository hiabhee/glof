# Plan B Label Handbook — Glacier Extent Delineation

**Version:** 1.0 — 21 September 2026  
**Protocol:** `data/catalog/planb/study-protocol.md` v1.1 (13-band stacks, SCL valid mask)  
**Status:** Frozen for pilot training; applies to independent reviewed labels (G3).

This handbook prevents historical inventory outlines or model predictions from becoming training labels. Every training/test label must trace to a dated observation and an actual review.

## 1. Label codes (per mask GeoTIFF, uint8, nodata=255)

| Value | Meaning | Source | Used in training? |
|---|---|---|---|
| 0 | Background (rock, vegetation, moraine, water, seasonal snow outside glacier) | Analyst delineation + valid_mask | Yes (negative class) |
| 1 | Glacier (clean ice + debris-covered ice + connected accumulation area) | Analyst delineation on dated Sentinel-2 + DEM hillshade | Yes (positive class) |
| 255 | Ignored / invalid (cloud, cloud shadow, saturated/defective, cirrus, SCL 0/1/3/8/9/10, DEM void, snow-ambiguous zone flagged unknown) | `valid_mask.tif` (SCL rule) + manual ambiguous flag | No — excluded via `train_segmentation.py:read_scene()` |

Setting NoData to `0` is prohibited — it conflates background with missing data. `build_training_masks.py:write_mask()` now writes `nodata=255` and composites `valid_mask` (SCL-derived) onto the rasterized glacier polygon.

## 2. Glacier extent definition (consistent per §2 of study-protocol)

- **Include 1:** clean ice, debris-covered ice morphologically part of glacier body, connected accumulation zone. Debris thickness >0 is included if flow features connect.
- **Background 0:** bedrock, vegetated moraine, proglacial lake water (unless calving front), seasonal snow patch <0.01 km² disconnected from accumulation, supraglacial lake not spanning terminus.
- **Ignored 255:** SCL cloud/shadow/nodata; cirrus; scene edge; area where seasonal snow makes ice vs snow indistinguishable (record ambiguous polygon per observation with reason `snow-ambiguous`).
- **Lake water:** separate optional layer, not part of glacier mask. Glacier–lake contact line is measured from independent lake mask (candidate `sentinel2-water-baseline`, not reviewed shoreline).

## 3. Adjoining branches

If RGI divides a glacier (e.g., Imja–Lhotse Shar RGI 15-06763 is one complex), keep that complex as one unit. Do not split a shared accumulation divide unless RGI does. Choice is frozen per site before labeling and recorded in `reviews.json` `label_definition`.

## 4. Delineation workflow

1. Open dated `features.tif` + `valid_mask.tif` + DEM hillshade in GIS (QGIS) at 1:10k.
2. Overlay historical RGI outline (`historical_baseline`, not truth) and candidate lake polygon for context only.
3. Digitize dated glacier boundary as single polygon GeoJSON `EPSG:4326` (source CRS per `sites.json`), include elevation/slope context, handle debris via texture + DEM.
4. Flag ambiguous debris/terminus segment with `reviewer` comment `ambiguous: debris/shadow/snow`.
5. Independent review: second analyst checks 100% of termini + 20% random tiles; disagreement recorded as `review_notes` and `reviewer2` fields.

## 5. Review and provenance

Each `reviews.json` record requires:

```
site_id, observation_date, feature_asset, reviewed_boundary_asset (GeoJSON),
boundary_crs, boundary_source="Analyst delineation against dated Sentinel-2 scene + DEM hillshade",
review_status="approved_reviewed", reviewer, reviewed_at (ISO), method, ambiguous_areas, limitations, label_definition, split
```

Never invent reviewer sign-off. Test labels must be independent — annotator must not copy the prediction being evaluated (`planB.md` §3/§4). Model-assisted correction is allowed only as `boundary_reviewed` (separate from `label_reviewed` test reference).

## 6. Grid and leakage guard

- Vector is projected to feature CRS (`EPSG:4326`, transform from `sites.json:1`) via `rasterio.warp.transform_geom`, then rasterized `all_touched=False`, `fill=0`, 1=glacier, then `valid==0 → 255`.
- Partition by **scene and glacier** per frozen split (`splits.json:1`) — all patches/tiles from same acquisition stay together. No pixel-level random split.

## 7. Quality gates for G3

- Every label traces to `observation_date` + `scene_id` + reviewer + dated imagery; `Unknown` (255) does not enter either class.
- Automated check: no source acquisition appears in both train/test (share `scene_id` or date).
- `build_training_masks.py --reviews data/catalog/reviewed-glacier-masks.json` will `BLOCKED` if any of the above fails.

## 8. Current pilot gaps

As of 21 Sep 2026, no `approved_reviewed` labels exist — `reviews.json` is `pending`. The `reviewed-glacier-masks.example.json` is a template only. Next work: digitize South Lhonak 2025-11-29 plus two additional comparable dates once exported.

