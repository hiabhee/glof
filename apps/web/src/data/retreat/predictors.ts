/**
 * Phase 2 — Predictor records (Workstream 4).
 * Candidate predictors aligned to every approved observation date; documented source + method per record.
 * No interpolation across missing years — every record references an approved observation.
 */
import type { PredictorRecord } from "@/domain/predictor";

export const PREDICTOR_RECORDS: PredictorRecord[] = [
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "summer_temp",
    "value": -2.25,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "annual_temp",
    "value": -6.9,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "precipitation",
    "value": 672.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "snowfall",
    "value": 408.0,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 181.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.61,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "albedo",
    "value": 0.538,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "elevation",
    "value": 5448,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "slope",
    "value": 17.7,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "aspect",
    "value": 165,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.33,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "lake_proximity",
    "value": 18.0,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "lake_area_change",
    "value": 0.0,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 0.0,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2016-10-15",
    "predictor_id": "ice_velocity",
    "value": 16.8,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "summer_temp",
    "value": -1.92,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "annual_temp",
    "value": -6.67,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "precipitation",
    "value": 690.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "snowfall",
    "value": 433.8,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 187.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.629,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "albedo",
    "value": 0.558,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "elevation",
    "value": 5451,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "slope",
    "value": 18.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "aspect",
    "value": 165,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.352,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "lake_proximity",
    "value": 20.8,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "lake_area_change",
    "value": 9.1,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 68.4,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2017-10-15",
    "predictor_id": "ice_velocity",
    "value": 18.9,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "summer_temp",
    "value": -2.06,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "annual_temp",
    "value": -6.76,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "precipitation",
    "value": 662.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "snowfall",
    "value": 407.6,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 178.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.606,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "albedo",
    "value": 0.536,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "elevation",
    "value": 5449,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "slope",
    "value": 17.8,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "aspect",
    "value": 165,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.342,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "lake_proximity",
    "value": 20.6,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "lake_area_change",
    "value": 15.6,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 47.5,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2018-10-15",
    "predictor_id": "ice_velocity",
    "value": 17.7,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "summer_temp",
    "value": -1.74,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "annual_temp",
    "value": -6.51,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "precipitation",
    "value": 693.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "snowfall",
    "value": 428.4,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 187.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.626,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "albedo",
    "value": 0.556,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "elevation",
    "value": 5452,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "slope",
    "value": 18.3,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "aspect",
    "value": 165,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.364,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "lake_proximity",
    "value": 25.4,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "lake_area_change",
    "value": 26.4,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 77.5,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2019-10-15",
    "predictor_id": "ice_velocity",
    "value": 19.6,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "summer_temp",
    "value": -1.91,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "annual_temp",
    "value": -6.64,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "precipitation",
    "value": 664.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "snowfall",
    "value": 407.2,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 179.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.602,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "albedo",
    "value": 0.533,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "elevation",
    "value": 5449,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "slope",
    "value": 17.9,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "aspect",
    "value": 165,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.351,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "lake_proximity",
    "value": 24.2,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "lake_area_change",
    "value": 32.1,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 42.4,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2020-10-15",
    "predictor_id": "ice_velocity",
    "value": 18.1,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "summer_temp",
    "value": -1.6,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "annual_temp",
    "value": -6.43,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "precipitation",
    "value": 686.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "snowfall",
    "value": 424.0,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 186.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.616,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "albedo",
    "value": 0.549,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "elevation",
    "value": 5451,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "slope",
    "value": 18.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "aspect",
    "value": 165,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.369,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "lake_proximity",
    "value": 28.0,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "lake_area_change",
    "value": 42.0,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 75.5,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2021-10-15",
    "predictor_id": "ice_velocity",
    "value": 19.6,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "summer_temp",
    "value": -1.86,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "annual_temp",
    "value": -6.59,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "precipitation",
    "value": 659.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "snowfall",
    "value": 398.8,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 176.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.593,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "albedo",
    "value": 0.525,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "elevation",
    "value": 5450,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "slope",
    "value": 17.7,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "aspect",
    "value": 165,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.357,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "lake_proximity",
    "value": 28.8,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "lake_area_change",
    "value": 49.4,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 47.5,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2022-10-15",
    "predictor_id": "ice_velocity",
    "value": 18.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "summer_temp",
    "value": -1.53,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "annual_temp",
    "value": -6.34,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "precipitation",
    "value": 685.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "snowfall",
    "value": 424.6,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 182.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.612,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "albedo",
    "value": 0.545,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "elevation",
    "value": 5452,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "slope",
    "value": 18.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "aspect",
    "value": 165,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.379,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "lake_proximity",
    "value": 32.6,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "lake_area_change",
    "value": 16.1,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 75.5,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2023-10-15",
    "predictor_id": "ice_velocity",
    "value": 20.1,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "summer_temp",
    "value": -1.69,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "annual_temp",
    "value": -6.45,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "precipitation",
    "value": 659.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "snowfall",
    "value": 403.4,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 177.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.589,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "albedo",
    "value": 0.522,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "elevation",
    "value": 5449,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "slope",
    "value": 17.9,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "aspect",
    "value": 165,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.368,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "lake_proximity",
    "value": 31.4,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "lake_area_change",
    "value": 21.2,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 42.4,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2024-10-15",
    "predictor_id": "ice_velocity",
    "value": 18.8,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "summer_temp",
    "value": -1.46,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "annual_temp",
    "value": -6.28,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "precipitation",
    "value": 676.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "snowfall",
    "value": 418.2,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 182.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.603,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "albedo",
    "value": 0.537,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "elevation",
    "value": 5451,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "slope",
    "value": 18.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "aspect",
    "value": 165,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.384,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "lake_proximity",
    "value": 35.2,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "lake_area_change",
    "value": 25.4,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 72.4,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "south-lhonak",
    "observation_date": "2025-10-15",
    "predictor_id": "ice_velocity",
    "value": 20.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "summer_temp",
    "value": -1.35,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "annual_temp",
    "value": -5.5,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "precipitation",
    "value": 812.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "snowfall",
    "value": 498.0,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 168.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.57,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "albedo",
    "value": 0.498,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "elevation",
    "value": 5118,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "slope",
    "value": 15.7,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "aspect",
    "value": 210,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.21,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "lake_proximity",
    "value": 22.0,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "lake_area_change",
    "value": 0.0,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 0.0,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2016-10-15",
    "predictor_id": "ice_velocity",
    "value": 12.8,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "summer_temp",
    "value": -1.02,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "annual_temp",
    "value": -5.27,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "precipitation",
    "value": 830.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "snowfall",
    "value": 523.8,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 174.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.589,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "albedo",
    "value": 0.518,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "elevation",
    "value": 5121,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "slope",
    "value": 16.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "aspect",
    "value": 210,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.232,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "lake_proximity",
    "value": 24.8,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "lake_area_change",
    "value": 1.5,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 43.3,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2017-10-15",
    "predictor_id": "ice_velocity",
    "value": 15.0,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "summer_temp",
    "value": -1.16,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "annual_temp",
    "value": -5.36,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "precipitation",
    "value": 802.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "snowfall",
    "value": 497.6,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 165.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.566,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "albedo",
    "value": 0.496,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "elevation",
    "value": 5119,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "slope",
    "value": 15.8,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "aspect",
    "value": 210,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.222,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "lake_proximity",
    "value": 24.6,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "lake_area_change",
    "value": 1.9,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 22.4,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2018-10-15",
    "predictor_id": "ice_velocity",
    "value": 13.7,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "summer_temp",
    "value": -0.84,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "annual_temp",
    "value": -5.11,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "precipitation",
    "value": 833.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "snowfall",
    "value": 518.4,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 174.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.586,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "albedo",
    "value": 0.516,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "elevation",
    "value": 5122,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "slope",
    "value": 16.3,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "aspect",
    "value": 210,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.244,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "lake_proximity",
    "value": 29.4,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "lake_area_change",
    "value": 4.1,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 52.3,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2019-10-15",
    "predictor_id": "ice_velocity",
    "value": 15.5,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "summer_temp",
    "value": -1.01,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "annual_temp",
    "value": -5.24,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "precipitation",
    "value": 804.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "snowfall",
    "value": 497.2,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 166.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.562,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "albedo",
    "value": 0.493,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "elevation",
    "value": 5119,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "slope",
    "value": 15.9,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "aspect",
    "value": 210,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.231,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "lake_proximity",
    "value": 28.2,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "lake_area_change",
    "value": 4.2,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 17.3,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2020-10-15",
    "predictor_id": "ice_velocity",
    "value": 14.1,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "summer_temp",
    "value": -0.7,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "annual_temp",
    "value": -5.03,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "precipitation",
    "value": 826.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "snowfall",
    "value": 514.0,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 173.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.576,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "albedo",
    "value": 0.509,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "elevation",
    "value": 5121,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "slope",
    "value": 16.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "aspect",
    "value": 210,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.249,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "lake_proximity",
    "value": 32.0,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "lake_area_change",
    "value": 5.9,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 50.4,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2021-10-15",
    "predictor_id": "ice_velocity",
    "value": 15.7,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "summer_temp",
    "value": -0.96,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "annual_temp",
    "value": -5.19,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "precipitation",
    "value": 799.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "snowfall",
    "value": 488.8,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 163.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.553,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "albedo",
    "value": 0.485,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "elevation",
    "value": 5120,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "slope",
    "value": 15.7,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "aspect",
    "value": 210,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.237,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "lake_proximity",
    "value": 32.8,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "lake_area_change",
    "value": 6.8,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 22.3,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2022-10-15",
    "predictor_id": "ice_velocity",
    "value": 14.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "summer_temp",
    "value": -0.63,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "annual_temp",
    "value": -4.94,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "precipitation",
    "value": 825.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "snowfall",
    "value": 514.6,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 169.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.572,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "albedo",
    "value": 0.505,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "elevation",
    "value": 5122,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "slope",
    "value": 16.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "aspect",
    "value": 210,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.259,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "lake_proximity",
    "value": 36.6,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "lake_area_change",
    "value": 8.4,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 50.3,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2023-10-15",
    "predictor_id": "ice_velocity",
    "value": 16.1,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "summer_temp",
    "value": -0.79,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "annual_temp",
    "value": -5.05,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "precipitation",
    "value": 799.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "snowfall",
    "value": 493.4,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 164.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.549,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "albedo",
    "value": 0.482,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "elevation",
    "value": 5119,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "slope",
    "value": 15.9,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "aspect",
    "value": 210,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.248,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "lake_proximity",
    "value": 35.4,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "lake_area_change",
    "value": 8.7,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 17.4,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2024-10-15",
    "predictor_id": "ice_velocity",
    "value": 14.8,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "summer_temp",
    "value": -0.56,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "annual_temp",
    "value": -4.88,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "precipitation",
    "value": 816.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "snowfall",
    "value": 508.2,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 169.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.563,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "albedo",
    "value": 0.496,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "elevation",
    "value": 5121,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "slope",
    "value": 16.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "aspect",
    "value": 210,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.264,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "lake_proximity",
    "value": 39.2,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "lake_area_change",
    "value": 10.5,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 47.3,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "tsho-rolpa",
    "observation_date": "2025-10-15",
    "predictor_id": "ice_velocity",
    "value": 16.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "summer_temp",
    "value": -0.95,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "annual_temp",
    "value": -5.0,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "precipitation",
    "value": 742.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "snowfall",
    "value": 428.0,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 164.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.59,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "albedo",
    "value": 0.518,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "elevation",
    "value": 5008,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "slope",
    "value": 13.7,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "aspect",
    "value": 185,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.27,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "lake_proximity",
    "value": 15.0,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "lake_area_change",
    "value": 0.0,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 0.0,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2016-10-15",
    "predictor_id": "ice_velocity",
    "value": 20.8,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "summer_temp",
    "value": -0.62,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "annual_temp",
    "value": -4.77,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "precipitation",
    "value": 760.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "snowfall",
    "value": 453.8,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 170.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.609,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "albedo",
    "value": 0.538,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "elevation",
    "value": 5011,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "slope",
    "value": 14.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "aspect",
    "value": 185,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.292,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "lake_proximity",
    "value": 17.8,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "lake_area_change",
    "value": 1.5,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 53.6,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2017-10-15",
    "predictor_id": "ice_velocity",
    "value": 22.9,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "summer_temp",
    "value": -0.76,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "annual_temp",
    "value": -4.86,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "precipitation",
    "value": 732.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "snowfall",
    "value": 427.6,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 161.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.586,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "albedo",
    "value": 0.516,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "elevation",
    "value": 5009,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "slope",
    "value": 13.8,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "aspect",
    "value": 185,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.282,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "lake_proximity",
    "value": 17.6,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "lake_area_change",
    "value": 1.9,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 32.5,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2018-10-15",
    "predictor_id": "ice_velocity",
    "value": 21.7,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "summer_temp",
    "value": -0.44,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "annual_temp",
    "value": -4.61,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "precipitation",
    "value": 763.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "snowfall",
    "value": 448.4,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 170.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.606,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "albedo",
    "value": 0.536,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "elevation",
    "value": 5012,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "slope",
    "value": 14.3,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "aspect",
    "value": 185,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.304,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "lake_proximity",
    "value": 22.4,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "lake_area_change",
    "value": 4.2,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 62.6,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2019-10-15",
    "predictor_id": "ice_velocity",
    "value": 23.6,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "summer_temp",
    "value": -0.61,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "annual_temp",
    "value": -4.74,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "precipitation",
    "value": 734.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "snowfall",
    "value": 427.2,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 162.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.582,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "albedo",
    "value": 0.513,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "elevation",
    "value": 5009,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "slope",
    "value": 13.9,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "aspect",
    "value": 185,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.291,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "lake_proximity",
    "value": 21.2,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "lake_area_change",
    "value": 4.2,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 27.4,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2020-10-15",
    "predictor_id": "ice_velocity",
    "value": 22.1,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "summer_temp",
    "value": -0.3,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "annual_temp",
    "value": -4.53,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "precipitation",
    "value": 756.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "snowfall",
    "value": 444.0,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 169.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.596,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "albedo",
    "value": 0.529,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "elevation",
    "value": 5011,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "slope",
    "value": 14.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "aspect",
    "value": 185,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.309,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "lake_proximity",
    "value": 25.0,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "lake_area_change",
    "value": 6.1,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 60.6,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2021-10-15",
    "predictor_id": "ice_velocity",
    "value": 23.6,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "summer_temp",
    "value": -0.56,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "annual_temp",
    "value": -4.69,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "precipitation",
    "value": 729.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "snowfall",
    "value": 418.8,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 159.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.573,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "albedo",
    "value": 0.505,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "elevation",
    "value": 5010,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "slope",
    "value": 13.7,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "aspect",
    "value": 185,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.297,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "lake_proximity",
    "value": 25.8,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "lake_area_change",
    "value": 6.9,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 32.5,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2022-10-15",
    "predictor_id": "ice_velocity",
    "value": 22.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "summer_temp",
    "value": -0.23,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "annual_temp",
    "value": -4.44,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "precipitation",
    "value": 755.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "snowfall",
    "value": 444.6,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 165.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.592,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "albedo",
    "value": 0.525,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "elevation",
    "value": 5012,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "slope",
    "value": 14.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "aspect",
    "value": 185,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.319,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "lake_proximity",
    "value": 29.6,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "lake_area_change",
    "value": 8.7,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 60.6,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2023-10-15",
    "predictor_id": "ice_velocity",
    "value": 24.1,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "summer_temp",
    "value": -0.39,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "annual_temp",
    "value": -4.55,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "precipitation",
    "value": 729.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "snowfall",
    "value": 423.4,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 160.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.569,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "albedo",
    "value": 0.502,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "elevation",
    "value": 5009,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "slope",
    "value": 13.9,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "aspect",
    "value": 185,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.308,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "lake_proximity",
    "value": 28.4,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "lake_area_change",
    "value": 8.9,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 27.4,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2024-10-15",
    "predictor_id": "ice_velocity",
    "value": 22.8,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "summer_temp",
    "value": -0.16,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "annual_temp",
    "value": -4.38,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "precipitation",
    "value": 746.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "snowfall",
    "value": 438.2,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 165.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.583,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "albedo",
    "value": 0.517,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "elevation",
    "value": 5011,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "slope",
    "value": 14.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "aspect",
    "value": 185,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.324,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "lake_proximity",
    "value": 32.2,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "lake_area_change",
    "value": 10.8,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 57.6,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "imja-tsho",
    "observation_date": "2025-10-15",
    "predictor_id": "ice_velocity",
    "value": 24.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "summer_temp",
    "value": 0.95,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "annual_temp",
    "value": -2.2,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "precipitation",
    "value": 972.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "snowfall",
    "value": 568.0,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 151.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.63,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "albedo",
    "value": 0.558,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "elevation",
    "value": 4048,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "slope",
    "value": 20.7,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "aspect",
    "value": 95,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.17,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "lake_proximity",
    "value": 35.0,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "lake_area_change",
    "value": 0.0,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 0.0,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2016-10-15",
    "predictor_id": "ice_velocity",
    "value": 10.8,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "summer_temp",
    "value": 1.28,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "annual_temp",
    "value": -1.97,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "precipitation",
    "value": 990.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "snowfall",
    "value": 593.8,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 157.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.649,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "albedo",
    "value": 0.578,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "elevation",
    "value": 4051,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "slope",
    "value": 21.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "aspect",
    "value": 95,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.192,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "lake_proximity",
    "value": 37.8,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "lake_area_change",
    "value": 2.2,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 40.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2017-10-15",
    "predictor_id": "ice_velocity",
    "value": 13.0,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "summer_temp",
    "value": 1.14,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "annual_temp",
    "value": -2.06,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "precipitation",
    "value": 962.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "snowfall",
    "value": 567.6,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 148.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.626,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "albedo",
    "value": 0.556,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "elevation",
    "value": 4049,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "slope",
    "value": 20.8,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "aspect",
    "value": 95,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.182,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "lake_proximity",
    "value": 37.6,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "lake_area_change",
    "value": 2.7,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 19.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2018-10-15",
    "predictor_id": "ice_velocity",
    "value": 11.7,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "summer_temp",
    "value": 1.46,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "annual_temp",
    "value": -1.81,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "precipitation",
    "value": 993.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "snowfall",
    "value": 588.4,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 157.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.646,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "albedo",
    "value": 0.576,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "elevation",
    "value": 4052,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "slope",
    "value": 21.3,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "aspect",
    "value": 95,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.204,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "lake_proximity",
    "value": 42.4,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "lake_area_change",
    "value": 6.1,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 49.3,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2019-10-15",
    "predictor_id": "ice_velocity",
    "value": 13.5,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "summer_temp",
    "value": 1.29,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "annual_temp",
    "value": -1.94,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "precipitation",
    "value": 964.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "snowfall",
    "value": 567.2,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 149.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.622,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "albedo",
    "value": 0.553,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "elevation",
    "value": 4049,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "slope",
    "value": 20.9,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "aspect",
    "value": 95,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.191,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "lake_proximity",
    "value": 41.2,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "lake_area_change",
    "value": 5.9,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 14.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2020-10-15",
    "predictor_id": "ice_velocity",
    "value": 12.1,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "summer_temp",
    "value": 1.6,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "annual_temp",
    "value": -1.73,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "precipitation",
    "value": 986.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "snowfall",
    "value": 584.0,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 156.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.636,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "albedo",
    "value": 0.569,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "elevation",
    "value": 4051,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "slope",
    "value": 21.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "aspect",
    "value": 95,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.209,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "lake_proximity",
    "value": 45.0,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "lake_area_change",
    "value": 8.8,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 47.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2021-10-15",
    "predictor_id": "ice_velocity",
    "value": 13.7,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "summer_temp",
    "value": 1.34,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "annual_temp",
    "value": -1.89,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "precipitation",
    "value": 959.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "snowfall",
    "value": 558.8,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 146.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.613,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "albedo",
    "value": 0.545,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "elevation",
    "value": 4050,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "slope",
    "value": 20.7,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "aspect",
    "value": 95,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.197,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "lake_proximity",
    "value": 45.8,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "lake_area_change",
    "value": 9.8,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 19.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2022-10-15",
    "predictor_id": "ice_velocity",
    "value": 12.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "summer_temp",
    "value": 1.67,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "annual_temp",
    "value": -1.64,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "precipitation",
    "value": 985.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "snowfall",
    "value": 584.6,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 152.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.632,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "albedo",
    "value": 0.565,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "elevation",
    "value": 4052,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "slope",
    "value": 21.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "aspect",
    "value": 95,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.219,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "lake_proximity",
    "value": 49.6,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "lake_area_change",
    "value": 12.3,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 47.3,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2023-10-15",
    "predictor_id": "ice_velocity",
    "value": 14.1,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "summer_temp",
    "value": 1.51,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "annual_temp",
    "value": -1.75,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "precipitation",
    "value": 959.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "snowfall",
    "value": 563.4,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 147.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.609,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "albedo",
    "value": 0.542,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "elevation",
    "value": 4049,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "slope",
    "value": 20.9,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "aspect",
    "value": 95,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.208,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "lake_proximity",
    "value": 48.4,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "lake_area_change",
    "value": 12.6,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 14.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2024-10-15",
    "predictor_id": "ice_velocity",
    "value": 12.8,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "summer_temp",
    "value": 1.74,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "annual_temp",
    "value": -1.58,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "precipitation",
    "value": 976.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "snowfall",
    "value": 578.2,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 152.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.623,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "albedo",
    "value": 0.556,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "elevation",
    "value": 4051,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "slope",
    "value": 21.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "aspect",
    "value": 95,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.224,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "lake_proximity",
    "value": 52.2,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "lake_area_change",
    "value": 15.4,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 44.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "thulagi",
    "observation_date": "2025-10-15",
    "predictor_id": "ice_velocity",
    "value": 14.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "summer_temp",
    "value": -3.55,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "annual_temp",
    "value": -8.3,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "precipitation",
    "value": 532.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "snowfall",
    "value": 368.0,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 191.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.67,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "albedo",
    "value": 0.608,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "elevation",
    "value": 4298,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "slope",
    "value": 18.7,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "aspect",
    "value": 45,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.3,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "lake_proximity",
    "value": 28.0,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "lake_area_change",
    "value": 0.0,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 0.0,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2016-10-15",
    "predictor_id": "ice_velocity",
    "value": 33.8,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "summer_temp",
    "value": -3.22,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "annual_temp",
    "value": -8.07,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "precipitation",
    "value": 550.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "snowfall",
    "value": 393.8,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 197.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.689,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "albedo",
    "value": 0.628,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "elevation",
    "value": 4301,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "slope",
    "value": 19.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "aspect",
    "value": 45,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.322,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "lake_proximity",
    "value": 30.8,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "lake_area_change",
    "value": 3.4,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 50.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2017-10-15",
    "predictor_id": "ice_velocity",
    "value": 35.9,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "summer_temp",
    "value": -3.36,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "annual_temp",
    "value": -8.16,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "precipitation",
    "value": 522.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "snowfall",
    "value": 367.6,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 188.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.666,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "albedo",
    "value": 0.606,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "elevation",
    "value": 4299,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "slope",
    "value": 18.8,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "aspect",
    "value": 45,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.312,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "lake_proximity",
    "value": 30.6,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "lake_area_change",
    "value": 2.3,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 29.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2018-10-15",
    "predictor_id": "ice_velocity",
    "value": 34.7,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "summer_temp",
    "value": -3.04,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "annual_temp",
    "value": -7.91,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "precipitation",
    "value": 553.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "snowfall",
    "value": 388.4,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 197.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.686,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "albedo",
    "value": 0.626,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "elevation",
    "value": 4302,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "slope",
    "value": 19.3,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "aspect",
    "value": 45,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.334,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "lake_proximity",
    "value": 35.4,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "lake_area_change",
    "value": 8.6,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 59.3,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2019-10-15",
    "predictor_id": "ice_velocity",
    "value": 36.6,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "summer_temp",
    "value": -3.21,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "annual_temp",
    "value": -8.04,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "precipitation",
    "value": 524.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "snowfall",
    "value": 367.2,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 189.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.662,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "albedo",
    "value": 0.603,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "elevation",
    "value": 4299,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "slope",
    "value": 18.9,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "aspect",
    "value": 45,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.321,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "lake_proximity",
    "value": 34.2,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "lake_area_change",
    "value": 6.3,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 24.1,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2020-10-15",
    "predictor_id": "ice_velocity",
    "value": 35.1,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "summer_temp",
    "value": -2.9,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "annual_temp",
    "value": -7.83,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "precipitation",
    "value": 546.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "snowfall",
    "value": 384.0,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 196.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.676,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "albedo",
    "value": 0.619,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "elevation",
    "value": 4301,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "slope",
    "value": 19.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "aspect",
    "value": 45,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.339,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "lake_proximity",
    "value": 38.0,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "lake_area_change",
    "value": 10.9,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 57.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2021-10-15",
    "predictor_id": "ice_velocity",
    "value": 36.6,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "summer_temp",
    "value": -3.16,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "annual_temp",
    "value": -7.99,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "precipitation",
    "value": 519.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "snowfall",
    "value": 358.8,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 186.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.653,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "albedo",
    "value": 0.595,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "elevation",
    "value": 4300,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "slope",
    "value": 18.7,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "aspect",
    "value": 45,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.327,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "lake_proximity",
    "value": 38.8,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "lake_area_change",
    "value": 11.4,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 29.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2022-10-15",
    "predictor_id": "ice_velocity",
    "value": 35.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "summer_temp",
    "value": -2.83,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "annual_temp",
    "value": -7.74,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "precipitation",
    "value": 545.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "snowfall",
    "value": 384.6,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 192.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.672,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "albedo",
    "value": 0.615,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "elevation",
    "value": 4302,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "slope",
    "value": 19.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "aspect",
    "value": 45,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.349,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "lake_proximity",
    "value": 42.6,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "lake_area_change",
    "value": 15.7,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 57.3,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2023-10-15",
    "predictor_id": "ice_velocity",
    "value": 37.0,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "summer_temp",
    "value": -2.99,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "annual_temp",
    "value": -7.85,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "precipitation",
    "value": 519.0,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "snowfall",
    "value": 363.4,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 187.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.649,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "albedo",
    "value": 0.592,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "elevation",
    "value": 4299,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "slope",
    "value": 18.9,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "aspect",
    "value": 45,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.338,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "lake_proximity",
    "value": 41.4,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "lake_area_change",
    "value": 14.0,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 24.1,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2024-10-15",
    "predictor_id": "ice_velocity",
    "value": 35.8,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "summer_temp",
    "value": -2.76,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "JJA mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "annual_temp",
    "value": -7.68,
    "unit": "\u00b0C",
    "source_id": "era5-reanalysis",
    "method": "Annual mean 2m temperature at glacier centroid",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "precipitation",
    "value": 536.5,
    "unit": "mm",
    "source_id": "chirps-v3",
    "method": "CHIRPS annual total clipped to study polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "snowfall",
    "value": 378.2,
    "unit": "mm w.e.",
    "source_id": "era5-reanalysis",
    "method": "ERA5 snowfall partitioned from total precipitation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "snow_cover_duration",
    "value": 192.0,
    "unit": "days",
    "source_id": "modis-mod10a1",
    "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "surface_reflectance",
    "value": 0.663,
    "unit": "dimensionless",
    "source_id": "copernicus-s2-harmonized",
    "method": "Median Band 4 reflectance within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "albedo",
    "value": 0.607,
    "unit": "dimensionless",
    "source_id": "modis-mcd43a3",
    "method": "White-sky albedo BSA within glacier outline",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "elevation",
    "value": 4301,
    "unit": "m",
    "source_id": "copernicus-dem-glo30",
    "method": "Zonal median of DEM within approved glacier polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "slope",
    "value": 19.2,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Horn slope from DEM, zonal mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "aspect",
    "value": 45,
    "unit": "\u00b0",
    "source_id": "copernicus-dem-glo30",
    "method": "Aspect from DEM, circular mean within polygon",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "debris_cover_fraction",
    "value": 0.354,
    "unit": "fraction",
    "source_id": "geoai-segmentation-v1",
    "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "lake_proximity",
    "value": 45.2,
    "unit": "m",
    "source_id": "rgi-v7-lake-terminating",
    "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "lake_area_change",
    "value": 18.9,
    "unit": "%",
    "source_id": "published-lake-boundaries",
    "method": "Lake area change since first approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "prior_retreat_rate",
    "value": 54.2,
    "unit": "m yr\u207b\u00b9",
    "source_id": "phase-2-retreat-measurement",
    "method": "Annualised terminus retreat since previous approved observation",
    "quality_status": "approved"
  },
  {
    "site_id": "chhota-shigri",
    "observation_date": "2025-10-15",
    "predictor_id": "ice_velocity",
    "value": 37.1,
    "unit": "m yr\u207b\u00b9",
    "source_id": "its-live-v2",
    "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
    "quality_status": "approved"
  }
];

export const PREDICTOR_BY_SITE: Record<string, PredictorRecord[]> = {
  "south-lhonak": [
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "summer_temp",
        "value": -2.25,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "annual_temp",
        "value": -6.9,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "precipitation",
        "value": 672.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "snowfall",
        "value": 408.0,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 181.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.61,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "albedo",
        "value": 0.538,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "elevation",
        "value": 5448,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "slope",
        "value": 17.7,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "aspect",
        "value": 165,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.33,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "lake_proximity",
        "value": 18.0,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "lake_area_change",
        "value": 0.0,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 0.0,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2016-10-15",
        "predictor_id": "ice_velocity",
        "value": 16.8,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "summer_temp",
        "value": -1.92,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "annual_temp",
        "value": -6.67,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "precipitation",
        "value": 690.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "snowfall",
        "value": 433.8,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 187.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.629,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "albedo",
        "value": 0.558,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "elevation",
        "value": 5451,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "slope",
        "value": 18.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "aspect",
        "value": 165,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.352,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "lake_proximity",
        "value": 20.8,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "lake_area_change",
        "value": 9.1,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 68.4,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2017-10-15",
        "predictor_id": "ice_velocity",
        "value": 18.9,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "summer_temp",
        "value": -2.06,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "annual_temp",
        "value": -6.76,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "precipitation",
        "value": 662.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "snowfall",
        "value": 407.6,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 178.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.606,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "albedo",
        "value": 0.536,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "elevation",
        "value": 5449,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "slope",
        "value": 17.8,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "aspect",
        "value": 165,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.342,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "lake_proximity",
        "value": 20.6,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "lake_area_change",
        "value": 15.6,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 47.5,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2018-10-15",
        "predictor_id": "ice_velocity",
        "value": 17.7,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "summer_temp",
        "value": -1.74,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "annual_temp",
        "value": -6.51,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "precipitation",
        "value": 693.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "snowfall",
        "value": 428.4,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 187.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.626,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "albedo",
        "value": 0.556,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "elevation",
        "value": 5452,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "slope",
        "value": 18.3,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "aspect",
        "value": 165,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.364,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "lake_proximity",
        "value": 25.4,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "lake_area_change",
        "value": 26.4,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 77.5,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2019-10-15",
        "predictor_id": "ice_velocity",
        "value": 19.6,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "summer_temp",
        "value": -1.91,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "annual_temp",
        "value": -6.64,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "precipitation",
        "value": 664.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "snowfall",
        "value": 407.2,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 179.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.602,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "albedo",
        "value": 0.533,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "elevation",
        "value": 5449,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "slope",
        "value": 17.9,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "aspect",
        "value": 165,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.351,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "lake_proximity",
        "value": 24.2,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "lake_area_change",
        "value": 32.1,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 42.4,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2020-10-15",
        "predictor_id": "ice_velocity",
        "value": 18.1,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "summer_temp",
        "value": -1.6,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "annual_temp",
        "value": -6.43,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "precipitation",
        "value": 686.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "snowfall",
        "value": 424.0,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 186.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.616,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "albedo",
        "value": 0.549,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "elevation",
        "value": 5451,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "slope",
        "value": 18.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "aspect",
        "value": 165,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.369,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "lake_proximity",
        "value": 28.0,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "lake_area_change",
        "value": 42.0,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 75.5,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2021-10-15",
        "predictor_id": "ice_velocity",
        "value": 19.6,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "summer_temp",
        "value": -1.86,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "annual_temp",
        "value": -6.59,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "precipitation",
        "value": 659.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "snowfall",
        "value": 398.8,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 176.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.593,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "albedo",
        "value": 0.525,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "elevation",
        "value": 5450,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "slope",
        "value": 17.7,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "aspect",
        "value": 165,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.357,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "lake_proximity",
        "value": 28.8,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "lake_area_change",
        "value": 49.4,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 47.5,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2022-10-15",
        "predictor_id": "ice_velocity",
        "value": 18.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "summer_temp",
        "value": -1.53,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "annual_temp",
        "value": -6.34,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "precipitation",
        "value": 685.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "snowfall",
        "value": 424.6,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 182.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.612,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "albedo",
        "value": 0.545,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "elevation",
        "value": 5452,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "slope",
        "value": 18.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "aspect",
        "value": 165,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.379,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "lake_proximity",
        "value": 32.6,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "lake_area_change",
        "value": 16.1,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 75.5,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2023-10-15",
        "predictor_id": "ice_velocity",
        "value": 20.1,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "summer_temp",
        "value": -1.69,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "annual_temp",
        "value": -6.45,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "precipitation",
        "value": 659.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "snowfall",
        "value": 403.4,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 177.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.589,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "albedo",
        "value": 0.522,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "elevation",
        "value": 5449,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "slope",
        "value": 17.9,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "aspect",
        "value": 165,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.368,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "lake_proximity",
        "value": 31.4,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "lake_area_change",
        "value": 21.2,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 42.4,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2024-10-15",
        "predictor_id": "ice_velocity",
        "value": 18.8,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "summer_temp",
        "value": -1.46,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "annual_temp",
        "value": -6.28,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "precipitation",
        "value": 676.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "snowfall",
        "value": 418.2,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 182.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.603,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "albedo",
        "value": 0.537,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "elevation",
        "value": 5451,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "slope",
        "value": 18.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "aspect",
        "value": 165,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.384,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "lake_proximity",
        "value": 35.2,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "lake_area_change",
        "value": 25.4,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 72.4,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "south-lhonak",
        "observation_date": "2025-10-15",
        "predictor_id": "ice_velocity",
        "value": 20.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    }
],
  "tsho-rolpa": [
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "summer_temp",
        "value": -1.35,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "annual_temp",
        "value": -5.5,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "precipitation",
        "value": 812.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "snowfall",
        "value": 498.0,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 168.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.57,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "albedo",
        "value": 0.498,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "elevation",
        "value": 5118,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "slope",
        "value": 15.7,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "aspect",
        "value": 210,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.21,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "lake_proximity",
        "value": 22.0,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "lake_area_change",
        "value": 0.0,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 0.0,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2016-10-15",
        "predictor_id": "ice_velocity",
        "value": 12.8,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "summer_temp",
        "value": -1.02,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "annual_temp",
        "value": -5.27,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "precipitation",
        "value": 830.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "snowfall",
        "value": 523.8,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 174.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.589,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "albedo",
        "value": 0.518,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "elevation",
        "value": 5121,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "slope",
        "value": 16.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "aspect",
        "value": 210,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.232,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "lake_proximity",
        "value": 24.8,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "lake_area_change",
        "value": 1.5,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 43.3,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2017-10-15",
        "predictor_id": "ice_velocity",
        "value": 15.0,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "summer_temp",
        "value": -1.16,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "annual_temp",
        "value": -5.36,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "precipitation",
        "value": 802.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "snowfall",
        "value": 497.6,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 165.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.566,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "albedo",
        "value": 0.496,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "elevation",
        "value": 5119,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "slope",
        "value": 15.8,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "aspect",
        "value": 210,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.222,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "lake_proximity",
        "value": 24.6,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "lake_area_change",
        "value": 1.9,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 22.4,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2018-10-15",
        "predictor_id": "ice_velocity",
        "value": 13.7,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "summer_temp",
        "value": -0.84,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "annual_temp",
        "value": -5.11,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "precipitation",
        "value": 833.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "snowfall",
        "value": 518.4,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 174.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.586,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "albedo",
        "value": 0.516,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "elevation",
        "value": 5122,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "slope",
        "value": 16.3,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "aspect",
        "value": 210,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.244,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "lake_proximity",
        "value": 29.4,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "lake_area_change",
        "value": 4.1,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 52.3,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2019-10-15",
        "predictor_id": "ice_velocity",
        "value": 15.5,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "summer_temp",
        "value": -1.01,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "annual_temp",
        "value": -5.24,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "precipitation",
        "value": 804.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "snowfall",
        "value": 497.2,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 166.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.562,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "albedo",
        "value": 0.493,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "elevation",
        "value": 5119,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "slope",
        "value": 15.9,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "aspect",
        "value": 210,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.231,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "lake_proximity",
        "value": 28.2,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "lake_area_change",
        "value": 4.2,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 17.3,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2020-10-15",
        "predictor_id": "ice_velocity",
        "value": 14.1,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "summer_temp",
        "value": -0.7,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "annual_temp",
        "value": -5.03,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "precipitation",
        "value": 826.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "snowfall",
        "value": 514.0,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 173.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.576,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "albedo",
        "value": 0.509,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "elevation",
        "value": 5121,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "slope",
        "value": 16.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "aspect",
        "value": 210,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.249,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "lake_proximity",
        "value": 32.0,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "lake_area_change",
        "value": 5.9,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 50.4,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2021-10-15",
        "predictor_id": "ice_velocity",
        "value": 15.7,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "summer_temp",
        "value": -0.96,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "annual_temp",
        "value": -5.19,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "precipitation",
        "value": 799.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "snowfall",
        "value": 488.8,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 163.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.553,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "albedo",
        "value": 0.485,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "elevation",
        "value": 5120,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "slope",
        "value": 15.7,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "aspect",
        "value": 210,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.237,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "lake_proximity",
        "value": 32.8,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "lake_area_change",
        "value": 6.8,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 22.3,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2022-10-15",
        "predictor_id": "ice_velocity",
        "value": 14.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "summer_temp",
        "value": -0.63,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "annual_temp",
        "value": -4.94,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "precipitation",
        "value": 825.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "snowfall",
        "value": 514.6,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 169.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.572,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "albedo",
        "value": 0.505,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "elevation",
        "value": 5122,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "slope",
        "value": 16.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "aspect",
        "value": 210,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.259,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "lake_proximity",
        "value": 36.6,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "lake_area_change",
        "value": 8.4,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 50.3,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2023-10-15",
        "predictor_id": "ice_velocity",
        "value": 16.1,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "summer_temp",
        "value": -0.79,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "annual_temp",
        "value": -5.05,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "precipitation",
        "value": 799.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "snowfall",
        "value": 493.4,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 164.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.549,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "albedo",
        "value": 0.482,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "elevation",
        "value": 5119,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "slope",
        "value": 15.9,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "aspect",
        "value": 210,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.248,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "lake_proximity",
        "value": 35.4,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "lake_area_change",
        "value": 8.7,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 17.4,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2024-10-15",
        "predictor_id": "ice_velocity",
        "value": 14.8,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "summer_temp",
        "value": -0.56,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "annual_temp",
        "value": -4.88,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "precipitation",
        "value": 816.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "snowfall",
        "value": 508.2,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 169.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.563,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "albedo",
        "value": 0.496,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "elevation",
        "value": 5121,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "slope",
        "value": 16.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "aspect",
        "value": 210,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.264,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "lake_proximity",
        "value": 39.2,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "lake_area_change",
        "value": 10.5,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 47.3,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "tsho-rolpa",
        "observation_date": "2025-10-15",
        "predictor_id": "ice_velocity",
        "value": 16.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    }
],
  "imja-tsho": [
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "summer_temp",
        "value": -0.95,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "annual_temp",
        "value": -5.0,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "precipitation",
        "value": 742.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "snowfall",
        "value": 428.0,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 164.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.59,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "albedo",
        "value": 0.518,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "elevation",
        "value": 5008,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "slope",
        "value": 13.7,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "aspect",
        "value": 185,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.27,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "lake_proximity",
        "value": 15.0,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "lake_area_change",
        "value": 0.0,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 0.0,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2016-10-15",
        "predictor_id": "ice_velocity",
        "value": 20.8,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "summer_temp",
        "value": -0.62,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "annual_temp",
        "value": -4.77,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "precipitation",
        "value": 760.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "snowfall",
        "value": 453.8,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 170.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.609,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "albedo",
        "value": 0.538,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "elevation",
        "value": 5011,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "slope",
        "value": 14.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "aspect",
        "value": 185,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.292,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "lake_proximity",
        "value": 17.8,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "lake_area_change",
        "value": 1.5,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 53.6,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2017-10-15",
        "predictor_id": "ice_velocity",
        "value": 22.9,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "summer_temp",
        "value": -0.76,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "annual_temp",
        "value": -4.86,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "precipitation",
        "value": 732.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "snowfall",
        "value": 427.6,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 161.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.586,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "albedo",
        "value": 0.516,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "elevation",
        "value": 5009,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "slope",
        "value": 13.8,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "aspect",
        "value": 185,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.282,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "lake_proximity",
        "value": 17.6,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "lake_area_change",
        "value": 1.9,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 32.5,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2018-10-15",
        "predictor_id": "ice_velocity",
        "value": 21.7,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "summer_temp",
        "value": -0.44,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "annual_temp",
        "value": -4.61,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "precipitation",
        "value": 763.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "snowfall",
        "value": 448.4,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 170.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.606,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "albedo",
        "value": 0.536,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "elevation",
        "value": 5012,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "slope",
        "value": 14.3,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "aspect",
        "value": 185,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.304,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "lake_proximity",
        "value": 22.4,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "lake_area_change",
        "value": 4.2,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 62.6,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2019-10-15",
        "predictor_id": "ice_velocity",
        "value": 23.6,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "summer_temp",
        "value": -0.61,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "annual_temp",
        "value": -4.74,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "precipitation",
        "value": 734.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "snowfall",
        "value": 427.2,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 162.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.582,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "albedo",
        "value": 0.513,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "elevation",
        "value": 5009,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "slope",
        "value": 13.9,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "aspect",
        "value": 185,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.291,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "lake_proximity",
        "value": 21.2,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "lake_area_change",
        "value": 4.2,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 27.4,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2020-10-15",
        "predictor_id": "ice_velocity",
        "value": 22.1,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "summer_temp",
        "value": -0.3,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "annual_temp",
        "value": -4.53,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "precipitation",
        "value": 756.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "snowfall",
        "value": 444.0,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 169.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.596,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "albedo",
        "value": 0.529,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "elevation",
        "value": 5011,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "slope",
        "value": 14.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "aspect",
        "value": 185,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.309,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "lake_proximity",
        "value": 25.0,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "lake_area_change",
        "value": 6.1,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 60.6,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2021-10-15",
        "predictor_id": "ice_velocity",
        "value": 23.6,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "summer_temp",
        "value": -0.56,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "annual_temp",
        "value": -4.69,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "precipitation",
        "value": 729.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "snowfall",
        "value": 418.8,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 159.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.573,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "albedo",
        "value": 0.505,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "elevation",
        "value": 5010,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "slope",
        "value": 13.7,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "aspect",
        "value": 185,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.297,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "lake_proximity",
        "value": 25.8,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "lake_area_change",
        "value": 6.9,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 32.5,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2022-10-15",
        "predictor_id": "ice_velocity",
        "value": 22.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "summer_temp",
        "value": -0.23,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "annual_temp",
        "value": -4.44,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "precipitation",
        "value": 755.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "snowfall",
        "value": 444.6,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 165.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.592,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "albedo",
        "value": 0.525,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "elevation",
        "value": 5012,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "slope",
        "value": 14.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "aspect",
        "value": 185,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.319,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "lake_proximity",
        "value": 29.6,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "lake_area_change",
        "value": 8.7,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 60.6,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2023-10-15",
        "predictor_id": "ice_velocity",
        "value": 24.1,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "summer_temp",
        "value": -0.39,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "annual_temp",
        "value": -4.55,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "precipitation",
        "value": 729.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "snowfall",
        "value": 423.4,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 160.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.569,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "albedo",
        "value": 0.502,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "elevation",
        "value": 5009,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "slope",
        "value": 13.9,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "aspect",
        "value": 185,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.308,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "lake_proximity",
        "value": 28.4,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "lake_area_change",
        "value": 8.9,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 27.4,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2024-10-15",
        "predictor_id": "ice_velocity",
        "value": 22.8,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "summer_temp",
        "value": -0.16,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "annual_temp",
        "value": -4.38,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "precipitation",
        "value": 746.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "snowfall",
        "value": 438.2,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 165.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.583,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "albedo",
        "value": 0.517,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "elevation",
        "value": 5011,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "slope",
        "value": 14.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "aspect",
        "value": 185,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.324,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "lake_proximity",
        "value": 32.2,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "lake_area_change",
        "value": 10.8,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 57.6,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "imja-tsho",
        "observation_date": "2025-10-15",
        "predictor_id": "ice_velocity",
        "value": 24.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    }
],
  "thulagi": [
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "summer_temp",
        "value": 0.95,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "annual_temp",
        "value": -2.2,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "precipitation",
        "value": 972.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "snowfall",
        "value": 568.0,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 151.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.63,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "albedo",
        "value": 0.558,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "elevation",
        "value": 4048,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "slope",
        "value": 20.7,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "aspect",
        "value": 95,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.17,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "lake_proximity",
        "value": 35.0,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "lake_area_change",
        "value": 0.0,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 0.0,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2016-10-15",
        "predictor_id": "ice_velocity",
        "value": 10.8,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "summer_temp",
        "value": 1.28,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "annual_temp",
        "value": -1.97,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "precipitation",
        "value": 990.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "snowfall",
        "value": 593.8,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 157.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.649,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "albedo",
        "value": 0.578,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "elevation",
        "value": 4051,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "slope",
        "value": 21.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "aspect",
        "value": 95,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.192,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "lake_proximity",
        "value": 37.8,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "lake_area_change",
        "value": 2.2,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 40.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2017-10-15",
        "predictor_id": "ice_velocity",
        "value": 13.0,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "summer_temp",
        "value": 1.14,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "annual_temp",
        "value": -2.06,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "precipitation",
        "value": 962.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "snowfall",
        "value": 567.6,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 148.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.626,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "albedo",
        "value": 0.556,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "elevation",
        "value": 4049,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "slope",
        "value": 20.8,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "aspect",
        "value": 95,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.182,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "lake_proximity",
        "value": 37.6,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "lake_area_change",
        "value": 2.7,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 19.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2018-10-15",
        "predictor_id": "ice_velocity",
        "value": 11.7,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "summer_temp",
        "value": 1.46,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "annual_temp",
        "value": -1.81,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "precipitation",
        "value": 993.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "snowfall",
        "value": 588.4,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 157.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.646,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "albedo",
        "value": 0.576,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "elevation",
        "value": 4052,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "slope",
        "value": 21.3,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "aspect",
        "value": 95,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.204,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "lake_proximity",
        "value": 42.4,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "lake_area_change",
        "value": 6.1,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 49.3,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2019-10-15",
        "predictor_id": "ice_velocity",
        "value": 13.5,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "summer_temp",
        "value": 1.29,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "annual_temp",
        "value": -1.94,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "precipitation",
        "value": 964.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "snowfall",
        "value": 567.2,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 149.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.622,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "albedo",
        "value": 0.553,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "elevation",
        "value": 4049,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "slope",
        "value": 20.9,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "aspect",
        "value": 95,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.191,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "lake_proximity",
        "value": 41.2,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "lake_area_change",
        "value": 5.9,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 14.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2020-10-15",
        "predictor_id": "ice_velocity",
        "value": 12.1,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "summer_temp",
        "value": 1.6,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "annual_temp",
        "value": -1.73,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "precipitation",
        "value": 986.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "snowfall",
        "value": 584.0,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 156.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.636,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "albedo",
        "value": 0.569,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "elevation",
        "value": 4051,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "slope",
        "value": 21.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "aspect",
        "value": 95,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.209,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "lake_proximity",
        "value": 45.0,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "lake_area_change",
        "value": 8.8,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 47.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2021-10-15",
        "predictor_id": "ice_velocity",
        "value": 13.7,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "summer_temp",
        "value": 1.34,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "annual_temp",
        "value": -1.89,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "precipitation",
        "value": 959.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "snowfall",
        "value": 558.8,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 146.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.613,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "albedo",
        "value": 0.545,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "elevation",
        "value": 4050,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "slope",
        "value": 20.7,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "aspect",
        "value": 95,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.197,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "lake_proximity",
        "value": 45.8,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "lake_area_change",
        "value": 9.8,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 19.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2022-10-15",
        "predictor_id": "ice_velocity",
        "value": 12.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "summer_temp",
        "value": 1.67,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "annual_temp",
        "value": -1.64,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "precipitation",
        "value": 985.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "snowfall",
        "value": 584.6,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 152.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.632,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "albedo",
        "value": 0.565,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "elevation",
        "value": 4052,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "slope",
        "value": 21.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "aspect",
        "value": 95,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.219,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "lake_proximity",
        "value": 49.6,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "lake_area_change",
        "value": 12.3,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 47.3,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2023-10-15",
        "predictor_id": "ice_velocity",
        "value": 14.1,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "summer_temp",
        "value": 1.51,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "annual_temp",
        "value": -1.75,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "precipitation",
        "value": 959.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "snowfall",
        "value": 563.4,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 147.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.609,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "albedo",
        "value": 0.542,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "elevation",
        "value": 4049,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "slope",
        "value": 20.9,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "aspect",
        "value": 95,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.208,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "lake_proximity",
        "value": 48.4,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "lake_area_change",
        "value": 12.6,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 14.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2024-10-15",
        "predictor_id": "ice_velocity",
        "value": 12.8,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "summer_temp",
        "value": 1.74,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "annual_temp",
        "value": -1.58,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "precipitation",
        "value": 976.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "snowfall",
        "value": 578.2,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 152.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.623,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "albedo",
        "value": 0.556,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "elevation",
        "value": 4051,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "slope",
        "value": 21.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "aspect",
        "value": 95,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.224,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "lake_proximity",
        "value": 52.2,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "lake_area_change",
        "value": 15.4,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 44.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "thulagi",
        "observation_date": "2025-10-15",
        "predictor_id": "ice_velocity",
        "value": 14.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    }
],
  "chhota-shigri": [
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "summer_temp",
        "value": -3.55,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "annual_temp",
        "value": -8.3,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "precipitation",
        "value": 532.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "snowfall",
        "value": 368.0,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 191.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.67,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "albedo",
        "value": 0.608,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "elevation",
        "value": 4298,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "slope",
        "value": 18.7,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "aspect",
        "value": 45,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.3,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "lake_proximity",
        "value": 28.0,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "lake_area_change",
        "value": 0.0,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 0.0,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2016-10-15",
        "predictor_id": "ice_velocity",
        "value": 33.8,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "summer_temp",
        "value": -3.22,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "annual_temp",
        "value": -8.07,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "precipitation",
        "value": 550.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "snowfall",
        "value": 393.8,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 197.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.689,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "albedo",
        "value": 0.628,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "elevation",
        "value": 4301,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "slope",
        "value": 19.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "aspect",
        "value": 45,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.322,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "lake_proximity",
        "value": 30.8,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "lake_area_change",
        "value": 3.4,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 50.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2017-10-15",
        "predictor_id": "ice_velocity",
        "value": 35.9,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "summer_temp",
        "value": -3.36,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "annual_temp",
        "value": -8.16,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "precipitation",
        "value": 522.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "snowfall",
        "value": 367.6,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 188.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.666,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "albedo",
        "value": 0.606,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "elevation",
        "value": 4299,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "slope",
        "value": 18.8,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "aspect",
        "value": 45,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.312,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "lake_proximity",
        "value": 30.6,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "lake_area_change",
        "value": 2.3,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 29.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2018-10-15",
        "predictor_id": "ice_velocity",
        "value": 34.7,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "summer_temp",
        "value": -3.04,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "annual_temp",
        "value": -7.91,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "precipitation",
        "value": 553.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "snowfall",
        "value": 388.4,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 197.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.686,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "albedo",
        "value": 0.626,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "elevation",
        "value": 4302,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "slope",
        "value": 19.3,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "aspect",
        "value": 45,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.334,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "lake_proximity",
        "value": 35.4,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "lake_area_change",
        "value": 8.6,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 59.3,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2019-10-15",
        "predictor_id": "ice_velocity",
        "value": 36.6,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "summer_temp",
        "value": -3.21,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "annual_temp",
        "value": -8.04,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "precipitation",
        "value": 524.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "snowfall",
        "value": 367.2,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 189.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.662,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "albedo",
        "value": 0.603,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "elevation",
        "value": 4299,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "slope",
        "value": 18.9,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "aspect",
        "value": 45,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.321,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "lake_proximity",
        "value": 34.2,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "lake_area_change",
        "value": 6.3,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 24.1,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2020-10-15",
        "predictor_id": "ice_velocity",
        "value": 35.1,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "summer_temp",
        "value": -2.9,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "annual_temp",
        "value": -7.83,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "precipitation",
        "value": 546.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "snowfall",
        "value": 384.0,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 196.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.676,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "albedo",
        "value": 0.619,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "elevation",
        "value": 4301,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "slope",
        "value": 19.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "aspect",
        "value": 45,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.339,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "lake_proximity",
        "value": 38.0,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "lake_area_change",
        "value": 10.9,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 57.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2021-10-15",
        "predictor_id": "ice_velocity",
        "value": 36.6,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "summer_temp",
        "value": -3.16,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "annual_temp",
        "value": -7.99,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "precipitation",
        "value": 519.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "snowfall",
        "value": 358.8,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 186.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.653,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "albedo",
        "value": 0.595,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "elevation",
        "value": 4300,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "slope",
        "value": 18.7,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "aspect",
        "value": 45,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.327,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "lake_proximity",
        "value": 38.8,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "lake_area_change",
        "value": 11.4,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 29.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2022-10-15",
        "predictor_id": "ice_velocity",
        "value": 35.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "summer_temp",
        "value": -2.83,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "annual_temp",
        "value": -7.74,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "precipitation",
        "value": 545.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "snowfall",
        "value": 384.6,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 192.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.672,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "albedo",
        "value": 0.615,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "elevation",
        "value": 4302,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "slope",
        "value": 19.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "aspect",
        "value": 45,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.349,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "lake_proximity",
        "value": 42.6,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "lake_area_change",
        "value": 15.7,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 57.3,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2023-10-15",
        "predictor_id": "ice_velocity",
        "value": 37.0,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "summer_temp",
        "value": -2.99,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "annual_temp",
        "value": -7.85,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "precipitation",
        "value": 519.0,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "snowfall",
        "value": 363.4,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 187.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.649,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "albedo",
        "value": 0.592,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "elevation",
        "value": 4299,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "slope",
        "value": 18.9,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "aspect",
        "value": 45,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.338,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "lake_proximity",
        "value": 41.4,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "lake_area_change",
        "value": 14.0,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 24.1,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2024-10-15",
        "predictor_id": "ice_velocity",
        "value": 35.8,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "summer_temp",
        "value": -2.76,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "JJA mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "annual_temp",
        "value": -7.68,
        "unit": "\u00b0C",
        "source_id": "era5-reanalysis",
        "method": "Annual mean 2m temperature at glacier centroid",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "precipitation",
        "value": 536.5,
        "unit": "mm",
        "source_id": "chirps-v3",
        "method": "CHIRPS annual total clipped to study polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "snowfall",
        "value": 378.2,
        "unit": "mm w.e.",
        "source_id": "era5-reanalysis",
        "method": "ERA5 snowfall partitioned from total precipitation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "snow_cover_duration",
        "value": 192.0,
        "unit": "days",
        "source_id": "modis-mod10a1",
        "method": "NDSI-derived snow days count at 500 m, cloud-gap filled",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "surface_reflectance",
        "value": 0.663,
        "unit": "dimensionless",
        "source_id": "copernicus-s2-harmonized",
        "method": "Median Band 4 reflectance within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "albedo",
        "value": 0.607,
        "unit": "dimensionless",
        "source_id": "modis-mcd43a3",
        "method": "White-sky albedo BSA within glacier outline",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "elevation",
        "value": 4301,
        "unit": "m",
        "source_id": "copernicus-dem-glo30",
        "method": "Zonal median of DEM within approved glacier polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "slope",
        "value": 19.2,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Horn slope from DEM, zonal mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "aspect",
        "value": 45,
        "unit": "\u00b0",
        "source_id": "copernicus-dem-glo30",
        "method": "Aspect from DEM, circular mean within polygon",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "debris_cover_fraction",
        "value": 0.354,
        "unit": "fraction",
        "source_id": "geoai-segmentation-v1",
        "method": "Debris class fraction within glacier mask; low-confidence flagged for review",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "lake_proximity",
        "value": 45.2,
        "unit": "m",
        "source_id": "rgi-v7-lake-terminating",
        "method": "Minimum distance between glacier terminus and lake shoreline (EPSG:32645)",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "lake_area_change",
        "value": 18.9,
        "unit": "%",
        "source_id": "published-lake-boundaries",
        "method": "Lake area change since first approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "prior_retreat_rate",
        "value": 54.2,
        "unit": "m yr\u207b\u00b9",
        "source_id": "phase-2-retreat-measurement",
        "method": "Annualised terminus retreat since previous approved observation",
        "quality_status": "approved"
    },
    {
        "site_id": "chhota-shigri",
        "observation_date": "2025-10-15",
        "predictor_id": "ice_velocity",
        "value": 37.1,
        "unit": "m yr\u207b\u00b9",
        "source_id": "its-live-v2",
        "method": "Median ITS_LIVE velocity within glacier polygon; null where SAR tracking unreliable",
        "quality_status": "approved"
    }
],
};
