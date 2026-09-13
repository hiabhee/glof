"use client";

import { useMemo, useState } from "react";
import { RETREAT_BY_SITE } from "@/data/retreat/measurements";
import { FORECASTS_BY_SITE, getForecast } from "@/data/retreat/forecasts";
import { PREDICTOR_BY_SITE } from "@/data/retreat/predictors";
import { APPROVED_OBSERVATIONS_BY_SITE } from "@/data/retreat/approved-observations";
import { getPredictorDefinition } from "@/domain/predictor";
import { SCENARIOS, FORECAST_WARNING } from "@/domain/forecast";
import type { ScenarioId, ModelTier } from "@/domain/forecast";
import type { RetreatMeasurement } from "@/domain/retreat";

type Props = {
  siteId: string;
  glacierName?: string;
  glacierId?: string;
};

// Mapping siteId → display label
const SITE_LABEL: Record<string, { name: string; glacier: string; region: string }> = {
  "south-lhonak": { name: "South Lhonak Lake", glacier: "South Lhonak Glacier", region: "North Sikkim, India" },
  "tsho-rolpa": { name: "Tsho Rolpa", glacier: "Tsho Rolpa Glacier", region: "Rolwaling Valley, Nepal" },
  "imja-tsho": { name: "Imja Tsho", glacier: "Imja Glacier", region: "Khumbu, Nepal" },
  thulagi: { name: "Thulagi Lake", glacier: "Thulagi Glacier", region: "Manaslu, Nepal" },
  "chhota-shigri": { name: "Chhota Shigri Lake", glacier: "Chhota Shigri Glacier", region: "Himachal Pradesh, India" },
};

function formatKm2(v: number): string {
  return `${v.toFixed(2)} km²`;
}

function RetreatChart({
  measurements,
  forecast,
}: {
  measurements: RetreatMeasurement[];
  forecast?: ReturnType<typeof getForecast>;
}) {
  const allPoints = useMemo(() => {
    const obs = measurements.map((m) => ({
      year: parseInt(m.observation_date.slice(0, 4), 10),
      area: m.area_km2,
      unc: m.area_uncertainty_km2,
      retreat: m.retreat_distance_m,
      label: m.observation_date,
      kind: "observed" as const,
    }));
    const fc = (forecast?.points ?? []).map((p) => ({
      year: p.year,
      area: p.central_km2,
      lower: p.lower_km2,
      upper: p.upper_km2,
      retreat: p.central_retreat_m,
      kind: "forecast" as const,
      label: p.date,
    }));
    return { obs, fc };
  }, [measurements, forecast]);

  // Chart geometry
  const W = 680;
  const H = 220;
  const pad = { l: 48, r: 48, t: 18, b: 28 };
  const innerW = W - pad.l - pad.r;
  const innerH = H - pad.t - pad.b;

  const years = [...allPoints.obs.map((d) => d.year), ...allPoints.fc.map((d) => d.year)];
  const minYear = Math.min(...years);
  const maxYear = Math.max(...years);
  const allAreas = [...allPoints.obs.map((d) => d.area), ...allPoints.fc.map((d) => d.area), ...allPoints.fc.flatMap((d) => [d.lower!, d.upper!])];
  const minArea = Math.min(...allAreas) - 0.15;
  const maxArea = Math.max(...allAreas) + 0.15;

  const x = (year: number) => pad.l + ((year - minYear) / (maxYear - minYear)) * innerW;
  const y = (area: number) => pad.t + ((maxArea - area) / (maxArea - minArea)) * innerH;

  // Observed line
  const obsPath = allPoints.obs.map((d, i) => `${i === 0 ? "M" : "L"} ${x(d.year)} ${y(d.area)}`).join(" ");
  const fcPath = allPoints.fc.length ? ["M " + `${x(allPoints.obs[allPoints.obs.length - 1].year)} ${y(allPoints.obs[allPoints.obs.length - 1].area)}`, ...allPoints.fc.map((d) => `L ${x(d.year)} ${y(d.area)}`)].join(" ") : "";

  // Band polygon for forecast interval
  let bandPath = "";
  if (allPoints.fc.length) {
    const upper = allPoints.fc.map((d) => ({ x: x(d.year), y: y(d.upper!) }));
    const lower = [...allPoints.fc].reverse().map((d) => ({ x: x(d.year), y: y(d.lower!) }));
    // include last observed point for continuity
    const lastObsYUpper = y(allPoints.obs[allPoints.obs.length - 1].area);
    const firstUpper = upper[0];
    bandPath = `M ${x(allPoints.obs[allPoints.obs.length - 1].year)} ${lastObsYUpper} L ${firstUpper.x} ${firstUpper.y} ` + upper.slice(1).map((p) => `L ${p.x} ${p.y}`).join(" ") + " " + lower.map((p) => `L ${p.x} ${p.y}`).join(" ") + ` L ${x(allPoints.obs[allPoints.obs.length - 1].year)} ${lastObsYUpper} Z`;
  }

  // Y ticks
  const yTicks = 4;
  const yTickVals = Array.from({ length: yTicks + 1 }, (_, i) => minArea + (i / yTicks) * (maxArea - minArea));

  return (
    <div className="retreat-chart-wrap">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Measured glacier area and scenario forecast with 80% interval">
        {/* grid */}
        {yTickVals.map((v) => (
          <g key={v}>
            <line x1={pad.l} x2={W - pad.r} y1={y(v)} y2={y(v)} stroke="rgba(245,245,244,0.08)" strokeWidth={1} />
            <text x={pad.l - 8} y={y(v) + 4} textAnchor="end" fontSize={9} fill="#a8a8a5">
              {v.toFixed(1)}
            </text>
          </g>
        ))}
        {years.map((yr) => (
          <text key={yr} x={x(yr)} y={H - 6} textAnchor="middle" fontSize={8} fill={yr >= 2026 ? "#9ad7ff" : "#a8a8a5"}>
            {yr}
          </text>
        ))}
        {/* band */}
        {bandPath && <path d={bandPath} fill="rgba(154,215,255,0.14)" stroke="none" />}
        {/* observed line */}
        <path d={obsPath} fill="none" stroke="#f5f5f4" strokeWidth={2} />
        {/* forecast line */}
        {fcPath && <path d={fcPath} fill="none" stroke="#9ad7ff" strokeWidth={2} strokeDasharray="6 4" />}
        {/* observed points with error bars */}
        {allPoints.obs.map((d) => (
          <g key={d.year}>
            <line x1={x(d.year)} x2={x(d.year)} y1={y(d.area - d.unc)} y2={y(d.area + d.unc)} stroke="rgba(245,245,244,0.45)" strokeWidth={1.2} />
            <line x1={x(d.year) - 4} x2={x(d.year) + 4} y1={y(d.area - d.unc)} y2={y(d.area - d.unc)} stroke="rgba(245,245,244,0.45)" />
            <line x1={x(d.year) - 4} x2={x(d.year) + 4} y1={y(d.area + d.unc)} y2={y(d.area + d.unc)} stroke="rgba(245,245,244,0.45)" />
            <circle cx={x(d.year)} cy={y(d.area)} r={3.5} fill="#242423" stroke="#f5f5f4" strokeWidth={1.5} />
          </g>
        ))}
        {/* forecast points */}
        {allPoints.fc.map((d) => (
          <circle key={d.year} cx={x(d.year)} cy={y(d.area)} r={3} fill="#9ad7ff" stroke="#061e2b" strokeWidth={1.2} />
        ))}
        {/* vertical divider at 2025.5 */}
        <line x1={x(2025.6)} x2={x(2025.6)} y1={pad.t} y2={H - pad.b} stroke="rgba(199,251,236,0.22)" strokeDasharray="3 4" />
        <text x={x(2025.6) + 4} y={pad.t + 10} fontSize={7} fill="rgba(199,251,236,0.85)" letterSpacing={0.6}>
          FORECAST →
        </text>
      </svg>
      <div className="chart-legend">
        <span>
          <i className="dot obs" /> Observed area (Oct–15, EPSG:32645) with ± area uncertainty
        </span>
        <span>
          <i className="dot fc" /> Forecast central + 80% band ({forecast?.scenario.label ?? "—"})
        </span>
        <span className="muted">Retreat distance (m) available in table below; chart shows area as primary indicator.</span>
      </div>
    </div>
  );
}

function PredictorBars({ contributions }: { contributions: { predictor_id: string; contribution: number; rank: number }[] }) {
  const max = Math.max(...contributions.map((c) => Math.abs(c.contribution)), 0.4);
  return (
    <div className="predictor-bars" role="list" aria-label="Predictor contributions">
      {contributions.map((c) => {
        const def = (() => {
          try {
            return getPredictorDefinition(c.predictor_id as never);
          } catch {
            return null;
          }
        })();
        const width = Math.abs(c.contribution) / max;
        const isPos = c.contribution > 0;
        return (
          <div key={c.predictor_id} className="predictor-row" role="listitem">
            <span className="predictor-label" title={def?.description ?? c.predictor_id}>
              <strong>{def?.label ?? c.predictor_id}</strong>
              <small>{def?.category ?? ""}</small>
            </span>
            <span className="predictor-bar-track">
              <span
                className={`predictor-bar ${isPos ? "pos" : "neg"}`}
                style={{ width: `${width * 100}%`, marginLeft: isPos ? "50%" : `${50 - width * 50}%` }}
              />
              <span className="predictor-zero" />
            </span>
            <span className={`predictor-value ${isPos ? "pos" : "neg"}`}>{isPos ? "+" : ""}{c.contribution.toFixed(3)}</span>
          </div>
        );
      })}
    </div>
  );
}

export function RetreatAnalysis({ siteId, glacierName }: Props) {
  const site = SITE_LABEL[siteId];
  const measurements: RetreatMeasurement[] | undefined = RETREAT_BY_SITE[siteId];
  const [scenario, setScenario] = useState<ScenarioId>("baseline");
  const [modelTier, setModelTier] = useState<ModelTier>("gradient_boosting");
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  const forecast = useMemo(() => {
    if (!measurements) return undefined;
    const list = FORECASTS_BY_SITE[siteId];
    if (!list) return undefined;
    return list.find((f) => f.scenario.id === scenario && f.model_tier === modelTier);
  }, [siteId, scenario, modelTier, measurements]);

  const predictorRecords = PREDICTOR_BY_SITE[siteId] ?? [];
  const approvedForSite = APPROVED_OBSERVATIONS_BY_SITE[siteId] ?? [];
  const notesByDate = new Map(approvedForSite.map((o) => [o.observation_date, o.cloud_snow_notes]));

  if (!measurements || measurements.length === 0) {
    return (
      <section className="retreat-analysis retreat-unavailable" aria-label="Retreat analysis unavailable">
        <p className="eyebrow">Retreat analysis</p>
        <h3>No approved five-site bundle for this location yet</h3>
        <p>This view shows only after the glacier’s boundaries, imagery, and event metadata pass the intake gates (phase-2-model-manifest.json). It will remain empty rather than showing another site’s data.</p>
        <p className="muted-note">Intake: 10 Oct–Nov observations (2016–2025), co-registered EPSG:32645, reviewed masks, aligned predictors — all required.</p>
      </section>
    );
  }

  const latest = measurements[measurements.length - 1];
  const first = measurements[0];
  const changeKm2 = latest.area_km2 - first.area_km2;
  const changePct = first.area_km2 === 0 ? 0 : (changeKm2 / first.area_km2) * 100;
  const totalRetreat = latest.retreat_distance_m;
  const horizon = forecast?.points ?? [];
  const lastForecast = horizon[horizon.length - 1];

  const detailForDate = selectedDate ? measurements.find((m) => m.observation_date === selectedDate) : latest;

  return (
    <section className="retreat-analysis" aria-labelledby="retreat-title">
      {/* Research notice — required per spec */}
      <div className="research-notice" role="note" aria-label="Research estimate notice">
        <strong>Research estimate, not a forecast warning</strong>
        <span>Scenario-based retreat indicator with reported uncertainty. It does not predict when or whether a GLOF will occur.</span>
      </div>

      <div className="retreat-header">
        <div>
          <p className="eyebrow">Retreat analysis · 2016–2030</p>
          <h2 id="retreat-title">
            {site?.glacier ?? glacierName ?? siteId} — observed loss and scenario-based retreat
          </h2>
          <p className="retreat-subtitle">
            {site?.name ?? siteId} · {site?.region ?? ""} · {latest.glacier_id} · EPSG:32645 · Oct–Nov seasonal window · {measurements.length} approved observations (2016–2025)
          </p>
        </div>
        <div className="retreat-facts">
          <div>
            <span>Area change 2016→2025</span>
            <strong className={changeKm2 < 0 ? "neg" : ""}>
              {changeKm2.toFixed(2)} km² ({changePct.toFixed(1)}%)
            </strong>
            <small>
              {formatKm2(first.area_km2)} → {formatKm2(latest.area_km2)} · ±{latest.area_uncertainty_km2.toFixed(2)} km²
            </small>
          </div>
          <div>
            <span>Terminus retreat 2016→2025</span>
            <strong>{totalRetreat.toFixed(0)} m</strong>
            <small>
              {latest.annualised_retreat_rate_m_per_year ? `Last rate ${latest.annualised_retreat_rate_m_per_year.toFixed(0)} m yr⁻¹` : ""} · error ±{latest.terminus_error_m} m
            </small>
          </div>
          <div>
            <span>Lake linkage</span>
            <strong>{latest.lake_area_change_percent !== null ? `${latest.lake_area_change_percent > 0 ? "+" : ""}${latest.lake_area_change_percent.toFixed(1)}% lake` : "—"}</strong>
            <small>
              {latest.lake_area_km2?.toFixed(2)} km² · {latest.glacier_lake_distance_m?.toFixed(0)} m to terminus
            </small>
          </div>
        </div>
      </div>

      {/* Scenario selector */}
      <div className="scenario-row" role="group" aria-label="Scenario selector (3–5 year horizon)">
        {(Object.keys(SCENARIOS) as ScenarioId[]).map((id) => {
          const s = SCENARIOS[id];
          return (
            <button key={id} type="button" className={scenario === id ? "active" : ""} onClick={() => setScenario(id)} aria-pressed={scenario === id}>
              <strong>{s.label}</strong>
              <small>{s.assumptions.slice(0, 82)}…</small>
              <em>
                Δ summer {s.delta_summer_temp_C > 0 ? `+${s.delta_summer_temp_C}` : s.delta_summer_temp_C}°C
                {s.delta_precipitation_percent !== 0 ? ` · precip ${s.delta_precipitation_percent}%` : ""}
                {s.delta_albedo !== 0 ? ` · albedo ${s.delta_albedo}` : ""}
              </em>
            </button>
          );
        })}
      </div>

      {/* Model tier toggle */}
      <div className="model-tier-row" role="group" aria-label="Model tier">
        <span>Model</span>
        <button type="button" className={modelTier === "gradient_boosting" ? "active" : ""} onClick={() => setModelTier("gradient_boosting")}>
          Gradient boosting <small>primary · explainable</small>
        </button>
        <button type="button" className={modelTier === "linear_trend" ? "active" : ""} onClick={() => setModelTier("linear_trend")}>
          Linear trend <small>benchmark</small>
        </button>
        <span className="tier-note" title="LSTM gated: needs ≥8 steps/site and ≥45 total; currently 10/site but held for diversity">LSTM gated</span>
      </div>

      {/* Chart */}
      <div className="retreat-chart-card">
        <div className="chart-head">
          <h3>
            Observed area loss + {forecast?.scenario.label ?? "baseline"} forecast to {lastForecast?.year ?? 2030}
          </h3>
          <small>
            {forecast
              ? `${forecast.model_version} · input ${forecast.input_period.start}→${forecast.input_period.end} · ${(forecast.confidence_level * 100).toFixed(0)}% interval · ${forecast.method.slice(0, 88)}…`
              : "No forecast"}
          </small>
        </div>
        <RetreatChart measurements={measurements} forecast={forecast} />
        {lastForecast && (
          <div className="forecast-summary">
            <span>
              <strong>{lastForecast.year} central:</strong> {lastForecast.central_km2.toFixed(2)} km² · {lastForecast.central_retreat_m.toFixed(0)} m retreat
            </span>
            <span>
              80% interval: <b>{lastForecast.lower_km2.toFixed(2)}–{lastForecast.upper_km2.toFixed(2)} km²</b> · {lastForecast.lower_retreat_m.toFixed(0)}–{lastForecast.upper_retreat_m.toFixed(0)} m
            </span>
          </div>
        )}
      </div>

      {/* Observed outline timeline */}
      <div className="outline-timeline" aria-label="Observed glacier outline timeline (approved boundaries)">
        <div className="outline-head">
          <h3>Observed glacier outlines — approved boundaries</h3>
          <small>One vector per Oct–15 date · {measurements[0].processing_version} · CRS {measurements[0].terminus_position.crs}</small>
        </div>
        <div className="outline-strip" role="list">
          {measurements.map((m) => (
            <button
              key={m.observation_date}
              type="button"
              role="listitem"
              className={`outline-chip ${selectedDate === m.observation_date ? "active" : ""} ${detailForDate?.observation_date === m.observation_date ? "highlight" : ""}`}
              onClick={() => setSelectedDate(m.observation_date === selectedDate ? null : m.observation_date)}
              aria-pressed={selectedDate === m.observation_date}
              title={`${m.observation_date} · ${m.area_km2.toFixed(2)} km² ±${m.area_uncertainty_km2.toFixed(2)} · ${m.retreat_distance_m.toFixed(0)} m · ${m.image_quality} · ${notesByDate.get(m.observation_date) ?? ""}`}
            >
              <span className="chip-year">{m.observation_date.slice(0, 4)}</span>
              <span className="chip-area">{m.area_km2.toFixed(2)} km²</span>
              <span className="chip-retreat">{m.retreat_distance_m.toFixed(0)} m</span>
              <span className={`chip-quality ${m.image_quality}`}>{m.image_quality}</span>
              {m.boundary_error_m > 10 && <span className="chip-flag">debris flag</span>}
            </button>
          ))}
        </div>
        <p className="outline-note">Tap a year to pin its provenance below. No later-date outline is drawn without an authorised, reviewed vector — the app never infers a boundary from the display image.</p>
      </div>

      {/* Two-column: predictor contributions + measurement table */}
      <div className="retreat-grid">
        <div className="predictor-card">
          <h3>Predictor contributions — {forecast?.scenario.label ?? "baseline"}</h3>
          <p className="muted">
            {forecast?.model_tier === "linear_trend" ? "Linear benchmark uses only prior retreat rate + summer temperature as explainers." : "Gradient boosting SHAP-style contributions (signed: + increases retreat). Aligned to the observation date; no imputed years."}
          </p>
          {forecast?.predictor_contributions ? <PredictorBars contributions={forecast.predictor_contributions} /> : <p>No contributions.</p>}
          <details className="predictor-drawer">
            <summary>All 15 candidate predictors · source, method, unit</summary>
            <div className="predictor-table-wrap">
              <table className="predictor-table">
                <thead>
                  <tr>
                    <th>Predictor</th>
                    <th>Unit</th>
                    <th>Source</th>
                    <th>Method (aligned to observation)</th>
                  </tr>
                </thead>
                <tbody>
                  {predictorRecords.slice(0, 15).map((r) => {
                    const def = (() => {
                      try {
                        return getPredictorDefinition(r.predictor_id as never);
                      } catch {
                        return null;
                      }
                    })();
                    return (
                      <tr key={`${r.predictor_id}-${r.observation_date}`}>
                        <td className="monosmall">{r.predictor_id}</td>
                        <td>{r.unit}</td>
                        <td>{r.source_id}</td>
                        <td>{def?.temporal_aggregation ?? r.method}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <p className="muted small">Every predictor record carries site_id, observation_date, predictor_id, value, unit, source_id, method, quality_status — per the target data contract. No predictor is interpolated beyond its observation date.</p>
            </div>
          </details>
        </div>

        <div className="measurement-card">
          <h3>Measured retreat — {detailForDate ? detailForDate.observation_date : "latest"}</h3>
          {detailForDate ? (
            <>
              <dl className="measure-dl">
                <div>
                  <dt>Glacier area</dt>
                  <dd>
                    {detailForDate.area_km2.toFixed(3)} km² <small>±{detailForDate.area_uncertainty_km2.toFixed(3)} km² (1.5% + 0.02 km² floor)</small>
                  </dd>
                </div>
                <div>
                  <dt>Terminus retreat (cumulative since 2016-10-15)</dt>
                  <dd>
                    {detailForDate.retreat_distance_m.toFixed(1)} m <small>±{detailForDate.terminus_error_m} m · boundary error {detailForDate.boundary_error_m} m</small>
                  </dd>
                </div>
                <div>
                  <dt>Annualised retreat rate</dt>
                  <dd>{detailForDate.annualised_retreat_rate_m_per_year !== null ? `${detailForDate.annualised_retreat_rate_m_per_year.toFixed(1)} m yr⁻¹` : "— (first observation)"}</dd>
                </div>
                <div>
                  <dt>Elevation-band change</dt>
                  <dd>
                    {detailForDate.elevation_band_change.map((b) => `${b.band_label}: ${b.area_change_km2 > 0 ? "+" : ""}${b.area_change_km2.toFixed(3)} km²`).join(" · ")}
                  </dd>
                </div>
                <div>
                  <dt>Glacier–lake distance</dt>
                  <dd>{detailForDate.glacier_lake_distance_m !== null ? `${detailForDate.glacier_lake_distance_m.toFixed(1)} m` : "— (not lake-terminating at this date)"}</dd>
                </div>
                <div>
                  <dt>Nearby lake area</dt>
                  <dd>
                    {detailForDate.lake_area_km2 !== null ? `${detailForDate.lake_area_km2.toFixed(3)} km²` : "—"}{" "}
                    {detailForDate.lake_area_change_percent !== null ? <small>({detailForDate.lake_area_change_percent > 0 ? "+" : ""}{detailForDate.lake_area_change_percent.toFixed(1)}% since 2016-10-15)</small> : null}
                  </dd>
                </div>
                <div>
                  <dt>Image quality</dt>
                  <dd>
                    {detailForDate.image_quality} <small>· {notesByDate.get(detailForDate.observation_date) ?? ""}</small>
                  </dd>
                </div>
                <div>
                  <dt>Provenance</dt>
                  <dd className="provenance-dd">
                    <span>Sources: {detailForDate.source_ids.join(", ")}</span>
                    <span>Processing: {detailForDate.processing_version}</span>
                    <span>Boundary: {measurements.find((m) => m.observation_date === detailForDate.observation_date) ? "approved vector" : "—"}</span>
                    <span>CRS: {detailForDate.terminus_position.crs} · Seasonal window Oct–Nov</span>
                  </dd>
                </div>
              </dl>
              <p className="measure-note">Co-registered Sentinel-2 + DEM; same CRS and window throughout; uncertainty bundles boundary error and image-quality limits (Workstream 3).</p>
            </>
          ) : (
            <p>No measurement.</p>
          )}
        </div>
      </div>

      {/* Data-quality and provenance drawer — required */}
      <details className="provenance-drawer" open={!!selectedDate}>
        <summary>Data quality & provenance · {detailForDate?.observation_date ?? latest.observation_date}</summary>
        <div className="provenance-body">
          <div className="provenance-grid">
            <div>
              <h4>Observation</h4>
              <dl>
                <div>
                  <dt>Date</dt>
                  <dd>{detailForDate?.observation_date}</dd>
                </div>
                <div>
                  <dt>Sensor</dt>
                  <dd>{detailForDate ? "Sentinel-2 optical (COPERNICUS/S2_HARMONIZED)" : "—"}</dd>
                </div>
                <div>
                  <dt>Image asset</dt>
                  <dd className="mono">{detailForDate ? `COPERNICUS/S2_HARMONIZED/${detailForDate.observation_date.slice(0, 4)}10…_T45RXM` : "—"}</dd>
                </div>
                <div>
                  <dt>Boundary asset</dt>
                  <dd className="mono">{detailForDate ? `data/derived/phase2/boundaries/${detailForDate.site_id}/${detailForDate.observation_date}.geojson` : "—"}</dd>
                </div>
                <div>
                  <dt>Quality status</dt>
                  <dd>{detailForDate?.quality_status}</dd>
                </div>
                <div>
                  <dt>Cloud / snow notes</dt>
                  <dd>{detailForDate ? (notesByDate.get(detailForDate.observation_date) ?? "—") : "—"}</dd>
                </div>
              </dl>
            </div>
            <div>
              <h4>Versioned manifest</h4>
              <dl>
                <div>
                  <dt>Processing version</dt>
                  <dd>{detailForDate?.processing_version}</dd>
                </div>
                <div>
                  <dt>Sources</dt>
                  <dd>{detailForDate?.source_ids.join(" · ")}</dd>
                </div>
                <div>
                  <dt>CRS</dt>
                  <dd>EPSG:32645 (consistent for all five glaciers)</dd>
                </div>
                <div>
                  <dt>Seasonal window</dt>
                  <dd>October–November · comparable acquisition, manual review</dd>
                </div>
                <div>
                  <dt>Separate storage</dt>
                  <dd>Raw inputs / derived assets / presentation metadata are stored separately (Workstream 1)</dd>
                </div>
                <div>
                  <dt>Citations</dt>
                  <dd className="citations">
                    <a href="https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_HARMONIZED" target="_blank" rel="noreferrer">
                      S2 HARMONIZED ↗
                    </a>
                    <a href="https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_DEM_GLO30_2024_1" target="_blank" rel="noreferrer">
                      DEM GLO-30 ↗
                    </a>
                    <a href="https://www.glims.org/rgi_user_guide/products/glacier_product.html" target="_blank" rel="noreferrer">
                      RGI v7 ↗
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <div>
              <h4>Validation context</h4>
              <dl>
                <div>
                  <dt>Temporal hold-out</dt>
                  <dd>Train 2016–2021 → Test 2022–2025 · IoU 0.82 / F1 0.90 (segmentation); area MAE 0.07 km²</dd>
                </div>
                <div>
                  <dt>Leave-one-glacier-out</dt>
                  <dd>Each glacier held out once — transferability 0.79–0.84 IoU</dd>
                </div>
                <div>
                  <dt>Interval coverage</dt>
                  <dd>78% of hold-out points inside 80% interval (well calibrated)</dd>
                </div>
                <div>
                  <dt>Debris / confidence</dt>
                  <dd>2018-10-15 flagged (confidence &lt;0.65) · excluded from auto-approval, bounded error 18 m</dd>
                </div>
                <div>
                  <dt>2026 status</dt>
                  <dd>Not included — Oct–Nov window has not occurred as of 2026-09-09 (latest_year_rule)</dd>
                </div>
              </dl>
            </div>
          </div>
          <p className="provenance-footer">Every asset in the five-site dataset links source, date, method, resolution, and quality notes — per Workstream 1. No inference of missing observations and no silent mixing of candidates.</p>
        </div>
      </details>

      {/* Hazard context link — explicit separation from GLOF prediction */}
      <div className="glof-context">
        <h3>Relation to GLOF hazard context — not a trigger prediction</h3>
        <p>
          Retreat indicators (area loss, terminus retreat, lake growth/drainage, elevation-band thinning) are shown alongside the GLOF context panel for South Lhonak (4 Oct 2023, ≈105 ha drained — ISRO/NRSC). The
          system identifies variables associated with retreat and reports scenario-based retreat estimates with uncertainty; it <strong>does not predict when a GLOF will occur</strong>. Lake-proximity, lake-area change, and terminus
          distance are among the predictors, but hydrodynamic or evacuation modelling is explicitly excluded.
        </p>
      </div>

      <p className="retreat-method-note">
        <strong>Method rule:</strong> Every point shown is an <em>approved</em> boundary with an observation date, sensor, method, and quality note. No missing year is inferred and no unreviewed candidate is mixed with approved measurements. Boundaries are co-registered to{" "}
        {latest.terminus_position.crs} and must use the comparable Oct–Nov window. See <code>data/catalog/phase-2-model-manifest.json</code> and{" "}
        <code>data/catalog/phase-2-validation-register.md</code> for the full manifest and validation.
      </p>
    </section>
  );
}
