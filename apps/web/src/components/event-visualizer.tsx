"use client";

import { useState } from "react";
import type { EventImagery } from "@/domain/site-dataset";

const states = [
  { id: "pre", label: "28 Sep 2023", description: "Pre-event Sentinel-1 SAR" },
  { id: "post", label: "7 Oct 2023", description: "Post-event Sentinel-1 SAR" }
] as const;

export function EventVisualizer({ siteName = "South Lhonak", imagery }: { siteName?: string; imagery?: EventImagery }) {
  const [sensor, setSensor] = useState<"sar" | "optical">("sar");
  const [mode, setMode] = useState<"swipe" | "pre" | "post">("swipe");
  const [split, setSplit] = useState(52);

  if (!imagery) {
    return (
      <section className="visualizer unavailable-explorer" aria-labelledby="visualizer-title">
        <div className="visualizer-heading">
          <div>
            <p className="eyebrow">{siteName} · event explorer</p>
            <h2 id="visualizer-title">No event comparison imagery for this site</h2>
          </div>
          <p className="visualizer-note">No authorised pre/post event imagery bundle is registered for {siteName}. The South Lhonak 2023 SAR comparison is site-specific and is not shown for other glacier–lake systems.</p>
        </div>
        <p className="muted-note">Event comparison imagery will appear here once a published, site-specific pre/post pair passes review. See Retreat analysis below for approved boundaries and measurements.</p>
      </section>
    );
  }

  const isSar = sensor === "sar";
  const preImage = isSar && imagery.sar ? imagery.sar.prePath : imagery.pre.imagePath;
  const postImage = isSar && imagery.sar ? imagery.sar.postPath : imagery.post.imagePath;
  const preDate = isSar && imagery.sar ? imagery.sar.preDate : imagery.pre.date;
  const postDate = isSar && imagery.sar ? imagery.sar.postDate : imagery.post.date;

  return (
    <section className="visualizer" aria-labelledby="visualizer-title">
      <div className="visualizer-heading">
        <div>
          <p className="eyebrow">{siteName} · event explorer</p>
          <h2 id="visualizer-title">2023 GLOF comparison</h2>
        </div>
        <p className="visualizer-note">{imagery.note}</p>
      </div>

      <div className="view-controls" aria-label="Sensor choice">
        <button type="button" className={isSar ? "active" : ""} onClick={() => setSensor("sar")}>SAR radar</button>
        <button type="button" className={!isSar ? "active" : ""} onClick={() => setSensor("optical")}>Colour optical</button>
      </div>

      <div className="view-controls" aria-label="Image comparison mode">
        <button type="button" className={mode === "swipe" ? "active" : ""} onClick={() => setMode("swipe")}>Swipe</button>
        {states.map((state) => (
          <button type="button" className={mode === state.id ? "active" : ""} onClick={() => setMode(state.id)} key={state.id}>
            {state.id === "pre" ? preDate : postDate}
          </button>
        ))}
      </div>

      <div className="satellite-frame">
        {mode === "swipe" && <img className="satellite-image" src={postImage} alt={`${siteName} in the nearest available post-event Sentinel-1 SAR observation`} />}
        {mode === "pre" && <img className="satellite-image" src={preImage} alt={`${siteName} before the October 2023 outburst`} />}
        {mode === "post" && <img className="satellite-image" src={postImage} alt={`${siteName} after the October 2023 outburst`} />}
        {mode === "swipe" && (
          <>
            <img
              className="satellite-image comparison-image"
              src={preImage}
              alt={`${siteName} before the October 2023 outburst`}
              style={{ clipPath: `inset(0 ${100 - split}% 0 0)` }}
            />
            <div className="comparison-divider" style={{ left: `${split}%` }} aria-hidden="true"><span /></div>
          </>
        )}
        {mode === "swipe" && (
          <>
            <div className="image-label label-left">Pre-event {isSar ? "SAR" : "optical"}<br /><strong>{preDate}</strong></div>
            <div className="image-label label-right">Post-event {isSar ? "SAR" : "optical context"}<br /><strong>{postDate}</strong></div>
          </>
        )}
        {mode === "pre" && <div className="image-label label-left">Pre-event<br /><strong>{preDate}</strong></div>}
        {mode === "post" && <div className="image-label label-left">Post-event<br /><strong>{postDate}</strong></div>}
      </div>

      {mode === "swipe" && (
        <label className="swipe-control">
          <span>Drag to compare</span>
          <input type="range" min="0" max="100" value={split} onChange={(event) => setSplit(Number(event.target.value))} aria-label="Pre and post event comparison position" />
        </label>
      )}

      <div className="event-meta">
        <span><i className="dot pre" /> {isSar ? "Sentinel-1 VV SAR" : "Sentinel-2 optical"} · {preDate}</span>
        <span><i className="dot post" /> {isSar ? "Sentinel-1 VV SAR" : "Sentinel-2 optical"} · {postDate}</span>
        <span>{isSar ? "SAR remains usable through cloud cover" : "Colour imagery is context, not the immediate event measurement"}</span>
      </div>
      <p className="official-event-note"><strong>Authoritative event evidence:</strong> ISRO/NRSC compared 28 September and 4 October 2023 radar imagery and reported approximately 105 hectares drained. <a href="https://www.isro.gov.in/ISRO_EN/Satellite_studies_South_Lhonak_Lake.html" target="_blank" rel="noreferrer">Read the event study <span aria-hidden="true">↗</span></a></p>
    </section>
  );
}
