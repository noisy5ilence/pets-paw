'use client';

import { useQueryClient } from '@tanstack/react-query';

import styles from './layout.module.css';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const queryClient = useQueryClient();

  const handleReset = () => {
    queryClient.refetchQueries().then(() => reset());
  };

  return (
    <div className={styles.error}>
      <h2>Something went wrong</h2>
      <button className='button alt' onClick={handleReset}>
        Try again
      </button>
    </div>
  );
}
