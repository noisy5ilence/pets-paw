import { FC, InputHTMLAttributes } from 'react';

import classes from './Toggle.module.css';

export const Toggle: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  return (
    <label className={classes.label}>
      <input {...props} className={classes.input} type="checkbox" />
      <span className={classes.indicator}/>
    </label>
  )
};