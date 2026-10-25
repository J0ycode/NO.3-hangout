import { site } from '../data/site';

export default function Visit() {
  return (
    <section id="visit" className="visit" aria-labelledby="visit-title">
      <div className="visit-info" data-reveal>
        <p className="kicker">Find us</p>
        <h2 id="visit-title">Come hang out</h2>
        <address>
          <strong>{site.name}</strong>
          {site.addressLines.map((l) => <span key={l}>{l}</span>)}
        </address>
        <div className="hero-actions">
          <a className="btn" href={site.directionsUrl} target="_blank" rel="noopener noreferrer">Get directions to Maroor</a>
          {site.phone && <a className="btn btn-ghost-dark" href={`tel:${site.phone.replace(/\s/g, '')}`}>Call {site.phone}</a>}
        </div>
        {site.hours.length > 0 && (
          <table className="hours"><caption>Opening hours</caption><tbody>
            {site.hours.map(([d, t]) => <tr key={d}><th scope="row">{d}</th><td>{t}</td></tr>)}
          </tbody></table>
        )}
      </div>
      <iframe className="map" title="Map showing No.3 Hangout in Maroor" src={site.mapEmbedUrl} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </section>
  );
}
