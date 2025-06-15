
import { Card } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
          {t('aboutTitle')}
        </h2>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {t('aboutDescription')}
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{t('ourPhilosophy')}</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('aboutText1')}
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              {t('aboutText2')}
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-4 py-2 rounded-full text-sm font-semibold">
              AKC Certified
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
              Health Guaranteed
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-4 py-2 rounded-full text-sm font-semibold">
              Founded 2025
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 p-8 transform hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Happy dogs with their breeder"
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/10 dark:bg-blue-500/20 rounded-full"></div>
          <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gray-500/10 dark:bg-gray-500/20 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
