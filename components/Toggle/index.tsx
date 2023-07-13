import { FC, InputHTMLAttributes, KeyboardEvent,useRef } from 'react';

import classes from './styles.module.css';

const Toggle: FC<InputHTMLAttributes<HTMLInputElement>> = ({ ...props }) => {
  const selectRef = useRef<HTMLInputElement>(null);

  const handleLabelKeyDown = (event: KeyboardEvent<HTMLLabelElement>) => {
    if (event.code !== 'Space') return;

    selectRef.current?.click();
  };

  return (
    <label
      tabIndex={0}
      className={classes.label}
      onKeyDown={handleLabelKeyDown}
      title={props.title}
    >
      <input
        {...props}
        className={classes.input}
        type="checkbox"
        ref={selectRef}
      />
      <span className={classes.indicator} />
    </label>
  );
};

export default Toggle;
