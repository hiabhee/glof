"""Generate transparent candidate glacier and lake masks from approved features.

These outputs are review aids and baseline comparators, never training labels or
released boundaries. Glacier thresholding intentionally under-detects
debris-covered ice; that limitation is recorded in every output.
"""
from __future__ import annotations

import argparse
import json
from datetime import datetime, timezone
from pathlib import Path

import numpy as np


FEATURE_ORDER = ["B2", "B3", "B4", "B8", "B11", "NDVI", "NDWI", "MNDWI", "NDSI", "B8/B11", "elevation", "slope", "aspect"]


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--features", type=Path, required=True)
    parser.add_argument("--output-dir", type=Path, default=Path("data/derived/planb/baselines"))
    parser.add_argument("--glacier-ndsi-min", type=float, default=0.35)
    parser.add_argument("--glacier-ndvi-max", type=float, default=0.35)
    parser.add_argument("--lake-ndwi-min", type=float, default=0.05)
    parser.add_argument("--lake-mndwi-min", type=float, default=0.10)
    args = parser.parse_args()
    try:
        import rasterio

        records = json.loads(args.features.read_text()).get("records", [])
        if not records:
            raise ValueError("feature manifest has no records")
        if any(r.get("quality_status", r.get("status")) != "quality_accepted" for r in records):
            raise ValueError("baselines require quality_accepted feature records")
        outputs = []
        for record in records:
            feature_path = Path(record["feature_asset"])
            valid_path = Path(record["valid_mask"])
            if not feature_path.is_file() or not valid_path.is_file():
                raise ValueError(f"missing feature/valid asset for {record['site_id']} {record['observation_date']}")
            with rasterio.open(feature_path) as src, rasterio.open(valid_path) as valid_src:
                if list(src.descriptions) != FEATURE_ORDER:
                    raise ValueError(f"feature schema mismatch for {record['site_id']} {record['observation_date']}")
                if (src.crs, src.transform, src.width, src.height) != (valid_src.crs, valid_src.transform, valid_src.width, valid_src.height):
                    raise ValueError(f"valid-mask grid mismatch for {record['site_id']} {record['observation_date']}")
                b8 = src.read(4)
                ndvi = src.read(6)
                ndwi = src.read(7)
                mndwi = src.read(8)
                ndsi = src.read(9)
                valid = valid_src.read(1) == 1
                glacier = valid & np.isfinite(ndsi) & np.isfinite(ndvi) & np.isfinite(ndwi) & (ndsi >= args.glacier_ndsi_min) & (ndvi <= args.glacier_ndvi_max) & (ndwi < args.lake_ndwi_min)
                lake = valid & np.isfinite(ndwi) & np.isfinite(mndwi) & np.isfinite(b8) & (ndwi > args.lake_ndwi_min) & (mndwi > args.lake_mndwi_min) & (b8 < 0.25)
                profile = src.profile.copy()
                profile.update(driver="GTiff", count=1, dtype="uint8", nodata=255, compress="deflate")
                target = args.output_dir / record["site_id"] / record["observation_date"]
                target.mkdir(parents=True, exist_ok=True)
                for name, data in (("glacier-spectral-candidate.tif", glacier), ("lake-spectral-candidate.tif", lake)):
                    output = target / name
                    rendered = np.where(valid, data.astype(np.uint8), 255).astype(np.uint8)
                    with rasterio.open(output, "w", **profile) as dst:
                        dst.write(rendered, 1)
                        dst.update_tags(
                            status="candidate_not_training_label",
                            source_feature_asset=str(feature_path),
                            method="transparent spectral threshold baseline",
                            glacier_rule=f"NDSI >= {args.glacier_ndsi_min}; NDVI <= {args.glacier_ndvi_max}; NDWI < {args.lake_ndwi_min}",
                            lake_rule=f"NDWI > {args.lake_ndwi_min}; MNDWI > {args.lake_mndwi_min}; B8 < 0.25",
                            limitations="Glacier baseline does not reliably identify debris-covered ice; lake baseline may confuse shadow/turbid water. Human review required.",
                        )
                outputs.append({
                    "site_id": record["site_id"],
                    "observation_date": record["observation_date"],
                    "status": "candidate_not_training_label",
                    "feature_asset": str(feature_path),
                    "valid_mask": str(valid_path),
                    "glacier_candidate": str(target / "glacier-spectral-candidate.tif"),
                    "lake_candidate": str(target / "lake-spectral-candidate.tif"),
                    "glacier_candidate_pixels": int(glacier.sum()),
                    "lake_candidate_pixels": int(lake.sum()),
                })
        manifest = {
            "schema_version": "1.0",
            "generated_at": datetime.now(timezone.utc).isoformat(),
            "data_status": "candidate_not_training_label",
            "method": "spectral threshold baseline; independent reviewed labels required for evaluation",
            "records": outputs,
        }
        args.output_dir.mkdir(parents=True, exist_ok=True)
        manifest_path = args.output_dir / "spectral-baseline-manifest.json"
        manifest_path.write_text(json.dumps(manifest, indent=2) + "\n")
        print(f"[spectral-baseline] OK: wrote {len(outputs)} candidate glacier/lake pairs to {manifest_path}")
        return 0
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"[spectral-baseline] BLOCKED: {exc}")
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
