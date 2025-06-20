
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
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-gray-900/20 via-gray-900/40 to-gray-900/60" />
      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-6xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 
              className="text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black animate-fade-in tracking-tight font-playfair"
              style={{ 
                opacity: 1,
                animationFillMode: 'forwards',
                textShadow: '0 8px 32px rgba(0, 0, 0, 0.6), 0 4px 16px rgba(0, 0, 0, 0.4)'
              }}
            >
              <span className="bg-gradient-to-b from-white via-white to-gray-200 bg-clip-text text-transparent">
                SHOLO
              </span>
            </h1>
            
            <h2 
              className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium animate-fade-in tracking-wide font-playfair" 
              style={{ 
                animationDelay: '0.2s',
                opacity: 1,
                animationFillMode: 'forwards',
                textShadow: '0 4px 16px rgba(0, 0, 0, 0.5)'
              }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Brave Dogs
              </span>
            </h2>
          </div>
          
          <div 
            className="flex justify-center animate-fade-in pt-4" 
            style={{ 
              animationDelay: '0.4s',
              opacity: 1,
              animationFillMode: 'forwards'
            }}
          >
            <Button 
              onClick={handleScrollToBreeds}
              className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-4 h-auto rounded-full font-semibold transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 hover:scale-105 border-2 border-blue-500/20"
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
