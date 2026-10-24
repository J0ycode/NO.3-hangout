import { findItem } from '../lib';

// Each pick points at a real menu item; prices are always read from menu.json.
// Items sold in sizes use the Quarter price.
const pick = (id, category, name, label, image) => {
  const item = findItem(category, name);
  return { id, category, label, image, price: item.price ?? item.sizes.quarter, sized: Boolean(item.sizes) };
};

export const mains = [
  pick('shawarma', 'Shawarma', 'Full Meat Cheesy Plate', 'Full Meat Cheesy Shawarma Plate', '/images/shawarma.jpg'),
  pick('alfaham', 'Alfaham', 'Honey Chilli Alfaham', 'Honey Chilli Alfaham', '/images/alfaham.jpg'),
  pick('shawai', 'Shawai', 'Normal Shawai', 'Normal Shawai', '/images/shawai.jpg'),
  pick('burger', 'Burger', 'Zinger Burger', 'Zinger Burger', '/images/burger.jpg'),
  pick('fries', 'Fries', 'Loaded', 'Loaded Fries', '/images/fries.jpg'),
];

export const drinks = [
  pick('mango', 'Shakes', 'Mango', 'Mango Shake', '/images/mango.jpg'),
  pick('mojito', 'Mojito', 'Mint', 'Mint Mojito', '/images/mojito.jpg'),
  pick('falooda', 'Falooda', 'Royal', 'Royal Falooda', '/images/falooda.jpg'),
  pick('iced', 'Iced Coffee', 'Iced coffee', 'Iced Coffee', '/images/iced-coffee.jpg'),
  pick('orange', 'Fresh Juice', 'Orange', 'Fresh Orange Juice', '/images/orange-juice.jpg'),
];

// Suggested pairings the showcase rotates through.
export const featured = [
  { main: 'alfaham', drink: 'mojito', title: 'The grill & chill' },
  { main: 'shawarma', drink: 'mango', title: 'The classic' },
  { main: 'burger', drink: 'iced', title: 'The quick bite' },
  { main: 'shawai', drink: 'orange', title: 'The share plate' },
  { main: 'fries', drink: 'falooda', title: 'The sweet finish' },
];
