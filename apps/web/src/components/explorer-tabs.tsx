"use client";

import { useEffect, useState } from "react";
import { EventVisualizer } from "@/components/event-visualizer";
import { TemporalExplorer } from "@/components/temporal-explorer";
import { EvidencePanel } from "@/components/evidence-panel";
import { GlacierAnalysisPanel } from "@/components/glacier-analysis-panel";
import { RetreatAnalysis } from "@/components/retreat-analysis";
import type { SiteConfig } from "@/domain/site";
import type { SiteDataset } from "@/domain/site-dataset";

type TabId = "timeline" | "event" | "retreat" | "evidence";

type Props = {
  siteName: string;
  dataset: SiteDataset;
  site: SiteConfig;
  isOpen?: boolean;
};

const TAB_META: Record<TabId, { label: string; shortLabel: string; kicker: string; description: string; countLabel?: string }> = {
  timeline: {
    label: "Timeline",
    shortLabel: "Timeline",
    kicker: "2016 → 2025",
    description: "Year-by-year optical view. Pick a year, see the image, see the glacier + lake overlay for that date.",
    countLabel: "11 years",
  },
  event: {
    label: "2023 Event",
    shortLabel: "Event",
    kicker: "4 Oct 2023",
    description: "The South Lhonak outburst. Swipe the radar before/after. Colour optical is context only.",
    countLabel: "2 sensors",
  },
  retreat: {
    label: "Change & Forecast",
    shortLabel: "Change",
    kicker: "Measured + modelled",
    description: "How much ice was lost, where, and what scenarios imply — with uncertainty shown.",
    countLabel: "10 obs · 3 scenarios",
  },
  evidence: {
    label: "Sources & Method",
    shortLabel: "Evidence",
    kicker: "Why to trust this",
    description: "Every boundary’s source, its limits, and the rules that keep this honest.",
    countLabel: "Source-cited",
  },
};

export function ExplorerTabs({ siteName, dataset, site, isOpen }: Props) {
  const [active, setActive] = useState<TabId>("timeline");

  useEffect(() => {
    setActive("timeline");
  }, [site.id]);

  useEffect(() => {
    if (isOpen) setActive("timeline");
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const order: TabId[] = ["timeline", "event", "retreat", "evidence"];
    const idx = order.indexOf(active);
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setActive(order[(idx + 1) % order.length]);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setActive(order[(idx - 1 + order.length) % order.length]);
    }
  };

  const isSouthLhonak = site.id === "south-lhonak";

  return (
    <div className="explorer-tabs" role="region" aria-label={`${siteName} explorer`}>
      {/* Primer — what is this place? Helps a newbie in 10 seconds */}
      <div className="explorer-primer">
        <div className="primer-head">
          <p className="eyebrow">{site.region} · {site.country}</p>
          <h3>{siteName}</h3>
          <p className="primer-subtitle">
            {site.id === "south-lhonak"
              ? "Evidence-ready · retrospective case study — the lake that drained in Oct 2023. Start on Timeline, then swipe the Event, then see Change."
              : `${site.associatedGlacier} — ${site.readiness === "evidence-ready" ? "evidence-ready · 10 approved Oct–Nov seasons (2016–2025)" : "intake pending"} · RGI ${site.referenceGlacierId ?? "—"}`}
          </p>
        </div>
        <ol className="primer-steps" aria-label="How to use this explorer">
          <li><span className="step-index">1</span><strong>Timeline</strong><small>Pick a year</small></li>
          <li className="step-arrow" aria-hidden="true">→</li>
          <li><span className="step-index">2</span><strong>Event</strong><small>See the outburst</small></li>
          <li className="step-arrow" aria-hidden="true">→</li>
          <li><span className="step-index">3</span><strong>Change</strong><small>How much + forecast</small></li>
          <li className="step-arrow" aria-hidden="true">→</li>
          <li><span className="step-index">4</span><strong>Evidence</strong><small>Sources & limits</small></li>
        </ol>
      </div>

      {/* Tab bar */}
      <div className="explorer-tab-bar-wrap">
        <div
          className="explorer-tab-bar"
          role="tablist"
          aria-label="Explorer sections"
          onKeyDown={handleKeyDown}
        >
          {(Object.keys(TAB_META) as TabId[]).map((id) => {
            const meta = TAB_META[id];
            const isActive = active === id;
            // Evidence badge for south-lhonak, retreat badge for all evidence-ready
            const showDot = (id === "event" && !isSouthLhonak) ? false : true;
            return (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-controls={`panel-${id}`}
                id={`tab-${id}`}
                tabIndex={isActive ? 0 : -1}
                className={`explorer-tab ${isActive ? "active" : ""}`}
                onClick={() => setActive(id)}
              >
                <span className="tab-kicker">{meta.kicker}</span>
                <span className="tab-label">{meta.label}</span>
                {meta.countLabel && <span className="tab-count">{meta.countLabel}</span>}
                {isActive && <span className="tab-underline" aria-hidden="true" />}
              </button>
            );
          })}
        </div>
        <p className="tab-hint" aria-live="polite">
          <strong>{TAB_META[active].label}:</strong> {TAB_META[active].description}
        </p>
      </div>

      {/* Panels */}
      <div className="explorer-tab-panels">
        <section
          id="panel-timeline"
          role="tabpanel"
          aria-labelledby="tab-timeline"
          hidden={active !== "timeline"}
          className="explorer-panel"
        >
          <TemporalExplorer
            siteName={siteName}
            observations={dataset.observations}
            boundary={dataset.boundaries[0]}
            expectedRgiId={site.referenceGlacierId}
          />
          <div className="panel-footer-note">
            <span className="legend-dot glacier" /> Glacier cyan (RGI v7 26 Dec 2000 — historical, not current) &nbsp;·&nbsp;
            <span className="legend-dot lake" /> Lake blue &nbsp;·&nbsp;
            Use the checkbox below the image to toggle overlays. For numbers, open <button type="button" className="inline-tab-jump" onClick={() => setActive("retreat")}>Change & Forecast →</button>
          </div>
        </section>

        <section
          id="panel-event"
          role="tabpanel"
          aria-labelledby="tab-event"
          hidden={active !== "event"}
          className="explorer-panel"
        >
          <EventVisualizer siteName={siteName} imagery={dataset.eventImagery} />
          {!isSouthLhonak && (
            <p className="panel-context-note">
              This site has no documented GLOF event imagery. The 2023 pair is South Lhonak-only; quantitative change for {siteName} is in <button type="button" className="inline-tab-jump" onClick={() => setActive("retreat")}>Change</button>.
            </p>
          )}
        </section>

        <section
          id="panel-retreat"
          role="tabpanel"
          aria-labelledby="tab-retreat"
          hidden={active !== "retreat"}
          className="explorer-panel"
        >
          <RetreatAnalysis siteId={site.id} glacierName={site.associatedGlacier} glacierId={site.referenceGlacierId} />
        </section>

        <section
          id="panel-evidence"
          role="tabpanel"
          aria-labelledby="tab-evidence"
          hidden={active !== "evidence"}
          className="explorer-panel evidence-panel-tab"
        >
          <div className="evidence-intro">
            <p className="eyebrow">How this is built — and where it stops</p>
            <h3>Evidence, not inference</h3>
            <p>
              No outline is drawn from a display image. Every polygon you saw is a versioned vector with a date, source, CRS, and reviewer note.
              Open any drawer below for its source URL and limits. The retreat forecast is a <strong>research estimate, not a warning</strong>.
            </p>
          </div>
          {isSouthLhonak ? (
            <>
              <EvidencePanel />
              <GlacierAnalysisPanel />
            </>
          ) : (
            <div className="visualizer unavailable-explorer">
              <p className="eyebrow">{siteName} · evidence</p>
              <h3>Site-specific GLOF context is not registered for this system</h3>
              <p>
                The ISRO/NRSC 2023 comparison belongs to South Lhonak only. Approved seasonal boundaries and retreat indicators for {siteName}
                are in <button type="button" className="inline-tab-jump" onClick={() => setActive("retreat")}>Change</button> — without reusing another lake’s imagery.
              </p>
            </div>
          )}
          <div className="evidence-crosslink">
            <p>Want the numbers that back the overlays you saw?</p>
            <button type="button" className="ghost-action" onClick={() => setActive("retreat")}>Go to Change & Forecast</button>
            <button type="button" className="ghost-action" onClick={() => setActive("timeline")}>Back to Timeline</button>
          </div>
        </section>
      </div>
    </div>
  );
}
