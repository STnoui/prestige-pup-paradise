
import { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import OurDogsSection from '@/components/sections/OurDogsSection';
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
    <div className="min-h-screen overflow-x-hidden">
      <Header onNavigateToSection={handleNavigateToSection} />
      
      {/* Hero Background that extends behind content */}
      <div className="relative">
        <section ref={setSectionRef('home')} id="home" className="w-full">
          <HeroSection />
        </section>
        
        {/* Overlapping Content Sections */}
        <main className="relative -mt-32 z-30 px-8 md:px-16 lg:px-32 xl:px-40">
          <div className="bg-white dark:bg-black rounded-t-3xl shadow-2xl min-h-screen max-w-4xl mx-auto">
            <section ref={setSectionRef('about')} id="about" className="pt-32 pb-24 w-full">
              <AboutSection />
            </section>
            
            <section ref={setSectionRef('our-dogs')} id="our-dogs" className="py-24 w-full">
              <OurDogsSection />
            </section>
            
            <section ref={setSectionRef('contact')} id="contact" className="py-24 w-full">
              <ContactSection />
            </section>
            
            <Footer onNavigateToSection={handleNavigateToSection} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
