import { FC } from 'react';

import ErrorIcon from './icons/error.svg';
import SuccessIcon from './icons/success.svg';

import styles from './styles.module.css';

interface Props {
  type: 'success' | 'error';
}

const Status: FC<Props> = ({ type }) => {
  return (
    <div className={styles.root}>
      <div className={styles.icon}>{type === 'success' ? <SuccessIcon /> : <ErrorIcon />}</div>
      {type === 'success' ? 'Thanks for the Upload - Cat found!' : 'No Cat found - try a different one'}
    </div>
  );
};

export default Status;
