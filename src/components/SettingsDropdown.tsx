
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
import { Settings } from 'lucide-react';

const SettingsDropdown = () => {
  const { language, setLanguage, t } = useLanguage();
  const { isDark, toggleTheme } = useTheme();

  const languages: { code: Language; name: string }[] = [
    { code: 'en', name: 'English' },
    { code: 'bg', name: 'Български' },
    { code: 'es', name: 'Español' }
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="h-9 w-9 p-0 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
        >
          <Settings className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-white dark:bg-gray-800 shadow-xl z-[100]"
        sideOffset={8}
      >
        <DropdownMenuLabel className="text-gray-900 dark:text-white">Settings</DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
        
        <DropdownMenuLabel className="text-xs text-gray-500 dark:text-gray-400 font-normal">
          Theme
        </DropdownMenuLabel>
        <DropdownMenuItem 
          onClick={toggleTheme} 
          className="text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700"
        >
          {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </DropdownMenuItem>
        
        <DropdownMenuSeparator className="bg-gray-200 dark:bg-gray-700" />
        
        <DropdownMenuLabel className="text-xs text-gray-500 dark:text-gray-400 font-normal">
          Language
        </DropdownMenuLabel>
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:bg-gray-100 dark:focus:bg-gray-700 ${
              language === lang.code ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300' : ''
            }`}
          >
            {lang.name}
            {language === lang.code && <span className="ml-auto text-blue-600 dark:text-blue-400">✓</span>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SettingsDropdown;

