// No reviewed measurements are registered. Synthetic fixtures are quarantined.
import type { PredictorRecord } from "@/domain/predictor";
export const PREDICTOR_RECORDS: PredictorRecord[] = [];
export const PREDICTOR_BY_SITE: Record<string, PredictorRecord[]> = {};
