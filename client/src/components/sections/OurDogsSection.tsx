
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { memo, useMemo, useEffect } from 'react';

const OurDogsSection = () => {
  const { t } = useLanguage();
  
  const breeds = useMemo(() => [
    {
      name: t('americanAkita'),
      description: t('americanAkitaDesc'),
      image: '/Akita1.jpg',
      path: '/breeds/american-akita',
    },
    {
      name: t('southAfricanBoerboel'), 
      description: t('southAfricanBoerboelDesc'),
      image: '/Boerboel1.jpg',
      path: '/breeds/south-african-boerboel',
    },
    {
      name: t('miniatureSchnauzer'),
      description: t('miniatureSchnauzermDesc'),
      image: '/Shnauzer1.jpg',
      path: '/breeds/miniature-schnauzer',
    },
    {
      name: t('kerryBlueTerrier'),
      description: t('kerryBlueTerrierDesc'),
      image: '/Terrier1.jpg',
      path: '/breeds/kerry-blue-terrier',
    }
  ], [t]);

  // Aggressive preloading to eliminate lag
  useEffect(() => {
    const preloadImages = () => {
      breeds.forEach((breed, index) => {
        const img = new Image();
        img.src = breed.image;
        // Force decode to prevent stutter
        img.decode().catch(() => {
          // Fallback if decode fails
          console.log('Image decode failed for:', breed.name);
        });
      });
    };
    
    // Immediate preloading for smoother experience
    preloadImages();
  }, [breeds]);

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 dark:from-blue-300 dark:via-blue-400 dark:to-blue-500 bg-clip-text text-transparent">{t('ourDogs')}</span>
        </h2>
        <p className="text-xl text-black dark:text-white max-w-3xl mx-auto leading-relaxed">
          {t('breedsSectionDesc')}
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-12 md:gap-16 overflow-visible pt-8 px-2 sm:px-8 pb-8" style={{ contentVisibility: 'auto', containIntrinsicSize: '300px' }}>
        {breeds.map((breed, index) => (
          <Link key={breed.name} to={breed.path}>
            <div className="backdrop-blur-xl bg-white/40 dark:bg-black/40 shadow-lg rounded-3xl hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-400/30 transition-all duration-300 hover:-translate-y-2 hover:z-50 w-full max-w-none mx-auto h-full flex flex-col relative">
              <div className="relative overflow-hidden rounded-t-3xl">
                <img 
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  style={{ aspectRatio: '16/9', contentVisibility: 'auto' }}
                  loading="lazy"
                  decoding="async"
                  fetchPriority="low"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 transition-colors">
                  {breed.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm flex-1">{breed.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default memo(OurDogsSection);
