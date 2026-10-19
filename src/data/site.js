const query = encodeURIComponent('No.3 Hangout, Natyasree Buildings, Maroor, Mallassery, Pathanamthitta, Kerala 689646');

// Fill phone, hours, socials and gallery with real details; sections stay hidden while empty.
export const site = {
  name: 'No.3 Hangout',
  tagline: 'Simple moments. Better days.',
  addressLines: ['Natyasree Buildings, P O', 'Maroor, Mallassery', 'Pathanamthitta, Kerala 689646'],
  directionsUrl: 'https://maps.app.goo.gl/QainEmY6888Qqyvr8',
  mapEmbedUrl: `https://www.google.com/maps?q=${query}&output=embed`,
  printedMenu: '/printed-menu.jpg',
  heroImage: '/images/hero.jpg',
  prepTime: 'Food is made to order — allow 15 to 20 minutes.',
  phone: '+91 94975 18506',
  hours: [],
  socials: [],
  gallery: [],
  story: [
    'No.3 Hangout started with a simple idea: a place where good coffee and honest food bring people together. Every cup and every plate is made with care.',
    'Come in for a quiet morning, a long lunch, or an evening catch-up. The space is made to feel like home, with warm lights, comfortable seats, and friendly faces.',
  ],
  signatures: [
    { category: 'Shawarma', name: 'Full Meat Cheesy Plate', image: '/images/shawarma.jpg',  note: 'Shawarma with full meat and cheese, served on a plate.' },
    { category: 'Alfaham', name: 'Honey Chilli Alfaham', image: '/images/alfaham.jpg',  note: 'Alfaham glazed with honey and a little chilli.' },
    { category: 'Shakes', name: 'Mango', image: '/images/mango.jpg',  note: 'A chilled, creamy shake made with fresh mango.' },
    { category: 'Falooda', name: 'Royal', image: '/images/falooda.jpg',  note: 'A chilled falooda, served with a royal mix of toppings.' },
  ],
};
