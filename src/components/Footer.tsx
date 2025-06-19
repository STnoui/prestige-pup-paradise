
import { useLanguage } from '@/contexts/LanguageContext';

interface FooterProps {
  onNavigateToSection?: (sectionId: string) => void;
}

const Footer = ({ onNavigateToSection }: FooterProps) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} SHOLO. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
