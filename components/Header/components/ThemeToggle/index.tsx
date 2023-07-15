'use client';

import { FC } from 'react';

import Toggle from '@/components/Toggle';
import { useTheme } from '@/hooks/useTheme';

import DarkIcon from './icons/dark.svg';
import LightIcon from './icons/light.svg';

import classes from './styles.module.css';

type Props = {
  initialTheme: Theme;
};

const ThemeToggle: FC<Props> = ({ initialTheme }) => {
  const [theme, setTheme] = useTheme({ initialTheme });

  return (
    <div className={classes.root}>
      <figure className={classes.indicator}>{theme === 'dark' ? <LightIcon /> : <DarkIcon />}</figure>
      <Toggle
        title='Theme toggle'
        checked={theme === 'dark'}
        onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      />
    </div>
  );
};

export default ThemeToggle;
