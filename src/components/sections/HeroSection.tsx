
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
        {/* Extended Gradient Rectangle Behind Text */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 dark:from-black/10 dark:via-black/20 dark:to-black/10 rounded-3xl blur-xl transform scale-110" />
          <div className="relative backdrop-blur-xl bg-white/30 dark:bg-black/30 rounded-3xl p-12 md:p-16 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <h1 
              className="text-6xl md:text-8xl lg:text-9xl xl:text-[10rem] font-bold mb-6 animate-fade-in tracking-wider"
              style={{ 
                color: '#ffffff',
                opacity: 1,
                animationFillMode: 'forwards',
                fontFamily: 'HonorSans, sans-serif'
              }}
            >
              SHOLO
            </h1>
            
            <h2 
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-medium mb-10 animate-fade-in tracking-wide" 
              style={{ 
                animationDelay: '0.2s',
                opacity: 1,
                animationFillMode: 'forwards',
                fontFamily: 'HonorSans, sans-serif'
              }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-600">
                Brave Dogs
              </span>
            </h2>
            
            <div 
              className="flex justify-center animate-fade-in" 
              style={{ 
                animationDelay: '0.4s',
                opacity: 1,
                animationFillMode: 'forwards'
              }}
            >
              <Button 
                onClick={handleScrollToBreeds}
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-10 py-4 h-auto rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-subtle"
                style={{ backgroundColor: '#2563eb', color: '#ffffff' }}
              >
                Meet Our Dogs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
