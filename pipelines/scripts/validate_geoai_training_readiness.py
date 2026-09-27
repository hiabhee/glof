"""Block GeoAI training until the South Lhonak pilot labels are truly ready."""
from __future__ import annotations

import json
import sys
from pathlib import Path


EXPECTED = {
    ("south-lhonak", "2017-11-19"): "train",
    ("south-lhonak", "2019-10-15"): "train",
    ("south-lhonak", "2022-11-30"): "test",
}


def main() -> int:
    root = Path(__file__).resolve().parents[2]
    reviews_path = root / "data/catalog/reviewed-glacier-masks.json"
    errors: list[str] = []
    if not reviews_path.exists():
        errors.append("reviewed-glacier-masks.json is missing; independent dated labels have not been registered")
    else:
        try:
            payload = json.loads(reviews_path.read_text())
            if payload.get("data_status") != "reviewed":
                errors.append("reviewed-glacier-masks.json must declare data_status='reviewed'")
            records = payload.get("records", [])
            by_key = {(row.get("site_id"), row.get("observation_date")): row for row in records}
            for key, split in EXPECTED.items():
                row = by_key.get(key)
                label = f"{key[0]} {key[1]} ({split})"
                if row is None:
                    errors.append(f"{label}: approved reviewed boundary is missing")
                    continue
                if row.get("review_status") != "approved_reviewed":
                    errors.append(f"{label}: review_status is not approved_reviewed")
                source = str(row.get("boundary_source", "")).lower()
                if "analyst delineation against dated sentinel-2 scene" not in source:
                    errors.append(f"{label}: boundary_source does not confirm a dated analyst delineation")
                if any(term in source for term in ("draft", "candidate", "historical", "rgi", "model")):
                    errors.append(f"{label}: boundary_source is contaminated by a non-label source")
                for field in ("reviewer", "reviewed_at", "reviewer2", "review_notes", "reviewed_boundary_asset"):
                    if not row.get(field):
                        errors.append(f"{label}: required independent-review field '{field}' is missing")
                asset = root / str(row.get("reviewed_boundary_asset", ""))
                if not asset.is_file():
                    errors.append(f"{label}: reviewed boundary asset is missing")
        except (OSError, ValueError, json.JSONDecodeError) as exc:
            errors.append(f"could not read reviewed-glacier-masks.json: {exc}")

    if errors:
        print("[geoai-readiness] BLOCKED: G3 training gate is not met:", file=sys.stderr)
        for error in errors:
            print(f" - {error}", file=sys.stderr)
        return 2
    print("[geoai-readiness] PASS: independent labels, chronology, and provenance meet G3.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
