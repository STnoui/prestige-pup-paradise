
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
        {/* Fixed Background Image for entire page */}
        <div 
          className="fixed inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80')`,
            backgroundAttachment: 'fixed',
            zIndex: -10
          }}
        />
        
        <section ref={setSectionRef('home')} id="home" className="w-full">
          <HeroSection />
        </section>
        
        {/* Separate Card Sections */}
        <main className="relative z-50 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 space-y-8 pt-32 pb-16">
          {/* About Us Card */}
          <section ref={setSectionRef('about')} id="about" className="w-full">
            <div className="backdrop-blur-xl bg-white/40 dark:bg-black/40 shadow-lg border border-white/20 dark:border-gray-700/50 rounded-3xl max-w-6xl mx-auto p-6 md:p-8 lg:p-12 text-black dark:text-white">
              <AboutSection />
            </div>
          </section>
          
          {/* Our Dogs Card */}
          <section ref={setSectionRef('our-dogs')} id="our-dogs" className="w-full">
            <div className="backdrop-blur-xl bg-white/40 dark:bg-black/40 shadow-lg border border-white/20 dark:border-gray-700/50 rounded-3xl max-w-6xl mx-auto p-6 md:p-8 lg:p-12 text-black dark:text-white">
              <OurDogsSection />
            </div>
          </section>
          
          {/* Contact Card */}
          <section ref={setSectionRef('contact')} id="contact" className="w-full">
            <div className="backdrop-blur-xl bg-white/40 dark:bg-black/40 shadow-lg border border-white/20 dark:border-gray-700/50 rounded-3xl max-w-6xl mx-auto p-6 md:p-8 lg:p-12 text-black dark:text-white">
              <ContactSection />
            </div>
          </section>
          
          {/* Footer Card */}
          <div className="backdrop-blur-xl bg-white/40 dark:bg-black/40 shadow-lg border border-white/20 dark:border-gray-700/50 rounded-3xl max-w-6xl mx-auto p-6 md:p-8 lg:p-12 text-black dark:text-white">
            <Footer onNavigateToSection={handleNavigateToSection} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
