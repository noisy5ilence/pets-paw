import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC } from 'react';
import Link from 'next/link';

import { Card } from './components';

import classes from './Navigation.module.css';

const routes = [
  ['voting', 'var(--color-8)'],
  ['breeds', 'var(--color-7)'],
  ['gallery', 'var(--color-9)']
];

export const Navigation: FC = () => {
  const router = useRouter();
  return (
    <nav>
      <ul className={classes.list}>
        { routes.map(([key, color]) => {
          const isActive = router.asPath.includes(key);
          return (
            <li key={key} className={classes.item}>
              <div className={classes.card}>
                <Card color={color} src={`/components/Aside/Navigation/${key}.png`} name={key} isActive={isActive}/>
              </div>
              <button className={cn('button', { active: isActive })}>
                <Link href={`/${key}`}>{key.toUpperCase()}</Link>
              </button>
            </li>
          )
        }) }
      </ul>
    </nav>
  )
};