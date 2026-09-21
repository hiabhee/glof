"""Inventory local research assets and literal file references; never validate science."""
from __future__ import annotations

import hashlib
import json
from pathlib import Path
import re

ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / 'data/catalog/planb/asset-audit.json'
SUFFIXES = {'.json', '.geojson', '.tif', '.tiff', '.npz', '.csv', '.pt', '.placeholder', '.joblib', '.md', '.ts', '.tsx'}


def digest(path: Path) -> str:
    h = hashlib.sha256()
    with path.open('rb') as stream:
        for chunk in iter(lambda: stream.read(1024 * 1024), b''):
            h.update(chunk)
    return h.hexdigest()


def strings(value):
    if isinstance(value, str):
        yield value
    elif isinstance(value, dict):
        for item in value.values():
            yield from strings(item)
    elif isinstance(value, list):
        for item in value:
            yield from strings(item)


def audit() -> dict:
    sources = {}
    for base in ('apps/web/src', 'pipelines', 'docs'):
        for p in (ROOT / base).rglob('*'):
            if p.is_file() and p.suffix in {'.ts', '.tsx', '.py', '.md'}:
                sources[str(p.relative_to(ROOT))] = p.read_text()
    assets, references = [], []
    for base in ('data', 'apps/web/src/data', 'apps/web/public/reference', 'apps/web/public/imagery'):
        for p in sorted((ROOT / base).rglob('*')):
            if not p.is_file() or p.suffix not in SUFFIXES or p == OUTPUT:
                continue
            rel = str(p.relative_to(ROOT))
            excluded = any(part in p.parts for part in ('archive', 'demo', 'quarantine', 'fixtures'))
            record = {'path': rel, 'exists': True, 'sha256': digest(p), 'size_bytes': p.stat().st_size,
                      'status': 'excluded' if excluded else 'unverified',
                      'consumers_literal': [name for name, text in sources.items() if rel in text]}
            if p.suffix in {'.json', '.geojson'}:
                try:
                    payload = json.loads(p.read_text())
                    if isinstance(payload, dict):
                        record['declared_status'] = payload.get('data_status', payload.get('status'))
                        record['declared_provenance'] = payload.get('provenance')
                    for ref in sorted(set(strings(payload))):
                        if ref.startswith(('data/', 'apps/')) and '\n' not in ref and len(ref) < 350:
                            target = ROOT / ref
                            references.append({'consumer': rel, 'reference': ref, 'exists': target.is_file(),
                                               'sha256': digest(target) if target.is_file() and target != OUTPUT else None})
                except (ValueError, OSError):
                    record['parse_error'] = True
            assets.append(record)
    imports = []
    for name, text in sources.items():
        if name.startswith('apps/web/src/'):
            for module in re.findall(r'''(?:from\s*|import\s*\(|require\s*\(|import\s*)['"]([^'"]+)['"]''', text):
                imports.append({'consumer': name, 'module': module})
    violations = [i for i in imports if any(word in i['module'].lower() for word in ('quarantine', 'fixtures', 'archive/', 'data/demo'))]
    return {'schema_version': '1.0', 'scope': 'Local asset inventory and literal imports/references; no scientific approval. Dynamic paths and runtime fetches need separate review.',
            'assets': assets, 'references': references, 'ui_imports': imports, 'excluded_ui_imports': violations}


if __name__ == '__main__':
    result = audit()
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    OUTPUT.write_text(json.dumps(result, indent=2) + '\n')
    print(f"Audited {len(result['assets'])} assets; {sum(not r['exists'] for r in result['references'])} missing literal references; {len(result['excluded_ui_imports'])} excluded UI imports")
    raise SystemExit(1 if result['excluded_ui_imports'] else 0)
