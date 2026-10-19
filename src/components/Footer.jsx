import { site } from '../data/site';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#top" className="brand"><Logo /></a>
      <nav aria-label="Footer">
        <a href="#menu">Menu</a><a href="#story">Our Story</a><a href="#visit">Visit</a>
        {site.socials.map((s) => <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>)}
      </nav>
      <p>{site.addressLines.join(', ')}{site.phone && <> · <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></>}</p>
      <p className="footer-small">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}
