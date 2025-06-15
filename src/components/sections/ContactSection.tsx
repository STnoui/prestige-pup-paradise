import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const ContactSection = () => {
  const { t } = useLanguage();

  const facebookUrl = 'https://www.facebook.com/profile.php?id=61574415806779';

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
          {t('contactTitle')}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          {t('contactDescription')}
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* Facebook Contact Card */}
        <Card className="bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 p-8 text-center">
          <div className="mb-6">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              {t('facebookTitle')}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              {t('facebookDescription')}
            </p>
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-2xl font-semibold transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
            >
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                Connect on Facebook
              </a>
            </Button>
          </div>
        </Card>

        {/* Social Media Follow */}
        <Card className="bg-white/80 dark:bg-gray-800/80 rounded-3xl shadow-sm border border-gray-200/50 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 p-6 mt-8">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-4 text-center">
            {t('followJourney')}
          </h4>
          <div className="flex justify-center">
            <a 
              href={facebookUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:bg-blue-700 transition-all duration-200 hover:scale-105"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default ContactSection;