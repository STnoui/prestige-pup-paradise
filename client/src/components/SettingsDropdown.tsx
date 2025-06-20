
import { useState } from 'react';
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

const SettingsDropdown = () => {
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'bg', name: 'Български' }
  ];

  return (
    <DropdownMenu onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className={`h-9 w-9 p-0 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 ${
            isOpen ? 'text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'
          }`}
        >
          <svg 
            className="h-4 w-4" 
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
        className="w-48 backdrop-blur-xl bg-white/30 dark:bg-black/30 shadow-xl z-[100] border-0"
        sideOffset={8}
        alignOffset={-8}
        avoidCollisions={true}
        collisionPadding={8}
      >
        <DropdownMenuLabel className="text-gray-900 dark:text-white text-center">{t('settings')}</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
        
        <DropdownMenuLabel className="text-xs text-gray-500 dark:text-gray-400 font-normal text-center">
          {t('theme')}
        </DropdownMenuLabel>
        <DropdownMenuItem 
          onClick={toggleTheme} 
          className="text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 focus:bg-gray-100/50 dark:focus:bg-gray-800/50 justify-center text-center"
        >
          <div className="flex items-center">
            {isDark ? (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
                {t('lightMode')}
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
                {t('darkMode')}
              </>
            )}
          </div>
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
        
        <DropdownMenuLabel className="text-xs text-gray-500 dark:text-gray-400 font-normal text-center">
          {t('language')}
        </DropdownMenuLabel>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-100/50 dark:hover:bg-gray-800/50 focus:bg-gray-100/50 dark:focus:bg-gray-800/50 justify-center text-center ${
              language === lang.code ? 'bg-blue-50/50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' : ''
            }`}
          >
            <div className="flex items-center justify-center w-full">
              {lang.name}
              {language === lang.code && <span className="ml-2 text-blue-600 dark:text-blue-400">✓</span>}
            </div>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsDropdown;
