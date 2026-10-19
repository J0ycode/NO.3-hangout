import menu from '../data/menu.json';

// Decorative scrolling strip of menu sections; hidden from screen readers.
export default function Ticker() {
  const row = menu.map((c) => c.category);
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {[...row, ...row].map((c, i) => <span key={i}>{c}</span>)}
      </div>
    </div>
  );
}
