/**
 * Pure, unit-tested-friendly calculations used by both the UI and future GEE jobs.
 * Inputs must come from reviewed, co-registered observations; this module never
 * guesses a boundary or fills a missing year.
 */
export type AreaObservation = {
  date: string;
  areaKm2: number;
  sourceId: string;
  quality: "approved" | "candidate";
};

export type AreaTrend = {
  first: AreaObservation;
  last: AreaObservation;
  changeKm2: number;
  changePercent: number;
  years: number;
  annualChangeKm2: number;
};

const MS_PER_YEAR = 365.2425 * 24 * 60 * 60 * 1000;

export function calculateAreaTrend(observations: AreaObservation[]): AreaTrend | null {
  const reviewed = observations
    .filter((item) => item.quality === "approved" && Number.isFinite(item.areaKm2) && item.areaKm2 >= 0)
    .sort((a, b) => a.date.localeCompare(b.date));
  if (reviewed.length < 2) return null;
  const first = reviewed[0];
  const last = reviewed[reviewed.length - 1];
  const years = Math.max((Date.parse(last.date) - Date.parse(first.date)) / MS_PER_YEAR, 1 / 365);
  const changeKm2 = last.areaKm2 - first.areaKm2;
  return {
    first,
    last,
    changeKm2,
    changePercent: first.areaKm2 === 0 ? 0 : (changeKm2 / first.areaKm2) * 100,
    years,
    annualChangeKm2: changeKm2 / years,
  };
}
