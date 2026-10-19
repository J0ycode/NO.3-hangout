import { site } from '../data/site';
import { findItem, formatPrice } from '../lib';
import useTilt from '../useTilt';

const title = (s) => (s.category === 'Shakes' ? 'Mango Shake' : s.category === 'Falooda' ? 'Royal Falooda' : s.name);

function Card({ s, i }) {
  const tilt = useTilt(5);
  const item = findItem(s.category, s.name);
  return (
    <li data-reveal style={{ '--i': i }}>
      <div className="sig-card" ref={tilt}>
        {s.image && <img className="sig-img" src={s.image} alt="" loading="lazy" width="900" height="700" />}
        <span className="sig-index">0{i + 1}</span>
        <p className="sig-cat">{s.category}</p>
        <h3>{title(s)}</h3>
        <p className="sig-note">{s.note}</p>
        {item && <p className="sig-price">{formatPrice(item)}</p>}
      </div>
    </li>
  );
}

export default function Signatures() {
  return (
    <section className="signatures" aria-labelledby="sig-title">
      <div className="section-head" data-reveal>
        <p className="kicker">Guest favourites</p>
        <h2 id="sig-title">Start here</h2>
      </div>
      <ol className="sig-list">
        {site.signatures.map((s, i) => <Card key={s.name} s={s} i={i} />)}
      </ol>
    </section>
  );
}
