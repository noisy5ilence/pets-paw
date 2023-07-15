import { FC, ReactNode } from 'react';
import classes from 'classnames';

import styles from './styles.module.css';

interface Props {
  children?: ReactNode;
  replace?: boolean;
}

const NoItem: FC<Props> = ({ children, replace }) => {
  return (
    <div className={classes(styles.root, 'appear-bottom')}>
      {replace ? (
        <span className={styles.info}>{children}</span>
      ) : (
        <span className={styles.info}>No {children || 'items'} yet.</span>
      )}
    </div>
  );
};

export default NoItem;
