import { forwardRef, InputHTMLAttributes } from 'react';
import classes from 'classnames';

import ArrowIcon from './icons/arrow.svg';

import styles from './styles.module.css';

const Select = forwardRef<HTMLSelectElement, InputHTMLAttributes<HTMLSelectElement> & { rootClassName?: string }>(
  ({ rootClassName, ...props }, ref) => {
    return (
      <label className={classes(styles.root, rootClassName)}>
        <select {...props} className={classes(styles.input, props.className)} ref={ref} />
        <span className={styles.icon}>
          <ArrowIcon />
        </span>
      </label>
    );
  }
);

Select.displayName = 'Select';
export default Select;
