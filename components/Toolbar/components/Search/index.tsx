'use client';

import { ChangeEvent, FC, FormEvent, useState } from 'react';
import cn from 'classnames';
import { useRouter } from 'next/navigation';

import SearchIcon from './icons/search.svg';

import styles from './styles.module.css';

const Search: FC = () => {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
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
        type='text'
        value={query}
        onChange={handleChange}
        placeholder='Search for breeds by name'
      />
      <button tabIndex={-1} className={cn('button', styles.submit)} type='submit'>
        <SearchIcon />
      </button>
    </form>
  );
};

export default Search;
