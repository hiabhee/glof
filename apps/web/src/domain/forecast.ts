/**
 * Phase 2 — Retreat forecasting domain.
 *
 * Staged modelling strategy:
 *  1) Robust linear trend (benchmark)
 *  2) Random Forest / Gradient Boosting (nonlinear)
 *  3) LSTM only if sufficient reviewed time steps exist (explicit gate)
 *
 * Every forecast is scenario-based with central estimate, prediction interval,
 * model version, input period, scenario assumptions, and confidence level.
 * Forecasts are research estimates, not GLOF warnings.
 *
 * @see docs/phase-2-geoai-retreat-forecasting.md — Workstreams 5–6
 */

import type { PredictorId } from "./predictor";

export type ScenarioId = "baseline" | "warmer_summer" | "high_melt";

export type ScenarioDefinition = {
  id: ScenarioId;
  label: string;
  horizon_years: number;
  assumptions: string;
  delta_summer_temp_C: number;
  delta_precipitation_percent: number;
  delta_albedo: number;
  note: string;
};

export const SCENARIOS: Record<ScenarioId, ScenarioDefinition> = {
  baseline: {
    id: "baseline",
    label: "Baseline continuation",
    horizon_years: 5,
    assumptions: "Climate and surface conditions continue the 2016–2025 observed trend. No additional forcing.",
    delta_summer_temp_C: 0,
    delta_precipitation_percent: 0,
    delta_albedo: 0,
    note: "Continuation of the reviewed 2016–2025 trajectory; useful as a no-extra-change benchmark.",
  },
  warmer_summer: {
    id: "warmer_summer",
    label: "Warmer-summer scenario",
    horizon_years: 5,
    assumptions: "JJA summer temperature +1.2 °C above the 2016–2025 mean; other predictors held at observed trend.",
    delta_summer_temp_C: 1.2,
    delta_precipitation_percent: 0,
    delta_albedo: -0.02,
    note: "Tests sensitivity to plausible near-term summer warming consistent with High Mountain Asia projections.",
  },
  high_melt: {
    id: "high_melt",
    label: "High-melt scenario",
    horizon_years: 5,
    assumptions: "Summer +1.8 °C, precipitation −8 %, albedo −0.04 — combined melt amplification.",
    delta_summer_temp_C: 1.8,
    delta_precipitation_percent: -8,
    delta_albedo: -0.04,
    note: "Stress-test combining warm, dry, and darkened-surface conditions. Not a prediction of these conditions occurring.",
  },
};

export type ModelTier = "linear_trend" | "random_forest" | "gradient_boosting" | "lstm";

export type ForecastPoint = {
  date: string; // ISO year start, e.g. "2026-10-15"
  year: number;
  scenario_id: ScenarioId;
  central_km2: number;
  central_retreat_m: number;
  lower_km2: number; // lower bound of prediction interval
  upper_km2: number;
  lower_retreat_m: number;
  upper_retreat_m: number;
};

export type PredictorContribution = {
  predictor_id: PredictorId;
  contribution: number; // signed contribution to the forecast delta (positive = increases retreat)
  rank: number;
  note?: string;
};

export type ForecastResult = {
  site_id: string;
  glacier_id: string;
  model_tier: ModelTier;
  model_version: string;
  input_period: { start: string; end: string };
  scenario: ScenarioDefinition;
  confidence_level: number; // e.g. 0.8 = 80% prediction interval
  method: string;
  limitations: string;
  points: ForecastPoint[];
  predictor_contributions: PredictorContribution[];
  warning: string; // fixed disclaimer
};

export const FORECAST_WARNING =
  "Research estimate, not a forecast warning — scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur.";

export const MODEL_VERSIONS = {
  linear_trend: "phase-2-linear-v1.0",
  random_forest: "phase-2-rf-v1.0",
  gradient_boosting: "phase-2-gb-v1.0",
  lstm: "phase-2-lstm-v1.0",
} as const;

export const CONFIDENCE_LEVEL = 0.8; // 80% prediction interval by spec (defensible, not overconfident)

export type SegmentationMetrics = {
  iou: number;
  f1: number;
  notes: string;
};

export type AreaErrorMetrics = {
  mean_abs_km2: number;
  mean_abs_percent: number;
  max_abs_km2: number;
};

export type ValidationReport = {
  model_tier: ModelTier;
  model_version: string;
  input_period: { start: string; end: string };
  holdout_period: { start: string; end: string };
  temporal_holdout: {
    mae_retreat_m_per_year: number;
    area_error: AreaErrorMetrics;
    terminus_error_m: number;
    interval_coverage: number; // e.g. 0.78 = 78% of holdout points inside interval
  };
  leave_one_glacier_out: Record<string, { mae_retreat_m_per_year: number; area_error_percent: number }>;
  segmentation: Record<string, SegmentationMetrics>;
  error_by_quality: Record<string, { count: number; mae_km2: number }>;
  error_by_glacier: Record<string, { mae_km2: number; count: number }>;
  lstm_gate: { eligible: boolean; reason: string };
};

export type ReviewGate = {
  id: string;
  label: string;
  required: boolean;
  passed: boolean;
  evidence: string;
};

export function buildReviewGates(params: {
  fiveSitesHaveCoverage: boolean;
  boundaryPerformanceReported: boolean;
  temporalHoldoutRecorded: boolean;
  uncertaintyVisibleInUi: boolean;
  humanReviewSigned: boolean;
}): ReviewGate[] {
  return [
    { id: "coverage", label: "All five sites have documented input coverage", required: true, passed: params.fiveSitesHaveCoverage, evidence: "phase-2-model-manifest.json · five-site-intake gates" },
    { id: "boundary", label: "Boundary performance reported against reviewed references", required: true, passed: params.boundaryPerformanceReported, evidence: "IoU/F1 vs. reviewed lake + glacier masks per site" },
    { id: "holdout", label: "Temporal hold-out results recorded", required: true, passed: params.temporalHoldoutRecorded, evidence: "Train 2016–2021 / Test 2022–2025; interval coverage reported" },
    { id: "uncertainty", label: "Uncertainty and limitations visible in the UI", required: true, passed: params.uncertaintyVisibleInUi, evidence: "Prediction interval band + provenance drawer + warning notice" },
    { id: "review", label: "Human reviewer signs off the interpretation", required: true, passed: params.humanReviewSigned, evidence: "phase-2-validation-register.md sign-off" },
  ];
}

export function allGatesPassed(gates: ReviewGate[]): boolean {
  return gates.filter((g) => g.required).every((g) => g.passed);
}

/** Decide whether an LSTM is justified per spec: needs enough reviewed time steps. */
export function lstmEligibility(timeStepsPerSite: number[]): { eligible: boolean; reason: string } {
  const minSteps = Math.min(...timeStepsPerSite);
  const total = timeStepsPerSite.reduce((a, b) => a + b, 0);
  // Threshold: ≥8 seasonal steps per site and ≥45 total across five sites
  if (minSteps >= 8 && total >= 45) return { eligible: true, reason: `Eligible: ${minSteps}+ steps per site, ${total} total — temporal model justified.` };
  return {
    eligible: false,
    reason: `Not yet justified: need ≥8 reviewed seasonal steps per site and ≥45 total; have min ${minSteps}, total ${total}. Use linear + tree benchmarks only.`,
  };
}

export function formatIntervalCoverage(coverage: number): string {
  return `${(coverage * 100).toFixed(0)}% of hold-out observations fell inside the ${CONFIDENCE_LEVEL * 100}% prediction interval`;
}

export function forecastSummary(result: ForecastResult): string {
  const last = result.points[result.points.length - 1];
  if (!last) return "No forecast points.";
  return `${result.scenario.label} · ${last.year}: ${last.central_km2.toFixed(2)} km² (80% interval ${last.lower_km2.toFixed(2)}–${last.upper_km2.toFixed(2)} km²; retreat ${last.central_retreat_m.toFixed(0)} m, interval ${last.lower_retreat_m.toFixed(0)}–${last.upper_retreat_m.toFixed(0)} m). Model ${result.model_version}, input ${result.input_period.start}→${result.input_period.end}.`;
}
