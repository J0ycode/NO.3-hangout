import { site } from '../data/site';

// Renders only once real photos are added to site.gallery as { src, alt }.
export default function Gallery() {
  if (!site.gallery.length) return null;
  return (
    <section id="gallery" className="gallery" aria-label="Gallery">
      {site.gallery.map((g) => <img key={g.src} src={g.src} alt={g.alt} loading="lazy" data-reveal />)}
    </section>
  );
}
