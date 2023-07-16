'use client';

import { FC } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import { routes } from '@/constants/routes';

import ArrowIcon from './icons/arrow.svg';

import styles from './styles.module.css';

export const Breadcrumbs: FC = () => {
  const router = useRouter();
  const pathname = usePathname();

  const routeKeys = pathname.split('/').filter(Boolean) as Array<keyof typeof routes>;

  return (
    <div className={styles.root}>
      <div className={styles.item}>
        <button className={cn('button', 'focused-via-keyboard', styles.back)} onClick={() => router.back()}>
          <ArrowIcon />
        </button>
      </div>
      <ul className={styles.list}>
        {routeKeys.map((key, index, array) => {
          const isActive = !array[index + 1];
          const route = routes[key];

          return (
            <li key={key} className={styles.item}>
              <Link
                className={cn(styles.breadcrumb, 'focused-via-keyboard', styles.link, {
                  [styles.active]: isActive
                })}
                href={route?.path || '/'}
              >
                {key || route?.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
