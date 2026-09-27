"""Tests for the reviewed-label contract used by the GeoAI trainer."""
from __future__ import annotations

import importlib.util
import json
from pathlib import Path
import tempfile
import unittest


ROOT = Path(__file__).resolve().parents[2]
SPEC = importlib.util.spec_from_file_location("train_segmentation", ROOT / "pipelines/geoai/train_segmentation.py")
TRAIN = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(TRAIN)


class GeoAiTrainingTests(unittest.TestCase):
    def test_quality_accepted_features_pair_with_approved_reviewed_masks(self):
        """Only the reviewed mask, not the immutable feature raster, is a label."""
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            feature = root / "features.tif"; feature.touch()
            mask = root / "mask.tif"; mask.touch()
            features = root / "features.json"
            masks = root / "masks.json"
            features.write_text(json.dumps({"records": [{
                "site_id": "south-lhonak", "observation_date": "2017-11-19",
                "quality_status": "quality_accepted", "feature_asset": str(feature),
            }]}))
            masks.write_text(json.dumps({"records": [{
                "site_id": "south-lhonak", "observation_date": "2017-11-19",
                "status": "approved_reviewed", "reviewed_mask": str(mask),
            }]}))
            records = TRAIN.load_records(masks, features)
            self.assertEqual(len(records), 1)
            self.assertEqual(records[0]["feature_asset"], str(feature))

    def test_candidate_feature_cannot_enter_training(self):
        with tempfile.TemporaryDirectory() as temporary:
            root = Path(temporary)
            feature = root / "features.tif"; feature.touch()
            mask = root / "mask.tif"; mask.touch()
            features = root / "features.json"
            masks = root / "masks.json"
            features.write_text(json.dumps({"records": [{
                "site_id": "south-lhonak", "observation_date": "2017-11-19",
                "quality_status": "candidate", "feature_asset": str(feature),
            }]}))
            masks.write_text(json.dumps({"records": [{
                "site_id": "south-lhonak", "observation_date": "2017-11-19",
                "status": "approved_reviewed", "reviewed_mask": str(mask),
            }]}))
            with self.assertRaisesRegex(ValueError, "no approved or owner-approved-experimental"):
                TRAIN.load_records(masks, features)


if __name__ == "__main__":
    unittest.main()
