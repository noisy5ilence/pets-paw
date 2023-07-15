import { forwardRef, InputHTMLAttributes } from 'react';

import ArrowIcon from './icons/arrow.svg';

import styles from './styles.module.css';

const Select = forwardRef<HTMLSelectElement, InputHTMLAttributes<HTMLSelectElement>>((props, ref) => {
  return (
    <label className={styles.root}>
      <select {...props} className={styles.input} ref={ref} />
      <span className={styles.icon}>
        <ArrowIcon />
      </span>
    </label>
  );
});

Select.displayName = 'Select';
export default Select;
