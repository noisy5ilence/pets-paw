'use client'; // Error components must be Client Components

import { useEffect } from 'react';

import styles from './layout.module.css';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={styles.error}>
      <h2>Something went wrong</h2>
      <button className='button upload' onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}
