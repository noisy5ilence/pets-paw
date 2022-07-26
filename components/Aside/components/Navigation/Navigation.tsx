import cn from 'classnames';
import { routes } from '@/constants/routes';
import { StaticImageData } from 'next/image';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Link from 'next/link';

import { Card } from './components';

import classes from './Navigation.module.css';

import voting from '@/public/components/Aside/Navigation/voting.png';
import breeds from '@/public/components/Aside/Navigation/breeds.png';
import gallery from '@/public/components/Aside/Navigation/gallery.png';

const items: [keyof typeof routes, string, StaticImageData][] = [
  ['voting', 'var(--color-8)', voting],
  ['breeds', 'var(--color-7)', breeds],
  ['gallery', 'var(--color-9)', gallery]
];

export const Navigation: FC = () => {
  const router = useRouter();
  return (
    <nav>
      <ul className={classes.list}>
        { items.map(([key, color, background]) => {
          const route = routes[key];
          const isActive = router.asPath.includes(route.path);

          return (
            <li key={key} className={classes.item}>
              <div className={classes.card}>
                <Card color={color} name={key} isActive={isActive} background={background}/>
              </div>
              <button className={cn('button', { active: isActive })}>
                <Link href={route.path}>{route.title}</Link>
              </button>
            </li>
          )
        }) }
      </ul>
    </nav>
  )
};