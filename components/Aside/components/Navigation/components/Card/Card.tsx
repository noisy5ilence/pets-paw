import { FC } from 'react';
import Image from 'next/image';

import cn from 'classnames';

import classes from './Card.module.css';

interface Props {
  color: string;
  src: string;
  name: string;
  isActive: boolean;
}

export const Card: FC<Props> = ({ color, src, name, isActive }) => {
  return (
    <div className={cn(classes.card, {[classes.active]: isActive})} style={{ background: color }}>
      <Image src={src} alt={name} layout='fill'/>
    </div>
  );
};