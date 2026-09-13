export type SiteId = string;

export type Coordinate = {
  latitude: number;
  longitude: number;
};

export type SourceReference = {
  id: string;
  title: string;
  url: string;
  accessedAt: string;
};

export type TimelineState = {
  id: string;
  label: string;
  observationDate: string;
  kind: "annual" | "pre_event" | "post_event";
  qualityStatus: "planned" | "approved";
};

export type SiteConfig = {
  id: SiteId;
  name: string;
  country: string;
  region: string;
  centre: Coordinate;
  associatedGlacier: string;
  referenceGlacierId?: string;
  elevationMetres: number;
  description: string;
  timeline: TimelineState[];
  sources: SourceReference[];
  /** Curatorial state for the five-site final release. */
  readiness: "evidence-ready" | "intake";
};
