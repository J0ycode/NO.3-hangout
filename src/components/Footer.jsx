import { site } from '../data/site';
import Logo from './Logo';

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#top" className="brand"><Logo /></a>
      <nav aria-label="Footer">
        <a href="#menu">Full menu &amp; prices</a><a href="#story">About No.3 Hangout</a><a href="#faq">FAQ</a><a href="#visit">Find us in Maroor</a>
        {site.socials.map((s) => <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">{s.label}</a>)}
      </nav>
      <p>{site.addressLines.join(', ')}{site.phone && <> · <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a></>}</p>
      <a className="share" href={'https://wa.me/?text=' + encodeURIComponent('No.3 Hangout — shawarma, alfaham and shakes in Maroor, Pathanamthitta: ' + site.directionsUrl)} target="_blank" rel="noopener noreferrer">Share No.3 Hangout on WhatsApp</a>
      <p className="footer-small">© {new Date().getFullYear()} {site.name}</p>
    </footer>
  );
}
