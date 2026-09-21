// No reviewed measurements are registered. Synthetic fixtures are quarantined.
import type { ForecastResult } from "@/domain/forecast";
export const FORECASTS: ForecastResult[] = [];
export const FORECASTS_BY_SITE: Record<string, ForecastResult[]> = {};
export function getForecast(siteId: string, scenarioId: string, tier = "gradient_boosting"): ForecastResult | undefined { return FORECASTS_BY_SITE[siteId]?.find(f => f.scenario.id === scenarioId && f.model_tier === tier); }
