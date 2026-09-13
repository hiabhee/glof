export type LayerType = "raster" | "vector" | "terrain";

export type LayerDefinition = {
  id: string;
  label: string;
  type: LayerType;
  category: "imagery" | "boundary" | "terrain" | "context";
  dateCoverage?: string[];
  sourceId: string;
  method: string;
  qualityNotes: string;
};
