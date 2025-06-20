
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
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80')`
        }}
      />
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-blue-900/40 via-blue-900/60 to-blue-900/80 dark:from-gray-900/40 dark:via-gray-900/60 dark:to-gray-900/80" />

      {/* Content - narrower to show background on sides */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 
              className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black animate-fade-in tracking-tight font-playfair text-white"
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
              className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-medium animate-fade-in tracking-wide font-playfair text-blue-100" 
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
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 h-auto rounded-2xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
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
