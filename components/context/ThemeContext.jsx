'use client';
// Handles theme changing. Setup to add multiple more themes via drop-down

import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import darkTheme from '../../app/themes/darkTheme';
import beachTheme from '../../app/themes/beachTheme';

const ThemeToggleContext = createContext();

const themeOptions = {
  dark: darkTheme,
  beach: beachTheme,
};

const themeKeys = Object.keys(themeOptions);

export function ThemeProvider({ children }) {
  const [themeName, setThemeName] = useState(null); // initially null
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const initial = stored && themeKeys.includes(stored) ? stored : 'dark';
    setThemeName(initial);
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (themeName) localStorage.setItem('theme', themeName);
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName(prev => {
      const currentIndex = themeKeys.indexOf(prev);
      const nextIndex = (currentIndex + 1) % themeKeys.length;
      return themeKeys[nextIndex];
    });
  };

  const theme = useMemo(() => themeOptions[themeName] || darkTheme, [themeName]);

  if (!hasMounted || !themeName) return null; // ⏳ wait for theme to load

  return (
    <ThemeToggleContext.Provider value={{ theme, toggleTheme, themeName, setThemeName }}>
      {children}
    </ThemeToggleContext.Provider>
  );
}

export const useThemeToggle = () => useContext(ThemeToggleContext);