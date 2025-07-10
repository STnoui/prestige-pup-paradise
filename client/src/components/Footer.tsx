
import { useLanguage } from '@/contexts/LanguageContext';
import { memo, useState, useEffect } from 'react';

interface FooterProps {
  onNavigateToSection?: (sectionId: string) => void;
}

const Footer = ({ onNavigateToSection }: FooterProps) => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();
  const [footerOpacity, setFooterOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      
      // Animation starts 250px from bottom, fully disappears at 200px from bottom
      const animationStart = docHeight - 250;
      const animationEnd = docHeight - 200;
      
      if (scrollTop + windowHeight >= animationStart) {
        const progress = Math.min(1, (scrollTop + windowHeight - animationStart) / (animationEnd - animationStart));
        setFooterOpacity(1 - progress);
      } else {
        setFooterOpacity(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      
      {/* Bottom Copyright - Fixed at bottom, slides up when at page end */}
      <div 
        className="fixed bottom-0 left-0 right-0 backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-lg border-t border-white/20 dark:border-gray-700/50 text-center py-3 z-[200] transition-all duration-500"
        style={{
          transform: `translateY(${footerOpacity === 0 ? '100%' : '0%'})`,
          opacity: footerOpacity
        }}
      >
        <p className="text-sm text-black dark:text-white">
          © 2025 SHOLO. {t('allRightsReserved')}
        </p>
      </div>
    </>
  );
};

export default memo(Footer);
