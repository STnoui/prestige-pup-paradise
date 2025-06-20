
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

const MiniatureSchnauzer = () => {
  const { t } = useLanguage();
  
  const handleNavigateToSection = (sectionId: string) => {
    // Navigate to home page with section
    window.location.href = `/#${sectionId}`;
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Header onNavigateToSection={handleNavigateToSection} />

      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="p-8 md:p-16 text-center mb-16">
            <div className="mb-8">
              <img 
                src="https://images.unsplash.com/photo-1605568427561-40dd23c2acea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt={t('miniatureSchnauzer')}
                className="w-full max-w-2xl mx-auto h-64 md:h-96 object-cover object-center rounded-2xl"
                style={{ aspectRatio: '16/9' }}
              />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">{t('miniatureSchnauzer')}</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              {t('miniatureSchnauzermDesc')}
            </p>

            <div className="bg-white dark:bg-black rounded-2xl p-6 md:p-8 mb-8 shadow-lg shadow-blue-200/50 dark:shadow-blue-400/30 border border-blue-200/50 dark:border-blue-400/30">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('contactForAvailability')}</h2>
              <p className="text-gray-700 dark:text-gray-200 mb-6">
                {t('breedProgramText1')} {t('miniatureSchnauzer')} {t('breedProgramText2')} {t('breedProgramText3')} {t('miniatureSchnauzer')} {t('breedProgramText4')}
              </p>
            </div>

            <div className="flex justify-center">
              <a 
                href="https://www.facebook.com/profile.php?id=61574415806779" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 rounded-2xl font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                {t('contactUs')}
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer onNavigateToSection={handleNavigateToSection} />
    </div>
  );
};

export default MiniatureSchnauzer;
