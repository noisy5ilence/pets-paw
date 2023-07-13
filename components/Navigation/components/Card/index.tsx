import { FC } from 'react';
import cn from 'classnames';
import { StaticImageData } from 'next/image';

import classes from './styles.module.css';

interface Props {
  color: string;
  name: string;
  isActive: boolean;
  background: StaticImageData;
}

const Card: FC<Props> = ({ color, background, isActive }) => {
  return (
    <div
      className={cn(classes.root, { [classes.active]: isActive })}
      style={{
        backgroundColor: color,
        backgroundImage: `url(${background.src})`,
      }}
    />
  );
};

export default Card;
