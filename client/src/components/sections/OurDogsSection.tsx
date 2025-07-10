
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
        img.onload = () => {
          // Force the image to be cached
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          canvas.width = img.width;
          canvas.height = img.height;
          ctx?.drawImage(img, 0, 0);
        };
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
    <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 lg:px-24 xl:px-32 space-y-8 pb-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 dark:from-blue-300 dark:via-blue-400 dark:to-blue-500 bg-clip-text text-transparent">{t('ourDogs')}</span>
        </h2>
        <p className="text-xl text-black dark:text-white max-w-4xl mx-auto leading-relaxed mb-4">
          {t('breedsSectionDesc')}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-4">
        {breeds.map((breed, index) => (
          <Link key={breed.name} to={breed.path}>
            <div className="backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-lg rounded-3xl hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-400/30 transition-all duration-300 hover:-translate-y-2 hover:z-50 w-full max-w-none mx-auto h-full flex flex-col relative group">
              <div className="relative overflow-hidden rounded-t-3xl">
                <img 
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  style={{ aspectRatio: '16/9' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Top-right blue arrow */}
                <div className="absolute top-4 right-4 bg-blue-600/90 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-2 group-hover:translate-x-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
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
