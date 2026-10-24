import { useEffect, useState } from 'react';
import { mains, drinks, featured } from '../data/combos';
import { site } from '../data/site';
import useTilt from '../useTilt';

const byId = (list, id) => list.find((x) => x.id === id);
const ROTATE_MS = 5000;

function Picker({ title, list, value, onPick }) {
  return (
    <fieldset className="picker">
      <legend>{title}</legend>
      <div className="picker-row">
        {list.map((x) => (
          <button key={x.id} type="button" className="pick" aria-pressed={x.id === value} onClick={() => onPick(x.id)}>
            <img src={x.image} alt="" width="900" height="700" loading="lazy" />
            <span className="pick-name">{x.label}</span>
            <span className="pick-price">₹{x.price}{x.sized ? ' · quarter' : ''}</span>
          </button>
        ))}
      </div>
    </fieldset>
  );
}

export default function Combos() {
  const [index, setIndex] = useState(0);
  const [main, setMain] = useState(featured[0].main);
  const [drink, setDrink] = useState(featured[0].drink);
  const [auto, setAuto] = useState(true);
  const [paused, setPaused] = useState(false);
  const stage = useTilt(5);

  const show = (i) => {
    const n = (i + featured.length) % featured.length;
    setIndex(n);
    setMain(featured[n].main);
    setDrink(featured[n].drink);
  };

  useEffect(() => {
    if (!auto || paused || matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const t = setTimeout(() => show(index + 1), ROTATE_MS);
    return () => clearTimeout(t);
  }, [auto, paused, index]);

  const m = byId(mains, main);
  const d = byId(drinks, drink);
  const match = featured.find((f) => f.main === main && f.drink === drink);
  const total = m.price + d.price;
  const choose = (setter) => (id) => { setAuto(false); setter(id); };

  return (
    <section className="combos" aria-labelledby="combo-title">
      <div className="section-head" data-reveal>
        <p className="kicker">Start here</p>
        <h2 id="combo-title">Build your <span className="accent">combo</span></h2>
        <p className="sub">Pick a main and a drink — or let us suggest one.</p>
      </div>

      <div className="combo-layout">
        <div
          className="combo-stage"
          ref={stage}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="combo-visual" key={main + drink}>
            <img className="combo-main" src={m.image} alt={m.label} width="900" height="700" />
            <img className="combo-drink" src={d.image} alt={d.label} width="900" height="700" />
          </div>
          <div className="combo-card" aria-live={auto ? 'off' : 'polite'}>
            <p className="combo-tag">{match ? match.title : 'Your combo'}</p>
            <ul className="combo-lines">
              <li><span>{m.label}{m.sized ? ' (quarter)' : ''}</span><span>₹{m.price}</span></li>
              <li><span>{d.label}</span><span>₹{d.price}</span></li>
            </ul>
            <p className="combo-total"><span>Together</span><strong>₹{total}</strong></p>
            <div className="combo-actions">
              {site.phone && <a className="btn" href={`tel:${site.phone.replace(/\s/g, '')}`}>Call to order</a>}
              <a className="btn btn-ghost-dark" href="#menu">Full menu</a>
            </div>
          </div>
          <div className="combo-nav">
            <button type="button" onClick={() => { setAuto(true); show(index - 1); }} aria-label="Previous suggestion">←</button>
            <div className="combo-dots">
              {featured.map((f, i) => (
                <button key={f.title} type="button" aria-label={f.title} aria-current={auto && i === index ? 'true' : undefined} onClick={() => { setAuto(true); show(i); }} />
              ))}
            </div>
            <button type="button" onClick={() => { setAuto(true); show(index + 1); }} aria-label="Next suggestion">→</button>
          </div>
        </div>

        <div className="combo-pickers">
          <Picker title="1. Choose a main" list={mains} value={main} onPick={choose(setMain)} />
          <Picker title="2. Choose a drink" list={drinks} value={drink} onPick={choose(setDrink)} />
        </div>
      </div>
    </section>
  );
}
