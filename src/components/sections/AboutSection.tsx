
import { useLanguage } from '@/contexts/LanguageContext';

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 to-pink-400">
            {t('aboutUs')}
          </span>
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="space-y-6 text-center">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
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
