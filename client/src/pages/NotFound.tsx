import { useState, useEffect, memo } from 'react';
import { Link } from "react-router-dom";

const NotFound = () => {
  const [fadeProgress, setFadeProgress] = useState(0);
  
  // Calculate individual element opacities for smooth fade
  const contentOpacity = fadeProgress < 0.7 ? 1 : Math.max(0, 1 - ((fadeProgress - 0.7) / 0.3));
  const arrowOpacity = fadeProgress < 0.1 ? 1 : Math.max(0, 1 - ((fadeProgress - 0.1) / 0.2));
  
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
          const fadeStartPoint = windowHeight * 0.5;
          const fadeEndPoint = windowHeight * 0.8;
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

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Full-screen Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/main.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          height: '100vh',
          width: '100vw',
          zIndex: -10
        }}
      />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Fixed Content */}
        <div 
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[1] text-center px-4 sm:px-6 max-w-3xl mx-auto w-full"
          style={{ 
            pointerEvents: fadeProgress > 0.9 ? 'none' : 'auto'
          }}
        >
          <div className="space-y-6 sm:space-y-8" style={{ opacity: contentOpacity, transition: 'opacity 0.1s ease-out' }}>
            <div className="text-8xl mb-4">🐕</div>
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight font-inter text-white"
              style={{ 
                letterSpacing: '0.05em',
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}
            >
              404
            </h1>
            <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-wide font-inter text-blue-100"
              style={{ 
                textShadow: '0 4px 16px rgba(0, 0, 0, 0.4)'
              }}
            >
              Oops! This pup ran away
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-2xl mx-auto"
              style={{ 
                textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
              }}
            >
              The page you're looking for doesn't exist, but our amazing dogs are waiting for you at home!
            </p>
            
            {/* Animated Down Arrow */}
            <div 
              className="flex justify-center pt-16 sm:pt-20" 
              style={{ 
                opacity: arrowOpacity,
                transition: 'opacity 0.1s ease-out'
              }}
            >
              <div className="animate-slow-bounce cursor-pointer" onClick={handleScrollDown}>
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
        </div>
      </div>
      
      {/* Card Content Section */}
      <main className="relative z-50 px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 space-y-8 pt-32 pb-32">
        <div className="backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-lg border border-white/20 dark:border-gray-700/50 rounded-3xl max-w-6xl mx-auto p-6 md:p-8 lg:p-12 text-black dark:text-white">
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/" className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 rounded-full font-semibold transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 inline-block">
                Return Home
              </Link>
              <Link to="/#our-dogs" className="bg-gray-600 hover:bg-gray-700 text-white text-lg px-10 py-4 rounded-full font-semibold transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 inline-block">
                Meet Our Dogs
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default memo(NotFound);