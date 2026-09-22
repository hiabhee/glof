"""Extract one GLIMS glacier analysis from a downloaded polygon shapefile."""
from __future__ import annotations

import argparse
import json
from pathlib import Path


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--shapefile", type=Path, required=True)
    parser.add_argument("--analysis-id", type=int, required=True)
    parser.add_argument("--output", type=Path, required=True)
    args = parser.parse_args()
    try:
        import shapefile

        reader = shapefile.Reader(str(args.shapefile))
        fields = [field[0] for field in reader.fields[1:]]
        features = []
        for shape_record in reader.iterShapeRecords():
            properties = dict(zip(fields, shape_record.record))
            if int(properties.get("anlys_id")) != args.analysis_id:
                continue
            features.append({"type": "Feature", "properties": properties, "geometry": shape_record.shape.__geo_interface__})
        if len(features) != 1:
            raise ValueError(f"expected exactly one polygon for analysis {args.analysis_id}; found {len(features)}")
        feature = features[0]
        feature["properties"].update({
            "status": "historical_reference_only",
            "usage": "Visual historical context only. This 2010 outline must not be used as a 2017/2019/2022 training label or change-measurement boundary.",
        })
        output = {"type": "FeatureCollection", "features": features}
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(json.dumps(output, indent=2) + "\n")
        print(f"[extract-glims] OK: wrote analysis {args.analysis_id} to {args.output}")
        return 0
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"[extract-glims] BLOCKED: {exc}")
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
