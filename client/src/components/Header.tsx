
import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SettingsDropdown from '@/components/SettingsDropdown';

interface HeaderProps {
  onNavigateToSection?: (sectionId: string) => void;
}

const Header = ({ onNavigateToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuButtonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsMenuClosing(false);
    }, 200);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileMenuButtonRef.current &&
        !mobileMenuButtonRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, closeMenu]);

  // Close mobile menu when settings opens
  useEffect(() => {
    if (isSettingsOpen && isMenuOpen) {
      setIsMenuClosing(true);
      setTimeout(() => {
        setIsMenuOpen(false);
        setIsMenuClosing(false);
      }, 200);
    }
  }, [isSettingsOpen, isMenuOpen]);

  const handleNavigation = useCallback((sectionId: string) => {
    console.log('Header navigation clicked for:', sectionId);
    console.log('Current pathname:', location.pathname);
    console.log('onNavigateToSection function:', typeof onNavigateToSection);
    
    if (location.pathname !== '/') {
      console.log('Navigating to home first...');
      navigate('/');
      setTimeout(() => {
        console.log('Calling onNavigateToSection after navigation...');
        onNavigateToSection?.(sectionId);
      }, 500);
    } else {
      console.log('Already on home, calling onNavigateToSection directly...');
      onNavigateToSection?.(sectionId);
    }
  }, [location.pathname, navigate, onNavigateToSection]);

  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'our-dogs', label: t('ourDogs') },
    { id: 'contact', label: t('contact') },
  ];

  return (
    <header className="fixed top-0 w-full z-[100] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-4">
        <div className={`transition-all duration-300 rounded-full ${
          scrolled 
            ? 'backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-lg border border-white/20 dark:border-gray-700/50' 
            : 'backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-lg border border-white/10 dark:border-gray-700/30'
        }`}>
          <div className="flex items-center justify-between h-12 sm:h-14 px-3 sm:px-4">
            {/* Logo (Left side on mobile and desktop) */}
            <button
              onClick={() => handleNavigation('home')}
              className="flex items-center space-x-3 group"
            >
              <img 
                src="/lovable-uploads/4fc6ff94-b7a7-4209-83d2-aa6063da5978.png" 
                alt="SHOLO Logo" 
                className="h-9 w-9 sm:h-11 sm:w-11 logo-circular group-hover:scale-105 transition-transform duration-300 object-cover"
                loading="eager"
                decoding="sync"
              />
              <span className="text-base sm:text-lg font-medium text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 font-inter">
                SHOLO
              </span>
            </button>

            {/* Desktop Navigation - Centered */}
            <nav className="hidden md:flex items-center space-x-1 flex-1 justify-center">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="px-4 py-2 rounded-full text-sm font-medium text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop Settings */}
            <div className="hidden md:flex items-center">
              <SettingsDropdown onOpenChange={setIsSettingsOpen} />
            </div>

            {/* Mobile Menu Button and Settings (Right side on mobile) */}
            <div className="md:hidden flex items-center space-x-2" ref={mobileMenuButtonRef}>
              <SettingsDropdown onOpenChange={setIsSettingsOpen} />
              <button
                onClick={() => {
                  if (isMenuOpen) {
                    closeMenu();
                  } else {
                    setIsMenuOpen(true);
                    setIsSettingsOpen(false);
                  }
                }}
                className={`p-2 rounded-full transition-all duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 focus:outline-none ${
                  isMenuOpen ? 'text-blue-600 dark:text-blue-400 bg-gray-100/50 dark:bg-gray-800/50' : 'text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
                }`}
              >
                <svg 
                  className={`w-6 h-6 transition-transform duration-200 ${isMenuOpen ? 'rotate-90' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} 
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile Menu - Positioned outside main header container */}
        {(isMenuOpen || isMenuClosing) && (
          <div 
            ref={mobileMenuRef}
            className={`md:hidden absolute top-20 left-6 right-6 backdrop-blur-xl bg-white/30 dark:bg-black/30 rounded-3xl shadow-lg border border-white/20 dark:border-gray-700/50 z-[110] transition-all duration-200 ${
              isMenuClosing 
                ? 'animate-out fade-out-0 zoom-out-95 slide-out-to-top-2' 
                : 'animate-in fade-in-0 zoom-in-95 slide-in-from-top-2'
            }`}
          >
            <nav className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    handleNavigation(item.id);
                    closeMenu();
                  }}
                  className="block w-full text-center px-4 py-3 rounded-full text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default memo(Header);
