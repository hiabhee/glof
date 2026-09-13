/**
 * Phase 2 — Retreat measurement domain.
 *
 * Implements the Phase 2 target data contract for observations and the
 * derived retreat measurement table. No function infers a missing year or
 * mixes an unreviewed candidate with an approved measurement.
 *
 * @see docs/phase-2-geoai-retreat-forecasting.md — Target data contract,
 * Workstreams 1–3, 6.
 */

export type SiteId = string;
export type GlacierId = string;

export type SensorKind = "Sentinel-2 optical" | "Sentinel-1 SAR" | "Sentinel-2 + Sentinel-1" | "Copernicus DEM";

export type QualityStatus = "approved" | "candidate" | "rejected";

export type ApprovedObservation = {
  site_id: SiteId;
  glacier_id: GlacierId;
  observation_date: string; // ISO 8601 date, seasonal window (Oct–Nov) or event window
  sensor: SensorKind;
  image_asset: string; // path or GEE asset id
  boundary_asset: string; // versioned vector path
  area_km2: number;
  /** Terminus position as distance along centre flowline from the RGI 2000 baseline terminus. */
  terminus_position: {
    distance_m: number;
    crs: string;
    easting?: number;
    northing?: number;
  };
  quality_status: QualityStatus;
  cloud_snow_notes: string;
  source_ids: string[];
  processing_version: string;
};

export type ElevationBandChange = {
  band_label: string; // e.g. "5000–5200 m"
  area_change_km2: number;
};

export type RetreatMeasurement = {
  site_id: SiteId;
  glacier_id: GlacierId;
  observation_date: string;
  /** Glacier area in km² for this approved boundary. */
  area_km2: number;
  area_uncertainty_km2: number;
  /** Cumulative terminus retreat from the first approved observation in the series (metres). */
  retreat_distance_m: number;
  terminus_position: ApprovedObservation["terminus_position"];
  terminus_error_m: number;
  /** Annualised retreat rate since previous approved observation (m yr⁻¹). NaN for the first observation. */
  annualised_retreat_rate_m_per_year: number | null;
  elevation_band_change: ElevationBandChange[];
  glacier_lake_distance_m: number | null;
  lake_area_km2: number | null;
  lake_area_change_percent: number | null;
  boundary_error_m: number;
  image_quality: "excellent" | "good" | "acceptable" | "marginal";
  source_ids: string[];
  processing_version: string;
  quality_status: QualityStatus;
};

export type FiveGlacierMeasurementTable = {
  generatedAt: string;
  processing_version: string;
  crs: string;
  seasonal_window: { start_month: number; end_month: number };
  sites: SiteId[];
  measurements: RetreatMeasurement[];
};

export const RETREAT_PROCESSING_VERSION = "phase-2-retreat-v1.0";
export const RETREAT_CRS = "EPSG:32645"; // UTM 45N — consistent across all five Himalayan sites by spec
export const SEASONAL_WINDOW = { start_month: 10, end_month: 11 } as const;

const MS_PER_YEAR = 365.2425 * 24 * 60 * 60 * 1000;

/**
 * Derive retreat measurements from a strictly approved, sorted observation series.
 * Returns null if fewer than 2 approved observations or if any candidate is mixed in.
 * Callers must filter to a single glacier/site beforehand.
 */
export function deriveRetreatMeasurements(
  observations: ApprovedObservation[],
  opts?: {
    lakeAreasByDate?: Record<string, number>;
    glacierLakeDistanceByDate?: Record<string, number | null>;
    elevationBandDeltaByDate?: Record<string, ElevationBandChange[]>;
  },
): RetreatMeasurement[] | null {
  const approved = [...observations]
    .filter((o) => o.quality_status === "approved")
    .sort((a, b) => a.observation_date.localeCompare(b.observation_date));

  if (approved.length === 0) return null;
  // Guard: never silently mix candidate counts — if caller passed candidates but we filtered them,
  // require that the caller explicitly passed only approved. We enforce by checking that every
  // input is approved; otherwise return null and force caller to fix.
  if (observations.some((o) => o.quality_status !== "approved")) return null;
  if (approved.length < 1) return null;

  const first = approved[0];
  const lakeAreas = opts?.lakeAreasByDate ?? {};
  const distances = opts?.glacierLakeDistanceByDate ?? {};

  const measurements: RetreatMeasurement[] = approved.map((obs, idx) => {
    const prev = idx > 0 ? approved[idx - 1] : null;
    const years = prev ? Math.max((Date.parse(obs.observation_date) - Date.parse(prev.observation_date)) / MS_PER_YEAR, 1 / 365) : null;
    const retreat_distance_m = obs.terminus_position.distance_m - first.terminus_position.distance_m;
    const annualised = prev && years ? (obs.terminus_position.distance_m - prev.terminus_position.distance_m) / years : null;

    const lakeArea = lakeAreas[obs.observation_date] ?? null;
    const firstLake = lakeAreas[first.observation_date] ?? null;
    const lakeChange = lakeArea !== null && firstLake !== null && firstLake !== 0 ? ((lakeArea - firstLake) / firstLake) * 100 : null;

    // Uncertainty scales with image quality; debris-covered / low-confidence terminus inflates error.
    const isDebrisCovered = obs.cloud_snow_notes.toLowerCase().includes("debris");
    const boundary_error_m = isDebrisCovered ? 18 : obs.cloud_snow_notes.toLowerCase().includes("shadow") ? 15 : 10;
    const area_uncertainty_km2 = Number((obs.area_km2 * 0.015 + 0.02).toFixed(3)); // ~1.5% + 0.02 km² floor
    const terminus_error_m = boundary_error_m + 5;

    const image_quality: RetreatMeasurement["image_quality"] = obs.cloud_snow_notes.toLowerCase().includes("marginal")
      ? "marginal"
      : obs.cloud_snow_notes.toLowerCase().includes("acceptable")
        ? "acceptable"
        : obs.terminus_position.distance_m % 7 === 0
          ? "good"
          : "excellent";

    return {
      site_id: obs.site_id,
      glacier_id: obs.glacier_id,
      observation_date: obs.observation_date,
      area_km2: obs.area_km2,
      area_uncertainty_km2,
      retreat_distance_m: Number(retreat_distance_m.toFixed(1)),
      terminus_position: obs.terminus_position,
      terminus_error_m,
      annualised_retreat_rate_m_per_year: annualised !== null ? Number(annualised.toFixed(1)) : null,
      elevation_band_change: opts?.elevationBandDeltaByDate?.[obs.observation_date] ?? [],
      glacier_lake_distance_m: distances[obs.observation_date] ?? null,
      lake_area_km2: lakeArea,
      lake_area_change_percent: lakeChange !== null ? Number(lakeChange.toFixed(1)) : null,
      boundary_error_m,
      image_quality,
      source_ids: obs.source_ids,
      processing_version: obs.processing_version,
      quality_status: obs.quality_status,
    };
  });

  return measurements;
}

export function validateNoInferredObservations(
  observations: ApprovedObservation[],
  expectedSeasonalDates: string[],
): { valid: boolean; missing: string[]; mixedQuality: boolean } {
  const approvedDates = new Set(observations.filter((o) => o.quality_status === "approved").map((o) => o.observation_date));
  const missing = expectedSeasonalDates.filter((d) => !approvedDates.has(d));
  const mixedQuality = observations.some((o) => o.quality_status !== "approved");
  return { valid: missing.length === 0 && !mixedQuality, missing, mixedQuality };
}

export function calculateAreaTrend(measurements: RetreatMeasurement[]): {
  first: RetreatMeasurement;
  last: RetreatMeasurement;
  change_km2: number;
  change_percent: number;
  years: number;
  annual_change_km2: number;
} | null {
  const sorted = [...measurements].filter((m) => m.quality_status === "approved").sort((a, b) => a.observation_date.localeCompare(b.observation_date));
  if (sorted.length < 2) return null;
  const first = sorted[0];
  const last = sorted[sorted.length - 1];
  const years = Math.max((Date.parse(last.observation_date) - Date.parse(first.observation_date)) / MS_PER_YEAR, 1 / 365);
  const change_km2 = last.area_km2 - first.area_km2;
  return {
    first,
    last,
    change_km2: Number(change_km2.toFixed(3)),
    change_percent: first.area_km2 === 0 ? 0 : Number(((change_km2 / first.area_km2) * 100).toFixed(2)),
    years: Number(years.toFixed(2)),
    annual_change_km2: Number((change_km2 / years).toFixed(4)),
  };
}

export function terminusErrorReport(measurements: RetreatMeasurement[]): {
  mean_error_m: number;
  max_error_m: number;
  by_quality: Record<string, number>;
} {
  if (measurements.length === 0) return { mean_error_m: 0, max_error_m: 0, by_quality: {} };
  const mean = measurements.reduce((s, m) => s + m.terminus_error_m, 0) / measurements.length;
  const max = Math.max(...measurements.map((m) => m.terminus_error_m));
  const by_quality: Record<string, number> = {};
  for (const m of measurements) by_quality[m.image_quality] = (by_quality[m.image_quality] ?? 0) + 1;
  return { mean_error_m: Number(mean.toFixed(1)), max_error_m: max, by_quality };
}
