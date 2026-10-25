import { useMemo, useState } from 'react';
import menu from '../data/menu.json';
import { site } from '../data/site';

const FOOD = ['Shawarma', 'Burger', 'Shawai', 'Alfaham', 'Fries'];
const tabId = (s) => 'tab-' + s.toLowerCase().replace(/\s+/g, '-');

function Category({ c, showTitle }) {
  return (
    <div className="cat">
      {showTitle && <h3>{c.category}</h3>}
      <ul>
        {c.items.map((item) => (
          <li key={item.name} className={item.sizes ? 'item has-sizes' : 'item'}>
            <span className="item-name">{item.name}</span>
            {item.sizes ? (
              <dl className="sizes">
                {Object.entries(item.sizes).map(([k, v]) => (
                  <div key={k}><dt>{k}</dt><dd>₹{v}</dd></div>
                ))}
              </dl>
            ) : (
              <span className="item-price">₹{item.price}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Menu() {
  const [active, setActive] = useState(menu[0].category);
  const [query, setQuery] = useState('');

  const q = query.trim().toLowerCase();
  const results = useMemo(() => {
    if (!q) return [];
    return menu
      .map((c) => (c.category.toLowerCase().includes(q) ? c : { ...c, items: c.items.filter((i) => i.name.toLowerCase().includes(q)) }))
      .filter((c) => c.items.length);
  }, [q]);
  const count = results.reduce((n, c) => n + c.items.length, 0);

  const pick = (cat) => { setActive(cat); setQuery(''); };
  const onKey = (e, i) => {
    const step = { ArrowRight: 1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    const next = menu[(i + step + menu.length) % menu.length].category;
    pick(next);
    document.getElementById(tabId(next))?.focus();
  };

  return (
    <section id="menu" className="menu" aria-labelledby="menu-title">
      <div className="section-head">
        <p className="kicker">Prices in ₹ · {site.prepTime}</p>
        <h2 id="menu-title">The menu</h2>
      </div>
      <div className="menu-tools">
        <label className="search">
          <span className="visually-hidden">Search the whole menu</span>
          <input type="search" placeholder="Search — try “mango”" value={query} onChange={(e) => setQuery(e.target.value)} />
        </label>
        <div className="menu-jump" role="tablist" aria-label="Menu sections">
          {menu.map((c, i) => (
            <button
              key={c.category}
              id={tabId(c.category)}
              role="tab"
              aria-controls={'panel-' + tabId(c.category)}
              type="button"
              aria-selected={!q && c.category === active}
              tabIndex={c.category === active ? 0 : -1}
              onClick={() => pick(c.category)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {c.category}
            </button>
          ))}
        </div>
      </div>

      {q ? (
        <div className="board board-light menu-panel" role="status">
          <p className="board-label">{count ? `${count} item${count === 1 ? '' : 's'} found` : 'Nothing matches that. Try another word.'}</p>
          {results.map((c) => <Category key={c.category} c={c} showTitle />)}
        </div>
      ) : (
        menu.map((c) => (
          <div key={c.category} className="board board-light menu-panel" role="tabpanel" id={'panel-' + tabId(c.category)} aria-labelledby={tabId(c.category)} hidden={c.category !== active}>
            <p className="board-label">{FOOD.includes(c.category) ? 'From the grill' : 'From the bar'} · {c.items.length} items</p>
            <h3 className="panel-title">{c.category}</h3>
            <Category c={c} />
          </div>
        ))
      )}
    </section>
  );
}
