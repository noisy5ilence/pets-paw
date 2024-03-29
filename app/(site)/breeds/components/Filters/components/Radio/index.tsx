import { ChangeEvent, FC, InputHTMLAttributes, ReactElement } from 'react';

import styles from './styles.module.css';

interface Props {
  options: Array<{ value: string | number; icon: ReactElement }>;
}

const Radio: FC<InputHTMLAttributes<HTMLInputElement> & Props> = ({ options, ...props }) => {
  return (
    <fieldset className={styles.root}>
      {options.map((option) => (
        <label key={option.value} className={styles.radio}>
          <input
            type='radio'
            {...props}
            onClick={(event) => {
              const { name, value } = event.target as HTMLInputElement;
              props.onClick?.(event);
              props.onChange?.({ target: { name, value } } as ChangeEvent<HTMLInputElement>);
            }}
            onChange={() => null}
            className={styles.input}
            value={option.value}
            checked={option.value === props.value}
          />
          <span className={styles.outline}>
            <span className={styles.icon}>{option.icon}</span>
          </span>
        </label>
      ))}
    </fieldset>
  );
};

export default Radio;
