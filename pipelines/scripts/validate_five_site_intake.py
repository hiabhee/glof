"""Validate the final-five admission register without approving incomplete sites."""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
manifest = json.loads((ROOT / "data/catalog/five-site-intake.json").read_text())
sites = manifest["sites"]
assert len(sites) == 5, "Final scope must contain exactly five sites"
assert len({site["site_id"] for site in sites}) == 5, "Site IDs must be unique"
for site in sites:
    for key in ("site_id", "lake", "glacier", "status", "boundary_sources", "imagery_status", "event_sources"):
        assert key in site, f"{site.get('site_id', '<unknown>')}: missing {key}"
    complete = bool(site["boundary_sources"]) and site["imagery_status"] != "not-started" and bool(site["event_sources"])
    if site["status"] == "evidence-ready":
        assert complete, f"{site['site_id']}: evidence-ready without complete intake"
print(f"Valid final-five intake register ({len(sites)} sites); incomplete sites remain intake-only.")
