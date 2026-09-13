# Data, scientific guardrails, and validation

## Candidate data inputs

| Need | Candidate source | POC use |
| --- | --- | --- |
| Glacier reference outlines | Randolph Glacier Inventory (RGI) / GLIMS | Baseline glacier identity and reference geometry. |
| Optical imagery | Sentinel-2 harmonized surface reflectance; Landsat for longer history | Curated snow/ice-season composites and visual comparison. |
| Cloud-robust event imagery | Sentinel-1 SAR | Optional pre-/post-event comparison. |
| Terrain | Copernicus DEM or another documented DEM | Elevation, slope, hillshade, flow direction. |
| Lake reference inventory | ICIMOD and published regional inventories | Cross-check and validation reference. |
| Event and hazard evidence | Peer-reviewed studies and official agency material | Interpretation of the 2023 event and site context. |

## Temporal strategy: 2016–2026

Use an annual, comparable late-post-monsoon or early-winter observation window where feasible, after checking cloud, shadow, seasonal snow, and lake visibility. Retain special states for **late September 2023** (pre-event) and **early October 2023** (post-event). The 2026 observation is only included once a suitable scene/composite exists and passes review; it is not a mandatory fixed-date scene.

For each year, the catalogue must record the selected acquisition or compositing interval and why it was chosen. Comparisons across inconsistent seasons must carry an explicit caveat.

Because the timeline begins in 2016, the initial visual timeline uses the harmonized Sentinel-2 Level-1C collection, which is available from 2015. This keeps the 10 m optical view consistent across the POC period. The analyst must disclose the Level-1C choice in the interface; it is a visual and change-context layer, not an unqualified surface-reflectance analysis claim. Sentinel-2 surface reflectance can be added as a separately labelled analysis layer from 2017 onward.

## What is certain enough to build around

- South Lhonak Lake is associated with South Lhonak Glacier in North Sikkim.
- The lake underwent a documented GLOF in October 2023.
- Published research establishes long-term lake growth and glacier retreat at the site.
- Satellite imagery and DEMs can support visualisation of the glacier–lake–valley system.

## What must be treated as analysis, not fact

- Exact lake boundaries vary with date, sensor, shadow, snow, turbidity, and delineation method.
- Glacier boundary and terminus estimates are uncertain, especially for debris-covered ice.
- A lake-growth trend is not a prediction of an outburst.
- Terrain proxies alone cannot establish dam stability or precise flood magnitude.
- Downstream exposure must be sourced and dated; it must not be inferred from a basemap alone.

## Validation plan

1. **Geometry review:** compare selected lake/glacier masks with published figures or inventory geometries.
2. **Temporal sanity check:** manually inspect every selected image for cloud, shadow, seasonal snow, and georegistration issues.
3. **Metric check:** reproduce at least one published area-change or retreat trend within stated methodological differences.
4. **Event check:** verify the pre-/post-event lake comparison against published and official satellite assessments.
5. **Reviewer audit:** make each map layer and chart traceable to its source and processing record.

## Citation starting points

- [Randolph Glacier Inventory v7 product guide](https://www.glims.org/rgi_user_guide/products/glacier_product.html)
- [Google Earth Engine Sentinel-2 harmonized collection](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED?hl=en)
- [ICIMOD: future GLOF hazard of South Lhonak Lake](https://lib.icimod.org/records/8vr1k-7zx76)
- [South Lhonak hydrodynamic hazard assessment (2019)](https://doi.org/10.1016/j.scitotenv.2019.02.388)

Before publication, replace this starter list with complete bibliographic citations and record every dataset version and access date.
