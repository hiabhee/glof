"""Fail closed unless acquisition/preprocessing evidence meets the G2 research gate.

This is intentionally stricter than a pipeline smoke test.  It never promotes
candidate data.  Human scene review, source provenance, and measured
co-registration are independent requirements for a research release.
"""
from __future__ import annotations

import argparse
import hashlib
import json
import sys
from collections import Counter
from datetime import date
from pathlib import Path


SR_FIRST_DATE = date(2017, 3, 28)


def load(path: Path) -> dict:
    if not path.exists():
        raise ValueError(f"missing required evidence: {path}")
    return json.loads(path.read_text())


def sha256(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for block in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(block)
    return digest.hexdigest()


def verify_source_ledger(source: dict) -> list[str]:
    """Verify the locally versioned source evidence required for the pilot."""
    source_id = source.get("id", "unknown")
    if source_id not in {"sentinel-2-sr", "copernicus-dem-glo30"}:
        return []
    ledger_path = Path(source.get("local_asset", ""))
    if not ledger_path.is_file():
        return [f"source {source_id}: verified local, versioned asset is missing"]
    try:
        ledger = load(ledger_path)
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        return [f"source {source_id}: unreadable source ledger ({exc})"]

    failures: list[str] = []
    if source_id == "sentinel-2-sr":
        records = ledger.get("records", [])
        if not records:
            failures.append(f"source {source_id}: ledger contains no scene records")
        for record in records:
            asset = Path(record.get("local_asset", ""))
            if not asset.is_file():
                failures.append(f"source {source_id}: missing scene asset {asset}")
            elif sha256(asset) != record.get("sha256"):
                failures.append(f"source {source_id}: checksum mismatch for {asset}")
    elif source_id == "copernicus-dem-glo30":
        record = ledger.get("record", {})
        asset = Path(record.get("local_asset", ""))
        if not asset.is_file():
            failures.append(f"source {source_id}: missing DEM tile {asset}")
        elif sha256(asset) != record.get("sha256"):
            failures.append(f"source {source_id}: checksum mismatch for {asset}")
    return failures


def main() -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--observations", type=Path, default=Path("data/catalog/planb/observations.json"))
    p.add_argument("--sites", type=Path, default=Path("data/catalog/planb/sites.json"))
    p.add_argument("--sources", type=Path, default=Path("data/catalog/planb/source-register.json"))
    p.add_argument("--alignment", type=Path, default=Path("data/catalog/planb/alignment.json"))
    args = p.parse_args()
    try:
        observations = load(args.observations).get("records", [])
        sites = load(args.sites).get("sites", [])
        sources = load(args.sources).get("sources", [])
        alignment = load(args.alignment)
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"[research-readiness] BLOCKED: {exc}", file=sys.stderr)
        return 3

    failures: list[str] = []
    for r in observations:
        # Context-only records are retained for auditability but are outside the
        # frozen SR analytical series.  They must never be eligible for research.
        excluded = (
            r.get("analysis_track") == "context_only_excluded_pre_sr"
            or (r.get("quality_status") == "excluded" and not r.get("eligible_for_research", False))
        )
        if not excluded and r.get("collection") == "COPERNICUS/S2_SR_HARMONIZED" and date.fromisoformat(r["observation_date"]) < SR_FIRST_DATE:
            failures.append(f"{r['site_id']} {r['observation_date']}: SR provenance predates collection availability")

    for source in sources:
        if source.get("required_for_g2") and source.get("status") != "verified":
            failures.append(f"source {source.get('id')}: required source is not verified")
        if source.get("required_for_g2") and source.get("status") == "verified":
            failures.extend(verify_source_ledger(source))

    eligible_sites = [s["site_id"] for s in sites if s.get("analysis_eligible")]
    approved = [r for r in observations if r.get("quality_status") == "quality_accepted"]
    approved_counts = Counter(r["site_id"] for r in approved)
    for site_id in eligible_sites:
        if approved_counts[site_id] < 3:
            failures.append(f"{site_id}: requires at least three manually quality-accepted, comparable observations; found {approved_counts[site_id]}")

    checks = alignment.get("checks", [])
    aligned_sites = {c.get("site_id") for c in checks if c.get("status") == "pass" and c.get("residual_pixels", float("inf")) <= 0.5}
    for site_id in eligible_sites:
        if site_id not in aligned_sites:
            failures.append(f"{site_id}: no passing stable-terrain co-registration check (residual ≤0.5 pixels)")

    if failures:
        print("[research-readiness] BLOCKED: G2 research gate is not met:", file=sys.stderr)
        for failure in failures:
            print(f" - {failure}", file=sys.stderr)
        return 3
    print("[research-readiness] PASS: provenance, sources, review, coverage, and co-registration meet G2.")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
