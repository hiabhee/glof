"""Regression tests for full-scene segmentation evaluation contracts."""
from __future__ import annotations

import importlib.util
from pathlib import Path
import tempfile
import unittest

import numpy as np
import rasterio
from rasterio.transform import from_origin

ROOT = Path(__file__).resolve().parents[2]
SPEC = importlib.util.spec_from_file_location("full_scene_evaluation", ROOT / "pipelines/geoai/evaluate_segmentation_full_scene.py")
EVALUATOR = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(EVALUATOR)


class FullSceneEvaluationTests(unittest.TestCase):
    def test_identical_masks_have_perfect_agreement_and_ignored_pixels_are_excluded(self):
        values = np.array([[1, 0], [255, 1]], dtype=np.uint8)
        report, layers = EVALUATOR.metrics_from_arrays(values, values, np.ones((2, 2)))
        self.assertEqual(report["shared_valid_pixels"], 3)
        self.assertEqual(report["ignored_pixels"], 1)
        self.assertEqual(report["iou"], 1.0)
        self.assertEqual(report["f1"], 1.0)
        self.assertTrue(layers["ignored"][1, 0])

    def test_confusion_counts_use_shared_valid_coverage(self):
        prediction = np.array([[1, 1], [0, 255]], dtype=np.uint8)
        reference = np.array([[1, 0], [1, 0]], dtype=np.uint8)
        report, _ = EVALUATOR.metrics_from_arrays(prediction, reference, np.ones((2, 2)))
        self.assertEqual(report["confusion_counts"], {"true_positive": 1, "false_positive": 1, "false_negative": 1, "true_negative": 0, "ignored": 1})
        self.assertAlmostEqual(report["iou"], 1 / 3)

    def test_shifted_grid_is_rejected(self):
        profile = {"driver": "GTiff", "width": 2, "height": 2, "count": 1, "dtype": "uint8", "crs": "EPSG:4326"}
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            first, second = root / "a.tif", root / "b.tif"
            for path, transform in ((first, from_origin(0, 2, 1, 1)), (second, from_origin(1, 2, 1, 1))):
                with rasterio.open(path, "w", **profile, transform=transform) as dst:
                    dst.write(np.zeros((1, 2, 2), dtype=np.uint8))
            with rasterio.open(first) as prediction, rasterio.open(second) as reference:
                with self.assertRaisesRegex(ValueError, "affine transform"):
                    EVALUATOR.fail_if_grid_mismatch(prediction, reference)


if __name__ == "__main__":
    unittest.main()
