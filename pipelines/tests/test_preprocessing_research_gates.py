"""Tests for scientific (rather than merely operational) preprocessing gates."""
import hashlib
import importlib.util
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

import numpy as np

ROOT = Path(__file__).resolve().parents[2]
SPEC = importlib.util.spec_from_file_location("prepare_features", ROOT / "pipelines/geoai/prepare_features.py")
PREPARE = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(PREPARE)


class ResearchGateTests(unittest.TestCase):
    def test_conservative_scl_mask_and_invalid_feature_values(self):
        scl = np.array([[2, 4, 7, 11, 3]], dtype=np.uint16)
        self.assertEqual(PREPARE.valid_mask_from_scl(scl).tolist(), [[0, 1, 0, 1, 0]])

    def test_candidate_and_pre_sr_provenance_are_hard_failures(self):
        import rasterio
        from rasterio.transform import from_origin
        with tempfile.TemporaryDirectory() as temp:
            root = Path(temp)
            raster = root / "input.tif"
            profile = {"driver": "GTiff", "width": 2, "height": 2, "count": 6, "dtype": "uint16", "crs": "EPSG:4326", "transform": from_origin(88, 28, .0002, .0002)}
            with rasterio.open(raster, "w", **profile) as dst:
                dst.write(np.full((6, 2, 2), 1000, dtype=np.uint16))
            digest = hashlib.sha256(raster.read_bytes()).hexdigest()
            record = {"site_id": "test", "observation_date": "2018-11-01", "collection": "COPERNICUS/S2_SR_HARMONIZED", "quality_status": "candidate", "raster_path": str(raster), "raster_sha256": digest}
            manifest = root / "manifest.json"; manifest.write_text(json.dumps({"records": [record]}))
            base = [sys.executable, str(ROOT / "pipelines/geoai/prepare_features.py"), "--manifest", str(manifest), "--output-dir", str(root / "out"), "--dry-run"]
            result = subprocess.run(base, cwd=ROOT, text=True, capture_output=True)
            self.assertEqual(result.returncode, 2)
            self.assertIn("manual quality acceptance", result.stderr)
            record["quality_status"] = "quality_accepted"; record["observation_date"] = "2016-11-01"
            manifest.write_text(json.dumps({"records": [record]}))
            result = subprocess.run(base, cwd=ROOT, text=True, capture_output=True)
            self.assertEqual(result.returncode, 2)
            self.assertIn("before 2017-03-28", result.stderr)

    def test_accepted_south_lhonak_pilot_passes_research_readiness(self):
        result = subprocess.run([sys.executable, str(ROOT / "pipelines/scripts/validate_research_readiness.py")], cwd=ROOT, text=True, capture_output=True)
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertIn("PASS: provenance, sources, review, coverage, and co-registration meet G2", result.stdout)


if __name__ == "__main__":
    unittest.main()
