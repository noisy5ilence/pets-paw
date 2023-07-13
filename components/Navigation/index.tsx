'use client';

import { FC } from 'react';
import cn from 'classnames';
import { StaticImageData } from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { routes } from '@/constants/routes';
import breeds from '@/public/breeds.png';
import gallery from '@/public/gallery.png';
import voting from '@/public/voting.png';

import Card from './components/Card';

import styles from './styles.module.css';

const items: [keyof typeof routes, string, StaticImageData][] = [
  ['voting', 'var(--color-8)', voting],
  ['breeds', 'var(--color-7)', breeds],
  ['gallery', 'var(--color-9)', gallery],
];


const Navigation: FC = () => {
  const path = usePathname();

  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        {items.map(([key, color, background]) => {
          const route = routes[key];
          const isActive = path.includes(route.path);

          return (
            <li key={key} className={styles.item}>
              <Link href={route.path} className={styles.link}>
                <div className={styles.card}>
                  <Card
                    color={color}
                    name={key}
                    isActive={isActive}
                    background={background}
                  />
                </div>
                <button
                  tabIndex={-1}
                  className={cn('button', { active: isActive })}
                >
                  {route.title}
                </button>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
