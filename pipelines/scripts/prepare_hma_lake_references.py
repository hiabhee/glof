"""Create provenance-preserving HMA_GLI lake-reference subsets for study sites.

HMA_GLI is a multi-year inventory reference.  This utility spatially filters its
official polygons to each site study bbox and records every source period and
checksum.  It does not delineate a current shoreline or approve imagery.
"""
from __future__ import annotations

import argparse
import hashlib
import json
from datetime import datetime, timezone
from pathlib import Path


def digest(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for block in iter(lambda: f.read(1024 * 1024), b""):
            h.update(block)
    return h.hexdigest()


def intersects(a: list[float], b: list[float]) -> bool:
    return not (a[2] < b[0] or a[0] > b[2] or a[3] < b[1] or a[1] > b[3])


def main() -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--sites", type=Path, default=Path("data/catalog/planb/sites.json"))
    p.add_argument("--provenance", type=Path, default=Path("data/catalog/planb/nasa-hma-gli-v001.provenance.json"))
    p.add_argument("--output-dir", type=Path, default=Path("data/derived/reference/nasa-hma-gli-v001"))
    p.add_argument("--manifest", type=Path, default=Path("data/catalog/planb/hma-lake-reference-manifest.json"))
    args = p.parse_args()
    try:
        import shapefile
        sites = json.loads(args.sites.read_text())["sites"]
        source = json.loads(args.provenance.read_text())
        if source.get("download_status") != "complete":
            raise ValueError("HMA provenance is not marked complete")
        periods = source["time_periods"]
        for period in periods:
            path = Path(period["path"])
            if not path.is_file() or digest(path) != period["sha256"]:
                raise ValueError(f"HMA source checksum failed: {path}")
        args.output_dir.mkdir(parents=True, exist_ok=True)
        # Read each 0.4-0.6 GB global period once and distribute matching
        # polygons among sites.  Re-reading it for every site is prohibitively
        # slow and has no scientific benefit.
        by_site = {site["site_id"]: {"site": site, "features": [], "counts": {period["period"]: 0 for period in periods}} for site in sites}
        for period in periods:
            reader = shapefile.Reader(period["path"])
            fields = [f[0] for f in reader.fields[1:]]
            for shape, record in zip(reader.iterShapes(), reader.iterRecords()):
                matched = [entry for entry in by_site.values() if intersects(shape.bbox, entry["site"]["study_area"]["bbox_wgs84"])]
                if not matched:
                    continue
                props = dict(zip(fields, record))
                props.update({"hma_period": period["period"], "source_doi": source["doi"], "source_shapefile_sha256": period["sha256"]})
                feature = {"type": "Feature", "properties": props, "geometry": shape.__geo_interface__}
                for entry in matched:
                    entry["features"].append(feature)
                    entry["counts"][period["period"]] += 1
        outputs = []
        for site in sites:
            bbox = site["study_area"]["bbox_wgs84"]
            entry = by_site[site["site_id"]]
            features, counts = entry["features"], entry["counts"]
            output = args.output_dir / f"{site['site_id']}-hma-gli-reference.geojson"
            payload = {"type": "FeatureCollection", "name": f"{site['site_id']}-hma-gli-reference", "crs": {"type": "name", "properties": {"name": "EPSG:4326"}}, "properties": {"site_id": site["site_id"], "study_bbox_wgs84": bbox, "source": "NASA HMA_GLI v001", "use": "context/reference only; not annual shoreline truth", "period_counts": counts}, "features": features}
            output.write_text(json.dumps(payload, separators=(",", ":")) + "\n")
            outputs.append({"site_id": site["site_id"], "bbox_wgs84": bbox, "reference_asset": str(output), "sha256": digest(output), "feature_count": len(features), "period_counts": counts, "analysis_eligible": site.get("analysis_eligible", False)})
    except (OSError, ValueError, KeyError, json.JSONDecodeError) as exc:
        print(f"[prepare-hma-lake-references] BLOCKED: {exc}", file=__import__("sys").stderr)
        return 2
    manifest = {"schema_version": "1.0", "generated_at": datetime.now(timezone.utc).isoformat(), "source_provenance": str(args.provenance), "source_doi": source["doi"], "selection_method": "Polygon bounding-box intersects study-area bbox; no nearest-lake or identity assertion is implied.", "scientific_use_constraint": "Reference/context inventory only; not a dated shoreline, a Sentinel-2 substitute, or a glacier-boundary label.", "sites": outputs}
    args.manifest.parent.mkdir(parents=True, exist_ok=True)
    args.manifest.write_text(json.dumps(manifest, indent=2) + "\n")
    print(f"[prepare-hma-lake-references] OK: {len(outputs)} site subsets written; manifest={args.manifest}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
