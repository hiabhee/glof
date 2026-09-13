# GlacierLens API

This service will expose approved, versioned research assets and metadata. It must not call Google Earth Engine in response to public browser requests.

Planned stable resources:

- `GET /sites`
- `GET /sites/{site_id}`
- `GET /sites/{site_id}/layers`
- `GET /sites/{site_id}/metrics`
- `GET /sites/{site_id}/events`

The API will be added after the South Lhonak data catalogue and first derived assets exist.
