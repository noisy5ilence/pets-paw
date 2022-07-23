import { FC, ReactElement } from 'react';
import { Header } from '../Header';

import classes from './MainLayout.module.css';

interface Props {
  children: ReactElement;
}

export const MainLayout: FC<Props> = ({ children }) => {
  return (
    <main className={classes.main}>
      <div className={classes.header}>
        <Header/>
      </div>
      <div className={classes.content}>
        {children}
      </div>
    </main>
  );
};