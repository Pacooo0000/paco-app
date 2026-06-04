import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Projects from './components/Projects';

export default function Home() {
  return (
    <main className="bg-zinc-950 min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <Projects />
      <ContactSection />
      <Footer />
    </main>
  );
}