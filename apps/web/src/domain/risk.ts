/**
 * Conservative screening model, not a flood forecast.
 * A score is intentionally unavailable until every measured input is supplied
 * with provenance. This prevents UI confidence from outrunning the evidence.
 */
export type GlofScreeningInputs = {
  lakeAreaChangePercent: number;
  lakeAreaKm2: number;
  moraineCondition: "stable" | "uncertain" | "weak";
  slopeDegrees: number;
  downstreamExposure: "unknown" | "low" | "medium" | "high";
};

export type GlofScreeningResult = {
  score: number;
  band: "low" | "moderate" | "high" | "very-high";
  factors: string[];
};

export function screenGlofRisk(inputs: Partial<GlofScreeningInputs>): GlofScreeningResult | null {
  const required: (keyof GlofScreeningInputs)[] = ["lakeAreaChangePercent", "lakeAreaKm2", "moraineCondition", "slopeDegrees", "downstreamExposure"];
  if (required.some((key) => inputs[key] === undefined || inputs[key] === null)) return null;
  const value = inputs as GlofScreeningInputs;
  let score = 0;
  const factors: string[] = [];
  if (value.lakeAreaChangePercent >= 20) { score += 30; factors.push("rapid lake-area growth"); }
  else if (value.lakeAreaChangePercent >= 5) { score += 15; factors.push("measurable lake-area growth"); }
  if (value.lakeAreaKm2 >= 1) { score += 20; factors.push("large water body"); }
  else if (value.lakeAreaKm2 >= 0.1) score += 10;
  if (value.moraineCondition === "weak") { score += 25; factors.push("weak moraine condition"); }
  else if (value.moraineCondition === "uncertain") score += 12;
  if (value.slopeDegrees >= 30) { score += 15; factors.push("steep surrounding slopes"); }
  else if (value.slopeDegrees >= 15) score += 7;
  const exposurePoints = { unknown: 0, low: 3, medium: 7, high: 10 }[value.downstreamExposure];
  score += exposurePoints;
  if (value.downstreamExposure !== "unknown") factors.push(`${value.downstreamExposure} downstream exposure`);
  const band = score >= 75 ? "very-high" : score >= 50 ? "high" : score >= 25 ? "moderate" : "low";
  return { score, band, factors };
}
