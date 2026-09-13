# Phase 2 — GeoAI Glacier-Retreat Analysis and Forecasting

## Purpose

Phase 2 extends GlacierLens from a retrospective visual evidence explorer into an explainable GeoAI research prototype for five selected Himalayan glacier–lake systems.

The system will measure historical glacier change, identify the factors associated with retreat, and produce scenario-based retreat estimates with uncertainty. It will not be an operational warning system or a deterministic GLOF predictor.

## Final five-glacier scope

The same five sites defined in the final study registry will be used:

1. South Lhonak Glacier — India
2. Tsho Rolpa Glacier — Nepal
3. Imja Glacier — Nepal
4. Thulagi Glacier — Nepal
5. Chhota Shigri Glacier — India

A glacier enters model training only after its boundaries, imagery, and event metadata pass the Phase 1 intake gates.

## Research questions

1. How much has each glacier’s area and terminus changed between 2016 and 2026?
2. Which terrain, climate, snow, and lake-proximity variables best explain observed retreat?
3. Can a model estimate near-term retreat while reporting a defensible uncertainty range?
4. How do retreat indicators relate to the surrounding GLOF hazard context without claiming to predict an outburst?

## Phase 2 boundaries

### Included

- Multi-temporal glacier-boundary extraction and quality review.
- Glacier area, terminus position, and retreat-rate measurements.
- Co-registered Sentinel-2 optical and Sentinel-1 SAR features.
- Copernicus DEM terrain variables.
- Climate and snow variables from documented public datasets.
- Interpretable retreat forecasting for each of the five glaciers.
- Time-based validation and uncertainty reporting.
- Explainable indicators connected to the existing GLOF context panel.

### Excluded

- Real-time monitoring or automated alerts.
- A claim that the model predicts when a GLOF will occur.
- Fully automatic publication of GeoAI boundaries without review.
- Hydrodynamic flood depth or evacuation modelling.
- Individual or community-level exposure data.

## Target data contract

Every approved observation must contain:

```text
site_id
glacier_id
observation_date
sensor
image_asset
boundary_asset
area_km2
terminus_position
quality_status
cloud_snow_notes
source_ids
processing_version
```

Predictor records must contain:

```text
site_id
observation_date
predictor_id
value
unit
source_id
method
quality_status
```

No component or model may infer missing observations or silently mix unreviewed candidates with approved measurements.

## Workstream 1 — Dataset preparation

1. Freeze the reviewed study boundary for each glacier–lake system.
2. Select comparable seasonal acquisition windows for 2016–2026.
3. Prepare cloud/shadow/snow quality masks.
4. Co-register imagery and reproject all measurements consistently.
5. Store raw inputs, derived assets, and presentation metadata separately.
6. Record every asset in a versioned manifest with source, date, method, resolution, and quality notes.

**Output:** five site datasets with approved observations and provenance.

## Workstream 2 — GeoAI boundary extraction

### Baseline

Begin with a reproducible baseline using spectral indices and rule-based masks, such as NDSI plus water and shadow checks. This provides a transparent benchmark.

### GeoAI model

Train a segmentation model such as U-Net or SegFormer using reviewed glacier masks. Inputs may include:

- Sentinel-2 spectral bands and indices
- Sentinel-1 backscatter features where optical imagery is obstructed
- DEM, slope, and aspect

The model must emit both a class mask and pixel-level confidence. Low-confidence or ambiguous debris-covered areas must be flagged for review.

### Boundary approval

An analyst reviews model outputs against the authoritative inventory and source imagery. Only approved boundaries enter the measurement time series.

**Output:** versioned glacier-outline assets and confidence masks for each supported date.

## Workstream 3 — Retreat measurements

For every approved date, calculate:

- glacier area in km²
- terminus position and retreat distance
- annualised retreat rate
- elevation-band area change
- glacier–lake distance where geometrically supported
- nearby lake-area change

Measurements must use the same coordinate reference system and documented seasonal windows. Uncertainty must include boundary error and image-quality limitations.

**Output:** a common five-glacier measurement table and chart-ready time series.

## Workstream 4 — Predictor engineering

Candidate predictors:

- summer and annual temperature
- precipitation and snowfall
- snow-cover duration
- surface reflectance/albedo
- elevation, slope, and aspect
- debris-cover fraction
- lake proximity and lake-area change
- observed prior retreat rate
- ice-velocity features where reliable SAR or optical tracking is available

Predictors must be aligned to the observation date and documented with source and temporal aggregation method.

## Workstream 5 — Retreat forecasting

Use a staged modelling strategy:

1. Robust linear trend as the simplest benchmark.
2. Random Forest or Gradient Boosting for nonlinear relationships.
3. A temporal model such as LSTM only if the five-site dataset contains enough reviewed time steps to justify it.

Forecast horizons should begin at 3–5 years. Results must be scenario-based rather than presented as a single certain value:

- baseline continuation
- warmer-summer scenario
- high-melt scenario

Each forecast must display a central estimate, prediction interval, model version, input period, scenario assumptions, and confidence level.

## Workstream 6 — Validation and scientific safeguards

### Spatial and temporal validation

- Train on earlier observations and test on later observations.
- Use leave-one-glacier-out tests to measure transferability.
- Never randomly mix pixels from the same scene between training and testing.

### Metrics

- segmentation IoU and F1 score
- glacier-area absolute and percentage error
- terminus-position error in metres
- retreat-rate mean absolute error
- forecast interval coverage
- error by glacier and by image-quality class

### Review gates

A model version cannot be published in the application until:

1. all five sites have documented input coverage;
2. boundary performance is reported against reviewed references;
3. temporal hold-out results are recorded;
4. uncertainty and limitations are visible in the UI;
5. a human reviewer signs off the interpretation.

## Application integration

The Phase 2 interface will add a focused “Retreat analysis” view to each evidence-ready site:

- observed glacier outline timeline
- measured retreat chart
- modelled trend and uncertainty band
- predictor contribution summary
- scenario selector
- data-quality and provenance drawer
- explicit “research estimate, not a forecast warning” notice

The globe, imagery explorer, and GLOF context panel will continue to use the shared `SiteDataset` contract.

## Proposed repository additions

```text
pipelines/geoai/
  prepare_features.py
  build_training_masks.py
  train_segmentation.py
  measure_retreat.py
  train_forecast.py
  evaluate_models.py

apps/web/src/domain/
  retreat.ts
  predictor.ts
  forecast.ts

data/catalog/
  phase-2-model-manifest.json
  phase-2-validation-register.md
```

## Delivery sequence

### Milestone 2.1 — Five-site data readiness

Complete authoritative boundaries, comparable imagery, and quality review for all five glaciers.

### Milestone 2.2 — Measurement baseline

Publish reproducible area and terminus measurements with uncertainty.

### Milestone 2.3 — Segmentation model

Train, evaluate, and review the GeoAI boundary model against the baseline.

### Milestone 2.4 — Retreat forecasting

Train benchmark and explainable forecasting models using time-based validation.

### Milestone 2.5 — Research UI integration

Expose approved measurements, scenarios, uncertainty, and limitations in the site-specific explorer.

### Milestone 2.6 — Paper/demo release

Freeze manifests, model versions, metrics, citations, screenshots, and a reproducible run note.

## Definition of done

Phase 2 is complete when a reviewer can select any of the five glaciers and see:

1. approved historical boundaries;
2. measured retreat from comparable observations;
3. the data and method behind each measurement;
4. a validated scenario-based retreat estimate with uncertainty;
5. the main predictor contributions;
6. clear limitations separating retreat estimation from GLOF prediction.
