import { BreedsSearch, Navigation, SideMenu } from './components';
import { FC } from 'react';

import classes from './Header.module.css';

export const Header: FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.sideMenu}>
        <SideMenu/>
      </div>
      <div className={classes.search}>
        <BreedsSearch/>
      </div>
      <div className={classes.navigation}>
        <Navigation/>
      </div>
    </header>
  );
};