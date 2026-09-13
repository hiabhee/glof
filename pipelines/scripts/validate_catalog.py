"""Validate a GlacierLens site manifest without external dependencies."""

from __future__ import annotations

import json
from pathlib import Path
import sys


REQUIRED_ROOT_FIELDS = {"schema_version", "site_id", "study_area", "temporal_strategy", "assets", "acceptance_criteria"}
REQUIRED_ASSET_FIELDS = {"id", "kind", "role", "provider", "review_required", "citation_url"}


def main() -> int:
    manifest_path = Path(sys.argv[1]) if len(sys.argv) > 1 else Path("data/catalog/south-lhonak.manifest.json")
    manifest = json.loads(manifest_path.read_text())
    missing_root = REQUIRED_ROOT_FIELDS - manifest.keys()
    if missing_root:
        raise ValueError(f"Missing manifest fields: {', '.join(sorted(missing_root))}")
    for asset in manifest["assets"]:
        missing_asset_fields = REQUIRED_ASSET_FIELDS - asset.keys()
        if missing_asset_fields:
            raise ValueError(f"Asset {asset.get('id', '<unknown>')} is missing: {', '.join(sorted(missing_asset_fields))}")
    print(f"Valid catalogue manifest for {manifest['site_id']} ({len(manifest['assets'])} assets).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
