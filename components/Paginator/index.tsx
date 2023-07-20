import { FC } from 'react';
import classes from 'classnames';

import NextIcon from './icons/next.svg';
import PreviousIcon from './icons/previous.svg';

import styles from './styles.module.css';

interface Props {
  total: number;
  perPage?: number;
  page: number;
  name: string;
  disabled?: boolean;
  onChange: ({ target: { value, name } }: { target: { value: string; name: string } }) => void;
}

const Paginator: FC<Props> = ({ total, page, perPage = total, name, onChange, disabled }) => {
  const totalPages = Math.ceil(total / perPage);
  if (total <= perPage) return null;
  return (
    <div className={styles.root}>
      <button
        className={classes('button', 'alt', styles.button)}
        disabled={page == 0 || disabled}
        onClick={() => {
          const nextPage = page - 1;
          return onChange({ target: { value: `${nextPage < 0 ? 0 : nextPage}`, name } });
        }}
      >
        <figure className={styles.icon}>
          <PreviousIcon />
        </figure>
        PREV
      </button>
      <button
        className={classes('button', 'alt', styles.button)}
        disabled={page == totalPages || disabled}
        onClick={() => {
          const nextPage = +page + 1;
          return onChange({ target: { value: `${nextPage > totalPages ? totalPages : nextPage}`, name } });
        }}
      >
        NEXT
        <figure className={styles.icon}>
          <NextIcon />
        </figure>
      </button>
    </div>
  );
};

export default Paginator;
