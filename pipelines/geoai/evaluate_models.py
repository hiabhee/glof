"""Evaluate only real, reviewed GeoAI artefacts and fail publication gates otherwise."""
from __future__ import annotations
import argparse, json, sys
from datetime import datetime
from pathlib import Path


def parse_args():
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--segmentation-metrics", type=Path, required=True)
    p.add_argument("--forecast-manifest", type=Path, help="Optional deferred forecast evaluation")
    p.add_argument("--output-dir", type=Path, default=Path("data/derived/planb/validation"))
    return p.parse_args()


def read_reviewed(path: Path, label: str) -> dict:
    if not path.exists():
        raise ValueError(f"{label} is missing: {path}")
    value = json.loads(path.read_text())
    if value.get("data_status") != "reviewed":
        raise ValueError(f"{label} is not based on reviewed data")
    return value


def main():
    args = parse_args()
    try:
        segmentation = read_reviewed(args.segmentation_metrics, "segmentation metrics")
        forecasts = read_reviewed(args.forecast_manifest, "forecast manifest") if args.forecast_manifest else None
    except (ValueError, OSError) as exc:
        print(f"[evaluate_models] BLOCKED: {exc}", file=sys.stderr)
        return 2
    holdout = segmentation.get("temporal_holdout", {})
    required = {"segmentation_metrics": holdout.get("iou") is not None and holdout.get("f1") is not None, "reviewed_input": True, "human_science_review": False}
    report = {"schema_version": "2.0", "generated_at": datetime.now().astimezone().isoformat(), "data_status": "reviewed", "segmentation": segmentation, "forecasts": {"status": "deferred"} if forecasts is None else {"count": len(forecasts.get("forecasts", [])), "temporal_validation": forecasts.get("temporal_validation", {})}, "review_gates": [{"id": key, "passed": value} for key, value in required.items()], "publication_allowed": all(required.values()), "limitations": "Publication remains blocked until a named science reviewer signs off on reviewed-data results."}
    args.output_dir.mkdir(parents=True, exist_ok=True)
    (args.output_dir / "validation_report.json").write_text(json.dumps(report, indent=2))
    print(f"[evaluate_models] {'OK' if report['publication_allowed'] else 'BLOCKED'}: publication_allowed={report['publication_allowed']}")
    return 0 if report["publication_allowed"] else 3


if __name__ == "__main__":
    raise SystemExit(main())
