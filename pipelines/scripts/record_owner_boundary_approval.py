"""Record a project-owner approval without falsely creating a training label.

An owner can accept a draft after inspecting it in QGIS.  That is useful project
evidence, but a boundary derived from an old inventory still needs an independent
dated delineation/review before it can be an ``approved_reviewed`` model label.
"""
from __future__ import annotations

import argparse
import json
from datetime import date
from pathlib import Path


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--draft", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--reviewer", required=True)
    parser.add_argument("--reviewed-on", default=date.today().isoformat())
    args = parser.parse_args()
    try:
        document = json.loads(args.draft.read_text())
        features = document.get("features", [])
        if len(features) != 1 or not features[0].get("geometry"):
            raise ValueError("draft must contain exactly one polygon feature")
        properties = features[0].setdefault("properties", {})
        if properties.get("status") != "draft_reference_adjusted_not_reviewed":
            raise ValueError("only an explicitly labelled draft can receive owner approval")
        properties.update({
            "status": "project_owner_approved_pending_independent_review",
            "project_owner": args.reviewer,
            "project_owner_approved_on": args.reviewed_on,
            "approval_evidence": "Project owner visually inspected this draft in QGIS over the dated Sentinel-2 true-colour composite.",
            "eligible_for_training": False,
            "next_required_action": "Create a dated analyst delineation and obtain independent boundary review before any training, evaluation, or change measurement.",
        })
        args.output.parent.mkdir(parents=True, exist_ok=True)
        args.output.write_text(json.dumps(document, indent=2) + "\n")
        print(f"[owner-approval] OK: wrote {args.output}")
        return 0
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"[owner-approval] BLOCKED: {exc}")
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
