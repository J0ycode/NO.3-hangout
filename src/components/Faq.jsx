import menu from '../data/menu.json';
import { site } from '../data/site';

const items = menu.flatMap((c) => c.items);
const from = Math.min(...items.map((i) => i.price ?? i.sizes.quarter));
const count = (cat) => menu.find((c) => c.category === cat).items.length;
const tel = site.phone.replace(/\s/g, '');

const faqs = [
  {
    q: 'Where is No.3 Hangout?',
    a: <>No.3 Hangout is at Natyasree Buildings, Maroor, Mallassery, in Pathanamthitta, Kerala 689646. Use the <a href={site.directionsUrl} target="_blank" rel="noopener noreferrer">Google Maps directions to No.3 Hangout</a> or the map further down this page to find us.</>,
  },
  {
    q: 'What food do you serve?',
    a: <>Our grill menu covers shawarma ({count('Shawarma')} options, as rolls or plates in kuboos or romali), alfaham, shawai, burgers ({count('Burger')} kinds, from a classic veg burger to the Kindel Zinger Stacker) and fries, including loaded and Mexican cheesy loaded fries.</>,
  },
  {
    q: 'What drinks can I get?',
    a: <>From the bar we make shakes, mojitos, fresh juices, kulukki, lime, falooda, tender coconut drinks, avil milk and iced coffee — {menu.length - 5} drink sections in total, from fresh lime to royal and dry fruit falooda.</>,
  },
  {
    q: 'How do alfaham and shawai portions work?',
    a: <>Alfaham and shawai are served by the quarter, half or full chicken. Normal alfaham starts at ₹160 for a quarter, and every flavour — barbeque, kanthari, peri-peri, honey and honey chilli — lists all three prices on the menu.</>,
  },
  {
    q: 'How much does a meal cost?',
    a: <>Prices start at ₹{from}, and every price is listed in Indian rupees in <a href="#menu">our full menu with prices</a>. You can also try the combo builder above to add up a main and a drink before you order.</>,
  },
  {
    q: 'How long does the food take?',
    a: <>Everything is made to order, so please allow 15 to 20 minutes for food. Drinks are usually quicker.</>,
  },
  {
    q: 'How can I order?',
    a: <>Visit us in Maroor or call <a href={`tel:${tel}`}>{site.phone}</a> to place your order.</>,
  },
];

export default function Faq() {
  return (
    <section id="faq" className="faq" aria-labelledby="faq-title">
      <div className="section-head" data-reveal>
        <p className="kicker">Good to know</p>
        <h2 id="faq-title">Questions about No.3 Hangout</h2>
      </div>
      <div className="faq-list">
        {faqs.map((f) => (
          <details key={f.q} className="faq-item">
            <summary><h3>{f.q}</h3></summary>
            <p>{f.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
