'use client';

import { Dispatch, FC, SetStateAction } from 'react';
import cn from 'classnames';

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
  const [filters, applyFilters] = useFilters({ onFilter, breeds, isFetched });

  return (
    <ul className={styles.root}>
      <li className={cn(styles.filter, styles.breed)}>
        <Select onChange={applyFilters} value={filters.breed || ''} name='breed'>
          <option value=''>All breeds</option>
          {breeds.map(({ name, id }) => (
            <option value={id} key={id}>
              {name}
            </option>
          ))}
        </Select>
      </li>
      <li className={cn(styles.filter, styles.limit)}>
        <Select onChange={applyFilters} value={filters.limit || ''} name='limit'>
          <option value=''>Limit</option>
          {limits.map((limit) => (
            <option value={limit} key={limit}>
              Limit: {limit}
            </option>
          ))}
        </Select>
      </li>
      <li className={cn(styles.filter, styles.sorting)}>
        <Radio
          options={Object.values(sorting)}
          value={filters.sorting || 'asc'}
          name='sorting'
          onChange={applyFilters}
        />
      </li>
    </ul>
  );
};

export default Filters;
