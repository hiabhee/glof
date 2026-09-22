"""Create non-training review packages for accepted glacier observations.

Historical inventory geometry and spectral lake candidates are copied only as
visual context. The package is intentionally marked candidate and cannot be
used by build_training_masks.py until a human creates dated reviewed vectors.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--features", type=Path, required=True)
    parser.add_argument("--observations", type=Path, default=Path("data/catalog/planb/observations.json"))
    parser.add_argument("--glacier-reference", type=Path, default=Path("apps/web/public/reference/south-lhonak-verified-rgi.geojson"))
    parser.add_argument("--output-dir", type=Path, default=Path("data/derived/planb/label-review/south-lhonak"))
    args = parser.parse_args()
    try:
        features = json.loads(args.features.read_text()).get("records", [])
        observations = json.loads(args.observations.read_text()).get("records", [])
        reference = json.loads(args.glacier_reference.read_text())
        if not features or any(r.get("quality_status", r.get("status")) != "quality_accepted" for r in features):
            raise ValueError("review package requires only quality_accepted feature records")
        if reference.get("type") != "FeatureCollection" or not reference.get("features"):
            raise ValueError("glacier reference must be a non-empty GeoJSON FeatureCollection")
        by_key = {(r.get("site_id"), r.get("observation_date")): r for r in observations}
        args.output_dir.mkdir(parents=True, exist_ok=True)
        package_records = []
        for feature in features:
            key = (feature["site_id"], feature["observation_date"])
            observation = by_key.get(key)
            if observation is None:
                raise ValueError(f"missing observation metadata for {key}")
            date = feature["observation_date"]
            dated_reference = json.loads(json.dumps(reference))
            for item in dated_reference["features"]:
                item.setdefault("properties", {}).update({
                    "site_id": feature["site_id"],
                    "observation_date": date,
                    "status": "historical_reference_candidate",
                    "usage": "visual review context only; not a dated label or training target",
                })
            reference_path = args.output_dir / f"{date}-historical-rgi-reference.geojson"
            reference_path.write_text(json.dumps(dated_reference, indent=2) + "\n")
            lake = observation.get("lake_boundary") or {}
            package_records.append({
                "site_id": feature["site_id"],
                "observation_date": date,
                "status": "candidate_for_human_review",
                "feature_asset": feature["feature_asset"],
                "valid_mask": feature["valid_mask"],
                "source_raster": feature["source_raster"],
                "historical_glacier_reference": str(reference_path),
                "candidate_lake_outline": lake.get("path"),
                "scene_id": observation.get("scene_id"),
                "required_output": f"data/reviewed-boundaries/south-lhonak-{date}-glacier.geojson",
                "review_rule": "Digitize a dated glacier polygon from the accepted scene and terrain context. Do not copy the historical reference or candidate lake outline into the reviewed output.",
            })
        package = {
            "schema_version": "1.0",
            "data_status": "candidate_for_human_review",
            "purpose": "Human glacier/lake boundary review package; excluded from training and evaluation.",
            "records": package_records,
            "next_transition": "Create dated analyst vectors, obtain independent review, then register approved_reviewed labels in a separate manifest.",
        }
        output = args.output_dir / "review-package.json"
        output.write_text(json.dumps(package, indent=2) + "\n")
        print(f"[label-review-package] OK: wrote {len(package_records)} candidate review records to {output}")
        return 0
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"[label-review-package] BLOCKED: {exc}")
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
