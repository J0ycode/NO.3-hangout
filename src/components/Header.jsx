import { useEffect, useState } from 'react';
import { site } from '../data/site';
import Logo from './Logo';

const links = [['#menu', 'Menu'], ['#story', 'Our Story'], ...(site.gallery.length ? [['#gallery', 'Gallery']] : []), ['#visit', 'Visit']];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const close = () => setOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={scrolled ? 'header is-scrolled' : 'header'}>
      <a href="#top" className="brand" onClick={close} aria-label="No.3 Hangout, back to top">
        <Logo />
        <span className="brand-name"><span className="wordmark-no">No.3</span> Hangout</span>
      </a>
      <button className="menu-toggle" aria-expanded={open} aria-controls="site-nav" onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Explore'}
      </button>
      <nav id="site-nav" className={open ? 'nav is-open' : 'nav'} aria-label="Main">
        {links.map(([href, label]) => <a key={href} href={href} onClick={close}>{label}</a>)}
        <a className="btn btn-small" href={site.directionsUrl} target="_blank" rel="noopener noreferrer" onClick={close}>Get Directions</a>
      </nav>
    </header>
  );
}
