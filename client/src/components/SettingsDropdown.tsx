
import { useState, memo, useCallback, useEffect } from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface SettingsDropdownProps {
  onOpenChange?: (open: boolean) => void;
}

const SettingsDropdown = ({ onOpenChange }: SettingsDropdownProps) => {
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const [spinDirection, setSpinDirection] = useState('normal');

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: t('english') },
    { code: 'bg', name: t('bulgarian') }
  ];

  const handleLanguageChange = useCallback((langCode: Language) => {
    setLanguage(langCode);
  }, [setLanguage]);

  const handleThemeToggle = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <DropdownMenu onOpenChange={(open) => {
      setIsOpen(open);
      onOpenChange?.(open);
      
      // Trigger spinning animation
      setIsSpinning(true);
      setSpinDirection(open ? 'normal' : 'reverse');
      
      // Stop spinning after brief moment
      setTimeout(() => {
        setIsSpinning(false);
      }, 500);
    }}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-9 w-9 p-0 rounded-full hover:bg-gray-100/50 dark:hover:bg-gray-800/50 transition-all duration-200 focus:outline-none focus:ring-0 focus:border-none ${
            isOpen ? 'text-blue-600 dark:text-blue-400 bg-gray-100/50 dark:bg-gray-800/50' : 'text-black dark:text-white hover:text-blue-600 dark:hover:text-blue-400'
          }`}
        >
          <svg 
            className={`h-4 w-4 transition-transform duration-300 ${isSpinning ? (spinDirection === 'reverse' ? 'animate-spin' : 'animate-spin') : ''}`}
            style={{ animationDirection: spinDirection === 'reverse' ? 'reverse' : 'normal' }}
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            strokeWidth={2}
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
            />
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-44 backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-xl z-[100] border-0 focus:outline-none rounded-3xl border border-white/20 dark:border-gray-700/50"
        sideOffset={16}
        alignOffset={-8}
        avoidCollisions={true}
        collisionPadding={8}
      >
        <DropdownMenuLabel className="text-black dark:text-white text-center text-xs font-medium uppercase tracking-wide py-1">
          {t('themeLabel')}
        </DropdownMenuLabel>
        <DropdownMenuItem 
          onClick={handleThemeToggle} 
          className="text-black dark:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 focus:bg-gray-100/50 dark:focus:bg-gray-800/50 focus:outline-none justify-center text-center py-2 text-sm"
        >
          {isDark ? t('lightMode') : t('darkMode')}
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700 my-1" />
        
        <DropdownMenuLabel className="text-black dark:text-white text-center text-xs font-medium uppercase tracking-wide py-1">
          {t('languageLabel')}
        </DropdownMenuLabel>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`text-black dark:text-white hover:bg-gray-100/50 dark:hover:bg-gray-800/50 focus:bg-gray-100/50 dark:focus:bg-gray-800/50 focus:outline-none justify-center text-center py-2 text-sm ${
              language === lang.code ? 'bg-blue-50/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' : ''
            }`}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default memo(SettingsDropdown);
