
import { useState, useEffect, memo } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroSectionProps {
  onNavigateToSection?: (sectionId: string) => void;
}

const HeroSection = ({ onNavigateToSection }: HeroSectionProps) => {
  const { t } = useLanguage();
  const [fadeProgress, setFadeProgress] = useState(0);
  
  // Calculate individual element opacities for earlier, smoother fade
  const arrowOpacity = fadeProgress < 0.05 ? 1 : Math.max(0, 1 - ((fadeProgress - 0.05) / 0.15)); // Fades FIRST and earliest
  const buttonOpacity = fadeProgress < 0.2 ? 1 : Math.max(0, 1 - ((fadeProgress - 0.2) / 0.3)); // Fades second
  const subtitleOpacity = fadeProgress < 0.3 ? 1 : Math.max(0, 1 - ((fadeProgress - 0.3) / 0.3)); // Fades third
  const titleOpacity = fadeProgress < 0.4 ? 1 : Math.max(0, 1 - ((fadeProgress - 0.4) / 0.3)); // Fades last
  

  useEffect(() => {
    let ticking = false;
    let lastScrollY = window.scrollY;
    let lastProgress = 0;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Only update if scroll changed significantly to reduce calculations
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
          
          // Only update state if progress changed significantly
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

  const handleScrollToBreeds = () => {
    onNavigateToSection?.('our-dogs');
  };

  const handleScrollToAbout = () => {
    onNavigateToSection?.('about');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fixed Content - stays BEHIND content as it scrolls over */}
      <div 
        className="fixed z-[1] text-center px-4 sm:px-6 max-w-3xl mx-auto w-full"
        style={{ 
          top: '50vh',
          left: '50vw',
          transform: 'translate(-50%, -50%)',
          pointerEvents: fadeProgress > 0.7 ? 'none' : 'auto'
        }}
      >
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-tight font-inter text-white"
              style={{ 
                opacity: titleOpacity,
                letterSpacing: '0.05em',
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
                transition: 'opacity 0.1s ease-out'
              }}
            >
              SHOLO
            </h1>
            
            <h2 
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium tracking-wide font-inter text-blue-100" 
              style={{ 
                opacity: subtitleOpacity,
                textShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
                transition: 'opacity 0.1s ease-out'
              }}
            >
              Brave Dogs
            </h2>
          </div>
          
          <div 
            className="flex justify-center pt-4 sm:pt-6" 
            style={{ 
              opacity: buttonOpacity,
              transition: 'opacity 0.1s ease-out'
            }}
          >
            <Button 
              onClick={handleScrollToBreeds}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 h-auto rounded-full font-semibold transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105"
            >
{t('meetOurDogsButton')}
            </Button>
          </div>
          
        </div>
      </div>
      
      {/* Animated Down Arrow - positioned at bottom */}
      <div 
        className="fixed z-[1]" 
        style={{ 
          bottom: '4rem',
          left: '50vw',
          transform: 'translateX(-50%)',
          opacity: arrowOpacity,
          transition: 'opacity 0.1s ease-out'
        }}
      >
        <div className="animate-slow-bounce cursor-pointer" onClick={handleScrollToAbout}>
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
    </div>
  );
};

export default memo(HeroSection);
