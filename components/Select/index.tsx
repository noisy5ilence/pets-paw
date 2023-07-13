import { forwardRef,InputHTMLAttributes } from 'react';

import styles from './styles.module.css';

export const Select = forwardRef<
  HTMLSelectElement,
  InputHTMLAttributes<HTMLSelectElement>
>((props, ref) => {
  return (
    <label className={styles.root}>
      <select {...props} className={styles.input} ref={ref} />
      <span className={styles.icon}>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.59406 9.17417L11.7538 4.01436C12.0821 3.68616 12.0821 3.15395 11.7538 2.82587C11.4256 2.4978 10.8935 2.4978 10.5655 2.82587L5.99993 7.39154L1.43458 2.82606C1.10635 2.49792 0.574264 2.49792 0.24617 2.82606C-0.0820567 3.15414 -0.0820567 3.68628 0.24617 4.01447L5.40591 9.17431C5.57003 9.33836 5.78492 9.42029 5.9999 9.42029C6.21498 9.42029 6.43002 9.3382 6.59406 9.17417Z"
            fill="#8C8C8C"
          />
        </svg>
      </span>
    </label>
  );
});

Select.displayName = 'Select';