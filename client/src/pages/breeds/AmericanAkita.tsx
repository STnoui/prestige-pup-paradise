
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const AmericanAkita = () => {
  const { t } = useLanguage();
  const [fadeProgress, setFadeProgress] = useState(0);
  
  // Calculate individual element opacities for earlier, smoother fade
  const arrowOpacity = fadeProgress < 0.05 ? 1 : Math.max(0, 1 - ((fadeProgress - 0.05) / 0.15)); // Fades FIRST and earliest
  const titleOpacity = fadeProgress < 0.4 ? 1 : Math.max(0, 1 - ((fadeProgress - 0.4) / 0.3)); // Fades last
  
  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    let lastProgress = 0;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (Math.abs(currentScrollY - lastScrollY) < 3) return;
      lastScrollY = currentScrollY;
      
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollPosition = window.scrollY;
          const windowHeight = window.innerHeight;
          // Start fading later for better timing
          const fadeStartPoint = windowHeight * 0.4; // Start fading later
          const fadeEndPoint = windowHeight * 0.7; // Complete fade later
          const progress = Math.max(0, Math.min(1, (scrollPosition - fadeStartPoint) / (fadeEndPoint - fadeStartPoint)));
          
          if (Math.abs(progress - lastProgress) > 0.01) {
            setFadeProgress(progress);
            lastProgress = progress;
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Ensure page starts at top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleNavigateToSection = (sectionId: string) => {
    // Navigate to home page with section
    window.location.href = `/#${sectionId}`;
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header onNavigateToSection={handleNavigateToSection} />
      
      {/* Hero Background that extends behind content */}
      <div className="relative">
        {/* Full-screen Background Image */}
        <div 
          className="fixed inset-0"
          style={{
            backgroundImage: `url('/Akita1.jpg')`,
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
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center pt-24">
          <div className="fixed z-[1] text-center px-4 max-w-5xl mx-auto w-full" style={{ top: '50vh', left: '50vw', transform: 'translate(-50%, -50%)', pointerEvents: fadeProgress > 0.7 ? 'none' : 'auto' }}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight font-inter text-white break-words hyphens-auto" style={{ letterSpacing: '0.05em', textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)', opacity: titleOpacity, transition: 'opacity 0.1s ease-out', lineHeight: '1.1' }}>
              {t('americanAkita').toUpperCase()}
            </h1>
          </div>
          
          {/* Animated Down Arrow */}
          <div 
            className="fixed bottom-16 left-1/2 transform -translate-x-1/2 z-[1]" 
            style={{ 
              opacity: arrowOpacity,
              transition: 'opacity 0.1s ease-out'
            }}
          >
            <div className="animate-slow-bounce cursor-pointer" onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}>
              <svg 
                className="w-8 h-8 text-white/70 hover:text-white transition-colors duration-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </section>
        
        {/* Content Card */}
        <main className="relative z-50 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 pb-80 -mt-8 md:-mt-16 lg:-mt-24">
          <div className="backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-lg border border-white/20 dark:border-gray-700/50 rounded-3xl max-w-6xl mx-auto p-6 md:p-8 lg:p-12 text-black dark:text-white">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 dark:from-blue-300 dark:via-blue-400 dark:to-blue-500">
                  {t('info')}
                </span>
              </h2>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
                {t('americanAkitaDescription')}
              </p>
              
              {/* Contact for Availability Section - Inside Info */}
              <div className="max-w-3xl mx-auto mt-8">
                <div className="backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-lg border border-white/20 dark:border-gray-700/50 rounded-3xl hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-400/30 transition-all duration-300 p-8 text-center">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {t('contactForAvailability')}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-200 mb-6">
                      {t('availabilityDescription')}
                    </p>
                    <div className="flex justify-center">
                      <a 
                        href="https://www.facebook.com/profile.php?id=61574415806779" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
                      >
                        {t('contactUs')}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="mt-32">
            <Footer onNavigateToSection={handleNavigateToSection} />
          </div>
        </main>
      </div>
    </div>
  );
};

export default AmericanAkita;
