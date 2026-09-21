// Compatibility exports: use the active evidence registry, never fabricated dates.
import { listSites } from './registry';

export const FINAL_STUDY_SITE_IDS = [
  'south-lhonak', 'tsho-rolpa', 'imja-tsho', 'thulagi', 'chhota-shigri',
] as const;
export type FinalStudySiteId = (typeof FINAL_STUDY_SITE_IDS)[number];
export const finalStudySites = listSites();
