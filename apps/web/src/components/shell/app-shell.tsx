"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { GlobeView } from "./globe-view";
import { glacierCatalog, hasImageryData, searchCatalog, type GlacierCatalogRecord } from "@/data/glacier-catalog";
import { EventVisualizer } from "@/components/event-visualizer";
import { TemporalExplorer } from "@/components/temporal-explorer";
import { EvidencePanel } from "@/components/evidence-panel";
import { GlacierAnalysisPanel } from "@/components/glacier-analysis-panel";
import { RetreatAnalysis } from "@/components/retreat-analysis";
import { getDatasetForCatalogRecord, getSiteForCatalogRecord } from "@/data/sites/registry";

type LayerState = {
  glacierBoundaries: boolean;
  glacialLakes: boolean;
  glofEvents: boolean;
  terrain: boolean;
  satellite: boolean;
};

type RightShortcut = "glaciers" | "lakes" | "events" | "imagery" | "layers";
type MobileView = "map" | "explore" | "site" | "layers";
type DesktopPage = "map" | "sites" | "analysis" | "layers";

export function AppShell() {
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("all");
  const [selected, setSelected] = useState<GlacierCatalogRecord | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [activeShortcut, setActiveShortcut] = useState<RightShortcut>("glaciers");
  const [layers, setLayers] = useState<LayerState>({
    glacierBoundaries: true,
    glacialLakes: true,
    glofEvents: true,
    terrain: true,
    satellite: true,
  });
  const [satOpacity, setSatOpacity] = useState(1);
  const [leftCollapsed, setLeftCollapsed] = useState(false);
  const globeApiRef = useRef<{ flyTo: (c: { latitude: number; longitude: number }, h?: number) => void; resetView: () => void; zoomIn: () => void; zoomOut: () => void } | null>(null);
  const shellRef = useRef<HTMLDivElement>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [mobileView, setMobileView] = useState<MobileView>("map");
  const [desktopPage, setDesktopPage] = useState<DesktopPage>("map");
  const selectedSite = selected ? getSiteForCatalogRecord(selected) : undefined;
  const selectedDataset = selected ? getDatasetForCatalogRecord(selected) : undefined;

  const filtered = useMemo(() => searchCatalog(query, region), [query, region]);
  const filteredSystems = useMemo(() => {
    const lakeRecords = filtered.filter((record) => record.type === "lake");
    return lakeRecords.length > 0 ? lakeRecords : filtered;
  }, [filtered]);
  const availableCatalog = useMemo(() => glacierCatalog.filter(hasImageryData), []);
  const lakeCount = availableCatalog.filter((g) => g.type === "lake").length;
  const glacierCount = availableCatalog.filter((g) => g.type === "glacier").length;
  const studySiteCount = lakeCount;

  // Auto-select South Lhonak on mount? No, show Himalaya overview first per spec: initially framed on Himalaya.
  // Keep selected null until user interacts, but highlight South Lhonak as featured.

  const handleSelect = (rec: GlacierCatalogRecord) => {
    setSelected(rec);
    setDetailOpen(false);
    // animate globe via api
    if (globeApiRef.current) {
      globeApiRef.current.flyTo(rec.centre, rec.id.includes("south-lhonak") ? 14_000 : 24_000);
    }
    // switch right panel to imagery preview
    setActiveShortcut("imagery");
    setMobileView("site");
    setDesktopPage("analysis");
  };

  const handleReset = () => {
    setSelected(null);
    setDetailOpen(false);
    globeApiRef.current?.resetView();
    setMobileView("map");
    setDesktopPage("map");
  };

  const handleClearSelection = () => {
    setSelected(null);
    setDetailOpen(false);
    setMobileView("explore");
    setDesktopPage("sites");
  };

  const openMobileView = (view: MobileView) => {
    if (view === "layers") setActiveShortcut("layers");
    if (view === "site") setActiveShortcut("imagery");
    if (view === "explore") setActiveShortcut("glaciers");
    setMobileView(view === "site" && !selected ? "explore" : view);
  };

  const openDesktopPage = (page: DesktopPage) => {
    if (page === "layers") setActiveShortcut("layers");
    if (page === "analysis") setActiveShortcut("imagery");
    setDesktopPage(page === "analysis" && !selected ? "sites" : page);
  };

  const toggleFullscreen = async () => {
    const el = document.documentElement;
    try {
      if (!document.fullscreenElement) {
        await el.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch {}
  };

  useEffect(() => {
    const h = () => setIsFullscreen(!!document.fullscreenElement);
    document.addEventListener("fullscreenchange", h);
    return () => document.removeEventListener("fullscreenchange", h);
  }, []);

  // Keyboard: ESC closes detail
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (detailOpen) setDetailOpen(false);
        else if (selected) setSelected(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [detailOpen, selected]);

  useEffect(() => {
    shellRef.current?.scrollTo({ top: 0, behavior: "auto" });
  }, [mobileView]);

  return (
    <div ref={shellRef} className={`portal-shell desktop-page-${desktopPage} mobile-view-${mobileView} ${detailOpen ? "detail-is-open" : ""}`}>
      <GlobeView
        selected={selected}
        showBoundaries={layers.glacierBoundaries}
        showLakes={layers.glacialLakes}
        showEvents={layers.glofEvents}
        satelliteOpacity={layers.satellite ? satOpacity : 0.15}
        terrainEnabled={layers.terrain}
        onSelect={handleSelect}
        referenceBoundaryPath="/reference/phase2-five-glaciers.geojson"
        onReady={(api) => (globeApiRef.current = api)}
      />

      {/* Top bar */}
      <header className="portal-topbar glass">
        <div className="topbar-left">
          <div className="brand-mark" aria-hidden="true"><span /></div>
          <div>
            <strong>GlacierLens</strong>
            <small>Himalayan glacier & GLOF evidence explorer</small>
          </div>
          <span className="topbar-divider" />
          <span className="topbar-context">Himalaya · 28.2° N 86.5° E</span>
        </div>
        <div className="topbar-right">
          <nav className="desktop-nav" aria-label="Primary navigation">
            <button type="button" className={desktopPage === "map" ? "active" : ""} onClick={() => openDesktopPage("map")}>Map</button>
            <button type="button" className={desktopPage === "sites" ? "active" : ""} onClick={() => openDesktopPage("sites")}>Study sites</button>
            <button type="button" className={desktopPage === "analysis" ? "active" : ""} disabled={!selected} onClick={() => openDesktopPage("analysis")}>Analysis</button>
            <button type="button" className={desktopPage === "layers" ? "active" : ""} onClick={() => openDesktopPage("layers")}>Layers</button>
          </nav>
          <span className="topbar-stat"><b>{studySiteCount}</b> study sites</span>
          <span className="topbar-stat"><b>{glacierCount + lakeCount}</b> mapped features</span>
          <span className="topbar-stat subtle">RGI v7</span>
          <button type="button" className="topbar-fullscreen" onClick={toggleFullscreen} aria-label="Toggle fullscreen">
            {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
          </button>
        </div>
      </header>
      <button type="button" className="desktop-map-cta" onClick={() => openDesktopPage("sites")}>Browse the five study sites →</button>

      {/* Globe chrome controls */}
      <div className="globe-chrome" aria-label="Globe controls">
        <button type="button" title="Zoom in" aria-label="Zoom in" onClick={() => globeApiRef.current?.zoomIn()}>＋</button>
        <button type="button" title="Zoom out" aria-label="Zoom out" onClick={() => globeApiRef.current?.zoomOut()}>－</button>
        <span className="chrome-sep" />
        <button type="button" title="Reset view to Himalaya" aria-label="Reset view" onClick={handleReset}>⟲</button>
        <button type="button" title="Fullscreen" aria-label="Toggle fullscreen" onClick={toggleFullscreen}>⛶</button>
      </div>
      <button type="button" className="mobile-map-cta" onClick={() => openMobileView("explore")}>Find a glacier or lake</button>

      {/* Left glass panel */}
      <aside className={`glass-panel left-panel ${leftCollapsed ? "collapsed" : ""}`} aria-label="Glacier search and filters">
        <div className="panel-header">
          <div>
            <p className="eyebrow"><span className="desktop-copy">Study sites</span><span className="mobile-copy">Step 1 of 3</span></p>
            <h2><span className="desktop-copy">Choose a glacier–lake system</span><span className="mobile-copy">Find a glacier or lake</span></h2>
          </div>
          <button type="button" className="icon-btn desktop-panel-toggle" onClick={() => setLeftCollapsed((v) => !v)} aria-label={leftCollapsed ? "Expand search panel" : "Collapse search panel"}>
            {leftCollapsed ? "→" : "←"}
          </button>
        </div>

        <div className="left-panel-content">
            <div className="search-wrap">
              <span className="search-icon" aria-hidden="true">⌕</span>
              <input
                type="search"
                placeholder="Search glacier, lake, RGI ID, region…"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                aria-label="Search glaciers and lakes"
              />
              {query && (
                <button type="button" className="clear-btn" onClick={() => setQuery("")} aria-label="Clear search">×</button>
              )}
            </div>

            <div className="filter-row">
              <label htmlFor="region-filter">Region</label>
              <select id="region-filter" value={region} onChange={(e) => setRegion(e.target.value)}>
                <option value="all">All Himalaya</option>
                <option value="North Sikkim">North Sikkim</option>
                <option value="South Asia East">South Asia East</option>
                <option value="South Asia West">South Asia West</option>
                <option value="India">India</option>
                <option value="Nepal">Nepal</option>
              </select>
            </div>

            <div className="results-meta">
              <span>{filteredSystems.length} system{filteredSystems.length !== 1 ? "s" : ""}</span>
              {selected && (
                <button type="button" className="text-btn" onClick={handleClearSelection}>Clear selection</button>
              )}
            </div>

            <div className="result-list" role="listbox" aria-label="Search results">
              {filteredSystems.map((rec) => (
                <button
                  key={rec.id}
                  type="button"
                  role="option"
                  aria-selected={selected?.id === rec.id}
                  className={`result-card ${selected?.id === rec.id ? "active" : ""} ${rec.boundaryStatus === "pending" ? "pending" : ""}`}
                  onClick={() => handleSelect(rec)}
                >
                  <span className="result-thumb" aria-hidden="true">
                    <span className={`thumb-dot ${rec.type}`} />
                  </span>
                  <span className="result-main">
                    <strong>{rec.type === "lake" && rec.associatedName ? `${rec.associatedName.replace(/ Glacier$/, "")} system` : rec.name}</strong>
                    <small>
                      {rec.type === "lake" && rec.associatedName ? `${rec.associatedName} + ${rec.name}` : `${rec.type === "glacier" ? "Glacier" : "Lake"} · ${rec.region}`} · {rec.country}
                      {rec.rgiId ? ` · ${rec.rgiId}` : ""}
                    </small>
                    <span className="result-status">
                      <i className={`status-dot ${rec.status}`} />
                      {labelForStatus(rec.status)} {rec.boundaryStatus === "available" ? "· boundary ready" : "· intake pending"}
                    </span>
                  </span>
                  <span className="result-arrow" aria-hidden="true">↗</span>
                </button>
              ))}
              {filteredSystems.length === 0 && <p className="empty-note">No matches. Try “South Lhonak” or “Imja”.</p>}
            </div>

            <p className="provenance-note">Every boundary keeps its source, date, and status. Historical RGI baselines are not displayed as current extents.</p>
        </div>
      </aside>

      {/* Right glass panel */}
      <aside className="glass-panel right-panel" aria-label="Shortcuts and glacier profile">
        <div className="shortcuts-row" role="tablist" aria-label="Portal shortcuts">
          {[
            { id: "glaciers", label: "Glaciers", count: glacierCount },
            { id: "lakes", label: "Lakes", count: lakeCount },
            { id: "events", label: "Events", count: 1 },
            { id: "imagery", label: "Imagery", count: 12 },
            { id: "layers", label: "Layers", count: null },
          ].map((tab) => (
            <button
              key={tab.id}
              role="tab"
              aria-selected={activeShortcut === tab.id}
              className={activeShortcut === tab.id ? "active" : ""}
              onClick={() => setActiveShortcut(tab.id as RightShortcut)}
            >
              {tab.label}
              {tab.count !== null && <span>{tab.count}</span>}
            </button>
          ))}
        </div>

        {/* Shortcut content */}
        {activeShortcut === "glaciers" && !selected && (
          <div className="shortcut-pane">
            <div className="flow-guide" aria-label="Getting started">
              <span className="flow-step active"><b>1</b><small>Choose a site</small></span>
              <span className="flow-line" />
              <span className="flow-step"><b>2</b><small>Explore time</small></span>
              <span className="flow-line" />
              <span className="flow-step"><b>3</b><small>Read evidence</small></span>
            </div>
            <p className="welcome-copy">Start by choosing one glacier or lake on the left. We’ll fly you there and open only the information for that site.</p>
            <h3>Glaciers</h3>
            <p>Trusted outlines are shown on the globe. Sites marked “intake pending” are included for future research and do not yet have imagery.</p>
            <ul className="shortcut-list">
              <li><b>South Lhonak</b> — historical baseline 26 Dec 2000 · RGI 15-07986</li>
              <li><b>Gurudongmar</b> — intake pending · North Sikkim</li>
              <li><b>Imja</b> — candidate · Khumbu</li>
            </ul>
            <button type="button" className="primary-glass-btn" onClick={() => handleSelect(glacierCatalog[0])}>Fly to South Lhonak</button>
          </div>
        )}
        {activeShortcut === "lakes" && !selected && (
          <div className="shortcut-pane">
            <h3>Glacial lakes</h3>
            <p>Use the same search to find lakes. Lakes linked to a glacier show their association and elevation.</p>
            <ul className="shortcut-list">
              <li><b>South Lhonak Lake</b> — 5200 m · moraine-dammed · 4 Oct 2023 GLOF</li>
              <li><b>Gurudongmar</b> — 5430 m · high-altitude</li>
            </ul>
          </div>
        )}
        {activeShortcut === "events" && !selected && (
          <div className="shortcut-pane">
            <h3>GLOF events</h3>
            <p>Documented outbursts with source evidence. The South Lhonak 2023 event is anchored to ISRO/NRSC radar evidence.</p>
            <div className="event-highlight">
              <strong>4 Oct 2023 · South Lhonak</strong>
              <span>≈105 ha drained · Sentinel-1 28 Sep → 4 Oct · <a href="https://www.isro.gov.in/ISRO_EN/Satellite_studies_South_Lhonak_Lake.html" target="_blank" rel="noreferrer">ISRO/NRSC ↗</a></span>
            </div>
          </div>
        )}
        {activeShortcut === "imagery" && !selected && (
          <div className="shortcut-pane">
            <h3>Imagery</h3>
            <p>Select a glacier to activate its 2016–2025 optical timeline and SAR/colour comparison. Imagery is hidden until a glacier is selected.</p>
            <p className="muted">Tip: try the featured card or search “RGI2000-v7.0-G-15-07986”.</p>
          </div>
        )}
        {activeShortcut === "layers" && (
          <div className="shortcut-pane layers-pane">
            <h3>Layers</h3>
            <label className="layer-row"><input type="checkbox" checked={layers.glacierBoundaries} onChange={(e) => setLayers((l) => ({ ...l, glacierBoundaries: e.target.checked }))} /> <span>Glacier boundaries</span> <small>ice-blue outlines</small></label>
            <label className="layer-row"><input type="checkbox" checked={layers.glacialLakes} onChange={(e) => setLayers((l) => ({ ...l, glacialLakes: e.target.checked }))} /> <span>Glacial lakes</span> <small>lake-terminating flags</small></label>
            <label className="layer-row"><input type="checkbox" checked={layers.glofEvents} onChange={(e) => setLayers((l) => ({ ...l, glofEvents: e.target.checked }))} /> <span>GLOF events</span> <small>Oct 2023 marker</small></label>
            <label className="layer-row"><input type="checkbox" checked={layers.terrain} onChange={(e) => setLayers((l) => ({ ...l, terrain: e.target.checked }))} /> <span>Terrain</span> <small>hillshade & elevation</small></label>
            <label className="layer-row">
              <input type="checkbox" checked={layers.satellite} onChange={(e) => setLayers((l) => ({ ...l, satellite: e.target.checked }))} /> <span>Satellite imagery</span> <small>Esri World Imagery</small>
            </label>
            {layers.satellite && (
              <label className="layer-opacity">
                <span>Satellite opacity</span>
                <input type="range" min={0.15} max={1} step={0.05} value={satOpacity} onChange={(e) => setSatOpacity(Number(e.target.value))} />
              </label>
            )}
            <p className="muted small">Boundaries only render at useful zoom. Viewport culling keeps the globe responsive.</p>
          </div>
        )}

        {/* Glacier profile when selected */}
        {selected && (
          <div className="profile-card">
            <p className="mobile-copy mobile-step-label">Step 2 of 3 · Review this place</p>
            <div className="profile-kicker">
              <span className={`pill ${selected.type}`}>{selected.type === "glacier" ? "Glacier" : "Lake"}</span>
              <span className={`pill status ${selected.status}`}>{labelForStatus(selected.status)}</span>
              {selected.boundaryStatus === "available" ? <span className="pill ok">Boundary ready</span> : <span className="pill pending">Pending</span>}
            </div>
            <h3 className="profile-title">{selected.name}</h3>
            {selectedSite && <p className="profile-readiness">{selectedSite.readiness === "evidence-ready" ? "Evidence-ready study site" : "Future study site · evidence intake pending"}</p>}
            <p className="profile-subtitle">
              {selected.type === "glacier" ? selected.name : selected.associatedName} · {selected.status === "historical_baseline" ? "historical RGI baseline" : selected.status === "approved" ? "retrospective case study" : "candidate intake"}
            </p>

            <div className="profile-grid">
              <div><span>Region</span><strong>{selected.region}</strong></div>
              <div><span>Country</span><strong>{selected.country}</strong></div>
              <div><span>Centre</span><strong>{selected.centre.latitude.toFixed(3)}° N, {selected.centre.longitude.toFixed(3)}° E</strong></div>
              <div><span>Elevation</span><strong>{selected.elevationMetres ? `${selected.elevationMetres} m` : "—"}</strong></div>
            </div>

            {selected.rgiId && (
              <div className="profile-badge-row">
                <span className="badge">RGI ID <b>{selected.rgiId}</b></span>
                <span className="badge muted">26 Dec 2000 · LE07_L1TP_139041</span>
              </div>
            )}

            <div className="profile-evidence">
              <div className="evidence-row">
                <span>Nearby lake</span>
                <strong>{selected.associatedName ?? "South Lhonak Lake"}</strong>
              </div>
              <div className="evidence-row">
                <span>Latest event</span>
                <strong>{selected.glofDate ?? "4 Oct 2023 GLOF"} · <em>{selected.glofEvidence ?? "≈105 ha drained, ISRO/NRSC"}</em></strong>
              </div>
              <div className="evidence-row">
                <span>Risk screening</span>
                <strong><em>Awaiting measured lake, moraine & exposure inputs</em></strong>
              </div>
              {selected.source && (
                <div className="evidence-row">
                  <span>Source</span>
                  <strong>
                    {selected.sourceUrl ? <a href={selected.sourceUrl} target="_blank" rel="noreferrer">{selected.source} ↗</a> : selected.source}
                  </strong>
                </div>
              )}
            </div>

            <div className="profile-actions">
              <button type="button" className="primary-action" disabled={selectedSite?.readiness !== "evidence-ready"} onClick={() => setDetailOpen(true)}>{selectedSite?.readiness === "evidence-ready" ? "Open imagery →" : "Imagery not ready yet"}</button>
              <button type="button" className="ghost-action" onClick={() => { globeApiRef.current?.flyTo(selected.centre, 9000); setMobileView("map"); }}>Show on map</button>
            </div>

            <details className="profile-drawer">
              <summary>Sources & limitations</summary>
              <p>
                RGI outline is a <strong>historical baseline (26 Dec 2000)</strong>, not a current extent. Lake change evidence is anchored to ISRO/NRSC SAR
                comparison (28 Sep → 4 Oct 2023, ≈105 ha drained). Optical timeline (2016–2025) is candidate imagery awaiting per-scene review for clouds, shadow, and snow.
              </p>
              <ul>
                <li>
                  <a href="https://www.isro.gov.in/ISRO_EN/Satellite_studies_South_Lhonak_Lake.html" target="_blank" rel="noreferrer">ISRO/NRSC South Lhonak event study ↗</a>
                </li>
                <li>
                  <a href="https://github.com/GLIMS-RGI/lake_terminating" target="_blank" rel="noreferrer">GLIMS-RGI lake-terminating inventory ↗</a>
                </li>
                <li>
                  <a href="https://lib.icimod.org/records/8vr1k-7zx76" target="_blank" rel="noreferrer">ICIMOD South Lhonak hazard paper ↗</a>
                </li>
              </ul>
            </details>

            <div className="profile-compare">
              <button type="button" onClick={() => setDetailOpen(true)}>Compare dates</button>
              <span>·</span>
              <button type="button" onClick={() => setDetailOpen(true)}>View timeline</button>
            </div>
          </div>
        )}
      </aside>

      {/* Bottom minimal timeline / scene strip – hidden until glacier selected */}
      <div className={`bottom-strip glass ${selected ? "visible" : ""}`} aria-label="Scene timeline">
        <div className="strip-head">
          <strong>{selected ? `${selected.name} · 2016–2025` : "Select a glacier to enable timeline"}</strong>
          <span>{selected ? "Tap a year to inspect · RGI baseline toggle inside" : ""}</span>
          {selected && (
            <button type="button" className="strip-cta" onClick={() => setDetailOpen(true)}>Explore imagery</button>
          )}
        </div>
        {selected && (
          <div className="strip-thumbs" role="tablist" aria-label="Timeline scene strip">
            {["2016","2017","2018","2019","2020","2021","2022","Sep 2023","Oct 2023","2024","2025"].map((y) => (
              <button key={y} type="button" className="strip-thumb" onClick={() => setDetailOpen(true)} aria-label={`Open ${y} in detail view`}>
                <span className="thumb-year">{y}</span>
                <span className="thumb-placeholder" />
              </button>
            ))}
          </div>
        )}
      </div>

      <nav className="mobile-nav" aria-label="Main navigation">
        <button type="button" aria-current={mobileView === "map" ? "page" : undefined} className={mobileView === "map" ? "active" : ""} onClick={() => openMobileView("map")}><span aria-hidden="true">◎</span>Map</button>
        <button type="button" aria-current={mobileView === "explore" ? "page" : undefined} className={mobileView === "explore" ? "active" : ""} onClick={() => openMobileView("explore")}><span aria-hidden="true">⌕</span>Find</button>
        <button type="button" aria-current={mobileView === "site" ? "page" : undefined} className={mobileView === "site" ? "active" : ""} onClick={() => openMobileView("site")} disabled={!selected}><span aria-hidden="true">▣</span>Details</button>
        <button type="button" aria-current={mobileView === "layers" ? "page" : undefined} className={mobileView === "layers" ? "active" : ""} onClick={() => openMobileView("layers")}><span aria-hidden="true">◫</span>Layers</button>
      </nav>

      {/* Detail mode – bottom sheet / focused mode */}
      <div className={`detail-sheet ${detailOpen ? "open" : ""}`} role="dialog" aria-modal={detailOpen ? "true" : undefined} aria-label="Imagery detail mode">
        <div className="detail-sheet-head glass">
          <div>
            <p className="eyebrow"><span className="desktop-copy">{selected?.name ?? "Selected site"} · detail mode</span><span className="mobile-copy">Step 3 of 3 · Explore over time</span></p>
            <h2>Imagery & timeline explorer</h2>
            <small>RGI v7 baseline overlay · 2016–2025 candidates · SAR vs optical · source-cited evidence</small>
          </div>
          <div className="detail-actions">
            <button type="button" className="primary" onClick={() => setDetailOpen(false)}>Close ×</button>
          </div>
        </div>
        <div className="detail-sheet-body">
          {selectedDataset && selectedSite ? (
            <>
              <EventVisualizer siteName={selected!.name} imagery={selectedDataset.eventImagery} />
              <TemporalExplorer siteName={selected!.name} observations={selectedDataset.observations} boundary={selectedDataset.boundaries[0]} expectedRgiId={selectedSite.referenceGlacierId} />
              <EvidencePanel />
              <GlacierAnalysisPanel />
              <RetreatAnalysis siteId={selectedSite.id} glacierName={selectedSite.associatedGlacier} glacierId={selectedSite.referenceGlacierId} />
            </>
          ) : selected && selectedSite ? (
            <RetreatAnalysis siteId={selectedSite.id} glacierName={selectedSite.associatedGlacier} glacierId={selectedSite.referenceGlacierId} />
          ) : (
            <section className="visualizer unavailable-explorer">
              <p className="eyebrow">{selected?.name ?? "Selected site"} · explorer</p>
              <h2>Imagery &amp; timeline explorer</h2>
              <p>There is no authorised, site-specific imagery bundle registered for this location yet. This view will remain empty rather than showing South Lhonak data.</p>
              <p className="muted-note">Register reviewed scenes and boundary geometry for {selected?.name ?? "this site"} to enable its timeline.</p>
            </section>
          )}
        </div>
      </div>

      {/* Subtle bottom gradient */}
      <div className="bottom-fade" aria-hidden="true" />
    </div>
  );
}

function labelForStatus(s: GlacierCatalogRecord["status"]): string {
  switch (s) {
    case "approved": return "Approved";
    case "historical_baseline": return "Historical baseline";
    case "candidate": return "Candidate";
    case "unavailable": return "Unavailable";
    default: return s;
  }
}
