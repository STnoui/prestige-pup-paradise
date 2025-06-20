
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  const handleScrollToBreeds = () => {
    const element = document.getElementById('our-dogs');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">


      {/* Content - narrower to show background on sides */}
      <div className="relative z-20 text-center px-6 max-w-3xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black animate-fade-in tracking-tight font-inter text-white"
              style={{ 
                opacity: 1,
                animationFillMode: 'forwards',
                letterSpacing: '0.05em',
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.5)'
              }}
            >
              SHOLO
            </h1>
            
            <h2 
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium animate-fade-in tracking-wide font-inter text-blue-100" 
              style={{ 
                animationDelay: '0.2s',
                opacity: 1,
                animationFillMode: 'forwards',
                textShadow: '0 4px 16px rgba(0, 0, 0, 0.4)'
              }}
            >
              Brave Dogs
            </h2>
          </div>
          
          <div 
            className="flex justify-center animate-fade-in pt-6" 
            style={{ 
              animationDelay: '0.4s',
              opacity: 1,
              animationFillMode: 'forwards'
            }}
          >
            <Button 
              onClick={handleScrollToBreeds}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 h-auto rounded-full font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              Meet Our Dogs
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
