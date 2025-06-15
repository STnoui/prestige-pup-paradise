import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {t('aboutTitle')}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {t('aboutDescription')}
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-6 text-center">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">{t('ourPhilosophy')}</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('aboutText1')}
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t('aboutText2')}
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full text-sm font-semibold">
              Trustworthy
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full text-sm font-semibold">
              Health Guaranteed
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-6 py-3 rounded-full text-sm font-semibold">
              Founded 2025
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;