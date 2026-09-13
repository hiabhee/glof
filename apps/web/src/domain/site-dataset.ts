import type { LayerDefinition } from "./layer";
import type { SourceReference, SiteConfig } from "./site";
import type { TimelineObservation } from "./observation";

export type BoundaryAsset = {
  id: string;
  kind: "lake" | "glacier";
  path: string;
  observationDate: string;
  sourceId: string;
  status: "approved" | "historical_baseline" | "candidate";
};

export type SiteEvent = {
  id: string;
  date: string;
  title: string;
  summary: string;
  sourceId: string;
};
export type EventImagery = {
  pre: { imagePath: string; date: string };
  post: { imagePath: string; date: string };
  sar?: { prePath: string; postPath: string; preDate: string; postDate: string };
  note: string;
};

export type SiteDataset = {
  site: SiteConfig;
  observations: TimelineObservation[];
  boundaries: BoundaryAsset[];
  layers: LayerDefinition[];
  events: SiteEvent[];
  eventImagery?: EventImagery;
  sources: SourceReference[];
};

export function isEvidenceReady(dataset: SiteDataset): boolean {
  return dataset.site.readiness === "evidence-ready" && dataset.sources.length > 0;
}
