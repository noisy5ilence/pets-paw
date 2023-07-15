import classes from 'classnames';

import styles from './page.module.css';

export default function Home() {
  return (
    <div className={classes(styles.root, 'appear-right')}>
      <div className={styles.figure} />
      <div className={styles.background} />
    </div>
  );
}
