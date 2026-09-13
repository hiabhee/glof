export type GlacierRecordType = "glacier" | "lake";
export type DataConfidence = "approved" | "historical_baseline" | "candidate" | "unavailable";

export type GlacierCatalogRecord = {
  id: string;
  name: string;
  type: GlacierRecordType;
  rgiId?: string;
  region: string;
  country: string;
  centre: { latitude: number; longitude: number };
  associatedName?: string;
  elevationMetres?: number;
  status: DataConfidence;
  featured?: boolean;
  glofDate?: string;
  glofEvidence?: string;
  source?: string;
  sourceUrl?: string;
  boundaryStatus: "available" | "pending";
  description: string;
};

export const glacierCatalog: GlacierCatalogRecord[] = [
  {
    id: "south-lhonak-glacier",
    name: "South Lhonak Glacier",
    type: "glacier",
    rgiId: "RGI2000-v7.0-G-15-07986",
    region: "South Asia East",
    country: "India",
    centre: { latitude: 27.942, longitude: 88.203 },
    associatedName: "South Lhonak Lake",
    elevationMetres: 5450,
    status: "historical_baseline",
    featured: true,
    glofDate: "4 Oct 2023",
    glofEvidence: "≈105 ha drained · ISRO/NRSC",
    source: "RGI v7 · 26 Dec 2000 baseline",
    sourceUrl: "https://www.glims.org/rgi_user_guide/products/glacier_product.html",
    boundaryStatus: "available",
    description: "Historical RGI baseline terminating at South Lhonak Lake. Retrospective case study for 2023 GLOF."
  },
  {
    id: "south-lhonak-lake",
    name: "South Lhonak Lake",
    type: "lake",
    rgiId: "RGI2000-v7.0-G-15-07986",
    region: "North Sikkim",
    country: "India",
    centre: { latitude: 27.9128, longitude: 88.1967 },
    associatedName: "South Lhonak Glacier",
    elevationMetres: 5200,
    status: "approved",
    featured: true,
    glofDate: "4 Oct 2023",
    glofEvidence: "ISRO/NRSC 28 Sep → 4 Oct 2023 SAR",
    source: "Moraine-dammed lake · 5200 m",
    sourceUrl: "https://www.isro.gov.in/ISRO_EN/Satellite_studies_South_Lhonak_Lake.html",
    boundaryStatus: "available",
    description: "Moraine-dammed lake linked to South Lhonak Glacier. Featured GLOF case study."
  },
  {
    id: "north-lhonak-glacier",
    name: "North Lhonak Glacier",
    type: "glacier",
    rgiId: "RGI2000-v7.0-G-15-07812",
    region: "South Asia East",
    country: "India",
    centre: { latitude: 27.98, longitude: 88.22 },
    associatedName: "Gurudongmar Lake",
    elevationMetres: 5380,
    status: "candidate",
    featured: true,
    source: "RGI v7 · candidate curatorial set",
    boundaryStatus: "pending",
    description: "North Sikkim glacier feeding proglacial lake system. Boundary pending curated intake."
  },
  {
    id: "gurudongmar-lake",
    name: "Gurudongmar Lake",
    type: "lake",
    region: "North Sikkim",
    country: "India",
    centre: { latitude: 27.995, longitude: 88.255 },
    associatedName: "Gurudongmar Glacier",
    elevationMetres: 5430,
    status: "candidate",
    source: "High-altitude lake · review pending",
    boundaryStatus: "pending",
    description: "Sacred high-altitude lake downstream of Gurudongmar glacier complex."
  },
  {
    id: "tsho-rolpa-glacier",
    name: "Tsho Rolpa Glacier",
    type: "glacier",
    rgiId: "RGI2000-v7.0-G-15-10433",
    region: "South Asia East",
    country: "Nepal",
    centre: { latitude: 27.865, longitude: 86.471 },
    associatedName: "Tsho Rolpa Lake",
    elevationMetres: 5120,
    status: "historical_baseline",
    featured: true,
    source: "RGI v7 · Phase 2 retreat bundle",
    sourceUrl: "https://www.glims.org/rgi_user_guide/products/glacier_product.html",
    boundaryStatus: "available",
    description: "Rolwaling Valley glacier above Tsho Rolpa — Phase 2 retreat bundle (10 approved observations, 80% forecast interval)."
  },
  {
    id: "tsho-rolpa-lake",
    name: "Tsho Rolpa Lake",
    type: "lake",
    region: "South Asia East",
    country: "Nepal",
    centre: { latitude: 27.865, longitude: 86.471 },
    associatedName: "Tsho Rolpa Glacier",
    elevationMetres: 4580,
    status: "approved",
    source: "Phase 2 lake linkage · reviewed polygons",
    boundaryStatus: "available",
    description: "Tsho Rolpa proglacial lake — retreat and lake-area change reported alongside glacier."
  },
  {
    id: "imja-glacier",
    name: "Imja Glacier",
    type: "glacier",
    rgiId: "RGI2000-v7.0-G-15-10232",
    region: "South Asia East",
    country: "Nepal",
    centre: { latitude: 27.896, longitude: 86.93 },
    associatedName: "Imja Tsho",
    elevationMetres: 5010,
    status: "historical_baseline",
    featured: true,
    source: "RGI v7 · Phase 2 retreat bundle",
    sourceUrl: "https://www.glims.org/rgi_user_guide/products/glacier_product.html",
    boundaryStatus: "available",
    description: "Khumbu region glacier feeding Imja Tsho. 10 approved Oct–Nov observations (2016–2025) with retreat + forecast."
  },
  {
    id: "thulagi-glacier",
    name: "Thulagi Glacier",
    type: "glacier",
    rgiId: "RGI2000-v7.0-G-15-09021",
    region: "South Asia East",
    country: "Nepal",
    centre: { latitude: 28.68, longitude: 84.48 },
    associatedName: "Thulagi Lake",
    elevationMetres: 4250,
    status: "historical_baseline",
    featured: true,
    source: "RGI v7 · Phase 2 retreat bundle",
    sourceUrl: "https://www.glims.org/rgi_user_guide/products/glacier_product.html",
    boundaryStatus: "available",
    description: "Manaslu region glacier above Thulagi Lake — Phase 2 retreat bundle (10 approved observations, 80% forecast interval)."
  },
  {
    id: "imja-tsho-lake",
    name: "Imja Tsho",
    type: "lake",
    region: "South Asia East",
    country: "Nepal",
    centre: { latitude: 27.896, longitude: 86.93 },
    associatedName: "Imja Glacier",
    elevationMetres: 5010,
    status: "approved",
    source: "Phase 2 lake linkage · reviewed polygons",
    boundaryStatus: "available",
    description: "Imja Tsho proglacial lake — retreat and lake-area change reported alongside Imja Glacier."
  },
  {
    id: "thulagi-lake",
    name: "Thulagi Lake",
    type: "lake",
    region: "South Asia East",
    country: "Nepal",
    centre: { latitude: 28.68, longitude: 84.48 },
    associatedName: "Thulagi Glacier",
    elevationMetres: 4050,
    status: "approved",
    source: "Phase 2 lake linkage · reviewed polygons",
    boundaryStatus: "available",
    description: "Thulagi Lake — paired with Thulagi Glacier retreat measurements; lake-area change reported per observation."
  },
  {
    id: "chhota-shigri-glacier",
    name: "Chhota Shigri Glacier",
    type: "glacier",
    rgiId: "RGI2000-v7.0-G-14-15901",
    region: "South Asia West",
    country: "India",
    centre: { latitude: 32.27, longitude: 77.53 },
    associatedName: "Chhota Shigri Lake",
    elevationMetres: 4800,
    status: "historical_baseline",
    featured: true,
    source: "RGI v7 · Phase 2 retreat bundle",
    sourceUrl: "https://www.glims.org/rgi_user_guide/products/glacier_product.html",
    boundaryStatus: "available",
    description: "Himachal Pradesh glacier — Phase 2 retreat bundle (10 approved observations, ice-velocity predictors, 80% interval)."
  },
  {
    id: "chhota-shigri-lake",
    name: "Chhota Shigri Lake",
    type: "lake",
    region: "South Asia West",
    country: "India",
    centre: { latitude: 32.27, longitude: 77.53 },
    associatedName: "Chhota Shigri Glacier",
    elevationMetres: 4300,
    status: "approved",
    source: "Phase 2 lake linkage",
    boundaryStatus: "available",
    description: "Chhota Shigri proglacial lake — retreat and lake-area change reported alongside glacier."
  },
  {
    id: "chorabari-glacier",
    name: "Chorabari Glacier",
    type: "glacier",
    rgiId: "RGI2000-v7.0-G-14-18092",
    region: "South Asia West",
    country: "India",
    centre: { latitude: 30.72, longitude: 79.07 },
    associatedName: "Chorabari Lake",
    elevationMetres: 4680,
    status: "unavailable",
    source: "2013 Kedarnath event catchment",
    boundaryStatus: "pending",
    description: "Gangotri-adjacent glacier tied to the 2013 Chorabari GLOF. Pending vector intake."
  }
];

/** Public explorer admission rule: only Phase 2 evidence-ready sites produce imagery-visible records.
 *  A record is visible iff its vector boundary is available (approved/historical_baseline)
 *  — this gates the explorer to the 5 reviewed sites and hides intake/pending candidates.
 */
export function hasImageryData(record: GlacierCatalogRecord): boolean {
  return record.boundaryStatus === "available";
}

export function searchCatalog(query: string, regionFilter: string): GlacierCatalogRecord[] {
  const q = query.trim().toLowerCase();
  return glacierCatalog.filter((r) => {
    if (!hasImageryData(r)) return false;
    const matchesRegion = regionFilter === "all" || r.region === regionFilter || r.country === regionFilter;
    if (!matchesRegion) return false;
    if (!q) return true;
    const hay = `${r.name} ${r.associatedName ?? ""} ${r.rgiId ?? ""} ${r.region} ${r.country} ${r.id}`.toLowerCase();
    return hay.includes(q);
  });
}
