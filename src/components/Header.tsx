
import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import SettingsDropdown from '@/components/SettingsDropdown';

interface HeaderProps {
  onNavigateToSection?: (sectionId: string) => void;
}

const Header = ({ onNavigateToSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const handleNavigation = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Keep menu open for mobile navigation
      setTimeout(() => {
        onNavigateToSection?.(sectionId);
        // Close menu after navigation completes
        setTimeout(() => setIsMenuOpen(false), 500);
      }, 100);
    } else {
      onNavigateToSection?.(sectionId);
      // Close menu after navigation completes for same page
      setTimeout(() => setIsMenuOpen(false), 500);
    }
  };

  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'our-dogs', label: t('ourDogs') },
    { id: 'contact', label: t('contact') },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-xl bg-white/30 dark:bg-black/30 border-b border-gray-200/50 dark:border-gray-700/50 shadow-lg' 
          : 'backdrop-blur-xl bg-white/30 dark:bg-black/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => handleNavigation('home')}
            className="flex items-center space-x-3 group"
          >
            <img 
              src="/lovable-uploads/4fc6ff94-b7a7-4209-83d2-aa6063da5978.png" 
              alt="SHOLO Logo" 
              className="h-12 w-12 logo-circular group-hover:scale-105 transition-transform duration-200 object-cover"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="px-4 py-2 rounded-xl text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Settings */}
          <div className="hidden md:flex items-center">
            <SettingsDropdown />
          </div>

          {/* Mobile Menu Button and Settings */}
          <div className="md:hidden flex items-center space-x-2" ref={mobileMenuRef}>
            <SettingsDropdown />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-xl transition-all duration-200 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 ${
                isMenuOpen ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
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

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden backdrop-blur-xl bg-white/30 dark:bg-black/30 rounded-2xl shadow-xl border border-gray-200/50 dark:border-gray-700/50 mb-4 animate-scale-in">
            <nav className="px-6 py-4 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="block w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200"
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

export default Header;
