"""Fail closed until real dated-boundary measurement is implemented (Plan B G5)."""
from __future__ import annotations

import argparse
import json
from pathlib import Path
import sys

ROOT = Path(__file__).resolve().parents[2]
DEMO_ROOT = ROOT / 'data/demo/planb'


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--demo', action='store_true', help='Explicitly export synthetic UI fixtures into data/demo/planb only')
    parser.add_argument('--dry-run', action='store_true', help='Check readiness without writing files')
    parser.add_argument('--output-dir', type=Path)
    parser.add_argument('--crs', help='Reserved for the future site-specific measurement workflow')
    args = parser.parse_args()
    if not args.demo:
        print('[measure_retreat] BLOCKED: real dated-boundary measurement is not implemented; no scientific output was written. See PlanB.md Phase 5.', file=sys.stderr)
        return 2
    output = (args.output_dir or DEMO_ROOT / 'measurements').resolve()
    if not output.is_relative_to(DEMO_ROOT.resolve()):
        print('[measure_retreat] BLOCKED: demo output must stay inside data/demo/planb', file=sys.stderr)
        return 2
    if args.dry_run:
        print('[measure_retreat] DEMO dry run; no files written')
        return 0
    source = ROOT / 'data/archive/planb-phase0/data/derived/phase2/measurements/retreat_measurements.json'
    rows = json.loads(source.read_text())['measurements']
    for row in rows:
        row.update(quality_status='synthetic_demo', source_ids=[], processing_version='demo-only', eligible_for_research=False)
    payload = {'data_status': 'synthetic_demo', 'eligible_for_research': False,
               'provenance': 'Deterministic legacy fixtures; no imagery measurement or analyst review.', 'measurements': rows}
    output.mkdir(parents=True, exist_ok=True)
    (output / 'retreat_measurements.json').write_text(json.dumps(payload, indent=2) + '\n')
    print(f'[measure_retreat] DEMO ONLY: {len(rows)} synthetic rows in {output}')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
