"""Regression tests for silent fabricated output and archive integrity."""
import importlib.util
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

ROOT = Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location('audit_planb', ROOT / 'pipelines/scripts/audit_planb.py')
audit_module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(audit_module)


def run(script, *args):
    return subprocess.run([sys.executable, str(ROOT / 'pipelines/geoai' / script), *map(str, args)], cwd=ROOT, capture_output=True, text=True)


class SafetyTests(unittest.TestCase):
    def test_measurement_never_falls_back_to_demo(self):
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / 'output'
            for flags in ([], ['--dry-run']):
                result = run('measure_retreat.py', '--output-dir', output, *flags)
                self.assertEqual(result.returncode, 2, result.stderr)
                self.assertIn('not implemented', result.stderr)
                self.assertFalse(output.exists())

    def test_features_reject_missing_and_populated_manifest(self):
        with tempfile.TemporaryDirectory() as temp:
            manifest = Path(temp) / 'manifest.json'
            output = Path(temp) / 'output'
            for payload in (None, {'records': []}, {'records': [{'site_id': 'south-lhonak'}]}):
                if payload is not None:
                    manifest.write_text(json.dumps(payload))
                for flags in ([], ['--dry-run']):
                    result = run('prepare_features.py', '--manifest', manifest, '--output-dir', output, *flags)
                    self.assertEqual(result.returncode, 2, result.stderr)
                    self.assertFalse(output.exists())

    def test_demo_cannot_write_to_scientific_directory(self):
        with tempfile.TemporaryDirectory() as temp:
            output = Path(temp) / 'science'
            result = run('measure_retreat.py', '--demo', '--output-dir', output)
            self.assertEqual(result.returncode, 2)
            self.assertFalse(output.exists())

    def test_demo_is_explicit_and_labelled(self):
        base = ROOT / 'data/demo/planb'
        base.mkdir(parents=True, exist_ok=True)
        with tempfile.TemporaryDirectory(dir=base) as temp:
            output = Path(temp) / 'output'
            result = run('measure_retreat.py', '--demo', '--dry-run', '--output-dir', output)
            self.assertEqual(result.returncode, 0, result.stderr)
            self.assertFalse(output.exists())
            result = run('measure_retreat.py', '--demo', '--output-dir', output)
            self.assertEqual(result.returncode, 0, result.stderr)
            payload = json.loads((output / 'retreat_measurements.json').read_text())
            self.assertFalse(payload['eligible_for_research'])
            self.assertTrue(payload['measurements'])
            self.assertTrue(all(row['quality_status'] == 'synthetic_demo' and not row['eligible_for_research'] for row in payload['measurements']))

    def test_demo_rejects_symlink_escape(self):
        base = ROOT / 'data/demo/planb'
        base.mkdir(parents=True, exist_ok=True)
        with tempfile.TemporaryDirectory(dir=base) as local, tempfile.TemporaryDirectory() as outside:
            link = Path(local) / 'escape'
            link.symlink_to(outside, target_is_directory=True)
            result = run('measure_retreat.py', '--demo', '--output-dir', link / 'output')
            self.assertEqual(result.returncode, 2)
            self.assertFalse((Path(outside) / 'output').exists())

    def test_archive_bytes_preserved(self):
        index = json.loads((ROOT / 'data/archive/planb-phase0/index.json').read_text())
        self.assertTrue(index['assets'])
        for asset in index['assets']:
            with self.subTest(path=asset['original_path']):
                self.assertFalse(asset['eligible_for_research'])
                self.assertEqual(audit_module.digest(ROOT / asset['archive_path']), asset['sha256'])

    def test_forecast_is_not_required_but_publication_stays_blocked(self):
        with tempfile.TemporaryDirectory() as temp:
            metrics = Path(temp) / 'metrics.json'
            metrics.write_text(json.dumps({'data_status': 'reviewed', 'temporal_holdout': {'iou': 0.5, 'f1': 0.6}}))
            output = Path(temp) / 'validation'
            result = run('evaluate_models.py', '--segmentation-metrics', metrics, '--output-dir', output)
            self.assertEqual(result.returncode, 3, result.stderr)
            report = json.loads((output / 'validation_report.json').read_text())
            self.assertFalse(report['publication_allowed'])
            self.assertEqual(report['forecasts']['status'], 'deferred')

    def test_ui_imports_do_not_reach_excluded_assets(self):
        self.assertEqual(audit_module.audit()['excluded_ui_imports'], [])


if __name__ == '__main__':
    unittest.main()
