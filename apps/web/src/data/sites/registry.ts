import type { SiteConfig, SiteId } from "@/domain/site";
import { southLhonak } from "./south-lhonak";
import { finalStudySites } from "./final-study-sites";
import type { GlacierCatalogRecord } from "@/data/glacier-catalog";
import type { SiteDataset } from "@/domain/site-dataset";
import { southLhonakDataset } from "./south-lhonak-dataset";
import { southLhonakObservations } from "./south-lhonak-observations";

const sites: SiteConfig[] = [southLhonak, ...finalStudySites.filter((site) => site.id !== southLhonak.id)];

function makePhase2Dataset(site: SiteConfig): SiteDataset {
  const rgi = site.referenceGlacierId ?? `${site.id}-reference`;
  return {
    site,
    observations: southLhonakObservations,
    boundaries: [
      {
        id: `${site.id}-glacier-rgi-v7-baseline`,
        kind: "glacier",
        path: "/reference/phase2-five-glaciers.geojson",
        observationDate: "2000-12-26",
        sourceId: "rgi-v7",
        status: "historical_baseline",
      },
      {
        id: `${site.id}-glacier-phase2-approved`,
        kind: "glacier",
        path: `/derived/phase2/boundaries/${site.id}/2025-10-15.geojson`,
        observationDate: "2025-10-15",
        sourceId: "phase-2-geoai-v1.0",
        status: "approved",
      },
    ],
    layers: [],
    events: site.id === "south-lhonak" ? southLhonakDataset.events : [],
    eventImagery: site.id === "south-lhonak" ? southLhonakDataset.eventImagery : undefined,
    sources: site.sources,
  };
}

export function listSites(): SiteConfig[] {
  return sites;
}

export function getSite(id: SiteId): SiteConfig | undefined {
  return sites.find((site) => site.id === id);
}

/** Resolves a legacy catalog feature to its canonical lake–glacier site. */
export function getSiteForCatalogRecord(record: GlacierCatalogRecord): SiteConfig | undefined {
  if (record.id.startsWith("south-lhonak")) return getSite("south-lhonak");
  if (record.id.includes("tsho-rolpa")) return getSite("tsho-rolpa");
  if (record.id.includes("imja")) return getSite("imja-tsho");
  if (record.id.includes("thulagi")) return getSite("thulagi");
  if (record.id.includes("chhota-shigri")) return getSite("chhota-shigri");
  return undefined;
}

export function getDatasetForCatalogRecord(record: GlacierCatalogRecord): SiteDataset | undefined {
  if (record.id.startsWith("south-lhonak")) return southLhonakDataset;
  const site = getSiteForCatalogRecord(record);
  if (site && site.readiness === "evidence-ready") return makePhase2Dataset(site);
  return undefined;
}
