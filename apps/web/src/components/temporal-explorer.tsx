"use client";

import { useEffect, useMemo, useState } from "react";
import { southLhonakObservations } from "@/data/sites/south-lhonak-observations";
import type { TimelineObservation } from "@/domain/observation";
import type { BoundaryAsset } from "@/domain/site-dataset";

type ReferenceFeature = { properties?: { rgi_id?: string; site_id?: string }; geometry?: { coordinates?: number[][][] } };

function RgiOutline({ boundary, siteName, expectedRgiId }: { boundary?: BoundaryAsset; siteName?: string; expectedRgiId?: string }) {
  const [outline, setOutline] = useState<string>("");

  useEffect(() => {
    if (!boundary) return;
    fetch(boundary.path)
      .then((response) => response.json())
      .then((data: { features?: ReferenceFeature[] }) => {
        // For combined Phase 2 baselines, filter by expected RGI or site_id; fallback to first feature.
        let feature: ReferenceFeature | undefined;
        if (boundary.path.includes("phase2-five-glaciers")) {
          const siteId = boundary.id?.split("-glacier")[0] ?? siteName?.toLowerCase().replace(/\s+/g, "-") ?? "";
          feature =
            (expectedRgiId ? data.features?.find((item) => item.properties?.rgi_id === expectedRgiId) : undefined) ??
            (siteId ? data.features?.find((item) => item.properties?.site_id === siteId || item.properties?.site_id === boundary.id?.split("-glacier")[0]) : undefined) ??
            data.features?.[0];
        } else {
          feature = boundary.kind === "glacier" && boundary.status === "historical_baseline"
            ? (expectedRgiId ? data.features?.find((item) => item.properties?.rgi_id === expectedRgiId) : undefined) ?? data.features?.find((item) => item.properties?.rgi_id === "RGI2000-v7.0-G-15-07986") ?? data.features?.[0]
            : data.features?.[0];
        }
        const ring: number[][] = (feature?.geometry?.coordinates?.[0] as unknown as number[][]) ?? [];
        if (ring.length === 0) { setOutline(""); return; }
        // Dynamic bounds from polygon extent so every site fits (instead of hard-coded Sikkim envelope)
        let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
        for (const [lon, lat] of ring) {
          if (!Number.isFinite(lon) || !Number.isFinite(lat)) continue;
          minLon = Math.min(minLon, lon); maxLon = Math.max(maxLon, lon);
          minLat = Math.min(minLat, lat); maxLat = Math.max(maxLat, lat);
        }
        const padLon = (maxLon - minLon) * 0.12 || 0.02;
        const padLat = (maxLat - minLat) * 0.12 || 0.02;
        const west = minLon - padLon; const east = maxLon + padLon;
        const south = minLat - padLat; const north = maxLat + padLat;
        const spanLon = east - west || 1; const spanLat = north - south || 1;
        setOutline(ring.map(([longitude, latitude]) => `${((longitude - west) / spanLon) * 100},${((north - latitude) / spanLat) * 100}`).join(" "));
      })
      .catch(() => setOutline(""));
  }, [boundary, siteName, expectedRgiId]);

  if (!outline) return null;
  return <svg className="rgi-outline" viewBox="0 0 100 100" preserveAspectRatio="none" aria-label="Historical RGI v7 glacier baseline overlay"><polyline points={outline} /></svg>;
}

export function TemporalExplorer({ siteName = "South Lhonak", observations = southLhonakObservations, boundary, expectedRgiId }: { siteName?: string; observations?: TimelineObservation[]; boundary?: BoundaryAsset; expectedRgiId?: string }) {
  const [selectedId, setSelectedId] = useState("2025");
  const [showBaseline, setShowBaseline] = useState(true);
  const selected = useMemo(() => observations.find((item) => item.id === selectedId) ?? observations[observations.length - 1], [selectedId, observations]);

  return (
    <section className="temporal-explorer" aria-labelledby="timeline-title">
      <div className="temporal-heading"><p className="eyebrow">2016–2026 visual timeline</p><h2 id="timeline-title">Select a year to inspect the glacier–lake landscape.</h2></div>

      <div className="temporal-layout">
        <div className="timeline-selector" role="tablist" aria-label="Candidate observation timeline">
          {observations.map((observation) => (
            <button key={observation.id} type="button" role="tab" aria-selected={selectedId === observation.id} disabled={observation.status === "unavailable"} className={selectedId === observation.id ? "active" : ""} onClick={() => setSelectedId(observation.id)}>
              {observation.imagePath ? <img src={observation.imagePath} alt="" /> : <span className="pending-thumb">2026</span>}
              <strong>{observation.label}</strong>
            </button>
          ))}
        </div>

        <div className="temporal-view" role="tabpanel" aria-label={`${selected.label} observation`}>
          {selected.imagePath ? (
            <div className="temporal-image-wrap">
            <img src={selected.imagePath} alt={`${siteName} ${selected.date} Sentinel-2 candidate observation`} />
              {showBaseline && boundary && <RgiOutline boundary={boundary} siteName={siteName} expectedRgiId={expectedRgiId} />}
              <div className="image-label label-left">Review candidate<br /><strong>{selected.date}</strong></div>
              {showBaseline && <div className="image-label label-right">RGI v7 baseline<br /><strong>26 Dec 2000</strong></div>}
            </div>
          ) : (
            <div className="no-observation"><p>2026 observation pending</p><strong>No comparable annual scene is available yet.</strong></div>
          )}
          <div className="observation-details" aria-label="Selected image metadata">
            <div><span>Acquisition</span><strong>{selected.date}</strong></div>
            <div><span>Sensor</span><strong>{selected.sensor}</strong></div>
            <div><span>Scene cloud metadata</span><strong>{selected.cloudPercent === undefined ? "—" : `${selected.cloudPercent}%`}</strong></div>
            <div><span>Boundary overlay</span><strong>{showBaseline ? "RGI v7 visible" : "Hidden"}</strong></div>
          </div>
        </div>
      </div>

      <div className="layer-register">
        <div><p className="eyebrow">Layers</p><h3>Trusted boundaries only</h3></div>
        <label className="layer-toggle"><input type="checkbox" checked={showBaseline} onChange={(event) => setShowBaseline(event.target.checked)} disabled={!boundary} /> {boundary ? "Show approved historical glacier baseline" : "No approved boundary registered"}</label>
        <p>{boundary ? "Boundary provenance and date are carried by the selected site dataset." : "Boundary overlays will appear when an authorised vector dataset is registered."}</p>
      </div>
    </section>
  );
}
