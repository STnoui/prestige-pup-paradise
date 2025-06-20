
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const OurDogsSection = () => {
  const { t } = useLanguage();
  
  const breeds = [
    {
      name: t('americanAkita'),
      description: t('americanAkitaDesc'),
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      path: '/breeds/american-akita',
    },
    {
      name: t('southAfricanBoerboel'), 
      description: t('southAfricanBoerboelDesc'),
      image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      path: '/breeds/south-african-boerboel',
    },
    {
      name: t('miniatureSchnauzer'),
      description: t('miniatureSchnauzermDesc'),
      image: 'https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      path: '/breeds/miniature-schnauzer',
    },
    {
      name: t('kerryBlueTerrier'),
      description: t('kerryBlueTerrierDesc'),
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&auto=format&fit=crop&w=2064&q=80',
      path: '/breeds/kerry-blue-terrier',
    }
  ];

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

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {breeds.map((breed, index) => (
          <Link key={breed.name} to={breed.path}>
            <div className="backdrop-blur-xl bg-white/40 dark:bg-black/40 shadow-lg border border-white/20 dark:border-gray-700/50 overflow-hidden group hover:shadow-2xl hover:shadow-blue-200/50 dark:hover:shadow-blue-400/30 transition-all duration-500 hover:-translate-y-2 hover:border-blue-500 dark:hover:border-blue-400 rounded-3xl">
              <div className="relative overflow-hidden">
                <img 
                  src={breed.image}
                  alt={breed.name}
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  style={{ aspectRatio: '16/9' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Floating badge */}
                <div className="absolute top-4 right-4 bg-blue-600/80 backdrop-blur-md rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  {breed.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm mb-4">{breed.description}</p>
                
                <div className="flex items-center text-blue-600 dark:text-blue-300 font-semibold text-sm group-hover:text-blue-500 dark:group-hover:text-blue-200">
                  {t('learnMore')}
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default OurDogsSection;
