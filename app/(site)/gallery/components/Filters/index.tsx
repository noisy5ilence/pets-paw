import { FC, FormEvent } from 'react';
import classes from 'classnames';

import useBreeds from '@/app/(site)/breeds/useBreeds';
import Select from '@/components/Select';
import limits from '@/constants/limits';
import useQueryFilters from '@/hooks/useQueryFilters';

import UpdateIcon from './icons/update.svg';

import styles from './styles.module.css';

export type QueryFilters = Partial<{
  page: string;
  limit: string;
  type: 'jpg,png' | 'gif';
  breed: string;
  order: 'asc' | 'desc' | 'rand';
}>;

interface Props {
  onFilter: (filters: QueryFilters) => void;
  isLoading: boolean;
}

const mapper = (filters: QueryFilters, name: string, value: string) => ({
  ...filters,
  page: name === 'limit' ? '' : filters.page,
  [name]: value
});

const Filters: FC<Props> = ({ onFilter, isLoading }) => {
  const { data: breeds, isFetched } = useBreeds();
  const { filters, applyFilters } = useQueryFilters<QueryFilters>({ mapper });

  const handleApplyFilters = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    event.stopPropagation();

    onFilter(filters);
  };

  return (
    <form className={styles.root} onSubmit={handleApplyFilters}>
      <div className={styles.column}>
        <div className={styles.row}>
          <span className={styles.label}>Order</span>
          <div className={styles.value}>
            <Select
              className={styles.select}
              rootClassName={styles.selectRoot}
              onChange={applyFilters}
              value={filters.order || ''}
              name='order'
            >
              <option value=''>Random</option>
              <option value='asc'>Asc</option>
              <option value='desc'>Desc</option>
            </Select>
          </div>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Breed</span>
          <div className={styles.value}>
            <Select
              className={styles.select}
              rootClassName={styles.selectRoot}
              onChange={applyFilters}
              value={filters.breed || ''}
              name='breed'
              disabled={!isFetched}
            >
              <option value=''>None</option>
              {breeds?.map((breed) => (
                <option key={breed.id} value={breed.id || ''}>
                  {breed.name}
                </option>
              ))}
            </Select>
          </div>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.row}>
          <span className={styles.label}>Type</span>
          <div className={styles.value}>
            <Select
              className={styles.select}
              rootClassName={styles.selectRoot}
              onChange={applyFilters}
              value={filters.type || ''}
              name='type'
            >
              <option value=''>All</option>
              <option value='jpg,png'>Static</option>
              <option value='gif'>Animated</option>
            </Select>
          </div>
        </div>
        <div className={styles.row}>
          <span className={styles.label}>Limit</span>
          <div className={styles.value}>
            <Select
              className={styles.select}
              rootClassName={styles.selectRoot}
              onChange={applyFilters}
              value={filters.limit || ''}
              name='limit'
            >
              {limits.map((limit) => (
                <option key={limit} value={limit}>
                  {limit} items per page
                </option>
              ))}
            </Select>
            <button type='submit' className={classes('button', styles.update)} disabled={isLoading}>
              <div className={styles.icon}>
                <UpdateIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Filters;
