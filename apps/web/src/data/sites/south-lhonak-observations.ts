import type { TimelineObservation } from "@/domain/observation";

const candidate = (id: string, date: string, sceneId: string, cloudPercent: number, note = "Late post-monsoon candidate; local cloud, shadow, snow and alignment review is still required."): TimelineObservation => ({
  id,
  label: id === "2023-pre" ? "Sep 2023" : id === "2023-post" ? "Oct 2023" : id,
  date,
  sensor: "Sentinel-2 optical",
  sceneId,
  cloudPercent,
  imagePath: `/imagery/timeline-${id}.png`,
  status: "review_candidate",
  note
});

export const southLhonakObservations: TimelineObservation[] = [
  candidate("2016", "30 Oct 2016", "20161030T044922_20161030T045514_T45RXM", 0),
  candidate("2017", "6 Nov 2017", "20171106T043949_20171106T044743_T45RXM", 0),
  candidate("2018", "30 Oct 2018", "20181030T044921_20181030T050041_T45RXM", 0),
  candidate("2019", "14 Nov 2019", "20191114T045041_20191114T045457_T45RXM", 0),
  candidate("2020", "9 Oct 2020", "20201009T044711_20201009T045556_T45RXM", 0),
  candidate("2021", "29 Oct 2021", "20211029T044919_20211029T045138_T45RXM", 0),
  candidate("2022", "3 Nov 2022", "20221103T044939_20221103T045640_T45RXL", 0),
  candidate("2023-pre", "16 Sep 2023", "20230916T043709_20230916T044202_T45RXM", 0.365, "Pre-event optical candidate. This is context only; the official event measurement is radar-based."),
  candidate("2023-post", "24 Oct 2023", "20231024T044841_20231024T045715_T45RXM", 0, "Post-event optical candidate. This is context only; it is not an immediate-event measurement."),
  candidate("2024", "28 Oct 2024", "20241028T044911_20241028T045458_T45RXM", 0),
  candidate("2025", "13 Oct 2025", "20251013T044751_20251013T050053_T45RXM", 0),
  {
    id: "2026",
    label: "2026",
    date: "Not available yet",
    sensor: "Sentinel-2 optical",
    status: "unavailable",
    note: "The comparable October–November window has not occurred as of 9 September 2026. No 2026 image is shown."
  }
];
