/**
 * Phase 2 — Derived retreat measurements (Workstream 3).
 * One row per approved date — area, terminus, retreat rate, elevation-band, lake linkage + uncertainty.
 * Same CRS and seasonal window throughout; uncertainty includes boundary error + image-quality limits.
 */
import type { RetreatMeasurement } from "@/domain/retreat";

export const RETREAT_MEASUREMENTS: RetreatMeasurement[] = [
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "observation_date": "2016-10-15",
    "area_km2": 14.26,
    "area_uncertainty_km2": 0.234,
    "retreat_distance_m": 0.0,
    "terminus_position": {
      "distance_m": 212.0,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": null,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.0
      },
      {
        "band_label": "5200\u20135500 m",
        "area_change_km2": -0.0
      },
      {
        "band_label": "5500\u20136000 m",
        "area_change_km2": -0.0
      }
    ],
    "glacier_lake_distance_m": 18.0,
    "lake_area_km2": 1.18,
    "lake_area_change_percent": 0.0,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "observation_date": "2017-10-15",
    "area_km2": 14.098,
    "area_uncertainty_km2": 0.231,
    "retreat_distance_m": 68.4,
    "terminus_position": {
      "distance_m": 280.4,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 68.4,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.02
      },
      {
        "band_label": "5200\u20135500 m",
        "area_change_km2": -0.069
      },
      {
        "band_label": "5500\u20136000 m",
        "area_change_km2": -0.052
      }
    ],
    "glacier_lake_distance_m": 20.8,
    "lake_area_km2": 1.287,
    "lake_area_change_percent": 9.1,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "observation_date": "2018-10-15",
    "area_km2": 13.986,
    "area_uncertainty_km2": 0.23,
    "retreat_distance_m": 115.9,
    "terminus_position": {
      "distance_m": 327.9,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 23,
    "annualised_retreat_rate_m_per_year": 47.5,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.04
      },
      {
        "band_label": "5200\u20135500 m",
        "area_change_km2": -0.138
      },
      {
        "band_label": "5500\u20136000 m",
        "area_change_km2": -0.104
      }
    ],
    "glacier_lake_distance_m": 20.6,
    "lake_area_km2": 1.364,
    "lake_area_change_percent": 15.6,
    "boundary_error_m": 18,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "observation_date": "2019-10-15",
    "area_km2": 13.818,
    "area_uncertainty_km2": 0.227,
    "retreat_distance_m": 193.3,
    "terminus_position": {
      "distance_m": 405.3,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 77.5,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.06
      },
      {
        "band_label": "5200\u20135500 m",
        "area_change_km2": -0.207
      },
      {
        "band_label": "5500\u20136000 m",
        "area_change_km2": -0.157
      }
    ],
    "glacier_lake_distance_m": 25.4,
    "lake_area_km2": 1.491,
    "lake_area_change_percent": 26.4,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "observation_date": "2020-10-15",
    "area_km2": 13.711,
    "area_uncertainty_km2": 0.226,
    "retreat_distance_m": 235.8,
    "terminus_position": {
      "distance_m": 447.8,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 42.4,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.08
      },
      {
        "band_label": "5200\u20135500 m",
        "area_change_km2": -0.276
      },
      {
        "band_label": "5500\u20136000 m",
        "area_change_km2": -0.209
      }
    ],
    "glacier_lake_distance_m": 24.2,
    "lake_area_km2": 1.559,
    "lake_area_change_percent": 32.1,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "observation_date": "2021-10-15",
    "area_km2": 13.539,
    "area_uncertainty_km2": 0.223,
    "retreat_distance_m": 311.2,
    "terminus_position": {
      "distance_m": 523.2,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 75.5,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.1
      },
      {
        "band_label": "5200\u20135500 m",
        "area_change_km2": -0.344
      },
      {
        "band_label": "5500\u20136000 m",
        "area_change_km2": -0.261
      }
    ],
    "glacier_lake_distance_m": 28.0,
    "lake_area_km2": 1.676,
    "lake_area_change_percent": 42.0,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "observation_date": "2022-10-15",
    "area_km2": 13.422,
    "area_uncertainty_km2": 0.221,
    "retreat_distance_m": 358.7,
    "terminus_position": {
      "distance_m": 570.7,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 47.5,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.12
      },
      {
        "band_label": "5200\u20135500 m",
        "area_change_km2": -0.413
      },
      {
        "band_label": "5500\u20136000 m",
        "area_change_km2": -0.313
      }
    ],
    "glacier_lake_distance_m": 28.8,
    "lake_area_km2": 1.763,
    "lake_area_change_percent": 49.4,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "observation_date": "2023-10-15",
    "area_km2": 13.244,
    "area_uncertainty_km2": 0.219,
    "retreat_distance_m": 434.1,
    "terminus_position": {
      "distance_m": 646.1,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 75.5,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.14
      },
      {
        "band_label": "5200\u20135500 m",
        "area_change_km2": -0.482
      },
      {
        "band_label": "5500\u20136000 m",
        "area_change_km2": -0.366
      }
    ],
    "glacier_lake_distance_m": 32.6,
    "lake_area_km2": 1.37,
    "lake_area_change_percent": 16.1,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "observation_date": "2024-10-15",
    "area_km2": 13.132,
    "area_uncertainty_km2": 0.217,
    "retreat_distance_m": 476.6,
    "terminus_position": {
      "distance_m": 688.6,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 42.4,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.16
      },
      {
        "band_label": "5200\u20135500 m",
        "area_change_km2": -0.551
      },
      {
        "band_label": "5500\u20136000 m",
        "area_change_km2": -0.418
      }
    ],
    "glacier_lake_distance_m": 31.4,
    "lake_area_km2": 1.43,
    "lake_area_change_percent": 21.2,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "glacier_id": "RGI2000-v7.0-G-15-07986",
    "observation_date": "2025-10-15",
    "area_km2": 12.98,
    "area_uncertainty_km2": 0.215,
    "retreat_distance_m": 549.0,
    "terminus_position": {
      "distance_m": 761.0,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 72.4,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.18
      },
      {
        "band_label": "5200\u20135500 m",
        "area_change_km2": -0.62
      },
      {
        "band_label": "5500\u20136000 m",
        "area_change_km2": -0.47
      }
    ],
    "glacier_lake_distance_m": 35.2,
    "lake_area_km2": 1.48,
    "lake_area_change_percent": 25.4,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "observation_date": "2016-10-15",
    "area_km2": 17.82,
    "area_uncertainty_km2": 0.287,
    "retreat_distance_m": 0.0,
    "terminus_position": {
      "distance_m": 180.0,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": null,
    "elevation_band_change": [
      {
        "band_label": "4800\u20135000 m",
        "area_change_km2": -0.0
      },
      {
        "band_label": "5000\u20135300 m",
        "area_change_km2": -0.0
      },
      {
        "band_label": "5300\u20135800 m",
        "area_change_km2": -0.0
      }
    ],
    "glacier_lake_distance_m": 22.0,
    "lake_area_km2": 1.48,
    "lake_area_change_percent": 0.0,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "observation_date": "2017-10-15",
    "area_km2": 17.706,
    "area_uncertainty_km2": 0.286,
    "retreat_distance_m": 43.3,
    "terminus_position": {
      "distance_m": 223.3,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 43.3,
    "elevation_band_change": [
      {
        "band_label": "4800\u20135000 m",
        "area_change_km2": -0.013
      },
      {
        "band_label": "5000\u20135300 m",
        "area_change_km2": -0.049
      },
      {
        "band_label": "5300\u20135800 m",
        "area_change_km2": -0.032
      }
    ],
    "glacier_lake_distance_m": 24.8,
    "lake_area_km2": 1.502,
    "lake_area_change_percent": 1.5,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "observation_date": "2018-10-15",
    "area_km2": 17.641,
    "area_uncertainty_km2": 0.285,
    "retreat_distance_m": 65.7,
    "terminus_position": {
      "distance_m": 245.7,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 23,
    "annualised_retreat_rate_m_per_year": 22.4,
    "elevation_band_change": [
      {
        "band_label": "4800\u20135000 m",
        "area_change_km2": -0.027
      },
      {
        "band_label": "5000\u20135300 m",
        "area_change_km2": -0.098
      },
      {
        "band_label": "5300\u20135800 m",
        "area_change_km2": -0.064
      }
    ],
    "glacier_lake_distance_m": 24.6,
    "lake_area_km2": 1.508,
    "lake_area_change_percent": 1.9,
    "boundary_error_m": 18,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "observation_date": "2019-10-15",
    "area_km2": 17.522,
    "area_uncertainty_km2": 0.283,
    "retreat_distance_m": 118.0,
    "terminus_position": {
      "distance_m": 298.0,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 52.3,
    "elevation_band_change": [
      {
        "band_label": "4800\u20135000 m",
        "area_change_km2": -0.04
      },
      {
        "band_label": "5000\u20135300 m",
        "area_change_km2": -0.147
      },
      {
        "band_label": "5300\u20135800 m",
        "area_change_km2": -0.097
      }
    ],
    "glacier_lake_distance_m": 29.4,
    "lake_area_km2": 1.54,
    "lake_area_change_percent": 4.1,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "observation_date": "2020-10-15",
    "area_km2": 17.462,
    "area_uncertainty_km2": 0.282,
    "retreat_distance_m": 135.3,
    "terminus_position": {
      "distance_m": 315.3,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 17.3,
    "elevation_band_change": [
      {
        "band_label": "4800\u20135000 m",
        "area_change_km2": -0.053
      },
      {
        "band_label": "5000\u20135300 m",
        "area_change_km2": -0.196
      },
      {
        "band_label": "5300\u20135800 m",
        "area_change_km2": -0.129
      }
    ],
    "glacier_lake_distance_m": 28.2,
    "lake_area_km2": 1.542,
    "lake_area_change_percent": 4.2,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "observation_date": "2021-10-15",
    "area_km2": 17.338,
    "area_uncertainty_km2": 0.28,
    "retreat_distance_m": 185.7,
    "terminus_position": {
      "distance_m": 365.7,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 50.4,
    "elevation_band_change": [
      {
        "band_label": "4800\u20135000 m",
        "area_change_km2": -0.067
      },
      {
        "band_label": "5000\u20135300 m",
        "area_change_km2": -0.244
      },
      {
        "band_label": "5300\u20135800 m",
        "area_change_km2": -0.161
      }
    ],
    "glacier_lake_distance_m": 32.0,
    "lake_area_km2": 1.568,
    "lake_area_change_percent": 5.9,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "observation_date": "2022-10-15",
    "area_km2": 17.268,
    "area_uncertainty_km2": 0.279,
    "retreat_distance_m": 208.0,
    "terminus_position": {
      "distance_m": 388.0,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 22.3,
    "elevation_band_change": [
      {
        "band_label": "4800\u20135000 m",
        "area_change_km2": -0.08
      },
      {
        "band_label": "5000\u20135300 m",
        "area_change_km2": -0.293
      },
      {
        "band_label": "5300\u20135800 m",
        "area_change_km2": -0.193
      }
    ],
    "glacier_lake_distance_m": 32.8,
    "lake_area_km2": 1.58,
    "lake_area_change_percent": 6.8,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "observation_date": "2023-10-15",
    "area_km2": 17.139,
    "area_uncertainty_km2": 0.277,
    "retreat_distance_m": 258.3,
    "terminus_position": {
      "distance_m": 438.3,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 50.3,
    "elevation_band_change": [
      {
        "band_label": "4800\u20135000 m",
        "area_change_km2": -0.093
      },
      {
        "band_label": "5000\u20135300 m",
        "area_change_km2": -0.342
      },
      {
        "band_label": "5300\u20135800 m",
        "area_change_km2": -0.226
      }
    ],
    "glacier_lake_distance_m": 36.6,
    "lake_area_km2": 1.605,
    "lake_area_change_percent": 8.4,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "observation_date": "2024-10-15",
    "area_km2": 17.074,
    "area_uncertainty_km2": 0.276,
    "retreat_distance_m": 275.7,
    "terminus_position": {
      "distance_m": 455.7,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 17.4,
    "elevation_band_change": [
      {
        "band_label": "4800\u20135000 m",
        "area_change_km2": -0.107
      },
      {
        "band_label": "5000\u20135300 m",
        "area_change_km2": -0.391
      },
      {
        "band_label": "5300\u20135800 m",
        "area_change_km2": -0.258
      }
    ],
    "glacier_lake_distance_m": 35.4,
    "lake_area_km2": 1.609,
    "lake_area_change_percent": 8.7,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "glacier_id": "RGI2000-v7.0-G-15-10433",
    "observation_date": "2025-10-15",
    "area_km2": 16.97,
    "area_uncertainty_km2": 0.275,
    "retreat_distance_m": 323.0,
    "terminus_position": {
      "distance_m": 503.0,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 47.3,
    "elevation_band_change": [
      {
        "band_label": "4800\u20135000 m",
        "area_change_km2": -0.12
      },
      {
        "band_label": "5000\u20135300 m",
        "area_change_km2": -0.44
      },
      {
        "band_label": "5300\u20135800 m",
        "area_change_km2": -0.29
      }
    ],
    "glacier_lake_distance_m": 39.2,
    "lake_area_km2": 1.636,
    "lake_area_change_percent": 10.5,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "observation_date": "2016-10-15",
    "area_km2": 8.12,
    "area_uncertainty_km2": 0.142,
    "retreat_distance_m": 0.0,
    "terminus_position": {
      "distance_m": 165.0,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": null,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.0
      },
      {
        "band_label": "5200\u20135400 m",
        "area_change_km2": -0.0
      },
      {
        "band_label": "5400\u20135800 m",
        "area_change_km2": -0.0
      }
    ],
    "glacier_lake_distance_m": 15.0,
    "lake_area_km2": 1.26,
    "lake_area_change_percent": 0.0,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "observation_date": "2017-10-15",
    "area_km2": 8.028,
    "area_uncertainty_km2": 0.14,
    "retreat_distance_m": 53.6,
    "terminus_position": {
      "distance_m": 218.6,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 53.6,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.01
      },
      {
        "band_label": "5200\u20135400 m",
        "area_change_km2": -0.034
      },
      {
        "band_label": "5400\u20135800 m",
        "area_change_km2": -0.028
      }
    ],
    "glacier_lake_distance_m": 17.8,
    "lake_area_km2": 1.279,
    "lake_area_change_percent": 1.5,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "observation_date": "2018-10-15",
    "area_km2": 7.986,
    "area_uncertainty_km2": 0.14,
    "retreat_distance_m": 86.1,
    "terminus_position": {
      "distance_m": 251.1,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 23,
    "annualised_retreat_rate_m_per_year": 32.5,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.02
      },
      {
        "band_label": "5200\u20135400 m",
        "area_change_km2": -0.069
      },
      {
        "band_label": "5400\u20135800 m",
        "area_change_km2": -0.056
      }
    ],
    "glacier_lake_distance_m": 17.6,
    "lake_area_km2": 1.284,
    "lake_area_change_percent": 1.9,
    "boundary_error_m": 18,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "observation_date": "2019-10-15",
    "area_km2": 7.888,
    "area_uncertainty_km2": 0.138,
    "retreat_distance_m": 148.7,
    "terminus_position": {
      "distance_m": 313.7,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 62.6,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.03
      },
      {
        "band_label": "5200\u20135400 m",
        "area_change_km2": -0.103
      },
      {
        "band_label": "5400\u20135800 m",
        "area_change_km2": -0.083
      }
    ],
    "glacier_lake_distance_m": 22.4,
    "lake_area_km2": 1.313,
    "lake_area_change_percent": 4.2,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "observation_date": "2020-10-15",
    "area_km2": 7.851,
    "area_uncertainty_km2": 0.138,
    "retreat_distance_m": 176.2,
    "terminus_position": {
      "distance_m": 341.2,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 27.4,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.04
      },
      {
        "band_label": "5200\u20135400 m",
        "area_change_km2": -0.138
      },
      {
        "band_label": "5400\u20135800 m",
        "area_change_km2": -0.111
      }
    ],
    "glacier_lake_distance_m": 21.2,
    "lake_area_km2": 1.313,
    "lake_area_change_percent": 4.2,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "observation_date": "2021-10-15",
    "area_km2": 7.749,
    "area_uncertainty_km2": 0.136,
    "retreat_distance_m": 236.8,
    "terminus_position": {
      "distance_m": 401.8,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 60.6,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.05
      },
      {
        "band_label": "5200\u20135400 m",
        "area_change_km2": -0.172
      },
      {
        "band_label": "5400\u20135800 m",
        "area_change_km2": -0.139
      }
    ],
    "glacier_lake_distance_m": 25.0,
    "lake_area_km2": 1.337,
    "lake_area_change_percent": 6.1,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "observation_date": "2022-10-15",
    "area_km2": 7.702,
    "area_uncertainty_km2": 0.136,
    "retreat_distance_m": 269.3,
    "terminus_position": {
      "distance_m": 434.3,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 32.5,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.06
      },
      {
        "band_label": "5200\u20135400 m",
        "area_change_km2": -0.207
      },
      {
        "band_label": "5400\u20135800 m",
        "area_change_km2": -0.167
      }
    ],
    "glacier_lake_distance_m": 25.8,
    "lake_area_km2": 1.347,
    "lake_area_change_percent": 6.9,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "observation_date": "2023-10-15",
    "area_km2": 7.594,
    "area_uncertainty_km2": 0.134,
    "retreat_distance_m": 329.9,
    "terminus_position": {
      "distance_m": 494.9,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 60.6,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.07
      },
      {
        "band_label": "5200\u20135400 m",
        "area_change_km2": -0.241
      },
      {
        "band_label": "5400\u20135800 m",
        "area_change_km2": -0.194
      }
    ],
    "glacier_lake_distance_m": 29.6,
    "lake_area_km2": 1.369,
    "lake_area_change_percent": 8.7,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "observation_date": "2024-10-15",
    "area_km2": 7.552,
    "area_uncertainty_km2": 0.133,
    "retreat_distance_m": 357.4,
    "terminus_position": {
      "distance_m": 522.4,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 27.4,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.08
      },
      {
        "band_label": "5200\u20135400 m",
        "area_change_km2": -0.276
      },
      {
        "band_label": "5400\u20135800 m",
        "area_change_km2": -0.222
      }
    ],
    "glacier_lake_distance_m": 28.4,
    "lake_area_km2": 1.372,
    "lake_area_change_percent": 8.9,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "glacier_id": "RGI2000-v7.0-G-15-10232",
    "observation_date": "2025-10-15",
    "area_km2": 7.47,
    "area_uncertainty_km2": 0.132,
    "retreat_distance_m": 415.0,
    "terminus_position": {
      "distance_m": 580.0,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 57.6,
    "elevation_band_change": [
      {
        "band_label": "5000\u20135200 m",
        "area_change_km2": -0.09
      },
      {
        "band_label": "5200\u20135400 m",
        "area_change_km2": -0.31
      },
      {
        "band_label": "5400\u20135800 m",
        "area_change_km2": -0.25
      }
    ],
    "glacier_lake_distance_m": 32.2,
    "lake_area_km2": 1.396,
    "lake_area_change_percent": 10.8,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "observation_date": "2016-10-15",
    "area_km2": 6.92,
    "area_uncertainty_km2": 0.124,
    "retreat_distance_m": 0.0,
    "terminus_position": {
      "distance_m": 142.0,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": null,
    "elevation_band_change": [
      {
        "band_label": "4000\u20134300 m",
        "area_change_km2": -0.0
      },
      {
        "band_label": "4300\u20134800 m",
        "area_change_km2": -0.0
      },
      {
        "band_label": "4800\u20135200 m",
        "area_change_km2": -0.0
      }
    ],
    "glacier_lake_distance_m": 35.0,
    "lake_area_km2": 0.82,
    "lake_area_change_percent": 0.0,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "observation_date": "2017-10-15",
    "area_km2": 6.847,
    "area_uncertainty_km2": 0.123,
    "retreat_distance_m": 40.2,
    "terminus_position": {
      "distance_m": 182.2,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 40.2,
    "elevation_band_change": [
      {
        "band_label": "4000\u20134300 m",
        "area_change_km2": -0.008
      },
      {
        "band_label": "4300\u20134800 m",
        "area_change_km2": -0.024
      },
      {
        "band_label": "4800\u20135200 m",
        "area_change_km2": -0.021
      }
    ],
    "glacier_lake_distance_m": 37.8,
    "lake_area_km2": 0.838,
    "lake_area_change_percent": 2.2,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "observation_date": "2018-10-15",
    "area_km2": 6.823,
    "area_uncertainty_km2": 0.122,
    "retreat_distance_m": 59.4,
    "terminus_position": {
      "distance_m": 201.4,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 23,
    "annualised_retreat_rate_m_per_year": 19.2,
    "elevation_band_change": [
      {
        "band_label": "4000\u20134300 m",
        "area_change_km2": -0.016
      },
      {
        "band_label": "4300\u20134800 m",
        "area_change_km2": -0.049
      },
      {
        "band_label": "4800\u20135200 m",
        "area_change_km2": -0.042
      }
    ],
    "glacier_lake_distance_m": 37.6,
    "lake_area_km2": 0.842,
    "lake_area_change_percent": 2.7,
    "boundary_error_m": 18,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "observation_date": "2019-10-15",
    "area_km2": 6.745,
    "area_uncertainty_km2": 0.121,
    "retreat_distance_m": 108.7,
    "terminus_position": {
      "distance_m": 250.7,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 49.3,
    "elevation_band_change": [
      {
        "band_label": "4000\u20134300 m",
        "area_change_km2": -0.023
      },
      {
        "band_label": "4300\u20134800 m",
        "area_change_km2": -0.073
      },
      {
        "band_label": "4800\u20135200 m",
        "area_change_km2": -0.063
      }
    ],
    "glacier_lake_distance_m": 42.4,
    "lake_area_km2": 0.87,
    "lake_area_change_percent": 6.1,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "observation_date": "2020-10-15",
    "area_km2": 6.727,
    "area_uncertainty_km2": 0.121,
    "retreat_distance_m": 122.9,
    "terminus_position": {
      "distance_m": 264.9,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 14.2,
    "elevation_band_change": [
      {
        "band_label": "4000\u20134300 m",
        "area_change_km2": -0.031
      },
      {
        "band_label": "4300\u20134800 m",
        "area_change_km2": -0.098
      },
      {
        "band_label": "4800\u20135200 m",
        "area_change_km2": -0.084
      }
    ],
    "glacier_lake_distance_m": 41.2,
    "lake_area_km2": 0.868,
    "lake_area_change_percent": 5.9,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "observation_date": "2021-10-15",
    "area_km2": 6.643,
    "area_uncertainty_km2": 0.12,
    "retreat_distance_m": 170.1,
    "terminus_position": {
      "distance_m": 312.1,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 47.2,
    "elevation_band_change": [
      {
        "band_label": "4000\u20134300 m",
        "area_change_km2": -0.039
      },
      {
        "band_label": "4300\u20134800 m",
        "area_change_km2": -0.122
      },
      {
        "band_label": "4800\u20135200 m",
        "area_change_km2": -0.106
      }
    ],
    "glacier_lake_distance_m": 45.0,
    "lake_area_km2": 0.892,
    "lake_area_change_percent": 8.8,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "observation_date": "2022-10-15",
    "area_km2": 6.615,
    "area_uncertainty_km2": 0.119,
    "retreat_distance_m": 189.3,
    "terminus_position": {
      "distance_m": 331.3,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 19.2,
    "elevation_band_change": [
      {
        "band_label": "4000\u20134300 m",
        "area_change_km2": -0.047
      },
      {
        "band_label": "4300\u20134800 m",
        "area_change_km2": -0.147
      },
      {
        "band_label": "4800\u20135200 m",
        "area_change_km2": -0.127
      }
    ],
    "glacier_lake_distance_m": 45.8,
    "lake_area_km2": 0.9,
    "lake_area_change_percent": 9.8,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "observation_date": "2023-10-15",
    "area_km2": 6.527,
    "area_uncertainty_km2": 0.118,
    "retreat_distance_m": 236.6,
    "terminus_position": {
      "distance_m": 378.6,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 47.3,
    "elevation_band_change": [
      {
        "band_label": "4000\u20134300 m",
        "area_change_km2": -0.054
      },
      {
        "band_label": "4300\u20134800 m",
        "area_change_km2": -0.171
      },
      {
        "band_label": "4800\u20135200 m",
        "area_change_km2": -0.148
      }
    ],
    "glacier_lake_distance_m": 49.6,
    "lake_area_km2": 0.921,
    "lake_area_change_percent": 12.3,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "observation_date": "2024-10-15",
    "area_km2": 6.503,
    "area_uncertainty_km2": 0.118,
    "retreat_distance_m": 250.8,
    "terminus_position": {
      "distance_m": 392.8,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 14.2,
    "elevation_band_change": [
      {
        "band_label": "4000\u20134300 m",
        "area_change_km2": -0.062
      },
      {
        "band_label": "4300\u20134800 m",
        "area_change_km2": -0.196
      },
      {
        "band_label": "4800\u20135200 m",
        "area_change_km2": -0.169
      }
    ],
    "glacier_lake_distance_m": 48.4,
    "lake_area_km2": 0.923,
    "lake_area_change_percent": 12.6,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "glacier_id": "RGI2000-v7.0-G-15-09021",
    "observation_date": "2025-10-15",
    "area_km2": 6.44,
    "area_uncertainty_km2": 0.117,
    "retreat_distance_m": 295.0,
    "terminus_position": {
      "distance_m": 437.0,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 44.2,
    "elevation_band_change": [
      {
        "band_label": "4000\u20134300 m",
        "area_change_km2": -0.07
      },
      {
        "band_label": "4300\u20134800 m",
        "area_change_km2": -0.22
      },
      {
        "band_label": "4800\u20135200 m",
        "area_change_km2": -0.19
      }
    ],
    "glacier_lake_distance_m": 52.2,
    "lake_area_km2": 0.946,
    "lake_area_change_percent": 15.4,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "observation_date": "2016-10-15",
    "area_km2": 16.48,
    "area_uncertainty_km2": 0.267,
    "retreat_distance_m": 0.0,
    "terminus_position": {
      "distance_m": 195.0,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": null,
    "elevation_band_change": [
      {
        "band_label": "4300\u20134700 m",
        "area_change_km2": -0.0
      },
      {
        "band_label": "4700\u20135100 m",
        "area_change_km2": -0.0
      },
      {
        "band_label": "5100\u20135600 m",
        "area_change_km2": -0.0
      }
    ],
    "glacier_lake_distance_m": 28.0,
    "lake_area_km2": 0.35,
    "lake_area_change_percent": 0.0,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "observation_date": "2017-10-15",
    "area_km2": 16.343,
    "area_uncertainty_km2": 0.265,
    "retreat_distance_m": 50.2,
    "terminus_position": {
      "distance_m": 245.2,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 50.2,
    "elevation_band_change": [
      {
        "band_label": "4300\u20134700 m",
        "area_change_km2": -0.017
      },
      {
        "band_label": "4700\u20135100 m",
        "area_change_km2": -0.058
      },
      {
        "band_label": "5100\u20135600 m",
        "area_change_km2": -0.042
      }
    ],
    "glacier_lake_distance_m": 30.8,
    "lake_area_km2": 0.362,
    "lake_area_change_percent": 3.4,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "observation_date": "2018-10-15",
    "area_km2": 16.257,
    "area_uncertainty_km2": 0.264,
    "retreat_distance_m": 79.4,
    "terminus_position": {
      "distance_m": 274.4,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 23,
    "annualised_retreat_rate_m_per_year": 29.2,
    "elevation_band_change": [
      {
        "band_label": "4300\u20134700 m",
        "area_change_km2": -0.033
      },
      {
        "band_label": "4700\u20135100 m",
        "area_change_km2": -0.116
      },
      {
        "band_label": "5100\u20135600 m",
        "area_change_km2": -0.084
      }
    ],
    "glacier_lake_distance_m": 30.6,
    "lake_area_km2": 0.358,
    "lake_area_change_percent": 2.3,
    "boundary_error_m": 18,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "observation_date": "2019-10-15",
    "area_km2": 16.115,
    "area_uncertainty_km2": 0.262,
    "retreat_distance_m": 138.7,
    "terminus_position": {
      "distance_m": 333.7,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 59.3,
    "elevation_band_change": [
      {
        "band_label": "4300\u20134700 m",
        "area_change_km2": -0.05
      },
      {
        "band_label": "4700\u20135100 m",
        "area_change_km2": -0.173
      },
      {
        "band_label": "5100\u20135600 m",
        "area_change_km2": -0.127
      }
    ],
    "glacier_lake_distance_m": 35.4,
    "lake_area_km2": 0.38,
    "lake_area_change_percent": 8.6,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "observation_date": "2020-10-15",
    "area_km2": 16.033,
    "area_uncertainty_km2": 0.26,
    "retreat_distance_m": 162.9,
    "terminus_position": {
      "distance_m": 357.9,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 24.1,
    "elevation_band_change": [
      {
        "band_label": "4300\u20134700 m",
        "area_change_km2": -0.067
      },
      {
        "band_label": "4700\u20135100 m",
        "area_change_km2": -0.231
      },
      {
        "band_label": "5100\u20135600 m",
        "area_change_km2": -0.169
      }
    ],
    "glacier_lake_distance_m": 34.2,
    "lake_area_km2": 0.372,
    "lake_area_change_percent": 6.3,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "observation_date": "2021-10-15",
    "area_km2": 15.887,
    "area_uncertainty_km2": 0.258,
    "retreat_distance_m": 220.1,
    "terminus_position": {
      "distance_m": 415.1,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 57.2,
    "elevation_band_change": [
      {
        "band_label": "4300\u20134700 m",
        "area_change_km2": -0.083
      },
      {
        "band_label": "4700\u20135100 m",
        "area_change_km2": -0.289
      },
      {
        "band_label": "5100\u20135600 m",
        "area_change_km2": -0.211
      }
    ],
    "glacier_lake_distance_m": 38.0,
    "lake_area_km2": 0.388,
    "lake_area_change_percent": 10.9,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "observation_date": "2022-10-15",
    "area_km2": 15.795,
    "area_uncertainty_km2": 0.257,
    "retreat_distance_m": 249.3,
    "terminus_position": {
      "distance_m": 444.3,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 29.2,
    "elevation_band_change": [
      {
        "band_label": "4300\u20134700 m",
        "area_change_km2": -0.1
      },
      {
        "band_label": "4700\u20135100 m",
        "area_change_km2": -0.347
      },
      {
        "band_label": "5100\u20135600 m",
        "area_change_km2": -0.253
      }
    ],
    "glacier_lake_distance_m": 38.8,
    "lake_area_km2": 0.39,
    "lake_area_change_percent": 11.4,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "observation_date": "2023-10-15",
    "area_km2": 15.643,
    "area_uncertainty_km2": 0.255,
    "retreat_distance_m": 306.6,
    "terminus_position": {
      "distance_m": 501.6,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 57.3,
    "elevation_band_change": [
      {
        "band_label": "4300\u20134700 m",
        "area_change_km2": -0.117
      },
      {
        "band_label": "4700\u20135100 m",
        "area_change_km2": -0.404
      },
      {
        "band_label": "5100\u20135600 m",
        "area_change_km2": -0.296
      }
    ],
    "glacier_lake_distance_m": 42.6,
    "lake_area_km2": 0.405,
    "lake_area_change_percent": 15.7,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "observation_date": "2024-10-15",
    "area_km2": 15.557,
    "area_uncertainty_km2": 0.253,
    "retreat_distance_m": 330.8,
    "terminus_position": {
      "distance_m": 525.8,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 24.1,
    "elevation_band_change": [
      {
        "band_label": "4300\u20134700 m",
        "area_change_km2": -0.133
      },
      {
        "band_label": "4700\u20135100 m",
        "area_change_km2": -0.462
      },
      {
        "band_label": "5100\u20135600 m",
        "area_change_km2": -0.338
      }
    ],
    "glacier_lake_distance_m": 41.4,
    "lake_area_km2": 0.399,
    "lake_area_change_percent": 14.0,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "glacier_id": "RGI2000-v7.0-G-14-15901",
    "observation_date": "2025-10-15",
    "area_km2": 15.43,
    "area_uncertainty_km2": 0.251,
    "retreat_distance_m": 385.0,
    "terminus_position": {
      "distance_m": 580.0,
      "crs": "EPSG:32645"
    },
    "terminus_error_m": 15,
    "annualised_retreat_rate_m_per_year": 54.2,
    "elevation_band_change": [
      {
        "band_label": "4300\u20134700 m",
        "area_change_km2": -0.15
      },
      {
        "band_label": "4700\u20135100 m",
        "area_change_km2": -0.52
      },
      {
        "band_label": "5100\u20135600 m",
        "area_change_km2": -0.38
      }
    ],
    "glacier_lake_distance_m": 45.2,
    "lake_area_km2": 0.416,
    "lake_area_change_percent": 18.9,
    "boundary_error_m": 10,
    "image_quality": "excellent",
    "source_ids": [
      "copernicus-s2-harmonized",
      "copernicus-dem-glo30",
      "rgi-v7-glacier-reference"
    ],
    "processing_version": "phase-2-retreat-v1.0",
    "quality_status": "approved"
  }
];

export const RETREAT_BY_SITE: Record<string, RetreatMeasurement[]> = {
  "south-lhonak": [
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "observation_date": "2016-10-15",
        "area_km2": 14.26,
        "area_uncertainty_km2": 0.234,
        "retreat_distance_m": 0.0,
        "terminus_position": {
            "distance_m": 212.0,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": null,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.0
            },
            {
                "band_label": "5200\u20135500 m",
                "area_change_km2": -0.0
            },
            {
                "band_label": "5500\u20136000 m",
                "area_change_km2": -0.0
            }
        ],
        "glacier_lake_distance_m": 18.0,
        "lake_area_km2": 1.18,
        "lake_area_change_percent": 0.0,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "observation_date": "2017-10-15",
        "area_km2": 14.098,
        "area_uncertainty_km2": 0.231,
        "retreat_distance_m": 68.4,
        "terminus_position": {
            "distance_m": 280.4,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 68.4,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.02
            },
            {
                "band_label": "5200\u20135500 m",
                "area_change_km2": -0.069
            },
            {
                "band_label": "5500\u20136000 m",
                "area_change_km2": -0.052
            }
        ],
        "glacier_lake_distance_m": 20.8,
        "lake_area_km2": 1.287,
        "lake_area_change_percent": 9.1,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "observation_date": "2018-10-15",
        "area_km2": 13.986,
        "area_uncertainty_km2": 0.23,
        "retreat_distance_m": 115.9,
        "terminus_position": {
            "distance_m": 327.9,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 23,
        "annualised_retreat_rate_m_per_year": 47.5,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.04
            },
            {
                "band_label": "5200\u20135500 m",
                "area_change_km2": -0.138
            },
            {
                "band_label": "5500\u20136000 m",
                "area_change_km2": -0.104
            }
        ],
        "glacier_lake_distance_m": 20.6,
        "lake_area_km2": 1.364,
        "lake_area_change_percent": 15.6,
        "boundary_error_m": 18,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "observation_date": "2019-10-15",
        "area_km2": 13.818,
        "area_uncertainty_km2": 0.227,
        "retreat_distance_m": 193.3,
        "terminus_position": {
            "distance_m": 405.3,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 77.5,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.06
            },
            {
                "band_label": "5200\u20135500 m",
                "area_change_km2": -0.207
            },
            {
                "band_label": "5500\u20136000 m",
                "area_change_km2": -0.157
            }
        ],
        "glacier_lake_distance_m": 25.4,
        "lake_area_km2": 1.491,
        "lake_area_change_percent": 26.4,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "observation_date": "2020-10-15",
        "area_km2": 13.711,
        "area_uncertainty_km2": 0.226,
        "retreat_distance_m": 235.8,
        "terminus_position": {
            "distance_m": 447.8,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 42.4,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.08
            },
            {
                "band_label": "5200\u20135500 m",
                "area_change_km2": -0.276
            },
            {
                "band_label": "5500\u20136000 m",
                "area_change_km2": -0.209
            }
        ],
        "glacier_lake_distance_m": 24.2,
        "lake_area_km2": 1.559,
        "lake_area_change_percent": 32.1,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "observation_date": "2021-10-15",
        "area_km2": 13.539,
        "area_uncertainty_km2": 0.223,
        "retreat_distance_m": 311.2,
        "terminus_position": {
            "distance_m": 523.2,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 75.5,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.1
            },
            {
                "band_label": "5200\u20135500 m",
                "area_change_km2": -0.344
            },
            {
                "band_label": "5500\u20136000 m",
                "area_change_km2": -0.261
            }
        ],
        "glacier_lake_distance_m": 28.0,
        "lake_area_km2": 1.676,
        "lake_area_change_percent": 42.0,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "observation_date": "2022-10-15",
        "area_km2": 13.422,
        "area_uncertainty_km2": 0.221,
        "retreat_distance_m": 358.7,
        "terminus_position": {
            "distance_m": 570.7,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 47.5,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.12
            },
            {
                "band_label": "5200\u20135500 m",
                "area_change_km2": -0.413
            },
            {
                "band_label": "5500\u20136000 m",
                "area_change_km2": -0.313
            }
        ],
        "glacier_lake_distance_m": 28.8,
        "lake_area_km2": 1.763,
        "lake_area_change_percent": 49.4,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "observation_date": "2023-10-15",
        "area_km2": 13.244,
        "area_uncertainty_km2": 0.219,
        "retreat_distance_m": 434.1,
        "terminus_position": {
            "distance_m": 646.1,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 75.5,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.14
            },
            {
                "band_label": "5200\u20135500 m",
                "area_change_km2": -0.482
            },
            {
                "band_label": "5500\u20136000 m",
                "area_change_km2": -0.366
            }
        ],
        "glacier_lake_distance_m": 32.6,
        "lake_area_km2": 1.37,
        "lake_area_change_percent": 16.1,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "observation_date": "2024-10-15",
        "area_km2": 13.132,
        "area_uncertainty_km2": 0.217,
        "retreat_distance_m": 476.6,
        "terminus_position": {
            "distance_m": 688.6,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 42.4,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.16
            },
            {
                "band_label": "5200\u20135500 m",
                "area_change_km2": -0.551
            },
            {
                "band_label": "5500\u20136000 m",
                "area_change_km2": -0.418
            }
        ],
        "glacier_lake_distance_m": 31.4,
        "lake_area_km2": 1.43,
        "lake_area_change_percent": 21.2,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "glacier_id": "RGI2000-v7.0-G-15-07986",
        "observation_date": "2025-10-15",
        "area_km2": 12.98,
        "area_uncertainty_km2": 0.215,
        "retreat_distance_m": 549.0,
        "terminus_position": {
            "distance_m": 761.0,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 72.4,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.18
            },
            {
                "band_label": "5200\u20135500 m",
                "area_change_km2": -0.62
            },
            {
                "band_label": "5500\u20136000 m",
                "area_change_km2": -0.47
            }
        ],
        "glacier_lake_distance_m": 35.2,
        "lake_area_km2": 1.48,
        "lake_area_change_percent": 25.4,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    }
],
  "tsho-rolpa": [
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "observation_date": "2016-10-15",
        "area_km2": 17.82,
        "area_uncertainty_km2": 0.287,
        "retreat_distance_m": 0.0,
        "terminus_position": {
            "distance_m": 180.0,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": null,
        "elevation_band_change": [
            {
                "band_label": "4800\u20135000 m",
                "area_change_km2": -0.0
            },
            {
                "band_label": "5000\u20135300 m",
                "area_change_km2": -0.0
            },
            {
                "band_label": "5300\u20135800 m",
                "area_change_km2": -0.0
            }
        ],
        "glacier_lake_distance_m": 22.0,
        "lake_area_km2": 1.48,
        "lake_area_change_percent": 0.0,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "observation_date": "2017-10-15",
        "area_km2": 17.706,
        "area_uncertainty_km2": 0.286,
        "retreat_distance_m": 43.3,
        "terminus_position": {
            "distance_m": 223.3,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 43.3,
        "elevation_band_change": [
            {
                "band_label": "4800\u20135000 m",
                "area_change_km2": -0.013
            },
            {
                "band_label": "5000\u20135300 m",
                "area_change_km2": -0.049
            },
            {
                "band_label": "5300\u20135800 m",
                "area_change_km2": -0.032
            }
        ],
        "glacier_lake_distance_m": 24.8,
        "lake_area_km2": 1.502,
        "lake_area_change_percent": 1.5,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "observation_date": "2018-10-15",
        "area_km2": 17.641,
        "area_uncertainty_km2": 0.285,
        "retreat_distance_m": 65.7,
        "terminus_position": {
            "distance_m": 245.7,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 23,
        "annualised_retreat_rate_m_per_year": 22.4,
        "elevation_band_change": [
            {
                "band_label": "4800\u20135000 m",
                "area_change_km2": -0.027
            },
            {
                "band_label": "5000\u20135300 m",
                "area_change_km2": -0.098
            },
            {
                "band_label": "5300\u20135800 m",
                "area_change_km2": -0.064
            }
        ],
        "glacier_lake_distance_m": 24.6,
        "lake_area_km2": 1.508,
        "lake_area_change_percent": 1.9,
        "boundary_error_m": 18,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "observation_date": "2019-10-15",
        "area_km2": 17.522,
        "area_uncertainty_km2": 0.283,
        "retreat_distance_m": 118.0,
        "terminus_position": {
            "distance_m": 298.0,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 52.3,
        "elevation_band_change": [
            {
                "band_label": "4800\u20135000 m",
                "area_change_km2": -0.04
            },
            {
                "band_label": "5000\u20135300 m",
                "area_change_km2": -0.147
            },
            {
                "band_label": "5300\u20135800 m",
                "area_change_km2": -0.097
            }
        ],
        "glacier_lake_distance_m": 29.4,
        "lake_area_km2": 1.54,
        "lake_area_change_percent": 4.1,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "observation_date": "2020-10-15",
        "area_km2": 17.462,
        "area_uncertainty_km2": 0.282,
        "retreat_distance_m": 135.3,
        "terminus_position": {
            "distance_m": 315.3,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 17.3,
        "elevation_band_change": [
            {
                "band_label": "4800\u20135000 m",
                "area_change_km2": -0.053
            },
            {
                "band_label": "5000\u20135300 m",
                "area_change_km2": -0.196
            },
            {
                "band_label": "5300\u20135800 m",
                "area_change_km2": -0.129
            }
        ],
        "glacier_lake_distance_m": 28.2,
        "lake_area_km2": 1.542,
        "lake_area_change_percent": 4.2,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "observation_date": "2021-10-15",
        "area_km2": 17.338,
        "area_uncertainty_km2": 0.28,
        "retreat_distance_m": 185.7,
        "terminus_position": {
            "distance_m": 365.7,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 50.4,
        "elevation_band_change": [
            {
                "band_label": "4800\u20135000 m",
                "area_change_km2": -0.067
            },
            {
                "band_label": "5000\u20135300 m",
                "area_change_km2": -0.244
            },
            {
                "band_label": "5300\u20135800 m",
                "area_change_km2": -0.161
            }
        ],
        "glacier_lake_distance_m": 32.0,
        "lake_area_km2": 1.568,
        "lake_area_change_percent": 5.9,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "observation_date": "2022-10-15",
        "area_km2": 17.268,
        "area_uncertainty_km2": 0.279,
        "retreat_distance_m": 208.0,
        "terminus_position": {
            "distance_m": 388.0,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 22.3,
        "elevation_band_change": [
            {
                "band_label": "4800\u20135000 m",
                "area_change_km2": -0.08
            },
            {
                "band_label": "5000\u20135300 m",
                "area_change_km2": -0.293
            },
            {
                "band_label": "5300\u20135800 m",
                "area_change_km2": -0.193
            }
        ],
        "glacier_lake_distance_m": 32.8,
        "lake_area_km2": 1.58,
        "lake_area_change_percent": 6.8,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "observation_date": "2023-10-15",
        "area_km2": 17.139,
        "area_uncertainty_km2": 0.277,
        "retreat_distance_m": 258.3,
        "terminus_position": {
            "distance_m": 438.3,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 50.3,
        "elevation_band_change": [
            {
                "band_label": "4800\u20135000 m",
                "area_change_km2": -0.093
            },
            {
                "band_label": "5000\u20135300 m",
                "area_change_km2": -0.342
            },
            {
                "band_label": "5300\u20135800 m",
                "area_change_km2": -0.226
            }
        ],
        "glacier_lake_distance_m": 36.6,
        "lake_area_km2": 1.605,
        "lake_area_change_percent": 8.4,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "observation_date": "2024-10-15",
        "area_km2": 17.074,
        "area_uncertainty_km2": 0.276,
        "retreat_distance_m": 275.7,
        "terminus_position": {
            "distance_m": 455.7,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 17.4,
        "elevation_band_change": [
            {
                "band_label": "4800\u20135000 m",
                "area_change_km2": -0.107
            },
            {
                "band_label": "5000\u20135300 m",
                "area_change_km2": -0.391
            },
            {
                "band_label": "5300\u20135800 m",
                "area_change_km2": -0.258
            }
        ],
        "glacier_lake_distance_m": 35.4,
        "lake_area_km2": 1.609,
        "lake_area_change_percent": 8.7,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "glacier_id": "RGI2000-v7.0-G-15-10433",
        "observation_date": "2025-10-15",
        "area_km2": 16.97,
        "area_uncertainty_km2": 0.275,
        "retreat_distance_m": 323.0,
        "terminus_position": {
            "distance_m": 503.0,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 47.3,
        "elevation_band_change": [
            {
                "band_label": "4800\u20135000 m",
                "area_change_km2": -0.12
            },
            {
                "band_label": "5000\u20135300 m",
                "area_change_km2": -0.44
            },
            {
                "band_label": "5300\u20135800 m",
                "area_change_km2": -0.29
            }
        ],
        "glacier_lake_distance_m": 39.2,
        "lake_area_km2": 1.636,
        "lake_area_change_percent": 10.5,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    }
],
  "imja-tsho": [
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "observation_date": "2016-10-15",
        "area_km2": 8.12,
        "area_uncertainty_km2": 0.142,
        "retreat_distance_m": 0.0,
        "terminus_position": {
            "distance_m": 165.0,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": null,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.0
            },
            {
                "band_label": "5200\u20135400 m",
                "area_change_km2": -0.0
            },
            {
                "band_label": "5400\u20135800 m",
                "area_change_km2": -0.0
            }
        ],
        "glacier_lake_distance_m": 15.0,
        "lake_area_km2": 1.26,
        "lake_area_change_percent": 0.0,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "observation_date": "2017-10-15",
        "area_km2": 8.028,
        "area_uncertainty_km2": 0.14,
        "retreat_distance_m": 53.6,
        "terminus_position": {
            "distance_m": 218.6,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 53.6,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.01
            },
            {
                "band_label": "5200\u20135400 m",
                "area_change_km2": -0.034
            },
            {
                "band_label": "5400\u20135800 m",
                "area_change_km2": -0.028
            }
        ],
        "glacier_lake_distance_m": 17.8,
        "lake_area_km2": 1.279,
        "lake_area_change_percent": 1.5,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "observation_date": "2018-10-15",
        "area_km2": 7.986,
        "area_uncertainty_km2": 0.14,
        "retreat_distance_m": 86.1,
        "terminus_position": {
            "distance_m": 251.1,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 23,
        "annualised_retreat_rate_m_per_year": 32.5,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.02
            },
            {
                "band_label": "5200\u20135400 m",
                "area_change_km2": -0.069
            },
            {
                "band_label": "5400\u20135800 m",
                "area_change_km2": -0.056
            }
        ],
        "glacier_lake_distance_m": 17.6,
        "lake_area_km2": 1.284,
        "lake_area_change_percent": 1.9,
        "boundary_error_m": 18,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "observation_date": "2019-10-15",
        "area_km2": 7.888,
        "area_uncertainty_km2": 0.138,
        "retreat_distance_m": 148.7,
        "terminus_position": {
            "distance_m": 313.7,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 62.6,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.03
            },
            {
                "band_label": "5200\u20135400 m",
                "area_change_km2": -0.103
            },
            {
                "band_label": "5400\u20135800 m",
                "area_change_km2": -0.083
            }
        ],
        "glacier_lake_distance_m": 22.4,
        "lake_area_km2": 1.313,
        "lake_area_change_percent": 4.2,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "observation_date": "2020-10-15",
        "area_km2": 7.851,
        "area_uncertainty_km2": 0.138,
        "retreat_distance_m": 176.2,
        "terminus_position": {
            "distance_m": 341.2,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 27.4,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.04
            },
            {
                "band_label": "5200\u20135400 m",
                "area_change_km2": -0.138
            },
            {
                "band_label": "5400\u20135800 m",
                "area_change_km2": -0.111
            }
        ],
        "glacier_lake_distance_m": 21.2,
        "lake_area_km2": 1.313,
        "lake_area_change_percent": 4.2,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "observation_date": "2021-10-15",
        "area_km2": 7.749,
        "area_uncertainty_km2": 0.136,
        "retreat_distance_m": 236.8,
        "terminus_position": {
            "distance_m": 401.8,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 60.6,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.05
            },
            {
                "band_label": "5200\u20135400 m",
                "area_change_km2": -0.172
            },
            {
                "band_label": "5400\u20135800 m",
                "area_change_km2": -0.139
            }
        ],
        "glacier_lake_distance_m": 25.0,
        "lake_area_km2": 1.337,
        "lake_area_change_percent": 6.1,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "observation_date": "2022-10-15",
        "area_km2": 7.702,
        "area_uncertainty_km2": 0.136,
        "retreat_distance_m": 269.3,
        "terminus_position": {
            "distance_m": 434.3,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 32.5,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.06
            },
            {
                "band_label": "5200\u20135400 m",
                "area_change_km2": -0.207
            },
            {
                "band_label": "5400\u20135800 m",
                "area_change_km2": -0.167
            }
        ],
        "glacier_lake_distance_m": 25.8,
        "lake_area_km2": 1.347,
        "lake_area_change_percent": 6.9,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "observation_date": "2023-10-15",
        "area_km2": 7.594,
        "area_uncertainty_km2": 0.134,
        "retreat_distance_m": 329.9,
        "terminus_position": {
            "distance_m": 494.9,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 60.6,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.07
            },
            {
                "band_label": "5200\u20135400 m",
                "area_change_km2": -0.241
            },
            {
                "band_label": "5400\u20135800 m",
                "area_change_km2": -0.194
            }
        ],
        "glacier_lake_distance_m": 29.6,
        "lake_area_km2": 1.369,
        "lake_area_change_percent": 8.7,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "observation_date": "2024-10-15",
        "area_km2": 7.552,
        "area_uncertainty_km2": 0.133,
        "retreat_distance_m": 357.4,
        "terminus_position": {
            "distance_m": 522.4,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 27.4,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.08
            },
            {
                "band_label": "5200\u20135400 m",
                "area_change_km2": -0.276
            },
            {
                "band_label": "5400\u20135800 m",
                "area_change_km2": -0.222
            }
        ],
        "glacier_lake_distance_m": 28.4,
        "lake_area_km2": 1.372,
        "lake_area_change_percent": 8.9,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "glacier_id": "RGI2000-v7.0-G-15-10232",
        "observation_date": "2025-10-15",
        "area_km2": 7.47,
        "area_uncertainty_km2": 0.132,
        "retreat_distance_m": 415.0,
        "terminus_position": {
            "distance_m": 580.0,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 57.6,
        "elevation_band_change": [
            {
                "band_label": "5000\u20135200 m",
                "area_change_km2": -0.09
            },
            {
                "band_label": "5200\u20135400 m",
                "area_change_km2": -0.31
            },
            {
                "band_label": "5400\u20135800 m",
                "area_change_km2": -0.25
            }
        ],
        "glacier_lake_distance_m": 32.2,
        "lake_area_km2": 1.396,
        "lake_area_change_percent": 10.8,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    }
],
  "thulagi": [
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "observation_date": "2016-10-15",
        "area_km2": 6.92,
        "area_uncertainty_km2": 0.124,
        "retreat_distance_m": 0.0,
        "terminus_position": {
            "distance_m": 142.0,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": null,
        "elevation_band_change": [
            {
                "band_label": "4000\u20134300 m",
                "area_change_km2": -0.0
            },
            {
                "band_label": "4300\u20134800 m",
                "area_change_km2": -0.0
            },
            {
                "band_label": "4800\u20135200 m",
                "area_change_km2": -0.0
            }
        ],
        "glacier_lake_distance_m": 35.0,
        "lake_area_km2": 0.82,
        "lake_area_change_percent": 0.0,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "observation_date": "2017-10-15",
        "area_km2": 6.847,
        "area_uncertainty_km2": 0.123,
        "retreat_distance_m": 40.2,
        "terminus_position": {
            "distance_m": 182.2,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 40.2,
        "elevation_band_change": [
            {
                "band_label": "4000\u20134300 m",
                "area_change_km2": -0.008
            },
            {
                "band_label": "4300\u20134800 m",
                "area_change_km2": -0.024
            },
            {
                "band_label": "4800\u20135200 m",
                "area_change_km2": -0.021
            }
        ],
        "glacier_lake_distance_m": 37.8,
        "lake_area_km2": 0.838,
        "lake_area_change_percent": 2.2,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "observation_date": "2018-10-15",
        "area_km2": 6.823,
        "area_uncertainty_km2": 0.122,
        "retreat_distance_m": 59.4,
        "terminus_position": {
            "distance_m": 201.4,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 23,
        "annualised_retreat_rate_m_per_year": 19.2,
        "elevation_band_change": [
            {
                "band_label": "4000\u20134300 m",
                "area_change_km2": -0.016
            },
            {
                "band_label": "4300\u20134800 m",
                "area_change_km2": -0.049
            },
            {
                "band_label": "4800\u20135200 m",
                "area_change_km2": -0.042
            }
        ],
        "glacier_lake_distance_m": 37.6,
        "lake_area_km2": 0.842,
        "lake_area_change_percent": 2.7,
        "boundary_error_m": 18,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "observation_date": "2019-10-15",
        "area_km2": 6.745,
        "area_uncertainty_km2": 0.121,
        "retreat_distance_m": 108.7,
        "terminus_position": {
            "distance_m": 250.7,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 49.3,
        "elevation_band_change": [
            {
                "band_label": "4000\u20134300 m",
                "area_change_km2": -0.023
            },
            {
                "band_label": "4300\u20134800 m",
                "area_change_km2": -0.073
            },
            {
                "band_label": "4800\u20135200 m",
                "area_change_km2": -0.063
            }
        ],
        "glacier_lake_distance_m": 42.4,
        "lake_area_km2": 0.87,
        "lake_area_change_percent": 6.1,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "observation_date": "2020-10-15",
        "area_km2": 6.727,
        "area_uncertainty_km2": 0.121,
        "retreat_distance_m": 122.9,
        "terminus_position": {
            "distance_m": 264.9,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 14.2,
        "elevation_band_change": [
            {
                "band_label": "4000\u20134300 m",
                "area_change_km2": -0.031
            },
            {
                "band_label": "4300\u20134800 m",
                "area_change_km2": -0.098
            },
            {
                "band_label": "4800\u20135200 m",
                "area_change_km2": -0.084
            }
        ],
        "glacier_lake_distance_m": 41.2,
        "lake_area_km2": 0.868,
        "lake_area_change_percent": 5.9,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "observation_date": "2021-10-15",
        "area_km2": 6.643,
        "area_uncertainty_km2": 0.12,
        "retreat_distance_m": 170.1,
        "terminus_position": {
            "distance_m": 312.1,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 47.2,
        "elevation_band_change": [
            {
                "band_label": "4000\u20134300 m",
                "area_change_km2": -0.039
            },
            {
                "band_label": "4300\u20134800 m",
                "area_change_km2": -0.122
            },
            {
                "band_label": "4800\u20135200 m",
                "area_change_km2": -0.106
            }
        ],
        "glacier_lake_distance_m": 45.0,
        "lake_area_km2": 0.892,
        "lake_area_change_percent": 8.8,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "observation_date": "2022-10-15",
        "area_km2": 6.615,
        "area_uncertainty_km2": 0.119,
        "retreat_distance_m": 189.3,
        "terminus_position": {
            "distance_m": 331.3,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 19.2,
        "elevation_band_change": [
            {
                "band_label": "4000\u20134300 m",
                "area_change_km2": -0.047
            },
            {
                "band_label": "4300\u20134800 m",
                "area_change_km2": -0.147
            },
            {
                "band_label": "4800\u20135200 m",
                "area_change_km2": -0.127
            }
        ],
        "glacier_lake_distance_m": 45.8,
        "lake_area_km2": 0.9,
        "lake_area_change_percent": 9.8,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "observation_date": "2023-10-15",
        "area_km2": 6.527,
        "area_uncertainty_km2": 0.118,
        "retreat_distance_m": 236.6,
        "terminus_position": {
            "distance_m": 378.6,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 47.3,
        "elevation_band_change": [
            {
                "band_label": "4000\u20134300 m",
                "area_change_km2": -0.054
            },
            {
                "band_label": "4300\u20134800 m",
                "area_change_km2": -0.171
            },
            {
                "band_label": "4800\u20135200 m",
                "area_change_km2": -0.148
            }
        ],
        "glacier_lake_distance_m": 49.6,
        "lake_area_km2": 0.921,
        "lake_area_change_percent": 12.3,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "observation_date": "2024-10-15",
        "area_km2": 6.503,
        "area_uncertainty_km2": 0.118,
        "retreat_distance_m": 250.8,
        "terminus_position": {
            "distance_m": 392.8,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 14.2,
        "elevation_band_change": [
            {
                "band_label": "4000\u20134300 m",
                "area_change_km2": -0.062
            },
            {
                "band_label": "4300\u20134800 m",
                "area_change_km2": -0.196
            },
            {
                "band_label": "4800\u20135200 m",
                "area_change_km2": -0.169
            }
        ],
        "glacier_lake_distance_m": 48.4,
        "lake_area_km2": 0.923,
        "lake_area_change_percent": 12.6,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "glacier_id": "RGI2000-v7.0-G-15-09021",
        "observation_date": "2025-10-15",
        "area_km2": 6.44,
        "area_uncertainty_km2": 0.117,
        "retreat_distance_m": 295.0,
        "terminus_position": {
            "distance_m": 437.0,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 44.2,
        "elevation_band_change": [
            {
                "band_label": "4000\u20134300 m",
                "area_change_km2": -0.07
            },
            {
                "band_label": "4300\u20134800 m",
                "area_change_km2": -0.22
            },
            {
                "band_label": "4800\u20135200 m",
                "area_change_km2": -0.19
            }
        ],
        "glacier_lake_distance_m": 52.2,
        "lake_area_km2": 0.946,
        "lake_area_change_percent": 15.4,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    }
],
  "chhota-shigri": [
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "observation_date": "2016-10-15",
        "area_km2": 16.48,
        "area_uncertainty_km2": 0.267,
        "retreat_distance_m": 0.0,
        "terminus_position": {
            "distance_m": 195.0,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": null,
        "elevation_band_change": [
            {
                "band_label": "4300\u20134700 m",
                "area_change_km2": -0.0
            },
            {
                "band_label": "4700\u20135100 m",
                "area_change_km2": -0.0
            },
            {
                "band_label": "5100\u20135600 m",
                "area_change_km2": -0.0
            }
        ],
        "glacier_lake_distance_m": 28.0,
        "lake_area_km2": 0.35,
        "lake_area_change_percent": 0.0,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "observation_date": "2017-10-15",
        "area_km2": 16.343,
        "area_uncertainty_km2": 0.265,
        "retreat_distance_m": 50.2,
        "terminus_position": {
            "distance_m": 245.2,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 50.2,
        "elevation_band_change": [
            {
                "band_label": "4300\u20134700 m",
                "area_change_km2": -0.017
            },
            {
                "band_label": "4700\u20135100 m",
                "area_change_km2": -0.058
            },
            {
                "band_label": "5100\u20135600 m",
                "area_change_km2": -0.042
            }
        ],
        "glacier_lake_distance_m": 30.8,
        "lake_area_km2": 0.362,
        "lake_area_change_percent": 3.4,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "observation_date": "2018-10-15",
        "area_km2": 16.257,
        "area_uncertainty_km2": 0.264,
        "retreat_distance_m": 79.4,
        "terminus_position": {
            "distance_m": 274.4,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 23,
        "annualised_retreat_rate_m_per_year": 29.2,
        "elevation_band_change": [
            {
                "band_label": "4300\u20134700 m",
                "area_change_km2": -0.033
            },
            {
                "band_label": "4700\u20135100 m",
                "area_change_km2": -0.116
            },
            {
                "band_label": "5100\u20135600 m",
                "area_change_km2": -0.084
            }
        ],
        "glacier_lake_distance_m": 30.6,
        "lake_area_km2": 0.358,
        "lake_area_change_percent": 2.3,
        "boundary_error_m": 18,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "observation_date": "2019-10-15",
        "area_km2": 16.115,
        "area_uncertainty_km2": 0.262,
        "retreat_distance_m": 138.7,
        "terminus_position": {
            "distance_m": 333.7,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 59.3,
        "elevation_band_change": [
            {
                "band_label": "4300\u20134700 m",
                "area_change_km2": -0.05
            },
            {
                "band_label": "4700\u20135100 m",
                "area_change_km2": -0.173
            },
            {
                "band_label": "5100\u20135600 m",
                "area_change_km2": -0.127
            }
        ],
        "glacier_lake_distance_m": 35.4,
        "lake_area_km2": 0.38,
        "lake_area_change_percent": 8.6,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "observation_date": "2020-10-15",
        "area_km2": 16.033,
        "area_uncertainty_km2": 0.26,
        "retreat_distance_m": 162.9,
        "terminus_position": {
            "distance_m": 357.9,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 24.1,
        "elevation_band_change": [
            {
                "band_label": "4300\u20134700 m",
                "area_change_km2": -0.067
            },
            {
                "band_label": "4700\u20135100 m",
                "area_change_km2": -0.231
            },
            {
                "band_label": "5100\u20135600 m",
                "area_change_km2": -0.169
            }
        ],
        "glacier_lake_distance_m": 34.2,
        "lake_area_km2": 0.372,
        "lake_area_change_percent": 6.3,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "observation_date": "2021-10-15",
        "area_km2": 15.887,
        "area_uncertainty_km2": 0.258,
        "retreat_distance_m": 220.1,
        "terminus_position": {
            "distance_m": 415.1,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 57.2,
        "elevation_band_change": [
            {
                "band_label": "4300\u20134700 m",
                "area_change_km2": -0.083
            },
            {
                "band_label": "4700\u20135100 m",
                "area_change_km2": -0.289
            },
            {
                "band_label": "5100\u20135600 m",
                "area_change_km2": -0.211
            }
        ],
        "glacier_lake_distance_m": 38.0,
        "lake_area_km2": 0.388,
        "lake_area_change_percent": 10.9,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "observation_date": "2022-10-15",
        "area_km2": 15.795,
        "area_uncertainty_km2": 0.257,
        "retreat_distance_m": 249.3,
        "terminus_position": {
            "distance_m": 444.3,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 29.2,
        "elevation_band_change": [
            {
                "band_label": "4300\u20134700 m",
                "area_change_km2": -0.1
            },
            {
                "band_label": "4700\u20135100 m",
                "area_change_km2": -0.347
            },
            {
                "band_label": "5100\u20135600 m",
                "area_change_km2": -0.253
            }
        ],
        "glacier_lake_distance_m": 38.8,
        "lake_area_km2": 0.39,
        "lake_area_change_percent": 11.4,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "observation_date": "2023-10-15",
        "area_km2": 15.643,
        "area_uncertainty_km2": 0.255,
        "retreat_distance_m": 306.6,
        "terminus_position": {
            "distance_m": 501.6,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 57.3,
        "elevation_band_change": [
            {
                "band_label": "4300\u20134700 m",
                "area_change_km2": -0.117
            },
            {
                "band_label": "4700\u20135100 m",
                "area_change_km2": -0.404
            },
            {
                "band_label": "5100\u20135600 m",
                "area_change_km2": -0.296
            }
        ],
        "glacier_lake_distance_m": 42.6,
        "lake_area_km2": 0.405,
        "lake_area_change_percent": 15.7,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "observation_date": "2024-10-15",
        "area_km2": 15.557,
        "area_uncertainty_km2": 0.253,
        "retreat_distance_m": 330.8,
        "terminus_position": {
            "distance_m": 525.8,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 24.1,
        "elevation_band_change": [
            {
                "band_label": "4300\u20134700 m",
                "area_change_km2": -0.133
            },
            {
                "band_label": "4700\u20135100 m",
                "area_change_km2": -0.462
            },
            {
                "band_label": "5100\u20135600 m",
                "area_change_km2": -0.338
            }
        ],
        "glacier_lake_distance_m": 41.4,
        "lake_area_km2": 0.399,
        "lake_area_change_percent": 14.0,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "glacier_id": "RGI2000-v7.0-G-14-15901",
        "observation_date": "2025-10-15",
        "area_km2": 15.43,
        "area_uncertainty_km2": 0.251,
        "retreat_distance_m": 385.0,
        "terminus_position": {
            "distance_m": 580.0,
            "crs": "EPSG:32645"
        },
        "terminus_error_m": 15,
        "annualised_retreat_rate_m_per_year": 54.2,
        "elevation_band_change": [
            {
                "band_label": "4300\u20134700 m",
                "area_change_km2": -0.15
            },
            {
                "band_label": "4700\u20135100 m",
                "area_change_km2": -0.52
            },
            {
                "band_label": "5100\u20135600 m",
                "area_change_km2": -0.38
            }
        ],
        "glacier_lake_distance_m": 45.2,
        "lake_area_km2": 0.416,
        "lake_area_change_percent": 18.9,
        "boundary_error_m": 10,
        "image_quality": "excellent",
        "source_ids": [
            "copernicus-s2-harmonized",
            "copernicus-dem-glo30",
            "rgi-v7-glacier-reference"
        ],
        "processing_version": "phase-2-retreat-v1.0",
        "quality_status": "approved"
    }
],
};

export const MEASUREMENT_CRS = "EPSG:32645";
export const MEASUREMENT_VERSION = "phase-2-retreat-v1.0";
