
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { memo } from 'react';

const ContactSection = () => {
  const { t } = useLanguage();

  const facebookUrl = 'https://www.facebook.com/profile.php?id=61574415806779';

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-6 lg:px-8 pb-4">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-teal-500 dark:from-green-300 dark:via-green-400 dark:to-teal-400">
            {t('contactTitle')}
          </span>
        </h2>
        <p className="text-xl text-black dark:text-white max-w-2xl mx-auto mb-4">
          {t('contactDescription')}
        </p>
      </div>

      <div className="max-w-3xl mx-auto mb-4">
        {/* Facebook Contact Card */}
        <div className="backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-lg rounded-3xl hover:shadow-lg hover:shadow-blue-200/50 dark:hover:shadow-blue-400/30 transition-all duration-300 p-8 text-center">
          <div className="mb-4">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {t('facebookTitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-200 mb-4">
              {t('facebookDescription')}
            </p>
            <div className="flex justify-center">
              <a 
                href={facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-500 shadow-lg hover:shadow-xl hover:scale-105 inline-flex items-center justify-center"
              >
{t('connect')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ContactSection);
