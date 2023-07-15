'use client';

import { FC, ReactElement, useLayoutEffect, useRef } from 'react';
import cn from 'classnames';
import { useAtomValue } from 'jotai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { routes } from '@/constants/routes';
import updateLogsAtom from '@/constants/updateLogsAtom';

import DislikeIcon from './icons/dislike.svg';
import FavIcon from './icons/fav.svg';
import LikeIcon from './icons/like.svg';

import styles from './styles.module.css';

const items: [keyof typeof routes, ReactElement][] = [
  ['likes', <LikeIcon key='likes' />],
  ['favorites', <FavIcon key='favorites' />],
  ['dislikes', <DislikeIcon key='dislikes' />]
];

const Navigation: FC = () => {
  const pathname = usePathname();
  const update = useAtomValue(updateLogsAtom);
  const itemsRef = useRef<Record<string, HTMLLIElement>>({});

  useLayoutEffect(() => {
    if (!update) return;

    const { type } = update;

    const item = itemsRef.current[type];

    if (!item) return;

    item.classList.add('pulse');
    item.onanimationend = () => item.classList.remove('pulse');
  }, [update]);

  return (
    <nav className={styles.root}>
      <ul className={styles.list}>
        {items.map(([key, icon]) => {
          const route = routes[key];
          const isActive = pathname.includes(route.path);

          return (
            <li key={key} title={key} className={styles.item} ref={(element) => (itemsRef.current[key] = element!)}>
              <Link href={route.path}>
                <button tabIndex={-1} className={cn('button vector', { active: isActive })}>
                  {icon}
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
