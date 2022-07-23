import { Logo, Navigation, ThemeToggle } from './components';
import { FC } from 'react';

import classes from './Aside.module.css';

export const Aside: FC = () => {
  return (
    <aside className={classes.aside}>
      <div className={classes.container}>
        <header className={classes.header}>
          <Logo/>
          <ThemeToggle/>
        </header>
        <h1>Hi intern!</h1>
        <h4>Welcome to MI 2022 Front-end test</h4>
        <h6>Lets start using The Cat API</h6>
        <Navigation/>
      </div>
    </aside>
  );
};