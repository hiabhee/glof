/**
 * Phase 2 — Retreat forecasts (Workstream 5).
 * Staged modelling: linear benchmark + gradient boosting primary; LSTM gated.
 * 3–5 year horizon (2026–2030), scenario-based, each with central + 80% interval, version, input period, assumptions, confidence.
 */
import type { ForecastResult } from "@/domain/forecast";

export const FORECASTS: ForecastResult[] = [
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "baseline",
      "label": "Baseline continuation",
      "horizon_years": 5,
      "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
      "delta_summer_temp_C": 0.0,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": 0.0,
      "note": "Baseline continuation"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "baseline",
        "central_km2": 12.83,
        "central_retreat_m": 613.7,
        "lower_km2": 12.74,
        "upper_km2": 12.92,
        "lower_retreat_m": 597.7,
        "upper_retreat_m": 629.7
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "baseline",
        "central_km2": 12.695,
        "central_retreat_m": 675.4,
        "lower_km2": 12.585,
        "upper_km2": 12.805,
        "lower_retreat_m": 655.4,
        "upper_retreat_m": 695.4
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "baseline",
        "central_km2": 12.547,
        "central_retreat_m": 741.1,
        "lower_km2": 12.417,
        "upper_km2": 12.677,
        "lower_retreat_m": 717.1,
        "upper_retreat_m": 765.1
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "baseline",
        "central_km2": 12.413,
        "central_retreat_m": 801.8,
        "lower_km2": 12.263,
        "upper_km2": 12.563,
        "lower_retreat_m": 773.8,
        "upper_retreat_m": 829.8
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "baseline",
        "central_km2": 12.269,
        "central_retreat_m": 865.5,
        "lower_km2": 12.099,
        "upper_km2": 12.439,
        "lower_retreat_m": 833.5,
        "upper_retreat_m": 897.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.31,
        "rank": 1
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.22,
        "rank": 2
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.18,
        "rank": 3
      },
      {
        "predictor_id": "debris_cover_fraction",
        "contribution": -0.12,
        "rank": 4
      },
      {
        "predictor_id": "lake_area_change",
        "contribution": 0.09,
        "rank": 5
      },
      {
        "predictor_id": "snow_cover_duration",
        "contribution": -0.07,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "baseline",
      "label": "Baseline continuation",
      "horizon_years": 5,
      "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
      "delta_summer_temp_C": 0.0,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": 0.0,
      "note": "Baseline continuation"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "baseline",
        "central_km2": 12.838,
        "central_retreat_m": 610.0,
        "lower_km2": 12.723,
        "upper_km2": 12.953,
        "lower_retreat_m": 590.0,
        "upper_retreat_m": 630.0
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "baseline",
        "central_km2": 12.696,
        "central_retreat_m": 671.0,
        "lower_km2": 12.556,
        "upper_km2": 12.836,
        "lower_retreat_m": 646.0,
        "upper_retreat_m": 696.0
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "baseline",
        "central_km2": 12.554,
        "central_retreat_m": 732.0,
        "lower_km2": 12.389,
        "upper_km2": 12.719,
        "lower_retreat_m": 702.0,
        "upper_retreat_m": 762.0
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "baseline",
        "central_km2": 12.412,
        "central_retreat_m": 793.0,
        "lower_km2": 12.222,
        "upper_km2": 12.602,
        "lower_retreat_m": 758.0,
        "upper_retreat_m": 828.0
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "baseline",
        "central_km2": 12.27,
        "central_retreat_m": 854.0,
        "lower_km2": 12.055,
        "upper_km2": 12.485,
        "lower_retreat_m": 814.0,
        "upper_retreat_m": 894.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "warmer_summer",
      "label": "Warmer-summer scenario",
      "horizon_years": 5,
      "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
      "delta_summer_temp_C": 1.2,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": -0.02,
      "note": "Warmer-summer scenario"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "warmer_summer",
        "central_km2": 12.781,
        "central_retreat_m": 635.6,
        "lower_km2": 12.691,
        "upper_km2": 12.871,
        "lower_retreat_m": 619.6,
        "upper_retreat_m": 651.6
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "warmer_summer",
        "central_km2": 12.597,
        "central_retreat_m": 719.2,
        "lower_km2": 12.487,
        "upper_km2": 12.707,
        "lower_retreat_m": 699.2,
        "upper_retreat_m": 739.2
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "warmer_summer",
        "central_km2": 12.4,
        "central_retreat_m": 806.8,
        "lower_km2": 12.27,
        "upper_km2": 12.53,
        "lower_retreat_m": 782.8,
        "upper_retreat_m": 830.8
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "warmer_summer",
        "central_km2": 12.217,
        "central_retreat_m": 889.4,
        "lower_km2": 12.067,
        "upper_km2": 12.367,
        "lower_retreat_m": 861.4,
        "upper_retreat_m": 917.4
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "warmer_summer",
        "central_km2": 12.024,
        "central_retreat_m": 975.0,
        "lower_km2": 11.854,
        "upper_km2": 12.194,
        "lower_retreat_m": 943.0,
        "upper_retreat_m": 1007.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.502,
        "rank": 1
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.297,
        "rank": 2
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.243,
        "rank": 3
      },
      {
        "predictor_id": "debris_cover_fraction",
        "contribution": -0.162,
        "rank": 4
      },
      {
        "predictor_id": "lake_area_change",
        "contribution": 0.121,
        "rank": 5
      },
      {
        "predictor_id": "snow_cover_duration",
        "contribution": -0.095,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "warmer_summer",
      "label": "Warmer-summer scenario",
      "horizon_years": 5,
      "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
      "delta_summer_temp_C": 1.2,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": -0.02,
      "note": "Warmer-summer scenario"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "warmer_summer",
        "central_km2": 12.816,
        "central_retreat_m": 619.2,
        "lower_km2": 12.701,
        "upper_km2": 12.931,
        "lower_retreat_m": 599.2,
        "upper_retreat_m": 639.2
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "warmer_summer",
        "central_km2": 12.652,
        "central_retreat_m": 689.4,
        "lower_km2": 12.512,
        "upper_km2": 12.792,
        "lower_retreat_m": 664.4,
        "upper_retreat_m": 714.4
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "warmer_summer",
        "central_km2": 12.488,
        "central_retreat_m": 759.6,
        "lower_km2": 12.323,
        "upper_km2": 12.653,
        "lower_retreat_m": 729.6,
        "upper_retreat_m": 789.6
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "warmer_summer",
        "central_km2": 12.324,
        "central_retreat_m": 829.8,
        "lower_km2": 12.134,
        "upper_km2": 12.514,
        "lower_retreat_m": 794.8,
        "upper_retreat_m": 864.8
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "warmer_summer",
        "central_km2": 12.16,
        "central_retreat_m": 900.0,
        "lower_km2": 11.945,
        "upper_km2": 12.375,
        "lower_retreat_m": 860.0,
        "upper_retreat_m": 940.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "high_melt",
      "label": "High-melt scenario",
      "horizon_years": 5,
      "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
      "delta_summer_temp_C": 1.8,
      "delta_precipitation_percent": -8.0,
      "delta_albedo": -0.04,
      "note": "High-melt scenario"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "high_melt",
        "central_km2": 12.739,
        "central_retreat_m": 654.4,
        "lower_km2": 12.629,
        "upper_km2": 12.849,
        "lower_retreat_m": 632.4,
        "upper_retreat_m": 676.4
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "high_melt",
        "central_km2": 12.513,
        "central_retreat_m": 756.8,
        "lower_km2": 12.383,
        "upper_km2": 12.643,
        "lower_retreat_m": 730.8,
        "upper_retreat_m": 782.8
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "high_melt",
        "central_km2": 12.274,
        "central_retreat_m": 863.2,
        "lower_km2": 12.124,
        "upper_km2": 12.424,
        "lower_retreat_m": 833.2,
        "upper_retreat_m": 893.2
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "high_melt",
        "central_km2": 12.049,
        "central_retreat_m": 964.6,
        "lower_km2": 11.879,
        "upper_km2": 12.219,
        "lower_retreat_m": 930.6,
        "upper_retreat_m": 998.6
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "high_melt",
        "central_km2": 11.814,
        "central_retreat_m": 1069.0,
        "lower_km2": 11.624,
        "upper_km2": 12.004,
        "lower_retreat_m": 1031.0,
        "upper_retreat_m": 1107.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.716,
        "rank": 1
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.363,
        "rank": 2
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.297,
        "rank": 3
      },
      {
        "predictor_id": "debris_cover_fraction",
        "contribution": -0.198,
        "rank": 4
      },
      {
        "predictor_id": "lake_area_change",
        "contribution": 0.148,
        "rank": 5
      },
      {
        "predictor_id": "snow_cover_duration",
        "contribution": -0.116,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "high_melt",
      "label": "High-melt scenario",
      "horizon_years": 5,
      "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
      "delta_summer_temp_C": 1.8,
      "delta_precipitation_percent": -8.0,
      "delta_albedo": -0.04,
      "note": "High-melt scenario"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "high_melt",
        "central_km2": 12.802,
        "central_retreat_m": 625.3,
        "lower_km2": 12.687,
        "upper_km2": 12.917,
        "lower_retreat_m": 605.3,
        "upper_retreat_m": 645.3
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "high_melt",
        "central_km2": 12.624,
        "central_retreat_m": 701.6,
        "lower_km2": 12.484,
        "upper_km2": 12.764,
        "lower_retreat_m": 676.6,
        "upper_retreat_m": 726.6
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "high_melt",
        "central_km2": 12.446,
        "central_retreat_m": 777.9,
        "lower_km2": 12.281,
        "upper_km2": 12.611,
        "lower_retreat_m": 747.9,
        "upper_retreat_m": 807.9
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "high_melt",
        "central_km2": 12.268,
        "central_retreat_m": 854.2,
        "lower_km2": 12.078,
        "upper_km2": 12.458,
        "lower_retreat_m": 819.2,
        "upper_retreat_m": 889.2
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "high_melt",
        "central_km2": 12.09,
        "central_retreat_m": 930.5,
        "lower_km2": 11.875,
        "upper_km2": 12.305,
        "lower_retreat_m": 890.5,
        "upper_retreat_m": 970.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "baseline",
      "label": "Baseline continuation",
      "horizon_years": 5,
      "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
      "delta_summer_temp_C": 0.0,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": 0.0,
      "note": "Baseline continuation"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "baseline",
        "central_km2": 16.868,
        "central_retreat_m": 362.5,
        "lower_km2": 16.778,
        "upper_km2": 16.958,
        "lower_retreat_m": 346.5,
        "upper_retreat_m": 378.5
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "baseline",
        "central_km2": 16.781,
        "central_retreat_m": 399.0,
        "lower_km2": 16.671,
        "upper_km2": 16.891,
        "lower_retreat_m": 379.0,
        "upper_retreat_m": 419.0
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "baseline",
        "central_km2": 16.681,
        "central_retreat_m": 439.5,
        "lower_km2": 16.551,
        "upper_km2": 16.811,
        "lower_retreat_m": 415.5,
        "upper_retreat_m": 463.5
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "baseline",
        "central_km2": 16.595,
        "central_retreat_m": 475.0,
        "lower_km2": 16.445,
        "upper_km2": 16.745,
        "lower_retreat_m": 447.0,
        "upper_retreat_m": 503.0
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "baseline",
        "central_km2": 16.499,
        "central_retreat_m": 513.5,
        "lower_km2": 16.329,
        "upper_km2": 16.669,
        "lower_retreat_m": 481.5,
        "upper_retreat_m": 545.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 1
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.19,
        "rank": 2
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.16,
        "rank": 3
      },
      {
        "predictor_id": "lake_proximity",
        "contribution": 0.11,
        "rank": 4
      },
      {
        "predictor_id": "precipitation",
        "contribution": -0.08,
        "rank": 5
      },
      {
        "predictor_id": "debris_cover_fraction",
        "contribution": -0.06,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "baseline",
      "label": "Baseline continuation",
      "horizon_years": 5,
      "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
      "delta_summer_temp_C": 0.0,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": 0.0,
      "note": "Baseline continuation"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "baseline",
        "central_km2": 16.876,
        "central_retreat_m": 358.9,
        "lower_km2": 16.761,
        "upper_km2": 16.991,
        "lower_retreat_m": 338.9,
        "upper_retreat_m": 378.9
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "baseline",
        "central_km2": 16.782,
        "central_retreat_m": 394.8,
        "lower_km2": 16.642,
        "upper_km2": 16.922,
        "lower_retreat_m": 369.8,
        "upper_retreat_m": 419.8
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "baseline",
        "central_km2": 16.688,
        "central_retreat_m": 430.7,
        "lower_km2": 16.523,
        "upper_km2": 16.853,
        "lower_retreat_m": 400.7,
        "upper_retreat_m": 460.7
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "baseline",
        "central_km2": 16.594,
        "central_retreat_m": 466.6,
        "lower_km2": 16.404,
        "upper_km2": 16.784,
        "lower_retreat_m": 431.6,
        "upper_retreat_m": 501.6
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "baseline",
        "central_km2": 16.5,
        "central_retreat_m": 502.5,
        "lower_km2": 16.285,
        "upper_km2": 16.715,
        "lower_retreat_m": 462.5,
        "upper_retreat_m": 542.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "warmer_summer",
      "label": "Warmer-summer scenario",
      "horizon_years": 5,
      "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
      "delta_summer_temp_C": 1.2,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": -0.02,
      "note": "Warmer-summer scenario"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "warmer_summer",
        "central_km2": 16.836,
        "central_retreat_m": 375.7,
        "lower_km2": 16.746,
        "upper_km2": 16.926,
        "lower_retreat_m": 359.7,
        "upper_retreat_m": 391.7
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "warmer_summer",
        "central_km2": 16.717,
        "central_retreat_m": 425.4,
        "lower_km2": 16.607,
        "upper_km2": 16.827,
        "lower_retreat_m": 405.4,
        "upper_retreat_m": 445.4
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "warmer_summer",
        "central_km2": 16.585,
        "central_retreat_m": 479.1,
        "lower_km2": 16.455,
        "upper_km2": 16.715,
        "lower_retreat_m": 455.1,
        "upper_retreat_m": 503.1
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "warmer_summer",
        "central_km2": 16.467,
        "central_retreat_m": 527.8,
        "lower_km2": 16.317,
        "upper_km2": 16.617,
        "lower_retreat_m": 499.8,
        "upper_retreat_m": 555.8
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "warmer_summer",
        "central_km2": 16.339,
        "central_retreat_m": 579.5,
        "lower_km2": 16.169,
        "upper_km2": 16.509,
        "lower_retreat_m": 547.5,
        "upper_retreat_m": 611.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.454,
        "rank": 1
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.257,
        "rank": 2
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.216,
        "rank": 3
      },
      {
        "predictor_id": "lake_proximity",
        "contribution": 0.149,
        "rank": 4
      },
      {
        "predictor_id": "precipitation",
        "contribution": -0.108,
        "rank": 5
      },
      {
        "predictor_id": "debris_cover_fraction",
        "contribution": -0.081,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "warmer_summer",
      "label": "Warmer-summer scenario",
      "horizon_years": 5,
      "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
      "delta_summer_temp_C": 1.2,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": -0.02,
      "note": "Warmer-summer scenario"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "warmer_summer",
        "central_km2": 16.861,
        "central_retreat_m": 364.3,
        "lower_km2": 16.746,
        "upper_km2": 16.976,
        "lower_retreat_m": 344.3,
        "upper_retreat_m": 384.3
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "warmer_summer",
        "central_km2": 16.752,
        "central_retreat_m": 405.6,
        "lower_km2": 16.612,
        "upper_km2": 16.892,
        "lower_retreat_m": 380.6,
        "upper_retreat_m": 430.6
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "warmer_summer",
        "central_km2": 16.643,
        "central_retreat_m": 446.9,
        "lower_km2": 16.478,
        "upper_km2": 16.808,
        "lower_retreat_m": 416.9,
        "upper_retreat_m": 476.9
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "warmer_summer",
        "central_km2": 16.534,
        "central_retreat_m": 488.2,
        "lower_km2": 16.344,
        "upper_km2": 16.724,
        "lower_retreat_m": 453.2,
        "upper_retreat_m": 523.2
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "warmer_summer",
        "central_km2": 16.425,
        "central_retreat_m": 529.5,
        "lower_km2": 16.21,
        "upper_km2": 16.64,
        "lower_retreat_m": 489.5,
        "upper_retreat_m": 569.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "high_melt",
      "label": "High-melt scenario",
      "horizon_years": 5,
      "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
      "delta_summer_temp_C": 1.8,
      "delta_precipitation_percent": -8.0,
      "delta_albedo": -0.04,
      "note": "High-melt scenario"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "high_melt",
        "central_km2": 16.808,
        "central_retreat_m": 386.9,
        "lower_km2": 16.698,
        "upper_km2": 16.918,
        "lower_retreat_m": 364.9,
        "upper_retreat_m": 408.9
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "high_melt",
        "central_km2": 16.661,
        "central_retreat_m": 447.8,
        "lower_km2": 16.531,
        "upper_km2": 16.791,
        "lower_retreat_m": 421.8,
        "upper_retreat_m": 473.8
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "high_melt",
        "central_km2": 16.501,
        "central_retreat_m": 512.7,
        "lower_km2": 16.351,
        "upper_km2": 16.651,
        "lower_retreat_m": 482.7,
        "upper_retreat_m": 542.7
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "high_melt",
        "central_km2": 16.355,
        "central_retreat_m": 572.6,
        "lower_km2": 16.185,
        "upper_km2": 16.525,
        "lower_retreat_m": 538.6,
        "upper_retreat_m": 606.6
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "high_melt",
        "central_km2": 16.199,
        "central_retreat_m": 635.5,
        "lower_km2": 16.009,
        "upper_km2": 16.389,
        "lower_retreat_m": 597.5,
        "upper_retreat_m": 673.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.647,
        "rank": 1
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.314,
        "rank": 2
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.264,
        "rank": 3
      },
      {
        "predictor_id": "lake_proximity",
        "contribution": 0.181,
        "rank": 4
      },
      {
        "predictor_id": "precipitation",
        "contribution": -0.132,
        "rank": 5
      },
      {
        "predictor_id": "debris_cover_fraction",
        "contribution": -0.099,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "high_melt",
      "label": "High-melt scenario",
      "horizon_years": 5,
      "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
      "delta_summer_temp_C": 1.8,
      "delta_precipitation_percent": -8.0,
      "delta_albedo": -0.04,
      "note": "High-melt scenario"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "high_melt",
        "central_km2": 16.852,
        "central_retreat_m": 367.9,
        "lower_km2": 16.737,
        "upper_km2": 16.967,
        "lower_retreat_m": 347.9,
        "upper_retreat_m": 387.9
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "high_melt",
        "central_km2": 16.734,
        "central_retreat_m": 412.8,
        "lower_km2": 16.594,
        "upper_km2": 16.874,
        "lower_retreat_m": 387.8,
        "upper_retreat_m": 437.8
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "high_melt",
        "central_km2": 16.616,
        "central_retreat_m": 457.7,
        "lower_km2": 16.451,
        "upper_km2": 16.781,
        "lower_retreat_m": 427.7,
        "upper_retreat_m": 487.7
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "high_melt",
        "central_km2": 16.498,
        "central_retreat_m": 502.6,
        "lower_km2": 16.308,
        "upper_km2": 16.688,
        "lower_retreat_m": 467.6,
        "upper_retreat_m": 537.6
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "high_melt",
        "central_km2": 16.38,
        "central_retreat_m": 547.5,
        "lower_km2": 16.165,
        "upper_km2": 16.595,
        "lower_retreat_m": 507.5,
        "upper_retreat_m": 587.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "baseline",
      "label": "Baseline continuation",
      "horizon_years": 5,
      "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
      "delta_summer_temp_C": 0.0,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": 0.0,
      "note": "Baseline continuation"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "baseline",
        "central_km2": 7.39,
        "central_retreat_m": 464.7,
        "lower_km2": 7.3,
        "upper_km2": 7.48,
        "lower_retreat_m": 448.7,
        "upper_retreat_m": 480.7
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "baseline",
        "central_km2": 7.325,
        "central_retreat_m": 511.4,
        "lower_km2": 7.215,
        "upper_km2": 7.435,
        "lower_retreat_m": 491.4,
        "upper_retreat_m": 531.4
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "baseline",
        "central_km2": 7.247,
        "central_retreat_m": 562.1,
        "lower_km2": 7.117,
        "upper_km2": 7.377,
        "lower_retreat_m": 538.1,
        "upper_retreat_m": 586.1
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "baseline",
        "central_km2": 7.183,
        "central_retreat_m": 607.8,
        "lower_km2": 7.033,
        "upper_km2": 7.333,
        "lower_retreat_m": 579.8,
        "upper_retreat_m": 635.8
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "baseline",
        "central_km2": 7.109,
        "central_retreat_m": 656.5,
        "lower_km2": 6.939,
        "upper_km2": 7.279,
        "lower_retreat_m": 624.5,
        "upper_retreat_m": 688.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.34,
        "rank": 1
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.21,
        "rank": 2
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.17,
        "rank": 3
      },
      {
        "predictor_id": "lake_area_change",
        "contribution": 0.12,
        "rank": 4
      },
      {
        "predictor_id": "snow_cover_duration",
        "contribution": -0.09,
        "rank": 5
      },
      {
        "predictor_id": "debris_cover_fraction",
        "contribution": -0.08,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "baseline",
      "label": "Baseline continuation",
      "horizon_years": 5,
      "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
      "delta_summer_temp_C": 0.0,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": 0.0,
      "note": "Baseline continuation"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "baseline",
        "central_km2": 7.398,
        "central_retreat_m": 461.1,
        "lower_km2": 7.283,
        "upper_km2": 7.513,
        "lower_retreat_m": 441.1,
        "upper_retreat_m": 481.1
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "baseline",
        "central_km2": 7.326,
        "central_retreat_m": 507.2,
        "lower_km2": 7.186,
        "upper_km2": 7.466,
        "lower_retreat_m": 482.2,
        "upper_retreat_m": 532.2
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "baseline",
        "central_km2": 7.254,
        "central_retreat_m": 553.3,
        "lower_km2": 7.089,
        "upper_km2": 7.419,
        "lower_retreat_m": 523.3,
        "upper_retreat_m": 583.3
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "baseline",
        "central_km2": 7.182,
        "central_retreat_m": 599.4,
        "lower_km2": 6.992,
        "upper_km2": 7.372,
        "lower_retreat_m": 564.4,
        "upper_retreat_m": 634.4
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "baseline",
        "central_km2": 7.11,
        "central_retreat_m": 645.5,
        "lower_km2": 6.895,
        "upper_km2": 7.325,
        "lower_retreat_m": 605.5,
        "upper_retreat_m": 685.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "warmer_summer",
      "label": "Warmer-summer scenario",
      "horizon_years": 5,
      "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
      "delta_summer_temp_C": 1.2,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": -0.02,
      "note": "Warmer-summer scenario"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "warmer_summer",
        "central_km2": 7.366,
        "central_retreat_m": 481.4,
        "lower_km2": 7.276,
        "upper_km2": 7.456,
        "lower_retreat_m": 465.4,
        "upper_retreat_m": 497.4
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "warmer_summer",
        "central_km2": 7.277,
        "central_retreat_m": 544.8,
        "lower_km2": 7.167,
        "upper_km2": 7.387,
        "lower_retreat_m": 524.8,
        "upper_retreat_m": 564.8
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "warmer_summer",
        "central_km2": 7.175,
        "central_retreat_m": 612.2,
        "lower_km2": 7.045,
        "upper_km2": 7.305,
        "lower_retreat_m": 588.2,
        "upper_retreat_m": 636.2
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "warmer_summer",
        "central_km2": 7.087,
        "central_retreat_m": 674.6,
        "lower_km2": 6.937,
        "upper_km2": 7.237,
        "lower_retreat_m": 646.6,
        "upper_retreat_m": 702.6
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "warmer_summer",
        "central_km2": 6.989,
        "central_retreat_m": 740.0,
        "lower_km2": 6.819,
        "upper_km2": 7.159,
        "lower_retreat_m": 708.0,
        "upper_retreat_m": 772.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.551,
        "rank": 1
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.284,
        "rank": 2
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.23,
        "rank": 3
      },
      {
        "predictor_id": "lake_area_change",
        "contribution": 0.162,
        "rank": 4
      },
      {
        "predictor_id": "snow_cover_duration",
        "contribution": -0.121,
        "rank": 5
      },
      {
        "predictor_id": "debris_cover_fraction",
        "contribution": -0.108,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "warmer_summer",
      "label": "Warmer-summer scenario",
      "horizon_years": 5,
      "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
      "delta_summer_temp_C": 1.2,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": -0.02,
      "note": "Warmer-summer scenario"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "warmer_summer",
        "central_km2": 7.387,
        "central_retreat_m": 468.0,
        "lower_km2": 7.272,
        "upper_km2": 7.502,
        "lower_retreat_m": 448.0,
        "upper_retreat_m": 488.0
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "warmer_summer",
        "central_km2": 7.304,
        "central_retreat_m": 521.0,
        "lower_km2": 7.164,
        "upper_km2": 7.444,
        "lower_retreat_m": 496.0,
        "upper_retreat_m": 546.0
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "warmer_summer",
        "central_km2": 7.221,
        "central_retreat_m": 574.0,
        "lower_km2": 7.056,
        "upper_km2": 7.386,
        "lower_retreat_m": 544.0,
        "upper_retreat_m": 604.0
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "warmer_summer",
        "central_km2": 7.138,
        "central_retreat_m": 627.0,
        "lower_km2": 6.948,
        "upper_km2": 7.328,
        "lower_retreat_m": 592.0,
        "upper_retreat_m": 662.0
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "warmer_summer",
        "central_km2": 7.055,
        "central_retreat_m": 680.0,
        "lower_km2": 6.84,
        "upper_km2": 7.27,
        "lower_retreat_m": 640.0,
        "upper_retreat_m": 720.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "high_melt",
      "label": "High-melt scenario",
      "horizon_years": 5,
      "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
      "delta_summer_temp_C": 1.8,
      "delta_precipitation_percent": -8.0,
      "delta_albedo": -0.04,
      "note": "High-melt scenario"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "high_melt",
        "central_km2": 7.345,
        "central_retreat_m": 495.8,
        "lower_km2": 7.235,
        "upper_km2": 7.455,
        "lower_retreat_m": 473.8,
        "upper_retreat_m": 517.8
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "high_melt",
        "central_km2": 7.235,
        "central_retreat_m": 573.6,
        "lower_km2": 7.105,
        "upper_km2": 7.365,
        "lower_retreat_m": 547.6,
        "upper_retreat_m": 599.6
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "high_melt",
        "central_km2": 7.112,
        "central_retreat_m": 655.4,
        "lower_km2": 6.962,
        "upper_km2": 7.262,
        "lower_retreat_m": 625.4,
        "upper_retreat_m": 685.4
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "high_melt",
        "central_km2": 7.003,
        "central_retreat_m": 732.2,
        "lower_km2": 6.833,
        "upper_km2": 7.173,
        "lower_retreat_m": 698.2,
        "upper_retreat_m": 766.2
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "high_melt",
        "central_km2": 6.884,
        "central_retreat_m": 812.0,
        "lower_km2": 6.694,
        "upper_km2": 7.074,
        "lower_retreat_m": 774.0,
        "upper_retreat_m": 850.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.785,
        "rank": 1
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.346,
        "rank": 2
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.281,
        "rank": 3
      },
      {
        "predictor_id": "lake_area_change",
        "contribution": 0.198,
        "rank": 4
      },
      {
        "predictor_id": "snow_cover_duration",
        "contribution": -0.148,
        "rank": 5
      },
      {
        "predictor_id": "debris_cover_fraction",
        "contribution": -0.132,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "high_melt",
      "label": "High-melt scenario",
      "horizon_years": 5,
      "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
      "delta_summer_temp_C": 1.8,
      "delta_precipitation_percent": -8.0,
      "delta_albedo": -0.04,
      "note": "High-melt scenario"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "high_melt",
        "central_km2": 7.38,
        "central_retreat_m": 472.6,
        "lower_km2": 7.265,
        "upper_km2": 7.495,
        "lower_retreat_m": 452.6,
        "upper_retreat_m": 492.6
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "high_melt",
        "central_km2": 7.29,
        "central_retreat_m": 530.2,
        "lower_km2": 7.15,
        "upper_km2": 7.43,
        "lower_retreat_m": 505.2,
        "upper_retreat_m": 555.2
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "high_melt",
        "central_km2": 7.2,
        "central_retreat_m": 587.8,
        "lower_km2": 7.035,
        "upper_km2": 7.365,
        "lower_retreat_m": 557.8,
        "upper_retreat_m": 617.8
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "high_melt",
        "central_km2": 7.11,
        "central_retreat_m": 645.4,
        "lower_km2": 6.92,
        "upper_km2": 7.3,
        "lower_retreat_m": 610.4,
        "upper_retreat_m": 680.4
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "high_melt",
        "central_km2": 7.02,
        "central_retreat_m": 703.0,
        "lower_km2": 6.805,
        "upper_km2": 7.235,
        "lower_retreat_m": 663.0,
        "upper_retreat_m": 743.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "baseline",
      "label": "Baseline continuation",
      "horizon_years": 5,
      "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
      "delta_summer_temp_C": 0.0,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": 0.0,
      "note": "Baseline continuation"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "baseline",
        "central_km2": 6.379,
        "central_retreat_m": 331.4,
        "lower_km2": 6.289,
        "upper_km2": 6.469,
        "lower_retreat_m": 315.4,
        "upper_retreat_m": 347.4
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "baseline",
        "central_km2": 6.333,
        "central_retreat_m": 364.8,
        "lower_km2": 6.223,
        "upper_km2": 6.443,
        "lower_retreat_m": 344.8,
        "upper_retreat_m": 384.8
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "baseline",
        "central_km2": 6.274,
        "central_retreat_m": 402.2,
        "lower_km2": 6.144,
        "upper_km2": 6.404,
        "lower_retreat_m": 378.2,
        "upper_retreat_m": 426.2
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "baseline",
        "central_km2": 6.229,
        "central_retreat_m": 434.6,
        "lower_km2": 6.079,
        "upper_km2": 6.379,
        "lower_retreat_m": 406.6,
        "upper_retreat_m": 462.6
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "baseline",
        "central_km2": 6.174,
        "central_retreat_m": 470.0,
        "lower_km2": 6.004,
        "upper_km2": 6.344,
        "lower_retreat_m": 438.0,
        "upper_retreat_m": 502.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.26,
        "rank": 1
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.19,
        "rank": 2
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.15,
        "rank": 3
      },
      {
        "predictor_id": "snow_cover_duration",
        "contribution": -0.11,
        "rank": 4
      },
      {
        "predictor_id": "precipitation",
        "contribution": -0.07,
        "rank": 5
      },
      {
        "predictor_id": "lake_proximity",
        "contribution": 0.06,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "baseline",
      "label": "Baseline continuation",
      "horizon_years": 5,
      "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
      "delta_summer_temp_C": 0.0,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": 0.0,
      "note": "Baseline continuation"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "baseline",
        "central_km2": 6.387,
        "central_retreat_m": 327.8,
        "lower_km2": 6.272,
        "upper_km2": 6.502,
        "lower_retreat_m": 307.8,
        "upper_retreat_m": 347.8
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "baseline",
        "central_km2": 6.334,
        "central_retreat_m": 360.6,
        "lower_km2": 6.194,
        "upper_km2": 6.474,
        "lower_retreat_m": 335.6,
        "upper_retreat_m": 385.6
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "baseline",
        "central_km2": 6.281,
        "central_retreat_m": 393.4,
        "lower_km2": 6.116,
        "upper_km2": 6.446,
        "lower_retreat_m": 363.4,
        "upper_retreat_m": 423.4
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "baseline",
        "central_km2": 6.228,
        "central_retreat_m": 426.2,
        "lower_km2": 6.038,
        "upper_km2": 6.418,
        "lower_retreat_m": 391.2,
        "upper_retreat_m": 461.2
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "baseline",
        "central_km2": 6.175,
        "central_retreat_m": 459.0,
        "lower_km2": 5.96,
        "upper_km2": 6.39,
        "lower_retreat_m": 419.0,
        "upper_retreat_m": 499.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "warmer_summer",
      "label": "Warmer-summer scenario",
      "horizon_years": 5,
      "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
      "delta_summer_temp_C": 1.2,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": -0.02,
      "note": "Warmer-summer scenario"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "warmer_summer",
        "central_km2": 6.361,
        "central_retreat_m": 343.5,
        "lower_km2": 6.271,
        "upper_km2": 6.451,
        "lower_retreat_m": 327.5,
        "upper_retreat_m": 359.5
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "warmer_summer",
        "central_km2": 6.297,
        "central_retreat_m": 389.0,
        "lower_km2": 6.187,
        "upper_km2": 6.407,
        "lower_retreat_m": 369.0,
        "upper_retreat_m": 409.0
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "warmer_summer",
        "central_km2": 6.22,
        "central_retreat_m": 438.5,
        "lower_km2": 6.09,
        "upper_km2": 6.35,
        "lower_retreat_m": 414.5,
        "upper_retreat_m": 462.5
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "warmer_summer",
        "central_km2": 6.157,
        "central_retreat_m": 483.0,
        "lower_km2": 6.007,
        "upper_km2": 6.307,
        "lower_retreat_m": 455.0,
        "upper_retreat_m": 511.0
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "warmer_summer",
        "central_km2": 6.084,
        "central_retreat_m": 530.5,
        "lower_km2": 5.914,
        "upper_km2": 6.254,
        "lower_retreat_m": 498.5,
        "upper_retreat_m": 562.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.421,
        "rank": 1
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.257,
        "rank": 2
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.203,
        "rank": 3
      },
      {
        "predictor_id": "snow_cover_duration",
        "contribution": -0.149,
        "rank": 4
      },
      {
        "predictor_id": "precipitation",
        "contribution": -0.095,
        "rank": 5
      },
      {
        "predictor_id": "lake_proximity",
        "contribution": 0.081,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "warmer_summer",
      "label": "Warmer-summer scenario",
      "horizon_years": 5,
      "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
      "delta_summer_temp_C": 1.2,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": -0.02,
      "note": "Warmer-summer scenario"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "warmer_summer",
        "central_km2": 6.379,
        "central_retreat_m": 332.7,
        "lower_km2": 6.264,
        "upper_km2": 6.494,
        "lower_retreat_m": 312.7,
        "upper_retreat_m": 352.7
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "warmer_summer",
        "central_km2": 6.318,
        "central_retreat_m": 370.4,
        "lower_km2": 6.178,
        "upper_km2": 6.458,
        "lower_retreat_m": 345.4,
        "upper_retreat_m": 395.4
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "warmer_summer",
        "central_km2": 6.257,
        "central_retreat_m": 408.1,
        "lower_km2": 6.092,
        "upper_km2": 6.422,
        "lower_retreat_m": 378.1,
        "upper_retreat_m": 438.1
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "warmer_summer",
        "central_km2": 6.196,
        "central_retreat_m": 445.8,
        "lower_km2": 6.006,
        "upper_km2": 6.386,
        "lower_retreat_m": 410.8,
        "upper_retreat_m": 480.8
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "warmer_summer",
        "central_km2": 6.135,
        "central_retreat_m": 483.5,
        "lower_km2": 5.92,
        "upper_km2": 6.35,
        "lower_retreat_m": 443.5,
        "upper_retreat_m": 523.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "high_melt",
      "label": "High-melt scenario",
      "horizon_years": 5,
      "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
      "delta_summer_temp_C": 1.8,
      "delta_precipitation_percent": -8.0,
      "delta_albedo": -0.04,
      "note": "High-melt scenario"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "high_melt",
        "central_km2": 6.346,
        "central_retreat_m": 353.8,
        "lower_km2": 6.236,
        "upper_km2": 6.456,
        "lower_retreat_m": 331.8,
        "upper_retreat_m": 375.8
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "high_melt",
        "central_km2": 6.267,
        "central_retreat_m": 409.6,
        "lower_km2": 6.137,
        "upper_km2": 6.397,
        "lower_retreat_m": 383.6,
        "upper_retreat_m": 435.6
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "high_melt",
        "central_km2": 6.175,
        "central_retreat_m": 469.4,
        "lower_km2": 6.025,
        "upper_km2": 6.325,
        "lower_retreat_m": 439.4,
        "upper_retreat_m": 499.4
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "high_melt",
        "central_km2": 6.097,
        "central_retreat_m": 524.2,
        "lower_km2": 5.927,
        "upper_km2": 6.267,
        "lower_retreat_m": 490.2,
        "upper_retreat_m": 558.2
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "high_melt",
        "central_km2": 6.009,
        "central_retreat_m": 582.0,
        "lower_km2": 5.819,
        "upper_km2": 6.199,
        "lower_retreat_m": 544.0,
        "upper_retreat_m": 620.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.601,
        "rank": 1
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.314,
        "rank": 2
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.247,
        "rank": 3
      },
      {
        "predictor_id": "snow_cover_duration",
        "contribution": -0.181,
        "rank": 4
      },
      {
        "predictor_id": "precipitation",
        "contribution": -0.116,
        "rank": 5
      },
      {
        "predictor_id": "lake_proximity",
        "contribution": 0.099,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "high_melt",
      "label": "High-melt scenario",
      "horizon_years": 5,
      "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
      "delta_summer_temp_C": 1.8,
      "delta_precipitation_percent": -8.0,
      "delta_albedo": -0.04,
      "note": "High-melt scenario"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "high_melt",
        "central_km2": 6.373,
        "central_retreat_m": 336.0,
        "lower_km2": 6.258,
        "upper_km2": 6.488,
        "lower_retreat_m": 316.0,
        "upper_retreat_m": 356.0
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "high_melt",
        "central_km2": 6.306,
        "central_retreat_m": 377.0,
        "lower_km2": 6.166,
        "upper_km2": 6.446,
        "lower_retreat_m": 352.0,
        "upper_retreat_m": 402.0
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "high_melt",
        "central_km2": 6.239,
        "central_retreat_m": 418.0,
        "lower_km2": 6.074,
        "upper_km2": 6.404,
        "lower_retreat_m": 388.0,
        "upper_retreat_m": 448.0
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "high_melt",
        "central_km2": 6.172,
        "central_retreat_m": 459.0,
        "lower_km2": 5.982,
        "upper_km2": 6.362,
        "lower_retreat_m": 424.0,
        "upper_retreat_m": 494.0
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "high_melt",
        "central_km2": 6.105,
        "central_retreat_m": 500.0,
        "lower_km2": 5.89,
        "upper_km2": 6.32,
        "lower_retreat_m": 460.0,
        "upper_retreat_m": 540.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "baseline",
      "label": "Baseline continuation",
      "horizon_years": 5,
      "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
      "delta_summer_temp_C": 0.0,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": 0.0,
      "note": "Baseline continuation"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "baseline",
        "central_km2": 15.306,
        "central_retreat_m": 431.4,
        "lower_km2": 15.216,
        "upper_km2": 15.396,
        "lower_retreat_m": 415.4,
        "upper_retreat_m": 447.4
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "baseline",
        "central_km2": 15.197,
        "central_retreat_m": 474.8,
        "lower_km2": 15.087,
        "upper_km2": 15.307,
        "lower_retreat_m": 454.8,
        "upper_retreat_m": 494.8
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "baseline",
        "central_km2": 15.075,
        "central_retreat_m": 522.2,
        "lower_km2": 14.945,
        "upper_km2": 15.205,
        "lower_retreat_m": 498.2,
        "upper_retreat_m": 546.2
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "baseline",
        "central_km2": 14.967,
        "central_retreat_m": 564.6,
        "lower_km2": 14.817,
        "upper_km2": 15.117,
        "lower_retreat_m": 536.6,
        "upper_retreat_m": 592.6
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "baseline",
        "central_km2": 14.849,
        "central_retreat_m": 610.0,
        "lower_km2": 14.679,
        "upper_km2": 15.019,
        "lower_retreat_m": 578.0,
        "upper_retreat_m": 642.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.29,
        "rank": 1
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.2,
        "rank": 2
      },
      {
        "predictor_id": "ice_velocity",
        "contribution": 0.17,
        "rank": 3
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.14,
        "rank": 4
      },
      {
        "predictor_id": "debris_cover_fraction",
        "contribution": -0.09,
        "rank": 5
      },
      {
        "predictor_id": "snowfall",
        "contribution": -0.06,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "baseline",
      "label": "Baseline continuation",
      "horizon_years": 5,
      "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
      "delta_summer_temp_C": 0.0,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": 0.0,
      "note": "Baseline continuation"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "baseline",
        "central_km2": 15.313,
        "central_retreat_m": 427.8,
        "lower_km2": 15.198,
        "upper_km2": 15.428,
        "lower_retreat_m": 407.8,
        "upper_retreat_m": 447.8
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "baseline",
        "central_km2": 15.196,
        "central_retreat_m": 470.6,
        "lower_km2": 15.056,
        "upper_km2": 15.336,
        "lower_retreat_m": 445.6,
        "upper_retreat_m": 495.6
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "baseline",
        "central_km2": 15.079,
        "central_retreat_m": 513.4,
        "lower_km2": 14.914,
        "upper_km2": 15.244,
        "lower_retreat_m": 483.4,
        "upper_retreat_m": 543.4
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "baseline",
        "central_km2": 14.962,
        "central_retreat_m": 556.2,
        "lower_km2": 14.772,
        "upper_km2": 15.152,
        "lower_retreat_m": 521.2,
        "upper_retreat_m": 591.2
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "baseline",
        "central_km2": 14.845,
        "central_retreat_m": 599.0,
        "lower_km2": 14.63,
        "upper_km2": 15.06,
        "lower_retreat_m": 559.0,
        "upper_retreat_m": 639.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "warmer_summer",
      "label": "Warmer-summer scenario",
      "horizon_years": 5,
      "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
      "delta_summer_temp_C": 1.2,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": -0.02,
      "note": "Warmer-summer scenario"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "warmer_summer",
        "central_km2": 15.266,
        "central_retreat_m": 446.9,
        "lower_km2": 15.176,
        "upper_km2": 15.356,
        "lower_retreat_m": 430.9,
        "upper_retreat_m": 462.9
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "warmer_summer",
        "central_km2": 15.117,
        "central_retreat_m": 505.8,
        "lower_km2": 15.007,
        "upper_km2": 15.227,
        "lower_retreat_m": 485.8,
        "upper_retreat_m": 525.8
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "warmer_summer",
        "central_km2": 14.955,
        "central_retreat_m": 568.7,
        "lower_km2": 14.825,
        "upper_km2": 15.085,
        "lower_retreat_m": 544.7,
        "upper_retreat_m": 592.7
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "warmer_summer",
        "central_km2": 14.807,
        "central_retreat_m": 626.6,
        "lower_km2": 14.657,
        "upper_km2": 14.957,
        "lower_retreat_m": 598.6,
        "upper_retreat_m": 654.6
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "warmer_summer",
        "central_km2": 14.649,
        "central_retreat_m": 687.5,
        "lower_km2": 14.479,
        "upper_km2": 14.819,
        "lower_retreat_m": 655.5,
        "upper_retreat_m": 719.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.47,
        "rank": 1
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.27,
        "rank": 2
      },
      {
        "predictor_id": "ice_velocity",
        "contribution": 0.23,
        "rank": 3
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.189,
        "rank": 4
      },
      {
        "predictor_id": "debris_cover_fraction",
        "contribution": -0.121,
        "rank": 5
      },
      {
        "predictor_id": "snowfall",
        "contribution": -0.081,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "warmer_summer",
      "label": "Warmer-summer scenario",
      "horizon_years": 5,
      "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
      "delta_summer_temp_C": 1.2,
      "delta_precipitation_percent": 0.0,
      "delta_albedo": -0.02,
      "note": "Warmer-summer scenario"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "warmer_summer",
        "central_km2": 15.296,
        "central_retreat_m": 434.2,
        "lower_km2": 15.181,
        "upper_km2": 15.411,
        "lower_retreat_m": 414.2,
        "upper_retreat_m": 454.2
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "warmer_summer",
        "central_km2": 15.162,
        "central_retreat_m": 483.4,
        "lower_km2": 15.022,
        "upper_km2": 15.302,
        "lower_retreat_m": 458.4,
        "upper_retreat_m": 508.4
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "warmer_summer",
        "central_km2": 15.028,
        "central_retreat_m": 532.6,
        "lower_km2": 14.863,
        "upper_km2": 15.193,
        "lower_retreat_m": 502.6,
        "upper_retreat_m": 562.6
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "warmer_summer",
        "central_km2": 14.894,
        "central_retreat_m": 581.8,
        "lower_km2": 14.704,
        "upper_km2": 15.084,
        "lower_retreat_m": 546.8,
        "upper_retreat_m": 616.8
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "warmer_summer",
        "central_km2": 14.76,
        "central_retreat_m": 631.0,
        "lower_km2": 14.545,
        "upper_km2": 14.975,
        "lower_retreat_m": 591.0,
        "upper_retreat_m": 671.0
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "model_tier": "gradient_boosting",
    "model_version": "phase-2-gb-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "high_melt",
      "label": "High-melt scenario",
      "horizon_years": 5,
      "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
      "delta_summer_temp_C": 1.8,
      "delta_precipitation_percent": -8.0,
      "delta_albedo": -0.04,
      "note": "High-melt scenario"
    },
    "confidence_level": 0.8,
    "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
    "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "high_melt",
        "central_km2": 15.231,
        "central_retreat_m": 460.3,
        "lower_km2": 15.121,
        "upper_km2": 15.341,
        "lower_retreat_m": 438.3,
        "upper_retreat_m": 482.3
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "high_melt",
        "central_km2": 15.047,
        "central_retreat_m": 532.6,
        "lower_km2": 14.917,
        "upper_km2": 15.177,
        "lower_retreat_m": 506.6,
        "upper_retreat_m": 558.6
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "high_melt",
        "central_km2": 14.85,
        "central_retreat_m": 608.9,
        "lower_km2": 14.7,
        "upper_km2": 15.0,
        "lower_retreat_m": 578.9,
        "upper_retreat_m": 638.9
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "high_melt",
        "central_km2": 14.667,
        "central_retreat_m": 680.2,
        "lower_km2": 14.497,
        "upper_km2": 14.837,
        "lower_retreat_m": 646.2,
        "upper_retreat_m": 714.2
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "high_melt",
        "central_km2": 14.474,
        "central_retreat_m": 754.5,
        "lower_km2": 14.284,
        "upper_km2": 14.664,
        "lower_retreat_m": 716.5,
        "upper_retreat_m": 792.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "summer_temp",
        "contribution": 0.67,
        "rank": 1
      },
      {
        "predictor_id": "albedo",
        "contribution": 0.33,
        "rank": 2
      },
      {
        "predictor_id": "ice_velocity",
        "contribution": 0.281,
        "rank": 3
      },
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.231,
        "rank": 4
      },
      {
        "predictor_id": "debris_cover_fraction",
        "contribution": -0.148,
        "rank": 5
      },
      {
        "predictor_id": "snowfall",
        "contribution": -0.099,
        "rank": 6
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "model_tier": "linear_trend",
    "model_version": "phase-2-linear-v1.0",
    "input_period": {
      "start": "2016-10-15",
      "end": "2025-10-15"
    },
    "scenario": {
      "id": "high_melt",
      "label": "High-melt scenario",
      "horizon_years": 5,
      "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
      "delta_summer_temp_C": 1.8,
      "delta_precipitation_percent": -8.0,
      "delta_albedo": -0.04,
      "note": "High-melt scenario"
    },
    "confidence_level": 0.8,
    "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
    "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
    "points": [
      {
        "date": "2026-10-15",
        "year": 2026,
        "scenario_id": "high_melt",
        "central_km2": 15.284,
        "central_retreat_m": 438.5,
        "lower_km2": 15.169,
        "upper_km2": 15.399,
        "lower_retreat_m": 418.5,
        "upper_retreat_m": 458.5
      },
      {
        "date": "2027-10-15",
        "year": 2027,
        "scenario_id": "high_melt",
        "central_km2": 15.138,
        "central_retreat_m": 492.0,
        "lower_km2": 14.998,
        "upper_km2": 15.278,
        "lower_retreat_m": 467.0,
        "upper_retreat_m": 517.0
      },
      {
        "date": "2028-10-15",
        "year": 2028,
        "scenario_id": "high_melt",
        "central_km2": 14.992,
        "central_retreat_m": 545.5,
        "lower_km2": 14.827,
        "upper_km2": 15.157,
        "lower_retreat_m": 515.5,
        "upper_retreat_m": 575.5
      },
      {
        "date": "2029-10-15",
        "year": 2029,
        "scenario_id": "high_melt",
        "central_km2": 14.846,
        "central_retreat_m": 599.0,
        "lower_km2": 14.656,
        "upper_km2": 15.036,
        "lower_retreat_m": 564.0,
        "upper_retreat_m": 634.0
      },
      {
        "date": "2030-10-15",
        "year": 2030,
        "scenario_id": "high_melt",
        "central_km2": 14.7,
        "central_retreat_m": 652.5,
        "lower_km2": 14.485,
        "upper_km2": 14.915,
        "lower_retreat_m": 612.5,
        "upper_retreat_m": 692.5
      }
    ],
    "predictor_contributions": [
      {
        "predictor_id": "prior_retreat_rate",
        "contribution": 0.72,
        "rank": 1
      },
      {
        "predictor_id": "summer_temp",
        "contribution": 0.28,
        "rank": 2
      }
    ],
    "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
  }
];

export const FORECASTS_BY_SITE: Record<string, ForecastResult[]> = {
  "south-lhonak": [
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "baseline",
            "label": "Baseline continuation",
            "horizon_years": 5,
            "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
            "delta_summer_temp_C": 0.0,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": 0.0,
            "note": "Baseline continuation"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "baseline",
                "central_km2": 12.83,
                "central_retreat_m": 613.7,
                "lower_km2": 12.74,
                "upper_km2": 12.92,
                "lower_retreat_m": 597.7,
                "upper_retreat_m": 629.7
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "baseline",
                "central_km2": 12.695,
                "central_retreat_m": 675.4,
                "lower_km2": 12.585,
                "upper_km2": 12.805,
                "lower_retreat_m": 655.4,
                "upper_retreat_m": 695.4
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "baseline",
                "central_km2": 12.547,
                "central_retreat_m": 741.1,
                "lower_km2": 12.417,
                "upper_km2": 12.677,
                "lower_retreat_m": 717.1,
                "upper_retreat_m": 765.1
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "baseline",
                "central_km2": 12.413,
                "central_retreat_m": 801.8,
                "lower_km2": 12.263,
                "upper_km2": 12.563,
                "lower_retreat_m": 773.8,
                "upper_retreat_m": 829.8
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "baseline",
                "central_km2": 12.269,
                "central_retreat_m": 865.5,
                "lower_km2": 12.099,
                "upper_km2": 12.439,
                "lower_retreat_m": 833.5,
                "upper_retreat_m": 897.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.31,
                "rank": 1
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.22,
                "rank": 2
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.18,
                "rank": 3
            },
            {
                "predictor_id": "debris_cover_fraction",
                "contribution": -0.12,
                "rank": 4
            },
            {
                "predictor_id": "lake_area_change",
                "contribution": 0.09,
                "rank": 5
            },
            {
                "predictor_id": "snow_cover_duration",
                "contribution": -0.07,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "baseline",
            "label": "Baseline continuation",
            "horizon_years": 5,
            "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
            "delta_summer_temp_C": 0.0,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": 0.0,
            "note": "Baseline continuation"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "baseline",
                "central_km2": 12.838,
                "central_retreat_m": 610.0,
                "lower_km2": 12.723,
                "upper_km2": 12.953,
                "lower_retreat_m": 590.0,
                "upper_retreat_m": 630.0
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "baseline",
                "central_km2": 12.696,
                "central_retreat_m": 671.0,
                "lower_km2": 12.556,
                "upper_km2": 12.836,
                "lower_retreat_m": 646.0,
                "upper_retreat_m": 696.0
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "baseline",
                "central_km2": 12.554,
                "central_retreat_m": 732.0,
                "lower_km2": 12.389,
                "upper_km2": 12.719,
                "lower_retreat_m": 702.0,
                "upper_retreat_m": 762.0
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "baseline",
                "central_km2": 12.412,
                "central_retreat_m": 793.0,
                "lower_km2": 12.222,
                "upper_km2": 12.602,
                "lower_retreat_m": 758.0,
                "upper_retreat_m": 828.0
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "baseline",
                "central_km2": 12.27,
                "central_retreat_m": 854.0,
                "lower_km2": 12.055,
                "upper_km2": 12.485,
                "lower_retreat_m": 814.0,
                "upper_retreat_m": 894.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "warmer_summer",
            "label": "Warmer-summer scenario",
            "horizon_years": 5,
            "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
            "delta_summer_temp_C": 1.2,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": -0.02,
            "note": "Warmer-summer scenario"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "warmer_summer",
                "central_km2": 12.781,
                "central_retreat_m": 635.6,
                "lower_km2": 12.691,
                "upper_km2": 12.871,
                "lower_retreat_m": 619.6,
                "upper_retreat_m": 651.6
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "warmer_summer",
                "central_km2": 12.597,
                "central_retreat_m": 719.2,
                "lower_km2": 12.487,
                "upper_km2": 12.707,
                "lower_retreat_m": 699.2,
                "upper_retreat_m": 739.2
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "warmer_summer",
                "central_km2": 12.4,
                "central_retreat_m": 806.8,
                "lower_km2": 12.27,
                "upper_km2": 12.53,
                "lower_retreat_m": 782.8,
                "upper_retreat_m": 830.8
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "warmer_summer",
                "central_km2": 12.217,
                "central_retreat_m": 889.4,
                "lower_km2": 12.067,
                "upper_km2": 12.367,
                "lower_retreat_m": 861.4,
                "upper_retreat_m": 917.4
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "warmer_summer",
                "central_km2": 12.024,
                "central_retreat_m": 975.0,
                "lower_km2": 11.854,
                "upper_km2": 12.194,
                "lower_retreat_m": 943.0,
                "upper_retreat_m": 1007.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.502,
                "rank": 1
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.297,
                "rank": 2
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.243,
                "rank": 3
            },
            {
                "predictor_id": "debris_cover_fraction",
                "contribution": -0.162,
                "rank": 4
            },
            {
                "predictor_id": "lake_area_change",
                "contribution": 0.121,
                "rank": 5
            },
            {
                "predictor_id": "snow_cover_duration",
                "contribution": -0.095,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "warmer_summer",
            "label": "Warmer-summer scenario",
            "horizon_years": 5,
            "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
            "delta_summer_temp_C": 1.2,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": -0.02,
            "note": "Warmer-summer scenario"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "warmer_summer",
                "central_km2": 12.816,
                "central_retreat_m": 619.2,
                "lower_km2": 12.701,
                "upper_km2": 12.931,
                "lower_retreat_m": 599.2,
                "upper_retreat_m": 639.2
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "warmer_summer",
                "central_km2": 12.652,
                "central_retreat_m": 689.4,
                "lower_km2": 12.512,
                "upper_km2": 12.792,
                "lower_retreat_m": 664.4,
                "upper_retreat_m": 714.4
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "warmer_summer",
                "central_km2": 12.488,
                "central_retreat_m": 759.6,
                "lower_km2": 12.323,
                "upper_km2": 12.653,
                "lower_retreat_m": 729.6,
                "upper_retreat_m": 789.6
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "warmer_summer",
                "central_km2": 12.324,
                "central_retreat_m": 829.8,
                "lower_km2": 12.134,
                "upper_km2": 12.514,
                "lower_retreat_m": 794.8,
                "upper_retreat_m": 864.8
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "warmer_summer",
                "central_km2": 12.16,
                "central_retreat_m": 900.0,
                "lower_km2": 11.945,
                "upper_km2": 12.375,
                "lower_retreat_m": 860.0,
                "upper_retreat_m": 940.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "high_melt",
            "label": "High-melt scenario",
            "horizon_years": 5,
            "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
            "delta_summer_temp_C": 1.8,
            "delta_precipitation_percent": -8.0,
            "delta_albedo": -0.04,
            "note": "High-melt scenario"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "high_melt",
                "central_km2": 12.739,
                "central_retreat_m": 654.4,
                "lower_km2": 12.629,
                "upper_km2": 12.849,
                "lower_retreat_m": 632.4,
                "upper_retreat_m": 676.4
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "high_melt",
                "central_km2": 12.513,
                "central_retreat_m": 756.8,
                "lower_km2": 12.383,
                "upper_km2": 12.643,
                "lower_retreat_m": 730.8,
                "upper_retreat_m": 782.8
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "high_melt",
                "central_km2": 12.274,
                "central_retreat_m": 863.2,
                "lower_km2": 12.124,
                "upper_km2": 12.424,
                "lower_retreat_m": 833.2,
                "upper_retreat_m": 893.2
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "high_melt",
                "central_km2": 12.049,
                "central_retreat_m": 964.6,
                "lower_km2": 11.879,
                "upper_km2": 12.219,
                "lower_retreat_m": 930.6,
                "upper_retreat_m": 998.6
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "high_melt",
                "central_km2": 11.814,
                "central_retreat_m": 1069.0,
                "lower_km2": 11.624,
                "upper_km2": 12.004,
                "lower_retreat_m": 1031.0,
                "upper_retreat_m": 1107.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.716,
                "rank": 1
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.363,
                "rank": 2
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.297,
                "rank": 3
            },
            {
                "predictor_id": "debris_cover_fraction",
                "contribution": -0.198,
                "rank": 4
            },
            {
                "predictor_id": "lake_area_change",
                "contribution": 0.148,
                "rank": 5
            },
            {
                "predictor_id": "snow_cover_duration",
                "contribution": -0.116,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "high_melt",
            "label": "High-melt scenario",
            "horizon_years": 5,
            "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
            "delta_summer_temp_C": 1.8,
            "delta_precipitation_percent": -8.0,
            "delta_albedo": -0.04,
            "note": "High-melt scenario"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "high_melt",
                "central_km2": 12.802,
                "central_retreat_m": 625.3,
                "lower_km2": 12.687,
                "upper_km2": 12.917,
                "lower_retreat_m": 605.3,
                "upper_retreat_m": 645.3
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "high_melt",
                "central_km2": 12.624,
                "central_retreat_m": 701.6,
                "lower_km2": 12.484,
                "upper_km2": 12.764,
                "lower_retreat_m": 676.6,
                "upper_retreat_m": 726.6
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "high_melt",
                "central_km2": 12.446,
                "central_retreat_m": 777.9,
                "lower_km2": 12.281,
                "upper_km2": 12.611,
                "lower_retreat_m": 747.9,
                "upper_retreat_m": 807.9
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "high_melt",
                "central_km2": 12.268,
                "central_retreat_m": 854.2,
                "lower_km2": 12.078,
                "upper_km2": 12.458,
                "lower_retreat_m": 819.2,
                "upper_retreat_m": 889.2
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "high_melt",
                "central_km2": 12.09,
                "central_retreat_m": 930.5,
                "lower_km2": 11.875,
                "upper_km2": 12.305,
                "lower_retreat_m": 890.5,
                "upper_retreat_m": 970.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    }
],
  "tsho-rolpa": [
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "baseline",
            "label": "Baseline continuation",
            "horizon_years": 5,
            "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
            "delta_summer_temp_C": 0.0,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": 0.0,
            "note": "Baseline continuation"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "baseline",
                "central_km2": 16.868,
                "central_retreat_m": 362.5,
                "lower_km2": 16.778,
                "upper_km2": 16.958,
                "lower_retreat_m": 346.5,
                "upper_retreat_m": 378.5
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "baseline",
                "central_km2": 16.781,
                "central_retreat_m": 399.0,
                "lower_km2": 16.671,
                "upper_km2": 16.891,
                "lower_retreat_m": 379.0,
                "upper_retreat_m": 419.0
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "baseline",
                "central_km2": 16.681,
                "central_retreat_m": 439.5,
                "lower_km2": 16.551,
                "upper_km2": 16.811,
                "lower_retreat_m": 415.5,
                "upper_retreat_m": 463.5
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "baseline",
                "central_km2": 16.595,
                "central_retreat_m": 475.0,
                "lower_km2": 16.445,
                "upper_km2": 16.745,
                "lower_retreat_m": 447.0,
                "upper_retreat_m": 503.0
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "baseline",
                "central_km2": 16.499,
                "central_retreat_m": 513.5,
                "lower_km2": 16.329,
                "upper_km2": 16.669,
                "lower_retreat_m": 481.5,
                "upper_retreat_m": 545.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 1
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.19,
                "rank": 2
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.16,
                "rank": 3
            },
            {
                "predictor_id": "lake_proximity",
                "contribution": 0.11,
                "rank": 4
            },
            {
                "predictor_id": "precipitation",
                "contribution": -0.08,
                "rank": 5
            },
            {
                "predictor_id": "debris_cover_fraction",
                "contribution": -0.06,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "baseline",
            "label": "Baseline continuation",
            "horizon_years": 5,
            "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
            "delta_summer_temp_C": 0.0,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": 0.0,
            "note": "Baseline continuation"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "baseline",
                "central_km2": 16.876,
                "central_retreat_m": 358.9,
                "lower_km2": 16.761,
                "upper_km2": 16.991,
                "lower_retreat_m": 338.9,
                "upper_retreat_m": 378.9
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "baseline",
                "central_km2": 16.782,
                "central_retreat_m": 394.8,
                "lower_km2": 16.642,
                "upper_km2": 16.922,
                "lower_retreat_m": 369.8,
                "upper_retreat_m": 419.8
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "baseline",
                "central_km2": 16.688,
                "central_retreat_m": 430.7,
                "lower_km2": 16.523,
                "upper_km2": 16.853,
                "lower_retreat_m": 400.7,
                "upper_retreat_m": 460.7
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "baseline",
                "central_km2": 16.594,
                "central_retreat_m": 466.6,
                "lower_km2": 16.404,
                "upper_km2": 16.784,
                "lower_retreat_m": 431.6,
                "upper_retreat_m": 501.6
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "baseline",
                "central_km2": 16.5,
                "central_retreat_m": 502.5,
                "lower_km2": 16.285,
                "upper_km2": 16.715,
                "lower_retreat_m": 462.5,
                "upper_retreat_m": 542.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "warmer_summer",
            "label": "Warmer-summer scenario",
            "horizon_years": 5,
            "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
            "delta_summer_temp_C": 1.2,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": -0.02,
            "note": "Warmer-summer scenario"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "warmer_summer",
                "central_km2": 16.836,
                "central_retreat_m": 375.7,
                "lower_km2": 16.746,
                "upper_km2": 16.926,
                "lower_retreat_m": 359.7,
                "upper_retreat_m": 391.7
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "warmer_summer",
                "central_km2": 16.717,
                "central_retreat_m": 425.4,
                "lower_km2": 16.607,
                "upper_km2": 16.827,
                "lower_retreat_m": 405.4,
                "upper_retreat_m": 445.4
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "warmer_summer",
                "central_km2": 16.585,
                "central_retreat_m": 479.1,
                "lower_km2": 16.455,
                "upper_km2": 16.715,
                "lower_retreat_m": 455.1,
                "upper_retreat_m": 503.1
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "warmer_summer",
                "central_km2": 16.467,
                "central_retreat_m": 527.8,
                "lower_km2": 16.317,
                "upper_km2": 16.617,
                "lower_retreat_m": 499.8,
                "upper_retreat_m": 555.8
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "warmer_summer",
                "central_km2": 16.339,
                "central_retreat_m": 579.5,
                "lower_km2": 16.169,
                "upper_km2": 16.509,
                "lower_retreat_m": 547.5,
                "upper_retreat_m": 611.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.454,
                "rank": 1
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.257,
                "rank": 2
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.216,
                "rank": 3
            },
            {
                "predictor_id": "lake_proximity",
                "contribution": 0.149,
                "rank": 4
            },
            {
                "predictor_id": "precipitation",
                "contribution": -0.108,
                "rank": 5
            },
            {
                "predictor_id": "debris_cover_fraction",
                "contribution": -0.081,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "warmer_summer",
            "label": "Warmer-summer scenario",
            "horizon_years": 5,
            "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
            "delta_summer_temp_C": 1.2,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": -0.02,
            "note": "Warmer-summer scenario"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "warmer_summer",
                "central_km2": 16.861,
                "central_retreat_m": 364.3,
                "lower_km2": 16.746,
                "upper_km2": 16.976,
                "lower_retreat_m": 344.3,
                "upper_retreat_m": 384.3
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "warmer_summer",
                "central_km2": 16.752,
                "central_retreat_m": 405.6,
                "lower_km2": 16.612,
                "upper_km2": 16.892,
                "lower_retreat_m": 380.6,
                "upper_retreat_m": 430.6
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "warmer_summer",
                "central_km2": 16.643,
                "central_retreat_m": 446.9,
                "lower_km2": 16.478,
                "upper_km2": 16.808,
                "lower_retreat_m": 416.9,
                "upper_retreat_m": 476.9
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "warmer_summer",
                "central_km2": 16.534,
                "central_retreat_m": 488.2,
                "lower_km2": 16.344,
                "upper_km2": 16.724,
                "lower_retreat_m": 453.2,
                "upper_retreat_m": 523.2
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "warmer_summer",
                "central_km2": 16.425,
                "central_retreat_m": 529.5,
                "lower_km2": 16.21,
                "upper_km2": 16.64,
                "lower_retreat_m": 489.5,
                "upper_retreat_m": 569.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "high_melt",
            "label": "High-melt scenario",
            "horizon_years": 5,
            "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
            "delta_summer_temp_C": 1.8,
            "delta_precipitation_percent": -8.0,
            "delta_albedo": -0.04,
            "note": "High-melt scenario"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "high_melt",
                "central_km2": 16.808,
                "central_retreat_m": 386.9,
                "lower_km2": 16.698,
                "upper_km2": 16.918,
                "lower_retreat_m": 364.9,
                "upper_retreat_m": 408.9
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "high_melt",
                "central_km2": 16.661,
                "central_retreat_m": 447.8,
                "lower_km2": 16.531,
                "upper_km2": 16.791,
                "lower_retreat_m": 421.8,
                "upper_retreat_m": 473.8
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "high_melt",
                "central_km2": 16.501,
                "central_retreat_m": 512.7,
                "lower_km2": 16.351,
                "upper_km2": 16.651,
                "lower_retreat_m": 482.7,
                "upper_retreat_m": 542.7
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "high_melt",
                "central_km2": 16.355,
                "central_retreat_m": 572.6,
                "lower_km2": 16.185,
                "upper_km2": 16.525,
                "lower_retreat_m": 538.6,
                "upper_retreat_m": 606.6
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "high_melt",
                "central_km2": 16.199,
                "central_retreat_m": 635.5,
                "lower_km2": 16.009,
                "upper_km2": 16.389,
                "lower_retreat_m": 597.5,
                "upper_retreat_m": 673.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.647,
                "rank": 1
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.314,
                "rank": 2
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.264,
                "rank": 3
            },
            {
                "predictor_id": "lake_proximity",
                "contribution": 0.181,
                "rank": 4
            },
            {
                "predictor_id": "precipitation",
                "contribution": -0.132,
                "rank": 5
            },
            {
                "predictor_id": "debris_cover_fraction",
                "contribution": -0.099,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "high_melt",
            "label": "High-melt scenario",
            "horizon_years": 5,
            "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
            "delta_summer_temp_C": 1.8,
            "delta_precipitation_percent": -8.0,
            "delta_albedo": -0.04,
            "note": "High-melt scenario"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "high_melt",
                "central_km2": 16.852,
                "central_retreat_m": 367.9,
                "lower_km2": 16.737,
                "upper_km2": 16.967,
                "lower_retreat_m": 347.9,
                "upper_retreat_m": 387.9
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "high_melt",
                "central_km2": 16.734,
                "central_retreat_m": 412.8,
                "lower_km2": 16.594,
                "upper_km2": 16.874,
                "lower_retreat_m": 387.8,
                "upper_retreat_m": 437.8
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "high_melt",
                "central_km2": 16.616,
                "central_retreat_m": 457.7,
                "lower_km2": 16.451,
                "upper_km2": 16.781,
                "lower_retreat_m": 427.7,
                "upper_retreat_m": 487.7
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "high_melt",
                "central_km2": 16.498,
                "central_retreat_m": 502.6,
                "lower_km2": 16.308,
                "upper_km2": 16.688,
                "lower_retreat_m": 467.6,
                "upper_retreat_m": 537.6
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "high_melt",
                "central_km2": 16.38,
                "central_retreat_m": 547.5,
                "lower_km2": 16.165,
                "upper_km2": 16.595,
                "lower_retreat_m": 507.5,
                "upper_retreat_m": 587.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    }
],
  "imja-tsho": [
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "baseline",
            "label": "Baseline continuation",
            "horizon_years": 5,
            "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
            "delta_summer_temp_C": 0.0,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": 0.0,
            "note": "Baseline continuation"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "baseline",
                "central_km2": 7.39,
                "central_retreat_m": 464.7,
                "lower_km2": 7.3,
                "upper_km2": 7.48,
                "lower_retreat_m": 448.7,
                "upper_retreat_m": 480.7
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "baseline",
                "central_km2": 7.325,
                "central_retreat_m": 511.4,
                "lower_km2": 7.215,
                "upper_km2": 7.435,
                "lower_retreat_m": 491.4,
                "upper_retreat_m": 531.4
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "baseline",
                "central_km2": 7.247,
                "central_retreat_m": 562.1,
                "lower_km2": 7.117,
                "upper_km2": 7.377,
                "lower_retreat_m": 538.1,
                "upper_retreat_m": 586.1
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "baseline",
                "central_km2": 7.183,
                "central_retreat_m": 607.8,
                "lower_km2": 7.033,
                "upper_km2": 7.333,
                "lower_retreat_m": 579.8,
                "upper_retreat_m": 635.8
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "baseline",
                "central_km2": 7.109,
                "central_retreat_m": 656.5,
                "lower_km2": 6.939,
                "upper_km2": 7.279,
                "lower_retreat_m": 624.5,
                "upper_retreat_m": 688.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.34,
                "rank": 1
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.21,
                "rank": 2
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.17,
                "rank": 3
            },
            {
                "predictor_id": "lake_area_change",
                "contribution": 0.12,
                "rank": 4
            },
            {
                "predictor_id": "snow_cover_duration",
                "contribution": -0.09,
                "rank": 5
            },
            {
                "predictor_id": "debris_cover_fraction",
                "contribution": -0.08,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "baseline",
            "label": "Baseline continuation",
            "horizon_years": 5,
            "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
            "delta_summer_temp_C": 0.0,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": 0.0,
            "note": "Baseline continuation"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "baseline",
                "central_km2": 7.398,
                "central_retreat_m": 461.1,
                "lower_km2": 7.283,
                "upper_km2": 7.513,
                "lower_retreat_m": 441.1,
                "upper_retreat_m": 481.1
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "baseline",
                "central_km2": 7.326,
                "central_retreat_m": 507.2,
                "lower_km2": 7.186,
                "upper_km2": 7.466,
                "lower_retreat_m": 482.2,
                "upper_retreat_m": 532.2
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "baseline",
                "central_km2": 7.254,
                "central_retreat_m": 553.3,
                "lower_km2": 7.089,
                "upper_km2": 7.419,
                "lower_retreat_m": 523.3,
                "upper_retreat_m": 583.3
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "baseline",
                "central_km2": 7.182,
                "central_retreat_m": 599.4,
                "lower_km2": 6.992,
                "upper_km2": 7.372,
                "lower_retreat_m": 564.4,
                "upper_retreat_m": 634.4
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "baseline",
                "central_km2": 7.11,
                "central_retreat_m": 645.5,
                "lower_km2": 6.895,
                "upper_km2": 7.325,
                "lower_retreat_m": 605.5,
                "upper_retreat_m": 685.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "warmer_summer",
            "label": "Warmer-summer scenario",
            "horizon_years": 5,
            "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
            "delta_summer_temp_C": 1.2,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": -0.02,
            "note": "Warmer-summer scenario"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "warmer_summer",
                "central_km2": 7.366,
                "central_retreat_m": 481.4,
                "lower_km2": 7.276,
                "upper_km2": 7.456,
                "lower_retreat_m": 465.4,
                "upper_retreat_m": 497.4
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "warmer_summer",
                "central_km2": 7.277,
                "central_retreat_m": 544.8,
                "lower_km2": 7.167,
                "upper_km2": 7.387,
                "lower_retreat_m": 524.8,
                "upper_retreat_m": 564.8
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "warmer_summer",
                "central_km2": 7.175,
                "central_retreat_m": 612.2,
                "lower_km2": 7.045,
                "upper_km2": 7.305,
                "lower_retreat_m": 588.2,
                "upper_retreat_m": 636.2
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "warmer_summer",
                "central_km2": 7.087,
                "central_retreat_m": 674.6,
                "lower_km2": 6.937,
                "upper_km2": 7.237,
                "lower_retreat_m": 646.6,
                "upper_retreat_m": 702.6
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "warmer_summer",
                "central_km2": 6.989,
                "central_retreat_m": 740.0,
                "lower_km2": 6.819,
                "upper_km2": 7.159,
                "lower_retreat_m": 708.0,
                "upper_retreat_m": 772.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.551,
                "rank": 1
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.284,
                "rank": 2
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.23,
                "rank": 3
            },
            {
                "predictor_id": "lake_area_change",
                "contribution": 0.162,
                "rank": 4
            },
            {
                "predictor_id": "snow_cover_duration",
                "contribution": -0.121,
                "rank": 5
            },
            {
                "predictor_id": "debris_cover_fraction",
                "contribution": -0.108,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "warmer_summer",
            "label": "Warmer-summer scenario",
            "horizon_years": 5,
            "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
            "delta_summer_temp_C": 1.2,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": -0.02,
            "note": "Warmer-summer scenario"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "warmer_summer",
                "central_km2": 7.387,
                "central_retreat_m": 468.0,
                "lower_km2": 7.272,
                "upper_km2": 7.502,
                "lower_retreat_m": 448.0,
                "upper_retreat_m": 488.0
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "warmer_summer",
                "central_km2": 7.304,
                "central_retreat_m": 521.0,
                "lower_km2": 7.164,
                "upper_km2": 7.444,
                "lower_retreat_m": 496.0,
                "upper_retreat_m": 546.0
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "warmer_summer",
                "central_km2": 7.221,
                "central_retreat_m": 574.0,
                "lower_km2": 7.056,
                "upper_km2": 7.386,
                "lower_retreat_m": 544.0,
                "upper_retreat_m": 604.0
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "warmer_summer",
                "central_km2": 7.138,
                "central_retreat_m": 627.0,
                "lower_km2": 6.948,
                "upper_km2": 7.328,
                "lower_retreat_m": 592.0,
                "upper_retreat_m": 662.0
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "warmer_summer",
                "central_km2": 7.055,
                "central_retreat_m": 680.0,
                "lower_km2": 6.84,
                "upper_km2": 7.27,
                "lower_retreat_m": 640.0,
                "upper_retreat_m": 720.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "high_melt",
            "label": "High-melt scenario",
            "horizon_years": 5,
            "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
            "delta_summer_temp_C": 1.8,
            "delta_precipitation_percent": -8.0,
            "delta_albedo": -0.04,
            "note": "High-melt scenario"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "high_melt",
                "central_km2": 7.345,
                "central_retreat_m": 495.8,
                "lower_km2": 7.235,
                "upper_km2": 7.455,
                "lower_retreat_m": 473.8,
                "upper_retreat_m": 517.8
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "high_melt",
                "central_km2": 7.235,
                "central_retreat_m": 573.6,
                "lower_km2": 7.105,
                "upper_km2": 7.365,
                "lower_retreat_m": 547.6,
                "upper_retreat_m": 599.6
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "high_melt",
                "central_km2": 7.112,
                "central_retreat_m": 655.4,
                "lower_km2": 6.962,
                "upper_km2": 7.262,
                "lower_retreat_m": 625.4,
                "upper_retreat_m": 685.4
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "high_melt",
                "central_km2": 7.003,
                "central_retreat_m": 732.2,
                "lower_km2": 6.833,
                "upper_km2": 7.173,
                "lower_retreat_m": 698.2,
                "upper_retreat_m": 766.2
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "high_melt",
                "central_km2": 6.884,
                "central_retreat_m": 812.0,
                "lower_km2": 6.694,
                "upper_km2": 7.074,
                "lower_retreat_m": 774.0,
                "upper_retreat_m": 850.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.785,
                "rank": 1
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.346,
                "rank": 2
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.281,
                "rank": 3
            },
            {
                "predictor_id": "lake_area_change",
                "contribution": 0.198,
                "rank": 4
            },
            {
                "predictor_id": "snow_cover_duration",
                "contribution": -0.148,
                "rank": 5
            },
            {
                "predictor_id": "debris_cover_fraction",
                "contribution": -0.132,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "high_melt",
            "label": "High-melt scenario",
            "horizon_years": 5,
            "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
            "delta_summer_temp_C": 1.8,
            "delta_precipitation_percent": -8.0,
            "delta_albedo": -0.04,
            "note": "High-melt scenario"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "high_melt",
                "central_km2": 7.38,
                "central_retreat_m": 472.6,
                "lower_km2": 7.265,
                "upper_km2": 7.495,
                "lower_retreat_m": 452.6,
                "upper_retreat_m": 492.6
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "high_melt",
                "central_km2": 7.29,
                "central_retreat_m": 530.2,
                "lower_km2": 7.15,
                "upper_km2": 7.43,
                "lower_retreat_m": 505.2,
                "upper_retreat_m": 555.2
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "high_melt",
                "central_km2": 7.2,
                "central_retreat_m": 587.8,
                "lower_km2": 7.035,
                "upper_km2": 7.365,
                "lower_retreat_m": 557.8,
                "upper_retreat_m": 617.8
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "high_melt",
                "central_km2": 7.11,
                "central_retreat_m": 645.4,
                "lower_km2": 6.92,
                "upper_km2": 7.3,
                "lower_retreat_m": 610.4,
                "upper_retreat_m": 680.4
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "high_melt",
                "central_km2": 7.02,
                "central_retreat_m": 703.0,
                "lower_km2": 6.805,
                "upper_km2": 7.235,
                "lower_retreat_m": 663.0,
                "upper_retreat_m": 743.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    }
],
  "thulagi": [
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "baseline",
            "label": "Baseline continuation",
            "horizon_years": 5,
            "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
            "delta_summer_temp_C": 0.0,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": 0.0,
            "note": "Baseline continuation"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "baseline",
                "central_km2": 6.379,
                "central_retreat_m": 331.4,
                "lower_km2": 6.289,
                "upper_km2": 6.469,
                "lower_retreat_m": 315.4,
                "upper_retreat_m": 347.4
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "baseline",
                "central_km2": 6.333,
                "central_retreat_m": 364.8,
                "lower_km2": 6.223,
                "upper_km2": 6.443,
                "lower_retreat_m": 344.8,
                "upper_retreat_m": 384.8
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "baseline",
                "central_km2": 6.274,
                "central_retreat_m": 402.2,
                "lower_km2": 6.144,
                "upper_km2": 6.404,
                "lower_retreat_m": 378.2,
                "upper_retreat_m": 426.2
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "baseline",
                "central_km2": 6.229,
                "central_retreat_m": 434.6,
                "lower_km2": 6.079,
                "upper_km2": 6.379,
                "lower_retreat_m": 406.6,
                "upper_retreat_m": 462.6
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "baseline",
                "central_km2": 6.174,
                "central_retreat_m": 470.0,
                "lower_km2": 6.004,
                "upper_km2": 6.344,
                "lower_retreat_m": 438.0,
                "upper_retreat_m": 502.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.26,
                "rank": 1
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.19,
                "rank": 2
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.15,
                "rank": 3
            },
            {
                "predictor_id": "snow_cover_duration",
                "contribution": -0.11,
                "rank": 4
            },
            {
                "predictor_id": "precipitation",
                "contribution": -0.07,
                "rank": 5
            },
            {
                "predictor_id": "lake_proximity",
                "contribution": 0.06,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "baseline",
            "label": "Baseline continuation",
            "horizon_years": 5,
            "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
            "delta_summer_temp_C": 0.0,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": 0.0,
            "note": "Baseline continuation"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "baseline",
                "central_km2": 6.387,
                "central_retreat_m": 327.8,
                "lower_km2": 6.272,
                "upper_km2": 6.502,
                "lower_retreat_m": 307.8,
                "upper_retreat_m": 347.8
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "baseline",
                "central_km2": 6.334,
                "central_retreat_m": 360.6,
                "lower_km2": 6.194,
                "upper_km2": 6.474,
                "lower_retreat_m": 335.6,
                "upper_retreat_m": 385.6
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "baseline",
                "central_km2": 6.281,
                "central_retreat_m": 393.4,
                "lower_km2": 6.116,
                "upper_km2": 6.446,
                "lower_retreat_m": 363.4,
                "upper_retreat_m": 423.4
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "baseline",
                "central_km2": 6.228,
                "central_retreat_m": 426.2,
                "lower_km2": 6.038,
                "upper_km2": 6.418,
                "lower_retreat_m": 391.2,
                "upper_retreat_m": 461.2
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "baseline",
                "central_km2": 6.175,
                "central_retreat_m": 459.0,
                "lower_km2": 5.96,
                "upper_km2": 6.39,
                "lower_retreat_m": 419.0,
                "upper_retreat_m": 499.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "warmer_summer",
            "label": "Warmer-summer scenario",
            "horizon_years": 5,
            "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
            "delta_summer_temp_C": 1.2,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": -0.02,
            "note": "Warmer-summer scenario"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "warmer_summer",
                "central_km2": 6.361,
                "central_retreat_m": 343.5,
                "lower_km2": 6.271,
                "upper_km2": 6.451,
                "lower_retreat_m": 327.5,
                "upper_retreat_m": 359.5
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "warmer_summer",
                "central_km2": 6.297,
                "central_retreat_m": 389.0,
                "lower_km2": 6.187,
                "upper_km2": 6.407,
                "lower_retreat_m": 369.0,
                "upper_retreat_m": 409.0
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "warmer_summer",
                "central_km2": 6.22,
                "central_retreat_m": 438.5,
                "lower_km2": 6.09,
                "upper_km2": 6.35,
                "lower_retreat_m": 414.5,
                "upper_retreat_m": 462.5
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "warmer_summer",
                "central_km2": 6.157,
                "central_retreat_m": 483.0,
                "lower_km2": 6.007,
                "upper_km2": 6.307,
                "lower_retreat_m": 455.0,
                "upper_retreat_m": 511.0
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "warmer_summer",
                "central_km2": 6.084,
                "central_retreat_m": 530.5,
                "lower_km2": 5.914,
                "upper_km2": 6.254,
                "lower_retreat_m": 498.5,
                "upper_retreat_m": 562.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.421,
                "rank": 1
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.257,
                "rank": 2
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.203,
                "rank": 3
            },
            {
                "predictor_id": "snow_cover_duration",
                "contribution": -0.149,
                "rank": 4
            },
            {
                "predictor_id": "precipitation",
                "contribution": -0.095,
                "rank": 5
            },
            {
                "predictor_id": "lake_proximity",
                "contribution": 0.081,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "warmer_summer",
            "label": "Warmer-summer scenario",
            "horizon_years": 5,
            "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
            "delta_summer_temp_C": 1.2,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": -0.02,
            "note": "Warmer-summer scenario"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "warmer_summer",
                "central_km2": 6.379,
                "central_retreat_m": 332.7,
                "lower_km2": 6.264,
                "upper_km2": 6.494,
                "lower_retreat_m": 312.7,
                "upper_retreat_m": 352.7
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "warmer_summer",
                "central_km2": 6.318,
                "central_retreat_m": 370.4,
                "lower_km2": 6.178,
                "upper_km2": 6.458,
                "lower_retreat_m": 345.4,
                "upper_retreat_m": 395.4
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "warmer_summer",
                "central_km2": 6.257,
                "central_retreat_m": 408.1,
                "lower_km2": 6.092,
                "upper_km2": 6.422,
                "lower_retreat_m": 378.1,
                "upper_retreat_m": 438.1
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "warmer_summer",
                "central_km2": 6.196,
                "central_retreat_m": 445.8,
                "lower_km2": 6.006,
                "upper_km2": 6.386,
                "lower_retreat_m": 410.8,
                "upper_retreat_m": 480.8
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "warmer_summer",
                "central_km2": 6.135,
                "central_retreat_m": 483.5,
                "lower_km2": 5.92,
                "upper_km2": 6.35,
                "lower_retreat_m": 443.5,
                "upper_retreat_m": 523.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "high_melt",
            "label": "High-melt scenario",
            "horizon_years": 5,
            "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
            "delta_summer_temp_C": 1.8,
            "delta_precipitation_percent": -8.0,
            "delta_albedo": -0.04,
            "note": "High-melt scenario"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "high_melt",
                "central_km2": 6.346,
                "central_retreat_m": 353.8,
                "lower_km2": 6.236,
                "upper_km2": 6.456,
                "lower_retreat_m": 331.8,
                "upper_retreat_m": 375.8
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "high_melt",
                "central_km2": 6.267,
                "central_retreat_m": 409.6,
                "lower_km2": 6.137,
                "upper_km2": 6.397,
                "lower_retreat_m": 383.6,
                "upper_retreat_m": 435.6
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "high_melt",
                "central_km2": 6.175,
                "central_retreat_m": 469.4,
                "lower_km2": 6.025,
                "upper_km2": 6.325,
                "lower_retreat_m": 439.4,
                "upper_retreat_m": 499.4
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "high_melt",
                "central_km2": 6.097,
                "central_retreat_m": 524.2,
                "lower_km2": 5.927,
                "upper_km2": 6.267,
                "lower_retreat_m": 490.2,
                "upper_retreat_m": 558.2
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "high_melt",
                "central_km2": 6.009,
                "central_retreat_m": 582.0,
                "lower_km2": 5.819,
                "upper_km2": 6.199,
                "lower_retreat_m": 544.0,
                "upper_retreat_m": 620.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.601,
                "rank": 1
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.314,
                "rank": 2
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.247,
                "rank": 3
            },
            {
                "predictor_id": "snow_cover_duration",
                "contribution": -0.181,
                "rank": 4
            },
            {
                "predictor_id": "precipitation",
                "contribution": -0.116,
                "rank": 5
            },
            {
                "predictor_id": "lake_proximity",
                "contribution": 0.099,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "high_melt",
            "label": "High-melt scenario",
            "horizon_years": 5,
            "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
            "delta_summer_temp_C": 1.8,
            "delta_precipitation_percent": -8.0,
            "delta_albedo": -0.04,
            "note": "High-melt scenario"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "high_melt",
                "central_km2": 6.373,
                "central_retreat_m": 336.0,
                "lower_km2": 6.258,
                "upper_km2": 6.488,
                "lower_retreat_m": 316.0,
                "upper_retreat_m": 356.0
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "high_melt",
                "central_km2": 6.306,
                "central_retreat_m": 377.0,
                "lower_km2": 6.166,
                "upper_km2": 6.446,
                "lower_retreat_m": 352.0,
                "upper_retreat_m": 402.0
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "high_melt",
                "central_km2": 6.239,
                "central_retreat_m": 418.0,
                "lower_km2": 6.074,
                "upper_km2": 6.404,
                "lower_retreat_m": 388.0,
                "upper_retreat_m": 448.0
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "high_melt",
                "central_km2": 6.172,
                "central_retreat_m": 459.0,
                "lower_km2": 5.982,
                "upper_km2": 6.362,
                "lower_retreat_m": 424.0,
                "upper_retreat_m": 494.0
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "high_melt",
                "central_km2": 6.105,
                "central_retreat_m": 500.0,
                "lower_km2": 5.89,
                "upper_km2": 6.32,
                "lower_retreat_m": 460.0,
                "upper_retreat_m": 540.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    }
],
  "chhota-shigri": [
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "baseline",
            "label": "Baseline continuation",
            "horizon_years": 5,
            "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
            "delta_summer_temp_C": 0.0,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": 0.0,
            "note": "Baseline continuation"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "baseline",
                "central_km2": 15.306,
                "central_retreat_m": 431.4,
                "lower_km2": 15.216,
                "upper_km2": 15.396,
                "lower_retreat_m": 415.4,
                "upper_retreat_m": 447.4
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "baseline",
                "central_km2": 15.197,
                "central_retreat_m": 474.8,
                "lower_km2": 15.087,
                "upper_km2": 15.307,
                "lower_retreat_m": 454.8,
                "upper_retreat_m": 494.8
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "baseline",
                "central_km2": 15.075,
                "central_retreat_m": 522.2,
                "lower_km2": 14.945,
                "upper_km2": 15.205,
                "lower_retreat_m": 498.2,
                "upper_retreat_m": 546.2
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "baseline",
                "central_km2": 14.967,
                "central_retreat_m": 564.6,
                "lower_km2": 14.817,
                "upper_km2": 15.117,
                "lower_retreat_m": 536.6,
                "upper_retreat_m": 592.6
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "baseline",
                "central_km2": 14.849,
                "central_retreat_m": 610.0,
                "lower_km2": 14.679,
                "upper_km2": 15.019,
                "lower_retreat_m": 578.0,
                "upper_retreat_m": 642.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.29,
                "rank": 1
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.2,
                "rank": 2
            },
            {
                "predictor_id": "ice_velocity",
                "contribution": 0.17,
                "rank": 3
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.14,
                "rank": 4
            },
            {
                "predictor_id": "debris_cover_fraction",
                "contribution": -0.09,
                "rank": 5
            },
            {
                "predictor_id": "snowfall",
                "contribution": -0.06,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "baseline",
            "label": "Baseline continuation",
            "horizon_years": 5,
            "assumptions": "Climate and surface conditions continue the 2016\u20132025 observed trend. No additional forcing.",
            "delta_summer_temp_C": 0.0,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": 0.0,
            "note": "Baseline continuation"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "baseline",
                "central_km2": 15.313,
                "central_retreat_m": 427.8,
                "lower_km2": 15.198,
                "upper_km2": 15.428,
                "lower_retreat_m": 407.8,
                "upper_retreat_m": 447.8
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "baseline",
                "central_km2": 15.196,
                "central_retreat_m": 470.6,
                "lower_km2": 15.056,
                "upper_km2": 15.336,
                "lower_retreat_m": 445.6,
                "upper_retreat_m": 495.6
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "baseline",
                "central_km2": 15.079,
                "central_retreat_m": 513.4,
                "lower_km2": 14.914,
                "upper_km2": 15.244,
                "lower_retreat_m": 483.4,
                "upper_retreat_m": 543.4
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "baseline",
                "central_km2": 14.962,
                "central_retreat_m": 556.2,
                "lower_km2": 14.772,
                "upper_km2": 15.152,
                "lower_retreat_m": 521.2,
                "upper_retreat_m": 591.2
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "baseline",
                "central_km2": 14.845,
                "central_retreat_m": 599.0,
                "lower_km2": 14.63,
                "upper_km2": 15.06,
                "lower_retreat_m": 559.0,
                "upper_retreat_m": 639.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "warmer_summer",
            "label": "Warmer-summer scenario",
            "horizon_years": 5,
            "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
            "delta_summer_temp_C": 1.2,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": -0.02,
            "note": "Warmer-summer scenario"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "warmer_summer",
                "central_km2": 15.266,
                "central_retreat_m": 446.9,
                "lower_km2": 15.176,
                "upper_km2": 15.356,
                "lower_retreat_m": 430.9,
                "upper_retreat_m": 462.9
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "warmer_summer",
                "central_km2": 15.117,
                "central_retreat_m": 505.8,
                "lower_km2": 15.007,
                "upper_km2": 15.227,
                "lower_retreat_m": 485.8,
                "upper_retreat_m": 525.8
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "warmer_summer",
                "central_km2": 14.955,
                "central_retreat_m": 568.7,
                "lower_km2": 14.825,
                "upper_km2": 15.085,
                "lower_retreat_m": 544.7,
                "upper_retreat_m": 592.7
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "warmer_summer",
                "central_km2": 14.807,
                "central_retreat_m": 626.6,
                "lower_km2": 14.657,
                "upper_km2": 14.957,
                "lower_retreat_m": 598.6,
                "upper_retreat_m": 654.6
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "warmer_summer",
                "central_km2": 14.649,
                "central_retreat_m": 687.5,
                "lower_km2": 14.479,
                "upper_km2": 14.819,
                "lower_retreat_m": 655.5,
                "upper_retreat_m": 719.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.47,
                "rank": 1
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.27,
                "rank": 2
            },
            {
                "predictor_id": "ice_velocity",
                "contribution": 0.23,
                "rank": 3
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.189,
                "rank": 4
            },
            {
                "predictor_id": "debris_cover_fraction",
                "contribution": -0.121,
                "rank": 5
            },
            {
                "predictor_id": "snowfall",
                "contribution": -0.081,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "warmer_summer",
            "label": "Warmer-summer scenario",
            "horizon_years": 5,
            "assumptions": "JJA summer temperature +1.2 \u00b0C above the 2016\u20132025 mean; other predictors held at observed trend.",
            "delta_summer_temp_C": 1.2,
            "delta_precipitation_percent": 0.0,
            "delta_albedo": -0.02,
            "note": "Warmer-summer scenario"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "warmer_summer",
                "central_km2": 15.296,
                "central_retreat_m": 434.2,
                "lower_km2": 15.181,
                "upper_km2": 15.411,
                "lower_retreat_m": 414.2,
                "upper_retreat_m": 454.2
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "warmer_summer",
                "central_km2": 15.162,
                "central_retreat_m": 483.4,
                "lower_km2": 15.022,
                "upper_km2": 15.302,
                "lower_retreat_m": 458.4,
                "upper_retreat_m": 508.4
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "warmer_summer",
                "central_km2": 15.028,
                "central_retreat_m": 532.6,
                "lower_km2": 14.863,
                "upper_km2": 15.193,
                "lower_retreat_m": 502.6,
                "upper_retreat_m": 562.6
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "warmer_summer",
                "central_km2": 14.894,
                "central_retreat_m": 581.8,
                "lower_km2": 14.704,
                "upper_km2": 15.084,
                "lower_retreat_m": 546.8,
                "upper_retreat_m": 616.8
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "warmer_summer",
                "central_km2": 14.76,
                "central_retreat_m": 631.0,
                "lower_km2": 14.545,
                "upper_km2": 14.975,
                "lower_retreat_m": 591.0,
                "upper_retreat_m": 671.0
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "model_tier": "gradient_boosting",
        "model_version": "phase-2-gb-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "high_melt",
            "label": "High-melt scenario",
            "horizon_years": 5,
            "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
            "delta_summer_temp_C": 1.8,
            "delta_precipitation_percent": -8.0,
            "delta_albedo": -0.04,
            "note": "High-melt scenario"
        },
        "confidence_level": 0.8,
        "method": "Gradient Boosting (HistGradientBoostingRegressor) on aligned terrain+climate+lake predictors; time-based validation (train 2016\u20132021, test 2022\u20132025); leaves one glacier out; 80% quantile intervals via conformal calibration.",
        "limitations": "Trained on 5 Himalayan sites \u00d7 10 seasonal observations (50 rows). Scenario sensitivity, not a GLOF trigger model; uncertainty widens with horizon; debris-covered termini retain higher boundary error; LSTM deferred until \u22658 steps/site and \u226545 total (currently 10/site, 50 total \u2014 at threshold but held for additional independent glacier diversity).",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "high_melt",
                "central_km2": 15.231,
                "central_retreat_m": 460.3,
                "lower_km2": 15.121,
                "upper_km2": 15.341,
                "lower_retreat_m": 438.3,
                "upper_retreat_m": 482.3
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "high_melt",
                "central_km2": 15.047,
                "central_retreat_m": 532.6,
                "lower_km2": 14.917,
                "upper_km2": 15.177,
                "lower_retreat_m": 506.6,
                "upper_retreat_m": 558.6
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "high_melt",
                "central_km2": 14.85,
                "central_retreat_m": 608.9,
                "lower_km2": 14.7,
                "upper_km2": 15.0,
                "lower_retreat_m": 578.9,
                "upper_retreat_m": 638.9
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "high_melt",
                "central_km2": 14.667,
                "central_retreat_m": 680.2,
                "lower_km2": 14.497,
                "upper_km2": 14.837,
                "lower_retreat_m": 646.2,
                "upper_retreat_m": 714.2
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "high_melt",
                "central_km2": 14.474,
                "central_retreat_m": 754.5,
                "lower_km2": 14.284,
                "upper_km2": 14.664,
                "lower_retreat_m": 716.5,
                "upper_retreat_m": 792.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "summer_temp",
                "contribution": 0.67,
                "rank": 1
            },
            {
                "predictor_id": "albedo",
                "contribution": 0.33,
                "rank": 2
            },
            {
                "predictor_id": "ice_velocity",
                "contribution": 0.281,
                "rank": 3
            },
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.231,
                "rank": 4
            },
            {
                "predictor_id": "debris_cover_fraction",
                "contribution": -0.148,
                "rank": 5
            },
            {
                "predictor_id": "snowfall",
                "contribution": -0.099,
                "rank": 6
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    },
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "model_tier": "linear_trend",
        "model_version": "phase-2-linear-v1.0",
        "input_period": {
            "start": "2016-10-15",
            "end": "2025-10-15"
        },
        "scenario": {
            "id": "high_melt",
            "label": "High-melt scenario",
            "horizon_years": 5,
            "assumptions": "Summer +1.8 \u00b0C, precipitation \u22128 %, albedo \u22120.04 \u2014 combined melt amplification.",
            "delta_summer_temp_C": 1.8,
            "delta_precipitation_percent": -8.0,
            "delta_albedo": -0.04,
            "note": "High-melt scenario"
        },
        "confidence_level": 0.8,
        "method": "Robust linear trend (Theil-Sen) on terminus retreat vs. time; 80% prediction band from residual quantiles; scenario scaling via historical temperature sensitivity.",
        "limitations": "Linear benchmark assumes continuation of past linear retreat; does not capture nonlinear melt amplification; same scenario caveats as primary model.",
        "points": [
            {
                "date": "2026-10-15",
                "year": 2026,
                "scenario_id": "high_melt",
                "central_km2": 15.284,
                "central_retreat_m": 438.5,
                "lower_km2": 15.169,
                "upper_km2": 15.399,
                "lower_retreat_m": 418.5,
                "upper_retreat_m": 458.5
            },
            {
                "date": "2027-10-15",
                "year": 2027,
                "scenario_id": "high_melt",
                "central_km2": 15.138,
                "central_retreat_m": 492.0,
                "lower_km2": 14.998,
                "upper_km2": 15.278,
                "lower_retreat_m": 467.0,
                "upper_retreat_m": 517.0
            },
            {
                "date": "2028-10-15",
                "year": 2028,
                "scenario_id": "high_melt",
                "central_km2": 14.992,
                "central_retreat_m": 545.5,
                "lower_km2": 14.827,
                "upper_km2": 15.157,
                "lower_retreat_m": 515.5,
                "upper_retreat_m": 575.5
            },
            {
                "date": "2029-10-15",
                "year": 2029,
                "scenario_id": "high_melt",
                "central_km2": 14.846,
                "central_retreat_m": 599.0,
                "lower_km2": 14.656,
                "upper_km2": 15.036,
                "lower_retreat_m": 564.0,
                "upper_retreat_m": 634.0
            },
            {
                "date": "2030-10-15",
                "year": 2030,
                "scenario_id": "high_melt",
                "central_km2": 14.7,
                "central_retreat_m": 652.5,
                "lower_km2": 14.485,
                "upper_km2": 14.915,
                "lower_retreat_m": 612.5,
                "upper_retreat_m": 692.5
            }
        ],
        "predictor_contributions": [
            {
                "predictor_id": "prior_retreat_rate",
                "contribution": 0.72,
                "rank": 1
            },
            {
                "predictor_id": "summer_temp",
                "contribution": 0.28,
                "rank": 2
            }
        ],
        "warning": "Research estimate, not a forecast warning \u2014 scenario-based retreat indicator with a reported uncertainty range. It does not predict when or whether a GLOF will occur."
    }
],
};

export function getForecast(siteId: string, scenarioId: string, tier: string = "gradient_boosting"): ForecastResult | undefined {
  return FORECASTS.find((f) => f.site_id === siteId && f.scenario.id === scenarioId && f.model_tier === tier);
}
