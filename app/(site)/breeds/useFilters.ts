import { Dispatch, SetStateAction, useEffect } from 'react';

import useQueryFilters, { ApplyFilters } from '@/hooks/useQueryFilters';

export type QueryFilters = Partial<{
  page: string;
  limit: string;
  breed: string;
  order: 'asc' | 'desc';
}>;

export interface Props {
  breeds: BreedWithImage[];
  onFilter: Dispatch<SetStateAction<ImageWithName[]>>;
  isFetched: boolean;
}

const mapper = (filters: QueryFilters, name: string, value: string) => ({
  ...filters,
  page: name === 'limit' ? '' : filters.page,
  [name]: value
});

const useFilters = ({ breeds, onFilter, isFetched }: Props): [QueryFilters, ApplyFilters] => {
  const { search, filters, applyFilters } = useQueryFilters<QueryFilters>({ mapper });

  useEffect(() => {
    if (!isFetched) return;

    const limit = parseInt(filters.limit || `${breeds.length}`);
    const page = parseInt(filters.page || '0');

    onFilter(() => {
      return [...breeds]
        .sort((a, b) => {
          return filters.order === 'asc'
            ? a.name.localeCompare(b.name)
            : filters.order === 'desc'
            ? b.name.localeCompare(a.name)
            : 0;
        })
        .filter(({ id }) => (filters.breed !== undefined ? filters.breed == id : true))
        .slice(page * limit, page * limit + limit)
        .map(({ image, name, id }) => ({ ...image!, id, name }));
    });
  }, [isFetched, onFilter, breeds, filters.breed, filters.limit, filters.order, filters.page]);

  return [filters, applyFilters];
};

export default useFilters;
