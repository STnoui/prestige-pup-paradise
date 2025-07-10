
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
  isTransitioning: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem('theme');
    
    let shouldUseDark = false;
    
    if (savedTheme) {
      // Use saved preference if available
      shouldUseDark = savedTheme === 'dark';
    } else {
      // No saved preference, use system preference
      shouldUseDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    setIsDark(shouldUseDark);
    if (shouldUseDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      // Only auto-switch if user hasn't set a manual preference
      const currentSavedTheme = localStorage.getItem('theme');
      if (!currentSavedTheme) {
        setIsDark(e.matches);
        if (e.matches) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  const toggleTheme = () => {
    setIsTransitioning(true);
    
    // Create glass overlay for transition
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: ${isDark ? 'rgba(255, 255, 255, 0.3)' : 'rgba(0, 0, 0, 0.3)'};
      backdrop-filter: blur(10px);
      z-index: 9999;
      opacity: 0;
      transition: opacity 800ms ease-in-out;
      pointer-events: none;
    `;
    document.body.appendChild(overlay);
    
    // Trigger overlay animation
    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
    });
    
    // Change theme after overlay is visible
    setTimeout(() => {
      setIsDark(!isDark);
      if (!isDark) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      
      // Fade out overlay
      overlay.style.opacity = '0';
      
      // Remove overlay and reset state
      setTimeout(() => {
        document.body.removeChild(overlay);
        setIsTransitioning(false);
      }, 800);
    }, 400);
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme, isTransitioning }}>
      {children}
    </ThemeContext.Provider>
  );
};
