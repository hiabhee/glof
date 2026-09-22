"""Discover and, when explicitly requested, download NASA HMA_GLI via earthaccess.

The default mode is metadata-only: it writes a query ledger without requiring
credentials.  ``--download`` authenticates with NASA Earthdata Login and stores
the official files plus SHA-256 provenance under data/raw.  Credentials are read
by earthaccess from the environment or .netrc and are never written to this repo.
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


def main() -> int:
    p = argparse.ArgumentParser(description=__doc__)
    p.add_argument("--download", action="store_true", help="Authenticate and download official HMA_GLI files.")
    p.add_argument("--output-dir", type=Path, default=Path("data/raw/nasa-hma-gli-v001"))
    p.add_argument("--count", type=int, default=100, help="Maximum CMR granules to enumerate.")
    args = p.parse_args()
    try:
        import earthaccess
    except ImportError:
        print("[acquire-nasa-hma-gli] BLOCKED: install pipelines/requirements.txt", file=__import__("sys").stderr)
        return 2

    # Resolve by DOI first.  CMR's short-name route currently does not return
    # this collection reliably, while the DOI is the stable scholarly identity.
    collections = earthaccess.search_datasets(doi="10.5067/UO20NYM3YQB4", count=2)
    if len(collections) != 1:
        print(f"[acquire-nasa-hma-gli] BLOCKED: expected one collection for DOI, found {len(collections)}", file=__import__("sys").stderr)
        return 2
    concept_id = collections[0]["meta"]["concept-id"]
    results = earthaccess.search_data(concept_id=concept_id, count=args.count)
    if not results:
        print("[acquire-nasa-hma-gli] BLOCKED: CMR returned no HMA_GLI v001 granules", file=__import__("sys").stderr)
        return 2
    args.output_dir.mkdir(parents=True, exist_ok=True)
    ledger = {"schema_version": "1.0", "dataset_short_name": "HMA_GLI", "version": "001", "doi": "10.5067/UO20NYM3YQB4", "cmr_concept_id": concept_id, "queried_at": datetime.now(timezone.utc).isoformat(), "granule_count": len(results), "downloaded": False, "granules": [str(item) for item in results]}
    if args.download:
        earthaccess.login()  # environment, .netrc, then interactive fallback
        downloaded = [Path(p) for p in earthaccess.download(results, str(args.output_dir))]
        ledger["downloaded"] = True
        ledger["files"] = [{"path": str(p), "sha256": digest(p), "size_bytes": p.stat().st_size} for p in downloaded]
    (args.output_dir / "acquisition-ledger.json").write_text(json.dumps(ledger, indent=2) + "\n")
    print(f"[acquire-nasa-hma-gli] {'DOWNLOADED' if args.download else 'DISCOVERED'}: {len(results)} HMA_GLI v001 granule(s); ledger={args.output_dir / 'acquisition-ledger.json'}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
