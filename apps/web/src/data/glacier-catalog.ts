import { evidenceSites, latestLakeBoundary } from './sites/evidence';
export type GlacierRecordType = 'glacier' | 'lake';
export type DataConfidence = 'approved' | 'historical_baseline' | 'candidate' | 'unavailable';
export type GlacierCatalogRecord = {
  id: string; siteId: string; name: string; type: GlacierRecordType; rgiId?: string;
  region: string; country: string; centre: { latitude: number; longitude: number };
  associatedName?: string; elevationMetres?: number; status: DataConfidence; featured?: boolean;
  glofDate?: string; glofEvidence?: string; source?: string; sourceUrl?: string;
  boundaryStatus: 'available' | 'pending'; description: string;
};
export const glacierCatalog: GlacierCatalogRecord[] = evidenceSites.flatMap(site => {
  const common = { siteId: site.id, region: site.region, country: site.country, featured: true };
  const glacier: GlacierCatalogRecord = {
    ...common, id: site.id+'-glacier', name: site.glacier, type: 'glacier', rgiId: site.rgi ?? undefined,
    centre: { longitude: site.glacierCentre[0], latitude: site.glacierCentre[1] },
    associatedName: site.lake ? site.name : undefined,
    status: site.boundaries.length ? 'historical_baseline' : 'unavailable',
    boundaryStatus: site.boundaries.length ? 'available' : 'pending',
    source: site.boundaries.length ? `RGI v7 · ${site.boundaries[0].observationDate}` : 'Inventory intake pending',
    sourceUrl: 'https://github.com/GLIMS-RGI/lake_terminating',
    description: 'Historical glacier reference. Current glacier extent and retreat measurements require reviewed dated outlines.',
  };
  if (!site.lake) return [glacier];
  const boundary = latestLakeBoundary(site);
  const lake: GlacierCatalogRecord = {
    ...common, id: site.id+'-lake', name: site.name, type: 'lake', rgiId: site.rgi ?? undefined,
    centre: { longitude: site.lake[0], latitude: site.lake[1] }, associatedName: site.glacier,
    status: 'candidate', boundaryStatus: boundary ? 'available' : 'pending',
    source: boundary ? `Satellite water candidate · ${boundary.observationDate}` : 'Shoreline pending',
    sourceUrl: 'https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR_HARMONIZED',
    description: 'Satellite-derived water outline pending analyst review. A location marker is not a measured shoreline.',
    ...(site.id === 'south-lhonak' ? {glofDate:'4 Oct 2023',glofEvidence:'ISRO/NRSC event assessment'} : {}),
  };
  return [glacier,lake];
});
export function hasImageryData(record: GlacierCatalogRecord): boolean {
  return evidenceSites.find(site => site.id === record.siteId)?.observations.some(o => !!o.imagePath && !!o.sceneId) ?? false;
}
export function searchCatalog(query: string, regionFilter: string): GlacierCatalogRecord[] {
  const q=query.trim().toLowerCase();
  return glacierCatalog.filter(r => (regionFilter==='all' || r.region===regionFilter || r.country===regionFilter) &&
    (!q || `${r.name} ${r.associatedName ?? ''} ${r.rgiId ?? ''} ${r.region} ${r.country} ${r.id}`.toLowerCase().includes(q)));
}
