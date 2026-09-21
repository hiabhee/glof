import assets from './evidence-assets.json';
import type { TimelineObservation } from '@/domain/observation';
import type { BoundaryAsset } from '@/domain/site-dataset';
export type EvidenceSite = {
  id: string; name: string; glacier: string; country: string; region: string;
  lake: [number, number] | null; glacierCentre: [number, number];
  bbox: [number, number, number, number]; rgi: string | null;
  boundaries: BoundaryAsset[]; observations: TimelineObservation[];
};
export const evidenceSites = assets as unknown as EvidenceSite[];
export function latestLakeBoundary(site: EvidenceSite) {
  return [...site.observations].reverse().find(o => o.lakeBoundary)?.lakeBoundary;
}
