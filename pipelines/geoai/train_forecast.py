"""Train evidence-gated glacier-retreat forecasts from reviewed measurements.

This command refuses demo, synthetic, candidate, and unreviewed records. It is
a scenario-based research estimate, never a GLOF prediction service.
"""
from __future__ import annotations

import argparse
import json
import math
import sys
from collections import defaultdict
from datetime import datetime
from pathlib import Path

import numpy as np

PROCESSING_VERSION = "phase-2-forecast-v2.0"
MODEL_VERSION = "phase-2-linear-reviewed-v2.0"
CONFIDENCE_LEVEL = 0.80
WARNING = "Research estimate only. It does not predict when or whether a GLOF will occur."
SCENARIOS = {
    "baseline": ("Baseline continuation", 1.00, "Observed retreat rate continues."),
    "warmer_summer": ("Warmer-summer sensitivity", 1.15, "Retreat-rate sensitivity to a +1.2 °C summer-temperature assumption."),
    "high_melt": ("High-melt sensitivity", 1.25, "Retreat-rate sensitivity to +1.8 °C, lower precipitation, and lower albedo assumptions."),
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--measurements", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, default=Path("data/derived/phase2/forecasts"))
    parser.add_argument("--horizon", type=int, default=5, choices=(3, 4, 5))
    return parser.parse_args()


def load_reviewed_measurements(path: Path) -> list[dict]:
    if not path.exists():
        raise ValueError(f"measurement file does not exist: {path}")
    payload = json.loads(path.read_text())
    if payload.get("data_status") != "reviewed":
        raise ValueError("measurement file must declare data_status='reviewed'; demo or unverified data are blocked")
    rows = payload.get("measurements")
    if not isinstance(rows, list) or not rows:
        raise ValueError("measurement file has no reviewed measurements")
    needed = {"site_id", "glacier_id", "observation_date", "area_km2", "retreat_distance_m", "quality_status", "boundary_asset"}
    for row in rows:
        missing = needed - row.keys()
        if missing:
            raise ValueError(f"measurement {row.get('site_id', '?')} is missing {sorted(missing)}")
        if row["quality_status"] != "approved" or row.get("synthetic", False):
            raise ValueError(f"measurement {row['site_id']} {row['observation_date']} is not an approved reviewed record")
    return rows


def fit_line(rows: list[dict]) -> tuple[float, float, float]:
    years = np.array([int(r["observation_date"][:4]) for r in rows], dtype=float)
    areas = np.array([float(r["area_km2"]) for r in rows], dtype=float)
    slope, intercept = np.polyfit(years - years[0], areas, 1)
    residuals = areas - (intercept + slope * (years - years[0]))
    half_width = float(np.quantile(np.abs(residuals), 0.90)) if len(residuals) > 2 else 0.0
    return float(slope), float(intercept), half_width


def temporal_validation(rows: list[dict]) -> dict:
    if len(rows) < 6:
        return {"available": False, "reason": "Need at least six reviewed observations for a chronological hold-out."}
    train, test = rows[:-2], rows[-2:]
    slope, intercept, width = fit_line(train)
    start = int(train[0]["observation_date"][:4])
    errors, covered = [], 0
    for row in test:
        year = int(row["observation_date"][:4])
        predicted = intercept + slope * (year - start)
        actual = float(row["area_km2"])
        errors.append(abs(actual - predicted))
        covered += abs(actual - predicted) <= width
    return {"available": True, "train_end": train[-1]["observation_date"], "test_dates": [r["observation_date"] for r in test], "area_mae_km2": float(np.mean(errors)), "interval_coverage": covered / len(test), "calibration_half_width_km2": width}


def build_forecast(site_rows: list[dict], horizon: int) -> dict:
    site_rows.sort(key=lambda row: row["observation_date"])
    slope, _, residual_width = fit_line(site_rows)
    latest = site_rows[-1]
    latest_year = int(latest["observation_date"][:4])
    scenarios = {}
    for scenario_id, (label, multiplier, assumption) in SCENARIOS.items():
        points = []
        for offset in range(1, horizon + 1):
            year = latest_year + offset
            central = float(latest["area_km2"]) + slope * multiplier * offset
            half_width = residual_width * math.sqrt(1 + offset) + 0.01 * offset
            points.append({"date": f"{year}-10-15", "year": year, "central_km2": round(central, 4), "lower_km2": round(central - half_width, 4), "upper_km2": round(central + half_width, 4)})
        scenarios[scenario_id] = {"id": scenario_id, "label": label, "assumptions": assumption, "rate_multiplier": multiplier, "points": points}
    return {"site_id": latest["site_id"], "glacier_id": latest["glacier_id"], "model_tier": "linear_trend", "model_version": MODEL_VERSION, "input_period": {"start": site_rows[0]["observation_date"], "end": latest["observation_date"]}, "method": "Ordinary least-squares trend fitted only to approved reviewed glacier-area measurements; chronological hold-out reported separately.", "confidence_level": CONFIDENCE_LEVEL, "calibration": {"residual_quantile": 0.90, "initial_half_width_km2": residual_width}, "trend_km2_per_year": slope, "scenarios": scenarios, "warning": WARNING, "limitations": "Small-sample scenario analysis. Forecasts are unsuitable for operational alerts or GLOF timing."}


def main() -> int:
    args = parse_args()
    try:
        rows = load_reviewed_measurements(args.measurements)
    except ValueError as exc:
        print(f"[train_forecast] BLOCKED: {exc}", file=sys.stderr)
        return 2
    by_site: dict[str, list[dict]] = defaultdict(list)
    for row in rows:
        by_site[row["site_id"]].append(row)
    forecasts = [build_forecast(site_rows, args.horizon) for _, site_rows in sorted(by_site.items()) if len(site_rows) >= 5]
    if not forecasts:
        print("[train_forecast] BLOCKED: no site has at least five approved reviewed observations", file=sys.stderr)
        return 2
    validation = {site: temporal_validation(sorted(site_rows, key=lambda row: row["observation_date"])) for site, site_rows in by_site.items()}
    payload = {"schema_version": "2.0", "generated_at": datetime.now().astimezone().isoformat(), "processing_version": PROCESSING_VERSION, "data_status": "reviewed", "horizon_years": args.horizon, "forecasts": forecasts, "temporal_validation": validation, "warning": WARNING}
    args.output_dir.mkdir(parents=True, exist_ok=True)
    (args.output_dir / "forecast_manifest.json").write_text(json.dumps(payload, indent=2))
    print(f"[train_forecast] OK: generated {len(forecasts)} reviewed-only forecasts")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
