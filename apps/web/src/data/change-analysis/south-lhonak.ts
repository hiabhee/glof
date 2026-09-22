export const southLhonakProvisionalChange = {
  status: "Provisional · owner-approved geometry",
  statusDetail: "Not independently reviewed; not suitable for GeoAI training, model evaluation, publication-grade measurement, or GLOF prediction.",
  dates: [
    { date: "2017-11-19", glacierAreaKm2: 12.802, lakeAreaKm2: 1.150 },
    { date: "2019-10-15", glacierAreaKm2: 12.594, lakeAreaKm2: 1.359 },
    { date: "2022-11-30", glacierAreaKm2: 12.531, lakeAreaKm2: 1.713 },
  ],
  intervals: [
    { from: "2017-11-19", to: "2019-10-15", glacierChangeKm2: -0.207912, lakeChangeKm2: 0.209420, map: "/change-analysis/south-lhonak/2017-11-19_to_2019-10-15-change.geojson" },
    { from: "2019-10-15", to: "2022-11-30", glacierChangeKm2: -0.062770, lakeChangeKm2: 0.354243, map: "/change-analysis/south-lhonak/2019-10-15_to_2022-11-30-change.geojson" },
  ],
  summaryCsv: "/change-analysis/south-lhonak/measurements.csv",
  report: "/change-analysis/south-lhonak/README.md",
} as const;
