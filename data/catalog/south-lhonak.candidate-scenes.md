# South Lhonak Sentinel-2 candidate inventory

**Status:** Candidates only — no scene below is approved for public display until an analyst has reviewed local cloud/shadow, seasonal snow, lake visibility, and alignment.

**Query date:** 9 September 2026  
**Collection:** `COPERNICUS/S2_HARMONIZED` (Level-1C, 10 m visual timeline)  
**Search envelope:** Initial bbox in `south-lhonak.manifest.json`  
**Ranking:** whole-scene `CLOUDY_PIXEL_PERCENTAGE`, then analyst review. This metric does not describe cloud conditions specifically over the lake.

| Timeline state | Candidate scene | Acquisition (UTC) | Whole-scene cloud (%) | Status |
| --- | --- | --- | ---: | --- |
| 2016 | `20161030T044922_20161030T045514_T45RXM` | 2016-10-30 | 0.000 | Review required |
| 2017 | `20171106T043949_20171106T044743_T45RXM` | 2017-11-06 | 0.000 | Review required |
| 2018 | `20181030T044921_20181030T050041_T45RXM` | 2018-10-30 | 0.000 | Review required |
| 2019 | `20191114T045041_20191114T045457_T45RXM` | 2019-11-14 | 0.000 | Review required |
| 2020 | `20201009T044711_20201009T045556_T45RXM` | 2020-10-09 | 0.000 | Review required |
| 2021 | `20211029T044919_20211029T045138_T45RXM` | 2021-10-29 | 0.000 | Review required |
| 2022 | `20221103T044939_20221103T045640_T45RXL` | 2022-11-03 | 0.000 | Review required |
| Sep 2023 (pre-event) | `20230916T043709_20230916T044202_T45RXM` | 2023-09-16 | 0.365 | Review required |
| Oct 2023 (post-event) | `20231024T044841_20231024T045715_T45RXM` | 2023-10-24 | 0.000 | Review required |
| 2024 | `20241028T044911_20241028T045458_T45RXM` | 2024-10-28 | 0.000 | Review required |
| 2025 | `20251013T044751_20251013T050053_T45RXM` | 2025-10-13 | 0.000 | Review required |
| 2026 | — | — | — | No candidate yet: the agreed October–November window has not occurred by 9 September 2026. |

## Result

Earth Engine returned five candidate scenes for every queried 2016–2025 annual/event window. The candidate set is therefore adequate for the next stage: generating small visual-review previews and approving exactly one observation or composite for each timeline state.

When a study envelope crosses a Sentinel-2 tile edge, a same-day mosaic is required for review and public presentation. A single candidate granule must not be exported as the final site image merely because its whole-scene cloud percentage is low.

## Provenance

- [Earth Engine Sentinel-2 Harmonized L1C catalogue](https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED)
- Query implementation: `pipelines/scripts/inventory_sentinel2.py`
- Site and temporal policy: `data/catalog/south-lhonak.manifest.json`
