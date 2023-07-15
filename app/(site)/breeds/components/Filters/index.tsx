'use client';

import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import cn from 'classnames';
import { usePathname, useRouter } from 'next/navigation';

import useFilters from '@/app/(site)/breeds/useFilters';
import Select from '@/components/Select';

import Radio from './components/Radio';
import ASCIcon from './icons/asc.svg';
import DESCIcon from './icons/desc.svg';

import styles from './styles.module.css';

const sorting = {
  asc: {
    value: 'asc',
    icon: <ASCIcon />
  },
  desc: {
    value: 'desc',
    icon: <DESCIcon />
  }
};

const limits = ['5', '10', '15', '20'];

interface Props {
  breeds: Breed[];
  onFilter: Dispatch<SetStateAction<GridImage[]>>;
  isFetched: boolean;
}

const Filters: FC<Props> = ({ breeds, onFilter, isFetched }) => {
  const pathname = usePathname();
  const router = useRouter();
  const filters = useFilters({ onFilter, breeds, isFetched });

  const handleChange = ({ target: { value, name } }: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const updatedFilters = { ...filters, [name]: value };
    const search = Object.entries(updatedFilters)
      .filter(([_, value]) => value)
      .map(([key, value]) => `${key}=${value}`)
      .join('&');

    router.replace(`${pathname}?${search}`);
  };

  return (
    <ul className={styles.root}>
      <li className={cn(styles.filter, styles.breed)}>
        <Select onChange={handleChange} value={filters.breed || ''} name='breed'>
          <option value=''>All breeds</option>
          {breeds.map(({ name, id }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </Select>
      </li>
      <li className={cn(styles.filter, styles.limit)}>
        <Select onChange={handleChange} value={filters.limit || ''} name='limit'>
          <option value=''>Limit</option>
          {limits.map((limit) => (
            <option value={limit} key={limit}>
              Limit: {limit}
            </option>
          ))}
        </Select>
      </li>
      <li className={cn(styles.filter, styles.sorting)}>
        <Radio options={Object.values(sorting)} value={filters.sorting || ''} name='sorting' onChange={handleChange} />
      </li>
    </ul>
  );
};

export default Filters;
