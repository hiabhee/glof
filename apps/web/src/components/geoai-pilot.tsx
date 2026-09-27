const pilot = {
  iou: 0.504,
  f1: 0.671,
  precision: 0.737,
  recall: 0.615,
  model: "Random Forest segmentation · 13 optical, spectral and terrain features",
};

export function GeoAiPilot({ siteId }: { siteId: string }) {
  if (siteId !== "south-lhonak") return null;
  return (
    <section className="provisional-change" aria-labelledby="geoai-pilot-title">
      <header className="provisional-change-header">
        <div>
          <p className="eyebrow">South Lhonak · GeoAI pilot</p>
          <h2 id="geoai-pilot-title">Experimental glacier segmentation</h2>
          <p>{pilot.model}</p>
        </div>
        <span className="provisional-badge">EXPERIMENTAL</span>
      </header>
      <div className="provisional-warning" role="note">
        <strong>Important limit</strong>
        <span>Training boundaries were approved by this project’s owner and derived from the historical RGI footprint. These scores are useful pilot evidence, not an independent scientific accuracy claim.</span>
      </div>
      <div className="provisional-date-grid" aria-label="2022 temporal holdout metrics">
        <article><p>2022 held-out scene</p><dl><div><dt>IoU</dt><dd>{pilot.iou.toFixed(3)}</dd></div><div><dt>F1 score</dt><dd>{pilot.f1.toFixed(3)}</dd></div></dl></article>
        <article><p>Prediction quality</p><dl><div><dt>Precision</dt><dd>{pilot.precision.toFixed(3)}</dd></div><div><dt>Recall</dt><dd>{pilot.recall.toFixed(3)}</dd></div></dl></article>
      </div>
      <div className="provisional-next">
        <div><p className="eyebrow">Training</p><h3>2017 + 2019</h3><p>Two quality-accepted, co-registered Sentinel-2 scenes trained the pilot.</p></div>
        <div><p className="eyebrow">Temporal test</p><h3>2022</h3><p>The model was tested on a later scene it did not see during training, avoiding pixel-level leakage.</p></div>
      </div>
      <footer className="provisional-downloads">
        <a href="/geoai/south-lhonak/2022-11-30/glacier_prediction.geojson" target="_blank" rel="noreferrer">Download 2022 predicted boundary ↗</a>
        <a href="/geoai/south-lhonak/2022-11-30/prediction_report.json" target="_blank" rel="noreferrer">Open prediction report ↗</a>
      </footer>
    </section>
  );
}
