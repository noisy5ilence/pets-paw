import { FC, ReactNode } from 'react';
import classes from 'classnames';

import styles from './styles.module.css';

interface Props {
  children?: ReactNode;
}

const NoItem: FC<Props> = ({ children }) => {
  return (
    <div className={classes(styles.root, 'appear-bottom')}>
      <span className={styles.info}>No {children || 'items'} yet.</span>
    </div>
  )
};

export default NoItem;