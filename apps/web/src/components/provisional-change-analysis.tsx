import { southLhonakProvisionalChange as analysis } from "@/data/change-analysis/south-lhonak";

const formatChange = (value: number) => `${value >= 0 ? "+" : ""}${value.toFixed(3)} km²`;

export function ProvisionalChangeAnalysis({ siteId }: { siteId: string }) {
  if (siteId !== "south-lhonak") {
    return (
      <section className="provisional-change unavailable-change">
        <p className="eyebrow">Change analysis</p>
        <h2>No provisional change package for this site</h2>
        <p>Only South Lhonak currently has three co-registered, owner-reviewed pilot dates. Other sites remain excluded until their identity and dated observations are verified.</p>
      </section>
    );
  }

  return (
    <section className="provisional-change" aria-labelledby="provisional-change-title">
      <header className="provisional-change-header">
        <div>
          <p className="eyebrow">South Lhonak · 2017–2022</p>
          <h2 id="provisional-change-title">Provisional glacier–lake change</h2>
          <p>Area comparison from three owner-approved glacier drafts and date-specific Sentinel-2 lake candidates.</p>
        </div>
        <span className="provisional-badge">{analysis.status}</span>
      </header>

      <div className="provisional-warning" role="note">
        <strong>What this means</strong>
        <span>{analysis.statusDetail}</span>
      </div>

      <div className="provisional-date-grid" aria-label="Date-by-date provisional areas">
        {analysis.dates.map((row) => (
          <article key={row.date}>
            <p>{row.date}</p>
            <dl>
              <div><dt>Draft glacier</dt><dd>{row.glacierAreaKm2.toFixed(3)} km²</dd></div>
              <div><dt>Candidate lake</dt><dd>{row.lakeAreaKm2.toFixed(3)} km²</dd></div>
            </dl>
          </article>
        ))}
      </div>

      <div className="provisional-intervals">
        <div className="section-heading">
          <div><p className="eyebrow">Interval comparison</p><h3>Where the draft glacier and candidate lake changed</h3></div>
          <small>Areas are measured in UTM 45N (EPSG:32645).</small>
        </div>
        <div className="provisional-table-wrap">
          <table>
            <thead><tr><th>Interval</th><th>Draft glacier</th><th>Candidate lake</th><th>GIS layer</th></tr></thead>
            <tbody>
              {analysis.intervals.map((row) => (
                <tr key={row.map}>
                  <td>{row.from} → {row.to}</td>
                  <td className="negative">{formatChange(row.glacierChangeKm2)}</td>
                  <td className="positive">{formatChange(row.lakeChangeKm2)}</td>
                  <td><a href={row.map} target="_blank" rel="noreferrer">Open GeoJSON ↗</a></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="provisional-next">
        <div>
          <p className="eyebrow">Not calculated</p>
          <h3>Terminus retreat</h3>
          <p>Area differences are not a terminus-distance measurement. It needs independently delineated terminus lines and review.</p>
        </div>
        <div>
          <p className="eyebrow">Next research gate</p>
          <h3>Independent dated labels</h3>
          <p>Those labels are required before GeoAI model training, testing, or a defensible retreat claim.</p>
        </div>
      </div>

      <footer className="provisional-downloads">
        <a href={analysis.summaryCsv} target="_blank" rel="noreferrer">Download measurement CSV ↗</a>
        <a href={analysis.report} target="_blank" rel="noreferrer">Read methods and limitations ↗</a>
      </footer>
    </section>
  );
}
