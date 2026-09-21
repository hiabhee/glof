// No reviewed measurements are registered. Synthetic fixtures are quarantined.
import type { RetreatMeasurement } from "@/domain/retreat";
export const RETREAT_MEASUREMENTS: RetreatMeasurement[] = [];
export const RETREAT_BY_SITE: Record<string, RetreatMeasurement[]> = {};
export const MEASUREMENT_CRS = "EPSG:32645";
export const MEASUREMENT_VERSION = "unavailable";
