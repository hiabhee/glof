"""Build a reproducible South Lhonak stable-terrain mask for co-registration.

The mask retains pixels classified as bare terrain (SCL=5) in every accepted
scene, then excludes the RGI glacier reference plus a configurable safety
buffer. It is intentionally conservative: water, snow/ice, cloud/shadow and
the glacier/moraine margin cannot contribute to the alignment estimate.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path

import numpy as np


def dilate(mask: np.ndarray, iterations: int) -> np.ndarray:
    """Eight-neighbour dilation without a non-standard runtime dependency."""
    result = mask.copy()
    for _ in range(iterations):
        padded = np.pad(result, 1, mode="constant")
        result = np.zeros_like(result)
        for row in range(3):
            for col in range(3):
                result |= padded[row:row + result.shape[0], col:col + result.shape[1]]
    return result


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--observations", type=Path, default=Path("data/catalog/planb/observations.json"))
    parser.add_argument("--site-id", default="south-lhonak")
    parser.add_argument("--observation-date", action="append", required=True)
    parser.add_argument("--glacier-geometry", type=Path, default=Path("apps/web/public/reference/south-lhonak-verified-rgi.geojson"))
    parser.add_argument("--buffer-pixels", type=int, default=15, help="Safety buffer around the reference glacier; 15 pixels is about 300 m")
    parser.add_argument("--output", type=Path, default=Path("data/derived/planb/alignment/south-lhonak-stable-terrain-mask.tif"))
    args = parser.parse_args()
    try:
        import rasterio
        from rasterio.features import rasterize

        payload = json.loads(args.observations.read_text())
        requested = set(args.observation_date)
        records = [r for r in payload["records"] if r.get("site_id") == args.site_id and r.get("observation_date") in requested]
        if len(records) != len(requested):
            raise ValueError("each requested observation must exist exactly once")
        if any(r.get("quality_status") != "quality_accepted" for r in records):
            raise ValueError("stable terrain may only be built from quality_accepted observations")

        scl_stack: list[np.ndarray] = []
        profile = None
        grid = None
        for record in sorted(records, key=lambda r: r["observation_date"]):
            with rasterio.open(record["raster_path"]) as src:
                this_grid = (src.crs, src.transform, src.width, src.height)
                if grid is None:
                    grid = this_grid
                    profile = src.profile.copy()
                elif grid != this_grid:
                    raise ValueError(f"grid mismatch for {record['observation_date']}")
                scl_stack.append(src.read(6))

        geometry = json.loads(args.glacier_geometry.read_text())
        features = geometry.get("features", [])
        if not features:
            raise ValueError("glacier geometry contains no features")
        glacier = rasterize(
            [(feature["geometry"], 1) for feature in features],
            out_shape=scl_stack[0].shape,
            transform=grid[1],
            fill=0,
            dtype="uint8",
        ).astype(bool)
        glacier_margin = dilate(glacier, args.buffer_pixels)
        bare_in_every_scene = np.logical_and.reduce([scl == 5 for scl in scl_stack])
        stable = bare_in_every_scene & ~glacier_margin
        if int(stable.sum()) < 256:
            raise ValueError(f"only {int(stable.sum())} stable pixels remain; requires at least 256")

        args.output.parent.mkdir(parents=True, exist_ok=True)
        profile.update(driver="GTiff", dtype="uint8", count=1, nodata=0, compress="deflate")
        with rasterio.open(args.output, "w", **profile) as dst:
            dst.write(stable.astype("uint8"), 1)
            dst.update_tags(method="SCL=5 in every accepted scene; RGI glacier excluded with safety buffer", buffer_pixels=args.buffer_pixels)
        metadata = {
            "schema_version": "1.0",
            "site_id": args.site_id,
            "observation_dates": sorted(requested),
            "status": "reviewed_for_alignment",
            "reviewer": "implementation agent",
            "method": "SCL=5 bare terrain in every accepted scene; exclude RGI glacier and 15-pixel (~300 m) safety buffer. Water, snow/ice, cloud/shadow and glacier/moraine margin are excluded.",
            "stable_pixel_count": int(stable.sum()),
            "glacier_geometry": str(args.glacier_geometry),
            "output": str(args.output),
        }
        args.output.with_suffix(".json").write_text(json.dumps(metadata, indent=2) + "\n")
        print(f"[stable-terrain] PASS: wrote {args.output} with {int(stable.sum())} stable pixels")
        return 0
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"[stable-terrain] BLOCKED: {exc}")
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
