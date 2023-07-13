'use client';

import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

export const useTheme = ({ initialTheme }: { initialTheme?: Theme } = {}) => {
  const themeState = useState<Theme>(() => {
    const theme = (Cookies.get('theme') || initialTheme) as Theme;

    return theme;
  });

  const [theme, setTheme] = themeState;

  useEffect(() => {
    if (!theme) {
      return setTheme(
        window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      );
    }

    document.body.setAttribute('data-theme', theme);
    Cookies.set('theme', theme);
  }, [theme, setTheme]);

  return themeState;
};
