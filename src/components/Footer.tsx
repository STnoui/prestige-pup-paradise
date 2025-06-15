
import { useLanguage } from '@/contexts/LanguageContext';

interface FooterProps {
  onNavigateToSection?: (sectionId: string) => void;
}

const Footer = ({ onNavigateToSection }: FooterProps) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const facebookUrl = 'https://www.facebook.com/profile.php?id=61574415806779';

  const quickLinks = [
    { label: t('home'), id: 'home' },
    { label: t('about'), id: 'about' },
    { label: t('ourDogs'), id: 'our-dogs' },
    { label: t('contact'), id: 'contact' }
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">SHOLO</span>
            </div>
            <p className="text-2xl font-medium text-blue-400 mb-4">{t('heroSubtitle')}</p>
            <p className="text-gray-300 leading-relaxed">
              {t('footerDescription')}
            </p>
            <div className="flex space-x-4">
              <a 
                href={facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('quickLinks')}</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigateToSection?.(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">{t('contact')}</h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-3">
                <span>Facebook:</span>
                <a 
                  href={facebookUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  SHOLO
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span>Location:</span>
                <span>Bulgaria</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} SHOLO. {t('allRightsReserved')}
          </p>
          <p className="text-gray-500 text-xs mt-2 md:mt-0">
            {t('designCredit')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
