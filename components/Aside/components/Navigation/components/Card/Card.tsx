import { StaticImageData } from 'next/image';
import { FC } from 'react';

import cn from 'classnames';

import classes from './Card.module.css';

interface Props {
  color: string;
  name: string;
  isActive: boolean;
  background: StaticImageData;
}

export const Card: FC<Props> = ({ color, background, isActive }) => {
    return (
    <div
      className={cn(classes.card, {[classes.active]: isActive})}
      style={{ backgroundColor: color, backgroundImage: `url(${background.src})` }}
    />
  );
};