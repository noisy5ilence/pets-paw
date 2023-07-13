'use client';

import { FC, ReactNode } from 'react';
import classes from 'classnames';
import { usePathname } from 'next/navigation';

import Navigation from '@/components/Navigation';

import styles from './styles.module.css';

const Aside: FC<{ header: ReactNode }> = ({ header }) => {
  const pathname = usePathname();

  return (
    <aside
      className={classes(styles.root, 'appear-left', { [styles.isHide]: pathname !== '/' })}
    >
      <div className={styles.aside}>
        <div className={styles.header}>{header}</div>
        <h1 className={styles.title}>Hi, cat lover!</h1>
        <h2 className={styles.subtitle}>Welcome to cat&#39;s heaven ^_^</h2>
        <h3 className={styles.description}>Lets start using The Cat API</h3>
        <div className={styles.navigation}>
          <Navigation />
        </div>
      </div>
    </aside>
  );
};

export default Aside;
