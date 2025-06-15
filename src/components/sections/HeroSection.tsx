
import { Button } from '@/components/ui/button';

const HeroSection = () => {
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
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80')`
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 via-slate-900/40 to-slate-900/60" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-4xl animate-float opacity-20">🦴</div>
      <div className="absolute top-40 right-20 text-5xl animate-float opacity-30" style={{ animationDelay: '1s' }}>🎾</div>
      <div className="absolute bottom-40 left-20 text-3xl animate-float opacity-25" style={{ animationDelay: '2s' }}>🐕</div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 animate-fade-in">
          Excellence in Every
          <span className="block gradient-text text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600">
            Pawprint
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Discover meticulously bred companions, raised with passion and expertise for discerning families who deserve nothing but the finest.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
          <Button 
            onClick={handleScrollToBreeds}
            className="btn-primary text-lg px-10 py-4 h-auto"
          >
            Meet Our Breeds
          </Button>
          <Button 
            variant="outline"
            className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-lg px-10 py-4 h-auto"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Our Story
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
