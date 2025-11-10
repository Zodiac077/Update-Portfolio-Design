import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ImageSection } from './components/ImageSection';
import { Divider } from './components/Divider';
import { IntroSection } from './components/IntroSection';
import { PhasesSection } from './components/PhasesSection';
import { TechMarquee } from './components/TechMarquee';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      {/* Grid background overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0"
        style={{
          backgroundImage: `
            linear-gradient(transparent 95%, rgba(255,255,255,0.05) 100%),
            linear-gradient(90deg, transparent 95%, rgba(255,255,255,0.05) 100%)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      <Header />
      <HeroSection />
      <ImageSection />
      <section id="about" className="flex justify-between items-center uppercase text-xs sm:text-sm tracking-widest font-light text-gray-300 px-4 sm:px-8 md:px-16 py-4">
        <span>01</span>
        <span>//About</span>
        <span>2023 - 2025</span>
      </section>
      <IntroSection />
      <PhasesSection />
      <TechMarquee />
      <PortfolioSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}