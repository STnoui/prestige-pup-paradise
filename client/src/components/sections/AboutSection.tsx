
import { useLanguage } from '@/contexts/LanguageContext';
import { memo } from 'react';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-pink-500 dark:from-purple-300 dark:via-purple-400 dark:to-pink-400">
            {t('aboutUs')}
          </span>
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-6 text-center">
            <p className="text-lg text-black dark:text-white leading-relaxed">
              {t('newAboutText1')}
            </p>
            <p className="text-lg text-black dark:text-white leading-relaxed">
              {t('newAboutText2')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutSection);
