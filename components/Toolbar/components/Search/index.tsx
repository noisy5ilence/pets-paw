'use client';

import { ChangeEvent, FC, FormEvent, useState } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/navigation';

import styles from './styles.module.css';

const Search: FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setQuery(value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    query && router.replace(`/search/?query=${query}`);
  };

  return (
    <form className={styles.root} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for breeds by name"
      />
      <button
        tabIndex={-1}
        className={cn('button', styles.submit)}
        type="submit"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.3613 18.2168L14.6012 13.2662C15.8251 11.8113 16.4957 9.98069 16.4957 8.07499C16.4957 3.62251 12.8732 0 8.4207 0C3.96821 0 0.345703 3.62251 0.345703 8.07499C0.345703 12.5275 3.96821 16.15 8.4207 16.15C10.0922 16.15 11.6851 15.6458 13.047 14.6888L17.8432 19.677C18.0436 19.8852 18.3133 20 18.6022 20C18.8757 20 19.1352 19.8957 19.3321 19.7061C19.7506 19.3034 19.764 18.6357 19.3613 18.2168ZM8.4207 2.10652C11.7118 2.10652 14.3892 4.78391 14.3892 8.07499C14.3892 11.3661 11.7118 14.0435 8.4207 14.0435C5.12961 14.0435 2.45222 11.3661 2.45222 8.07499C2.45222 4.78391 5.12961 2.10652 8.4207 2.10652Z"
            fill="white"
          />
        </svg>
      </button>
    </form>
  );
};

export default Search;
