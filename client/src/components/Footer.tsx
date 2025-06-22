
import { useLanguage } from '@/contexts/LanguageContext';
import { memo } from 'react';

interface FooterProps {
  onNavigateToSection?: (sectionId: string) => void;
}

const Footer = ({ onNavigateToSection }: FooterProps) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 mt-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Bottom Bar */}
        <div className="text-center">
          <p className="text-white text-base font-medium drop-shadow-lg">
            © {currentYear} SHOLO. {t('allRightsReserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
