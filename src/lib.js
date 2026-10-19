import menu from './data/menu.json';
import { useEffect } from 'react';

export const formatPrice = (item) =>
  item.sizes ? `₹${item.sizes.quarter} / ${item.sizes.half} / ${item.sizes.full}` : `₹${item.price}`;

export const findItem = (category, name) =>
  menu.find((c) => c.category === category)?.items.find((i) => i.name === name);

// Adds .is-visible to [data-reveal] elements as they scroll in. CSS skips the effect under reduced motion.
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('[data-reveal]');
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); }
      }),
      { rootMargin: '0px 0px -10% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
