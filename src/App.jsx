import Header from './components/Header';
import Hero from './components/Hero';
import Combos from './components/Combos';
import Ticker from './components/Ticker';
import Menu from './components/Menu';
import Story from './components/Story';
import Gallery from './components/Gallery';
import Visit from './components/Visit';
import Footer from './components/Footer';
import { useReveal } from './lib';

export default function App() {
  useReveal();
  return (
    <>
      <a className="skip" href="#menu">Skip to menu</a>
      <Header />
      <main>
        <Hero />
        <Ticker />
        <Combos />
        <Menu />
        <Story />
        <Gallery />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
