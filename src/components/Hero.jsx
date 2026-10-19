import menu from '../data/menu.json';
import { site } from '../data/site';
import { findItem, formatPrice } from '../lib';
import useTilt from '../useTilt';

const items = menu.flatMap((c) => c.items);
const from = Math.min(...items.map((i) => i.price ?? i.sizes.quarter));
const stats = [
  [menu.length, 'menu sections'],
  [items.length, 'things to order'],
  [`₹${from}`, 'starting price'],
];

const tags = [
  ['Alfaham', 'Honey Chilli Alfaham', 'tag-a'],
  ['Shakes', 'Mango', 'tag-b'],
].map(([cat, name, cls]) => ({ cls, label: cat === 'Shakes' ? 'Mango Shake' : name, price: formatPrice(findItem(cat, name)) }));

export default function Hero() {
  const stage = useTilt(7);
  return (
    <section id="top" className="hero">
      <span className="hero-bg" aria-hidden="true"><span className="glow glow-a" /><span className="glow glow-b" /><span className="hero-mark">No.3</span></span>
      <div className="hero-copy">
        <p className="kicker hero-in" style={{ '--d': 0 }}>{site.tagline}</p>
        <h1>
          <span className="hero-in" style={{ '--d': 1 }}>Hot off the grill.</span>
          <span className="hero-accent hero-in" style={{ '--d': 2 }}>Cold in the glass.</span>
        </h1>
        <p className="hero-lede hero-in" style={{ '--d': 3 }}>
          Shawarma, alfaham and shawai, burgers and loaded fries, with fresh juices, shakes, mojitos and falooda — in Maroor, Mallassery.
        </p>
        <div className="hero-actions hero-in" style={{ '--d': 4 }}>
          <a className="btn" href="#menu">See the full menu</a>
          {site.phone
            ? <a className="btn btn-ghost" href={`tel:${site.phone.replace(/\s/g, '')}`}>Call {site.phone}</a>
            : <a className="btn btn-ghost" href={site.directionsUrl} target="_blank" rel="noopener noreferrer">Get directions</a>}
        </div>
        <dl className="hero-stats hero-in" style={{ '--d': 5 }}>
          {stats.map(([n, label]) => <div key={label}><dt>{label}</dt><dd>{n}</dd></div>)}
        </dl>
      </div>
      <div className="hero-stage hero-in" style={{ '--d': 2 }} ref={stage}>
        <figure className="hero-media">
          <img src={site.heroImage} alt="A shawarma wrap held up, fresh off the grill" width="1100" height="1650" fetchPriority="high" />
        </figure>
        {tags.map((t) => (
          <p key={t.cls} className={'float-tag ' + t.cls} aria-hidden="true">
            <span>{t.label}</span><strong>{t.price}</strong>
          </p>
        ))}
      </div>
    </section>
  );
}
