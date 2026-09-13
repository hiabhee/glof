import type { SiteConfig } from "@/domain/site";

/**
 * Deliberate final-release scope. A site enters the UI only after its
 * authoritative boundaries, imagery bundle, and citations pass review.
 */
export const FINAL_STUDY_SITE_IDS = [
  "south-lhonak",
  "tsho-rolpa",
  "imja-tsho",
  "thulagi",
  "chhota-shigri",
] as const;

export type FinalStudySiteId = (typeof FINAL_STUDY_SITE_IDS)[number];

const octNovTimeline = [
  { id: "2016", label: "2016", observationDate: "2016-10-15", kind: "annual" as const, qualityStatus: "approved" as const },
  { id: "2017", label: "2017", observationDate: "2017-10-15", kind: "annual" as const, qualityStatus: "approved" as const },
  { id: "2018", label: "2018", observationDate: "2018-10-15", kind: "annual" as const, qualityStatus: "approved" as const },
  { id: "2019", label: "2019", observationDate: "2019-10-15", kind: "annual" as const, qualityStatus: "approved" as const },
  { id: "2020", label: "2020", observationDate: "2020-10-15", kind: "annual" as const, qualityStatus: "approved" as const },
  { id: "2021", label: "2021", observationDate: "2021-10-15", kind: "annual" as const, qualityStatus: "approved" as const },
  { id: "2022", label: "2022", observationDate: "2022-10-15", kind: "annual" as const, qualityStatus: "approved" as const },
  { id: "2023", label: "2023", observationDate: "2023-10-15", kind: "annual" as const, qualityStatus: "approved" as const },
  { id: "2024", label: "2024", observationDate: "2024-10-15", kind: "annual" as const, qualityStatus: "approved" as const },
  { id: "2025", label: "2025", observationDate: "2025-10-15", kind: "annual" as const, qualityStatus: "approved" as const },
];

const phase2Sources = [
  {
    id: "copernicus-s2-harmonized",
    title: "COPERNICUS/S2_HARMONIZED — Sentinel-2 optical (GEE)",
    url: "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED",
    accessedAt: "2026-09-10",
  },
  {
    id: "copernicus-dem-glo30",
    title: "Copernicus DEM GLO-30 — elevation, slope, aspect",
    url: "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30_2024_1",
    accessedAt: "2026-09-10",
  },
  {
    id: "rgi-v7-glacier-reference",
    title: "Randolph Glacier Inventory v7 glacier product",
    url: "https://www.glims.org/rgi_user_guide/products/glacier_product.html",
    accessedAt: "2026-09-10",
  },
];

export const finalStudySites: SiteConfig[] = [
  {
    id: "south-lhonak",
    name: "South Lhonak Lake",
    country: "India",
    region: "North Sikkim",
    centre: { latitude: 27.9128, longitude: 88.1967 },
    associatedGlacier: "South Lhonak Glacier",
    referenceGlacierId: "RGI2000-v7.0-G-15-07986",
    elevationMetres: 5200,
    description: "Primary 2023 GLOF case study — 10 approved Oct–Nov observations (2016–2025), retreat measurements, and scenario forecasts with 80% intervals.",
    timeline: octNovTimeline,
    sources: phase2Sources,
    readiness: "evidence-ready",
  },
  {
    id: "tsho-rolpa",
    name: "Tsho Rolpa",
    country: "Nepal",
    region: "Rolwaling Valley",
    centre: { latitude: 27.865, longitude: 86.471 },
    associatedGlacier: "Tsho Rolpa Glacier",
    referenceGlacierId: "RGI2000-v7.0-G-15-10433",
    elevationMetres: 4580,
    description: "Rolwaling Valley — 10 approved Oct–Nov observations (2016–2025), retreat + forecast bundle. Phase 2 evidence-ready.",
    timeline: octNovTimeline,
    sources: phase2Sources,
    readiness: "evidence-ready",
  },
  {
    id: "imja-tsho",
    name: "Imja Tsho",
    country: "Nepal",
    region: "Khumbu",
    centre: { latitude: 27.896, longitude: 86.93 },
    associatedGlacier: "Imja Glacier",
    referenceGlacierId: "RGI2000-v7.0-G-15-10232",
    elevationMetres: 5010,
    description: "Khumbu glacier–lake system — 10 approved Oct–Nov observations (2016–2025), retreat + forecast bundle. Phase 2 evidence-ready.",
    timeline: octNovTimeline,
    sources: phase2Sources,
    readiness: "evidence-ready",
  },
  {
    id: "thulagi",
    name: "Thulagi Lake",
    country: "Nepal",
    region: "Manaslu",
    centre: { latitude: 28.68, longitude: 84.48 },
    associatedGlacier: "Thulagi Glacier",
    referenceGlacierId: "RGI2000-v7.0-G-15-09021",
    elevationMetres: 4050,
    description: "Manaslu region — 10 approved Oct–Nov observations (2016–2025), retreat + forecast bundle. Phase 2 evidence-ready.",
    timeline: octNovTimeline,
    sources: phase2Sources,
    readiness: "evidence-ready",
  },
  {
    id: "chhota-shigri",
    name: "Chhota Shigri Lake",
    country: "India",
    region: "Himachal Pradesh",
    centre: { latitude: 32.27, longitude: 77.53 },
    associatedGlacier: "Chhota Shigri Glacier",
    referenceGlacierId: "RGI2000-v7.0-G-14-15901",
    elevationMetres: 4300,
    description: "Himachal Pradesh — 10 approved Oct–Nov observations (2016–2025), retreat + forecast bundle. Phase 2 evidence-ready.",
    timeline: octNovTimeline,
    sources: phase2Sources,
    readiness: "evidence-ready",
  },
];
