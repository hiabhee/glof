const evidence = [
  {
    label: "Measured event finding",
    value: "≈105 ha drained",
    text: "ISRO/NRSC report this result from a radar comparison spanning 28 September to 4 October 2023.",
    source: "ISRO/NRSC event study",
    href: "https://www.isro.gov.in/ISRO_EN/Satellite_studies_South_Lhonak_Lake.html"
  },
  {
    label: "Viewer's closest radar pair",
    value: "28 Sep → 7 Oct",
    text: "These Sentinel-1 VV scenes make the event legible in the explorer, but do not replace the official 4 October measurement.",
    source: "Sentinel-1 GRD collection",
    href: "https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S1_GRD"
  },
  {
    label: "Glacier reference geometry",
    value: "RGI v7 historical baseline",
    text: "The glacier association uses the approved RGI lake-terminating inventory reference; it is a baseline, not a claimed 2023 outline.",
    source: "RGI lake-terminating inventory",
    href: "https://github.com/GLIMS-RGI/lake_terminating"
  }
];

export function EvidencePanel() {
  return (
    <details className="evidence" aria-labelledby="evidence-title">
      <summary id="evidence-title"><span>Data validity</span><strong>Official event: ≈105 ha drained</strong><small>Sources & limitations</small></summary>
      <div className="evidence-content">
        <div className="evidence-grid">
          {evidence.map((item) => (
            <article className="evidence-card" key={item.label}>
              <p className="evidence-label">{item.label}</p>
              <h3>{item.value}</h3>
              <p>{item.text}</p>
              <a href={item.href} target="_blank" rel="noreferrer">View {item.source} <span aria-hidden="true">↗</span></a>
            </article>
          ))}
        </div>
        <p className="evidence-disclosure"><strong>Important:</strong> lake outlines, retreat metrics, and risk scores remain unavailable until a published or inventory-supplied geometry and its provenance are registered. They are deliberately not inferred from the display images.</p>
      </div>
    </details>
  );
}
