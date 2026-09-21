import type { BoundaryAsset } from "./site-dataset";
export type ObservationStatus = "review_candidate" | "unavailable";

export type TimelineObservation = {
  id: string;
  label: string;
  date: string;
  sensor: "Sentinel-2 optical";
  sceneId?: string;
  cloudPercent?: number;
  imagePath?: string;
  status: ObservationStatus;
  note: string;
  bounds?: [number, number, number, number];
  validFraction?: number;
  rasterPath?: string;
  lakeBoundary?: BoundaryAsset;
};
