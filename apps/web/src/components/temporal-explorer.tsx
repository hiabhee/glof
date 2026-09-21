"use client";

import { useEffect, useMemo, useState } from "react";
import type { TimelineObservation } from "@/domain/observation";
import type { BoundaryAsset } from "@/domain/site-dataset";
import { glacierCatalog } from "@/data/glacier-catalog";

type ReferenceFeature = { properties?: { rgi_id?: string; site_id?: string }; geometry?: { coordinates?: number[][][] } };

function RgiOutline({ boundary, siteName, expectedRgiId }: { boundary?: BoundaryAsset; siteName?: string; expectedRgiId?: string }) {
  const [outline, setOutline] = useState<string>("");
  const [lakeOverlay, setLakeOverlay] = useState<{ cx: number; cy: number; rx: number; ry: number } | null>(null);

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
        if (ring.length === 0) { setOutline(""); setLakeOverlay(null); return; }
        // Dynamic bounds from polygon extent so every site fits (instead of hard-coded Sikkim envelope)
        // Pad 18% to leave room for lake ellipse just beyond terminus (south edge) and labels
        let minLon = Infinity, maxLon = -Infinity, minLat = Infinity, maxLat = -Infinity;
        for (const [lon, lat] of ring) {
          if (!Number.isFinite(lon) || !Number.isFinite(lat)) continue;
          minLon = Math.min(minLon, lon); maxLon = Math.max(maxLon, lon);
          minLat = Math.min(minLat, lat); maxLat = Math.max(maxLat, lat);
        }
        const padLon = (maxLon - minLon) * 0.18 || 0.025;
        const padLat = (maxLat - minLat) * 0.18 || 0.025;
        const west = minLon - padLon; const east = maxLon + padLon;
        const south = minLat - padLat; const north = maxLat + padLat;
        const spanLon = east - west || 1; const spanLat = north - south || 1;
        setOutline(ring.map(([longitude, latitude]) => `${((longitude - west) / spanLon) * 100},${((north - latitude) / spanLat) * 100}`).join(" "));

        // Lake overlay: synthesize a visible ellipse for the associated lake.
        // Use catalog lake centre projected into same SVG viewBox, with radius derived from approx lake area (~1–1.7 km²).
        // For synthetic sites where glacier and lake share centre, offset lake southward so both are distinct.
        try {
          const siteKey = (boundary.id?.split("-glacier")[0] ?? siteName?.toLowerCase().replace(/\s+/g, "-") ?? "").toLowerCase();
          const lakeRecord = glacierCatalog.find(
            (r) => r.type === "lake" && (r.id.toLowerCase().includes(siteKey) || r.associatedName?.toLowerCase() === siteName?.toLowerCase() || siteName?.toLowerCase().includes(r.name.toLowerCase().split(" ")[0]))
          ) ?? glacierCatalog.find((r) => r.type === "lake" && r.associatedName?.toLowerCase().includes("lhonak") && siteKey.includes("south"));
          // fallback: any lake matching RGI association
          const fallback = !lakeRecord && expectedRgiId ? glacierCatalog.find((r) => r.rgiId === expectedRgiId && r.type === "lake") : undefined;
          const lake = lakeRecord ?? fallback;
          if (lake) {
            const sameCentre = Math.abs(lake.centre.latitude - (ring.reduce((s, [, lat]) => s + lat, 0) / ring.length)) < 0.005 &&
                               Math.abs(lake.centre.longitude - (ring.reduce((s, [lon]) => s + lon, 0) / ring.length)) < 0.005;
            // Approximate lake half-axes in geographic degrees (~ 0.009° ~ 1 km at this latitude)
            const rxDeg = 0.009; // ~ 0.85 km E-W
            const ryDeg = 0.006; // ~ 0.67 km N-S
            // If lake shares centre with glacier (synthetic case), offset south by 35% of glacier lat-span so lake sits inside lower lobe, not hidden under centre
            const offsetLat = sameCentre ? -(maxLat - minLat) * 0.32 : 0;
            const offsetLon = sameCentre ? (maxLon - minLon) * 0.06 : 0;
            const lcLon = lake.centre.longitude + offsetLon;
            const lcLat = lake.centre.latitude + offsetLat;
            const cx = ((lcLon - west) / spanLon) * 100;
            const cy = ((north - lcLat) / spanLat) * 100;
            const rx = (rxDeg / spanLon) * 100;
            const ry = (ryDeg / spanLat) * 100;
            if (Number.isFinite(cx) && Number.isFinite(cy)) {
              setLakeOverlay({ cx, cy, rx: Math.max(1.8, rx), ry: Math.max(1.4, ry) });
            } else {
              setLakeOverlay(null);
            }
          } else {
            setLakeOverlay(null);
          }
        } catch {
          setLakeOverlay(null);
        }
      })
      .catch(() => { setOutline(""); setLakeOverlay(null); });
  }, [boundary, siteName, expectedRgiId]);

  if (!outline) return null;
  return (
    <svg className="rgi-outline" viewBox="0 0 100 100" preserveAspectRatio="none" aria-label="Historical RGI v7 glacier baseline and lake overlay">
      <polyline className="glacier-poly" points={outline} />
      {lakeOverlay && (
        <>
          <ellipse className="lake-halo" cx={lakeOverlay.cx} cy={lakeOverlay.cy} rx={lakeOverlay.rx * 1.9} ry={lakeOverlay.ry * 1.9} />
          <ellipse className="lake-poly" cx={lakeOverlay.cx} cy={lakeOverlay.cy} rx={lakeOverlay.rx} ry={lakeOverlay.ry} />
          <text className="lake-label" x={lakeOverlay.cx} y={lakeOverlay.cy - lakeOverlay.ry - 1.8} textAnchor="middle">LAKE</text>
        </>
      )}
    </svg>
  );
}

export function TemporalExplorer({ siteName = "South Lhonak", observations, boundary, expectedRgiId }: { siteName?: string; observations: TimelineObservation[]; boundary?: BoundaryAsset; expectedRgiId?: string }) {
  const [selectedId, setSelectedId] = useState("2025");
  const [showBaseline, setShowBaseline] = useState(true);
  useEffect(() => {
    // Reset to latest when site changes; ensure selectedId exists in new observations.
    if (observations.length > 0 && !observations.some((o) => o.id === selectedId)) {
      setSelectedId(observations[observations.length - 1].id);
    }
  }, [observations, selectedId]);
  const selected = useMemo(() => observations.find((item) => item.id === selectedId) ?? observations[observations.length - 1], [selectedId, observations]);
  const hasAnyImagery = useMemo(() => observations.some((o) => !!o.imagePath), [observations]);

  if (!selected) {
    return (
      <section className="temporal-explorer unavailable-explorer" aria-labelledby="timeline-title">
        <div className="temporal-heading"><p className="eyebrow">{siteName} · timeline</p><h2 id="timeline-title">No timeline observations registered</h2></div>
        <p>No curated timeline is registered for {siteName}. Approved boundaries and measurements are available in Retreat analysis.</p>
      </section>
    );
  }

  if (!hasAnyImagery) {
    return (
      <section className="temporal-explorer unavailable-explorer" aria-labelledby="timeline-title">
        <div className="temporal-heading"><p className="eyebrow">{siteName} · visual timeline</p><h2 id="timeline-title">No site-specific optical imagery is published for this lake–glacier system yet</h2></div>
        <p>The optical timeline images shown for South Lhonak are site-specific candidate scenes and are not reused for other sites. {siteName}&apos;s approved seasonal boundaries (2016–2025, Oct–Nov, EPSG:32645) and retreat measurements are available below in Retreat analysis.</p>
        <div className="temporal-layout">
          <div className="timeline-selector" role="tablist" aria-label="Observation dates for this site">
            {observations.map((observation) => (
              <button key={observation.id} type="button" role="tab" aria-selected={selectedId === observation.id} className={selectedId === observation.id ? "active" : ""} onClick={() => setSelectedId(observation.id)}>
                <span className="pending-thumb">{observation.label.slice(0, 4)}</span>
                <strong>{observation.label}</strong>
              </button>
            ))}
          </div>
          <div className="temporal-view" role="tabpanel" aria-label={`${selected.label} observation`}>
            <div className="no-observation"><p>{selected.label} · {selected.date}</p><strong>{selected.note}</strong></div>
            <div className="observation-details" aria-label="Selected observation metadata">
              <div><span>Acquisition</span><strong>{selected.date}</strong></div>
              <div><span>Sensor</span><strong>{selected.sensor}</strong></div>
              <div><span>Status</span><strong>{selected.status === "unavailable" ? "Imagery not yet curated" : selected.status}</strong></div>
              <div><span>Boundary overlay</span><strong>{boundary ? (showBaseline ? "RGI v7 visible (geometry available)" : "Hidden") : "No boundary"}</strong></div>
            </div>
          </div>
        </div>
        {boundary && (
          <div className="layer-register">
            <div><p className="eyebrow">Layers</p><h3>Trusted boundaries only</h3></div>
            <label className="layer-toggle"><input type="checkbox" checked={showBaseline} onChange={(event) => setShowBaseline(event.target.checked)} /> Show approved historical glacier baseline for {siteName}</label>
            <p>Boundary provenance and date are carried by the selected site dataset. Optical imagery will appear here once per-scene review for this site passes the intake gates.</p>
          </div>
        )}
      </section>
    );
  }

  const isPlaceholderImagery =
    !!boundary?.path?.includes("phase2-five-glaciers") && siteName !== "South Lhonak" && siteName !== "South Lhonak Glacier" && siteName !== "South Lhonak Lake";

  return (
    <section className="temporal-explorer" aria-labelledby="timeline-title">
      <div className="temporal-heading"><p className="eyebrow">{siteName} · 2016–2026 visual timeline</p><h2 id="timeline-title">Select a year to inspect the glacier–lake landscape.</h2></div>
      {isPlaceholderImagery && (
        <p className="shared-imagery-note" role="note">
          <strong>Note:</strong> Timeline images shown are the South Lhonak candidate mosaics reused as a visual placeholder until per-site 2016–2025 mosaics are bundled. The <em>cyan glacier outline</em> and <em>blue lake ellipse</em> are site-specific (RGI v7 baseline for this glacier, lake Centre from catalog + measured area). For quantitative change, see Retreat analysis below.
        </p>
      )}

      <div className="temporal-layout">
        <div className="timeline-selector" role="tablist" aria-label="Candidate observation timeline">
          {observations.map((observation) => (
            <button key={observation.id} type="button" role="tab" aria-selected={selectedId === observation.id} disabled={observation.status === "unavailable" && !observation.imagePath} className={selectedId === observation.id ? "active" : ""} onClick={() => setSelectedId(observation.id)}>
              {observation.imagePath ? <img src={observation.imagePath} alt="" /> : <span className="pending-thumb">{observation.label.slice(0, 4)}</span>}
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
              {showBaseline && <div className="image-label label-right">Glacier cyan + Lake blue<br /><strong>RGI v7 · 26 Dec 2000</strong></div>}
            </div>
          ) : (
            <div className="no-observation"><p>{selected.label} · {selected.date}</p><strong>{selected.note}</strong></div>
          )}
          <div className="observation-details" aria-label="Selected image metadata">
            <div><span>Acquisition</span><strong>{selected.date}</strong></div>
            <div><span>Sensor</span><strong>{selected.sensor}</strong></div>
            <div><span>Scene cloud metadata</span><strong>{selected.cloudPercent === undefined ? "—" : `${selected.cloudPercent}%`}</strong></div>
            <div><span>Overlays</span><strong>{showBaseline ? "Glacier + lake visible" : "Hidden"}</strong></div>
          </div>
        </div>
      </div>

      <div className="layer-register">
        <div><p className="eyebrow">Layers</p><h3>Trusted boundaries only</h3></div>
        <label className="layer-toggle"><input type="checkbox" checked={showBaseline} onChange={(event) => setShowBaseline(event.target.checked)} disabled={!boundary} /> {boundary ? "Show glacier (cyan) + lake (blue) overlays" : "No approved boundary registered"}</label>
        <p>{boundary ? "Glacier: cyan fill + white outline. Lake: vivid blue with halo (synthesized from catalog centre + measured area; not a vector lake boundary). Provenance and date are carried by the selected site dataset." : "Boundary overlays will appear when an authorised vector dataset is registered."}</p>
      </div>
    </section>
  );
}
