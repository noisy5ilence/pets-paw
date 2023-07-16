import Loader from '@/components/Loader';

import styles from './layout.module.css';

export default function Loading() {
  return (
    <div className={styles.loader}>
      <Loader />
    </div>
  );
}
