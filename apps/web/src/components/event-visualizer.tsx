"use client";

import { useState } from "react";
import type { EventImagery } from "@/domain/site-dataset";

const states = [
  { id: "pre", label: "28 Sep 2023", description: "Pre-event Sentinel-1 SAR" },
  { id: "post", label: "7 Oct 2023", description: "Post-event Sentinel-1 SAR" }
] as const;

const defaultImagery: EventImagery = {
  pre: { imagePath: "/imagery/south-lhonak-pre-event-2023-09-16.png", date: "16 Sep 2023" },
  post: { imagePath: "/imagery/south-lhonak-post-event-2023-10-24.png", date: "24 Oct 2023" },
  sar: { prePath: "/imagery/south-lhonak-sar-pre-2023-09-28.png", postPath: "/imagery/south-lhonak-sar-post-2023-10-07.png", preDate: "28 Sep 2023", postDate: "7 Oct 2023" },
  note: "ISRO/NRSC event assessment: approximately 105 ha drained.",
};

export function EventVisualizer({ siteName = "South Lhonak", imagery = defaultImagery }: { siteName?: string; imagery?: EventImagery }) {
  const [sensor, setSensor] = useState<"sar" | "optical">("sar");
  const [mode, setMode] = useState<"swipe" | "pre" | "post">("swipe");
  const [split, setSplit] = useState(52);
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
        {mode === "swipe" && <img className="satellite-image" src={postImage} alt="South Lhonak in the nearest available post-event Sentinel-1 SAR observation" />}
        {mode === "pre" && <img className="satellite-image" src={preImage} alt="South Lhonak before the October 2023 outburst" />}
        {mode === "post" && <img className="satellite-image" src={postImage} alt="South Lhonak after the October 2023 outburst" />}
        {mode === "swipe" && (
          <>
            <img
              className="satellite-image comparison-image"
              src={preImage}
              alt="South Lhonak before the October 2023 outburst"
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
