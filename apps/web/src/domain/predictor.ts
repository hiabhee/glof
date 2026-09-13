/**
 * Phase 2 — Predictor engineering domain.
 *
 * Predictor records follow the Phase 2 target data contract verbatim:
 * site_id, observation_date, predictor_id, value, unit, source_id, method, quality_status
 * Predictors are always aligned to an approved observation date; no interpolation
 * across missing years is performed.
 *
 * @see docs/phase-2-geoai-retreat-forecasting.md — Workstream 4
 */

export type SiteId = string;

export type PredictorId =
  | "summer_temp"
  | "annual_temp"
  | "precipitation"
  | "snowfall"
  | "snow_cover_duration"
  | "surface_reflectance"
  | "albedo"
  | "elevation"
  | "slope"
  | "aspect"
  | "debris_cover_fraction"
  | "lake_proximity"
  | "lake_area_change"
  | "prior_retreat_rate"
  | "ice_velocity";

export type PredictorQualityStatus = "approved" | "candidate" | "unavailable";

export type PredictorRecord = {
  site_id: SiteId;
  observation_date: string; // aligned to ApprovedObservation.observation_date
  predictor_id: PredictorId;
  value: number;
  unit: string;
  source_id: string;
  method: string;
  quality_status: PredictorQualityStatus;
};

export type PredictorDefinition = {
  id: PredictorId;
  label: string;
  unit: string;
  source_id: string;
  source_label: string;
  method: string;
  temporal_aggregation: string;
  category: "terrain" | "climate" | "snow" | "lake" | "retreat" | "velocity";
  description: string;
};

export const PREDICTOR_DEFINITIONS: Record<PredictorId, PredictorDefinition> = {
  summer_temp: {
    id: "summer_temp",
    label: "Summer temperature",
    unit: "°C",
    source_id: "era5-reanalysis",
    source_label: "ERA5 / Copernicus Climate Data Store",
    method: "JJA mean 2m temperature sampled at glacier centroid, bias-corrected to station",
    temporal_aggregation: "June–August mean aligned to Oct–Nov observation",
    category: "climate",
    description: "Mean summer temperature anomaly — primary melt driver.",
  },
  annual_temp: {
    id: "annual_temp",
    label: "Annual temperature",
    unit: "°C",
    source_id: "era5-reanalysis",
    source_label: "ERA5 / Copernicus Climate Data Store",
    method: "Annual mean 2m temperature at glacier centroid",
    temporal_aggregation: "Hydrological year mean (Oct–Sep) preceding observation",
    category: "climate",
    description: "Annual thermal state.",
  },
  precipitation: {
    id: "precipitation",
    label: "Precipitation",
    unit: "mm",
    source_id: "chirps-v3",
    source_label: "CHIRPS v3 / Climate Hazards Center",
    method: "CHIRPS annual total clipped to study polygon",
    temporal_aggregation: "Hydrological year total",
    category: "climate",
    description: "Annual precipitation — accumulation proxy.",
  },
  snowfall: {
    id: "snowfall",
    label: "Snowfall",
    unit: "mm w.e.",
    source_id: "era5-reanalysis",
    source_label: "ERA5 / Copernicus Climate Data Store",
    method: "ERA5 snowfall partitioned from total precipitation",
    temporal_aggregation: "Hydrological year total",
    category: "snow",
    description: "Solid precipitation — accumulation proxy.",
  },
  snow_cover_duration: {
    id: "snow_cover_duration",
    label: "Snow-cover duration",
    unit: "days",
    source_id: "modis-mod10a1",
    source_label: "MODIS MOD10A1 (NSIDC)",
    method: "NDSI-derived snow days count at 500 m, cloud-gap filled",
    temporal_aggregation: "Oct–Sep snow-day count",
    category: "snow",
    description: "Duration of seasonal snow cover.",
  },
  surface_reflectance: {
    id: "surface_reflectance",
    label: "Surface reflectance",
    unit: "dimensionless",
    source_id: "copernicus-s2-harmonized",
    source_label: "Sentinel-2 L2A HARMONIZED (GEE)",
    method: "Median Band 4 reflectance within approved glacier polygon",
    temporal_aggregation: "Seasonal window median",
    category: "snow",
    description: "Optical reflectance — darkening / debris proxy.",
  },
  albedo: {
    id: "albedo",
    label: "Broadband albedo",
    unit: "dimensionless",
    source_id: "modis-mcd43a3",
    source_label: "MODIS MCD43A3 (NASA LP DAAC)",
    method: "White-sky albedo BSA within glacier outline",
    temporal_aggregation: "JJA mean",
    category: "snow",
    description: "Surface albedo — melt amplification.",
  },
  elevation: {
    id: "elevation",
    label: "Median glacier elevation",
    unit: "m",
    source_id: "copernicus-dem-glo30",
    source_label: "Copernicus DEM GLO-30 (GEE)",
    method: "Zonal median of DEM within approved glacier polygon",
    temporal_aggregation: "Static terrain (2024 DEM vintage) sampled per observation geometry",
    category: "terrain",
    description: "Hypsometry control — static but re-sampled per boundary vintage.",
  },
  slope: {
    id: "slope",
    label: "Mean surface slope",
    unit: "°",
    source_id: "copernicus-dem-glo30",
    source_label: "Copernicus DEM GLO-30",
    method: "Horn slope from DEM, zonal mean within polygon",
    temporal_aggregation: "Static terrain",
    category: "terrain",
    description: "Topographic steepness control.",
  },
  aspect: {
    id: "aspect",
    label: "Mean aspect",
    unit: "°",
    source_id: "copernicus-dem-glo30",
    source_label: "Copernicus DEM GLO-30",
    method: "Aspect from DEM, circular mean within polygon",
    temporal_aggregation: "Static terrain",
    category: "terrain",
    description: "Orientation control for radiation.",
  },
  debris_cover_fraction: {
    id: "debris_cover_fraction",
    label: "Debris-cover fraction",
    unit: "fraction",
    source_id: "geoai-segmentation-v1",
    source_label: "Phase 2 GeoAI segmentation (human-reviewed)",
    method: "Debris class fraction within glacier mask; low-confidence flagged for review",
    temporal_aggregation: "Per-observation segmentation",
    category: "terrain",
    description: "Insulation / enhanced melt ambiguity — flagged when uncertain.",
  },
  lake_proximity: {
    id: "lake_proximity",
    label: "Glacier–lake distance",
    unit: "m",
    source_id: "rgi-v7-lake-terminating",
    source_label: "RGI v7 lake-terminating + reviewed lake outline",
    method: "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    temporal_aggregation: "Per observation (geometry-dependent)",
    category: "lake",
    description: "Lake-terminating coupling distance.",
  },
  lake_area_change: {
    id: "lake_area_change",
    label: "Lake-area change",
    unit: "%",
    source_id: "published-lake-boundaries",
    source_label: "Reviewed lake polygons (ICIMOD / author inventories)",
    method: "Lake area change since first approved observation",
    temporal_aggregation: "Cumulative % change",
    category: "lake",
    description: "Proglacial lake growth — hazard-context link.",
  },
  prior_retreat_rate: {
    id: "prior_retreat_rate",
    label: "Prior retreat rate",
    unit: "m yr⁻¹",
    source_id: "phase-2-retreat-measurement",
    source_label: "Phase 2 retreat measurements (derived)",
    method: "Annualised terminus retreat since previous approved observation",
    temporal_aggregation: "Lagged one observation",
    category: "retreat",
    description: "Autoregressive term — prior dynamics carry forward.",
  },
  ice_velocity: {
    id: "ice_velocity",
    label: "Surface ice velocity",
    unit: "m yr⁻¹",
    source_id: "its-live-v2",
    source_label: "ITS_LIVE v2 (NASA MEaSUREs)",
    method: "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    temporal_aggregation: "Annual median",
    category: "velocity",
    description: "Dynamics proxy — only where reliable SAR/optical tracking is available.",
  },
};

/** All candidate predictor IDs in display order. */
export const CANDIDATE_PREDICTORS: PredictorId[] = [
  "summer_temp",
  "annual_temp",
  "precipitation",
  "snowfall",
  "snow_cover_duration",
  "surface_reflectance",
  "albedo",
  "elevation",
  "slope",
  "aspect",
  "debris_cover_fraction",
  "lake_proximity",
  "lake_area_change",
  "prior_retreat_rate",
  "ice_velocity",
];

/**
 * Validate that a predictor record aligns to an existing approved observation date.
 * Never invents missing predictor values.
 */
export function isPredictorAligned(
  record: PredictorRecord,
  approvedDates: Set<string>,
): boolean {
  return approvedDates.has(record.observation_date) && record.quality_status === "approved";
}

export function groupPredictorsByDate(records: PredictorRecord[]): Map<string, PredictorRecord[]> {
  const map = new Map<string, PredictorRecord[]>();
  for (const r of records) {
    if (r.quality_status !== "approved") continue; // never mix candidates into approved analysis
    const arr = map.get(r.observation_date) ?? [];
    arr.push(r);
    map.set(r.observation_date, arr);
  }
  return map;
}

export function predictorCompleteness(
  records: PredictorRecord[],
  expectedDates: string[],
  predictorIds: PredictorId[],
): { coverage: number; missing: { date: string; predictor_id: PredictorId }[] } {
  const byDate = groupPredictorsByDate(records);
  const missing: { date: string; predictor_id: PredictorId }[] = [];
  for (const date of expectedDates) {
    const present = new Set((byDate.get(date) ?? []).map((r) => r.predictor_id));
    for (const pid of predictorIds) if (!present.has(pid)) missing.push({ date, predictor_id: pid });
  }
  const total = expectedDates.length * predictorIds.length;
  const coverage = total === 0 ? 0 : (total - missing.length) / total;
  return { coverage, missing };
}

export function getPredictorDefinition(id: PredictorId): PredictorDefinition {
  return PREDICTOR_DEFINITIONS[id];
}
