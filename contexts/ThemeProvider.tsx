import { createContext, FC, ReactNode, useCallback, useEffect, useMemo, useState } from 'react';

export const ThemeContext = createContext<[Themes | undefined, () => void] | []>([]);

export enum Themes {
  dark = 'dark',
  light = 'light'
}

interface Props {
  children: ReactNode;
}

export const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, setTheme] = useState<Themes>();

  useEffect(() => {
    const theme = localStorage.getItem('theme') as Themes || Themes.light;

    setTheme(theme);
  }, []);

  useEffect(() => {
    theme && localStorage.setItem('theme', theme);

    document.body.setAttribute('data-theme', theme || Themes.light);
  }, [theme]);

  const toggle = useCallback(() => {
    setTheme(theme => theme === Themes.dark ? Themes.light : Themes.dark);
  }, []);

  return (
    <ThemeContext.Provider value={useMemo(() => [theme, toggle], [theme, toggle])}>
      {children}
    </ThemeContext.Provider>
  );
};