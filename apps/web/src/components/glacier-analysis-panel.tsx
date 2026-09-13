const boundaryStages = [
  {
    stage: "Verified baseline",
    value: "RGI2000-v7.0-G-15-07986",
    detail: "Historical South Lhonak Glacier inventory outline observed on 26 Dec 2000. It is the only glacier geometry currently drawn in the explorer.",
    status: "Available"
  },
  {
    stage: "Later-date outlines",
    value: "Published vector intake",
    detail: "A later outline must be delivered as an authorised vector dataset or a citable, reproducible supplementary geometry before it is added.",
    status: "Pending"
  },
  {
    stage: "Retreat analysis",
    value: "Outline-to-outline comparison",
    detail: "Area change and terminus displacement will only be calculated after two compatible reviewed outlines are registered.",
    status: "Blocked by data"
  }
];

export function GlacierAnalysisPanel() {
  return (
    <details className="glacier-analysis" aria-labelledby="glacier-analysis-title">
      <summary id="glacier-analysis-title"><span>Glacier reference</span><strong>South Lhonak Glacier · RGI v7 baseline</strong><small>Boundary status</small></summary>
      <div className="glacier-analysis-content">
      <div className="glacier-focus">
        <div className="glacier-identity">
          <p className="eyebrow">Associated glacier</p>
          <h3>South Lhonak Glacier</h3>
          <dl>
            <div><dt>Inventory reference</dt><dd>RGI2000-v7.0-G-15-07986</dd></div>
            <div><dt>Baseline observation</dt><dd>26 Dec 2000</dd></div>
            <div><dt>Geometry role</dt><dd>Historical reference, not current outline</dd></div>
          </dl>
          <a href="https://github.com/GLIMS-RGI/lake_terminating" target="_blank" rel="noreferrer">View RGI lake-terminating inventory <span aria-hidden="true">↗</span></a>
        </div>

        <div className="glacier-question">
          <p className="eyebrow">Research question</p>
          <h3>How did glacier change influence the lake that later failed?</h3>
          <p>The workflow connects comparable glacier outlines, terminus position, terrain context, and published lake boundaries. It will then test the relationship; it will not assume causality from visual proximity.</p>
          <div className="glacier-chain" aria-label="Glacier analysis workflow">
            <span>Glacier outline</span><b>→</b><span>Terminus change</span><b>→</b><span>Lake response</span><b>→</b><span>GLOF context</span>
          </div>
        </div>
      </div>

      <div className="boundary-stages">
        {boundaryStages.map((item) => (
          <article key={item.stage}>
            <span className={item.status === "Available" ? "status available" : "status pending"}>{item.status}</span>
            <p>{item.stage}</p>
            <h3>{item.value}</h3>
            <small>{item.detail}</small>
          </article>
        ))}
      </div>

      <p className="glacier-method-note"><strong>Method rule:</strong> later glacier outlines must be co-registered, comparable in delineation method, and accompanied by observation dates and uncertainty before any area or terminus metric appears.</p>
      </div>
    </details>
  );
}
