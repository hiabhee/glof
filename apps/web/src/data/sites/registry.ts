import type { SiteConfig, SiteId } from '@/domain/site';
import type { GlacierCatalogRecord } from '@/data/glacier-catalog';
import type { SiteDataset } from '@/domain/site-dataset';
import { southLhonakDataset } from './south-lhonak-dataset';
import { southLhonakObservations } from './south-lhonak-observations';
import { evidenceSites, latestLakeBoundary } from './evidence';
const sites: SiteConfig[] = evidenceSites.map(s => ({
  id:s.id, name:s.name, country:s.country, region:s.region,
  centre:{longitude:(s.lake ?? s.glacierCentre)[0],latitude:(s.lake ?? s.glacierCentre)[1]},
  associatedGlacier:s.glacier,referenceGlacierId:s.rgi ?? undefined,elevationMetres:0,
  description:'Dated imagery and historical references; current boundaries await review.',
  timeline:[],readiness:'intake',sources:[
    {id:'rgi-v7',title:'RGI lake-terminating inventory',url:'https://github.com/GLIMS-RGI/lake_terminating',accessedAt:'2026-09-21'},
    {id:'sentinel2-water-baseline',title:'Sentinel-2 surface reflectance',url:'https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR_HARMONIZED',accessedAt:'2026-09-21'},
  ],
}));
export function listSites():SiteConfig[]{return sites;}
export function getSite(id:SiteId){return sites.find(s=>s.id===id);}
export function getSiteForCatalogRecord(record:GlacierCatalogRecord){return getSite(record.siteId);}
export function getDatasetForCatalogRecord(record:GlacierCatalogRecord):SiteDataset|undefined{
  const site=getSite(record.siteId), evidence=evidenceSites.find(s=>s.id===record.siteId);
  if(!site || !evidence)return undefined;
  const lake=latestLakeBoundary(evidence);
  const older=site.id==='south-lhonak' ? southLhonakObservations.filter(o=>!evidence.observations.some(n=>n.id===o.id)) : [];
  return {site,observations:[...older,...evidence.observations].sort((a,b)=>a.id.localeCompare(b.id)),
    boundaries:[...evidence.boundaries,...(lake?[lake]:[])],layers:[],sources:site.sources,
    events:site.id==='south-lhonak'?southLhonakDataset.events:[],
    eventImagery:site.id==='south-lhonak'?southLhonakDataset.eventImagery:undefined};
}
