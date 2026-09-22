"""Measure pairwise co-registration on independently defined stable terrain.

The stable-terrain mask is a reviewed input: it must exclude glacier, lake,
cloud/shadow and moving debris.  This script measures displacement only; it
never resamples scenes or declares a scene acceptable by itself.
"""
from __future__ import annotations

import argparse
import json
import sys
from datetime import datetime, timezone
from pathlib import Path

import numpy as np


def phase_shift(reference: np.ndarray, moving: np.ndarray, stable: np.ndarray) -> tuple[float, float]:
    """Return sub-pixel (row, col) phase-correlation displacement.

    A reviewed stable mask prevents glacier change from being mistaken for
    registration shift. The FFT peak is refined by a bounded parabolic fit to
    its wrapped neighbours; this measures sub-pixel displacement but does not
    resample either source scene.
    """
    if stable.sum() < 256:
        raise ValueError("stable terrain mask has fewer than 256 valid pixels")
    ref = reference.astype(np.float64); mov = moving.astype(np.float64)
    median_ref, median_mov = np.median(ref[stable]), np.median(mov[stable])
    ref = np.where(stable, ref, median_ref); mov = np.where(stable, mov, median_mov)
    window = np.outer(np.hanning(ref.shape[0]), np.hanning(ref.shape[1]))
    cross = np.fft.fft2(ref * window) * np.conj(np.fft.fft2(mov * window))
    cross /= np.maximum(np.abs(cross), np.finfo(float).eps)
    correlation = np.abs(np.fft.ifft2(cross))
    peak = np.unravel_index(np.argmax(correlation), ref.shape)

    def refine(axis: int) -> float:
        index = peak[axis]
        before = list(peak); before[axis] = (index - 1) % correlation.shape[axis]
        after = list(peak); after[axis] = (index + 1) % correlation.shape[axis]
        left = correlation[tuple(before)]
        centre = correlation[peak]
        right = correlation[tuple(after)]
        denominator = left - 2.0 * centre + right
        if abs(denominator) <= np.finfo(float).eps:
            return 0.0
        return float(np.clip(0.5 * (left - right) / denominator, -0.5, 0.5))

    row = float(peak[0]) + refine(0)
    col = float(peak[1]) + refine(1)
    if row > ref.shape[0] / 2: row -= ref.shape[0]
    if col > ref.shape[1] / 2: col -= ref.shape[1]
    return row, col


def main() -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--features", type=Path, required=True, help="Approved feature_manifest.json")
    p.add_argument("--stable-mask", type=Path, required=True, help="Reviewed stable-terrain GeoTIFF aligned to every scene")
    p.add_argument("--output", type=Path, default=Path("data/catalog/planb/alignment.json"))
    p.add_argument("--max-residual-pixels", type=float, default=0.5)
    args = p.parse_args()
    try:
        import rasterio
        records = json.loads(args.features.read_text()).get("records", [])
        approved = [r for r in records if r.get("status", r.get("quality_status")) == "quality_accepted"]
        if len(approved) < 2:
            raise ValueError("at least two quality_accepted feature records are required")
        with rasterio.open(args.stable_mask) as mask_src:
            stable = mask_src.read(1).astype(bool); mask_grid = (mask_src.crs, mask_src.transform, mask_src.width, mask_src.height)
        checks = []
        for site_id in sorted({r["site_id"] for r in approved}):
            site_records = sorted([r for r in approved if r["site_id"] == site_id], key=lambda r: r["observation_date"])
            if len(site_records) < 2: continue
            with rasterio.open(site_records[0]["feature_asset"]) as ref_src:
                ref = ref_src.read(3); grid = (ref_src.crs, ref_src.transform, ref_src.width, ref_src.height)
            if grid != mask_grid: raise ValueError(f"stable mask grid does not match {site_id}")
            for record in site_records[1:]:
                with rasterio.open(record["feature_asset"]) as src:
                    if (src.crs, src.transform, src.width, src.height) != grid: raise ValueError(f"grid mismatch for {site_id} {record['observation_date']}")
                    row, col = phase_shift(ref, src.read(3), stable)
                residual = float(np.hypot(row, col))
                checks.append({"site_id": site_id, "reference_date": site_records[0]["observation_date"], "moving_date": record["observation_date"], "band": "B4", "algorithm": "phase-correlation-parabolic-v1", "stable_pixels": int(stable.sum()), "row_shift_pixels": row, "col_shift_pixels": col, "residual_pixels": residual, "status": "pass" if residual <= args.max_residual_pixels else "fail"})
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(json.dumps({"schema_version": "1.0", "generated_at": datetime.now(timezone.utc).isoformat(), "method": "reviewed stable terrain, windowed phase correlation on B4; measurement only", "max_residual_pixels": args.max_residual_pixels, "checks": checks}, indent=2) + "\n")
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"[validate-alignment] BLOCKED: {exc}", file=sys.stderr); return 2
    failed = [c for c in checks if c["status"] != "pass"]
    print(f"[validate-alignment] {'BLOCKED' if failed else 'PASS'}: {len(checks)} pair(s), {len(failed)} above threshold")
    return 3 if failed else 0


if __name__ == "__main__":
    raise SystemExit(main())
