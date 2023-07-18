import { ReactNode } from 'react';
import classes from 'classnames';

import Loading from '@/app/(site)/loading';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import Toolbar from '@/components/Toolbar';
import breadcrumbsPortalId from '@/constants/breadcrumbsPortalId';

import Providers from '../../components/Providers';

import styles from './layout.module.css';

export default async function RootLayout({ children }: { children: ReactNode }) {
  return (
    <Providers>
      <main className={styles.root}>
        <div className={styles.container}>
          <div className={styles.toolbar}>
            <Toolbar />
          </div>
          <div className={classes(styles.page, 'appear-right')}>
            <div className={styles.breadcrumbs} id={breadcrumbsPortalId}>
              <Breadcrumbs />
            </div>
            {/*<Loading />*/}
            {children}
          </div>
        </div>
      </main>
    </Providers>
  );
}
