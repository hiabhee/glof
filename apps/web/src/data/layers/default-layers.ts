import type { LayerDefinition } from "@/domain/layer";

export const defaultLayerDefinitions: LayerDefinition[] = [
  {
    id: "sentinel-2-composite",
    label: "Sentinel-2 seasonal composite",
    type: "raster",
    category: "imagery",
    sourceId: "gee-sentinel-2",
    method: "Curated, cloud-screened composite prepared through the analyst pipeline.",
    qualityNotes: "Asset preparation pending; never present an unreviewed image as an approved observation."
  },
  {
    id: "reference-boundaries",
    label: "Trusted glacier and lake boundaries",
    type: "vector",
    category: "boundary",
    sourceId: "inventory-and-published-boundaries",
    method: "Published or inventory geometry only for the MVP.",
    qualityNotes: "Each geometry must retain date, source, method, and review status."
  },
  {
    id: "terrain-context",
    label: "Terrain context",
    type: "terrain",
    category: "terrain",
    sourceId: "documented-dem",
    method: "DEM-derived elevation, hillshade, and slope.",
    qualityNotes: "Hydrologic interpretation is contextual; it is not flood modelling."
  }
];
