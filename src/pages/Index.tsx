
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import OurDogsSection from '@/components/sections/OurDogsSection';
import InfoSection from '@/components/sections/InfoSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  const location = useLocation();
  const sectionsRef = useRef<{ [key: string]: HTMLElement | null }>({});

  const handleNavigateToSection = (sectionId: string) => {
    const element = sectionsRef.current[sectionId];
    if (element) {
      const offset = sectionId === 'home' ? 0 : 100;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => handleNavigateToSection(hash), 100);
    }
  }, [location]);

  const setSectionRef = (sectionId: string) => (el: HTMLElement | null) => {
    sectionsRef.current[sectionId] = el;
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Header onNavigateToSection={handleNavigateToSection} />
      
      <main>
        <section ref={setSectionRef('home')} id="home">
          <HeroSection />
        </section>
        
        <section ref={setSectionRef('about')} id="about" className="py-24">
          <AboutSection />
        </section>
        
        <section ref={setSectionRef('our-dogs')} id="our-dogs" className="py-24 bg-white">
          <OurDogsSection />
        </section>
        
        <section ref={setSectionRef('info')} id="info" className="py-24">
          <InfoSection />
        </section>
        
        <section ref={setSectionRef('contact')} id="contact" className="py-24 bg-white">
          <ContactSection />
        </section>
      </main>
      
      <Footer onNavigateToSection={handleNavigateToSection} />
    </div>
  );
};

export default Index;
