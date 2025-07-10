
import { useRef, useEffect, useCallback } from 'react';
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

  // Ensure page starts at top on initial load
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  const handleNavigateToSection = useCallback((sectionId: string) => {
    console.log('=== NAVIGATION DEBUG ===');
    console.log('Requested section:', sectionId);
    console.log('All refs:', Object.keys(sectionsRef.current));
    console.log('Available elements:', Object.entries(sectionsRef.current).map(([key, el]) => [key, !!el]));
    
    const element = sectionsRef.current[sectionId];
    console.log('Target element:', element);
    
    if (element) {
      // Try primary navigation method first
      try {
        // Get the header height dynamically
        const header = document.querySelector('header');
        const headerHeight = header ? header.offsetHeight : 80;
        console.log('Header height:', headerHeight);
        
        // Different offsets for different sections
        let offset = headerHeight + 20; // Base offset with some padding
        
        if (sectionId === 'home') {
          offset = 0;
        } else if (sectionId === 'about') {
          offset = headerHeight + 40; // More space for the first card section
        } else {
          offset = headerHeight + 20; // Standard offset for other sections
        }
        
        console.log('Calculated offset:', offset);
        console.log('Element offsetTop:', element.offsetTop);
        
        const rect = element.getBoundingClientRect();
        console.log('Element getBoundingClientRect:', rect);
        
        // Use getBoundingClientRect for more accurate positioning
        const currentScrollY = window.pageYOffset;
        const elementPosition = rect.top + currentScrollY - offset;
        const scrollTarget = Math.max(0, elementPosition);
        
        console.log('Element position:', elementPosition);
        console.log('Scroll target:', scrollTarget);
        console.log('Current scroll position:', window.pageYOffset);
        
        window.scrollTo({
          top: scrollTarget,
          behavior: 'smooth'
        });
        
        // Verify scroll worked and fallback if needed
        setTimeout(() => {
          const currentPos = window.pageYOffset;
          console.log('After scroll - Current position:', currentPos);
          
          // If scroll didn't work, try fallback method
          if (Math.abs(currentPos - scrollTarget) > 100) {
            console.log('Primary scroll failed, trying fallback...');
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 1000);
      } catch (error) {
        console.log('Navigation error, using fallback:', error);
        // Fallback: use scrollIntoView
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      console.log('ERROR: Element not found for section:', sectionId);
      // Fallback: try to find element by ID
      const fallbackElement = document.getElementById(sectionId);
      if (fallbackElement) {
        console.log('Found fallback element by ID:', fallbackElement);
        fallbackElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    console.log('=== END DEBUG ===');
  }, []);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => handleNavigateToSection(hash), 100);
    }
  }, [location]);

  const setSectionRef = useCallback((sectionId: string) => (el: HTMLElement | null) => {
    sectionsRef.current[sectionId] = el;
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header onNavigateToSection={handleNavigateToSection} />
      
      {/* Hero Background that extends behind content */}
      <div className="relative">
        {/* Full-screen Background Image */}
        <div 
          className="fixed inset-0"
          style={{
            backgroundImage: `url('/main.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '100vh',
            zIndex: -10,
            transform: 'translateZ(0)',
            willChange: 'transform'
          }}
        />
        
        <section ref={setSectionRef('home')} id="home" className="w-full">
          <HeroSection onNavigateToSection={handleNavigateToSection} />
        </section>
        
        {/* Separate Card Sections */}
        <main className="relative z-50 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 space-y-8 pt-32 pb-80">
          {/* About Us Card */}
          <section ref={setSectionRef('about')} id="about" className="w-full">
            <div className="backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-lg border border-white/20 dark:border-gray-700/50 rounded-3xl max-w-6xl mx-auto p-6 md:p-8 lg:p-12 text-black dark:text-white">
              <AboutSection />
            </div>
          </section>
          
          {/* Our Dogs Card */}
          <section ref={setSectionRef('our-dogs')} id="our-dogs" className="w-full">
            <div className="backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-lg border border-white/20 dark:border-gray-700/50 rounded-3xl max-w-6xl mx-auto p-6 md:p-8 lg:p-12 text-black dark:text-white">
              <OurDogsSection />
            </div>
          </section>
          
          {/* Contact Card */}
          <section ref={setSectionRef('contact')} id="contact" className="w-full">
            <div className="backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-lg border border-white/20 dark:border-gray-700/50 rounded-3xl max-w-6xl mx-auto p-6 md:p-8 lg:p-12 text-black dark:text-white">
              <ContactSection />
            </div>
          </section>
          
          {/* Footer */}
          <div className="mt-32">
            <Footer onNavigateToSection={handleNavigateToSection} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;
