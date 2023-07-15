import { Dispatch, SetStateAction, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

type QueryFilters = Partial<{
  page: string;
  limit: string;
  breed: string;
  sorting: 'asc' | 'desc';
}>;
const useFilters = ({
  breeds,
  onFilter,
  isFetched
}: {
  isFetched: boolean;
  breeds: Breed[];
  onFilter: Dispatch<SetStateAction<GridImage[]>>;
}): QueryFilters => {
  const params = useSearchParams();
  const filters: QueryFilters = Object.fromEntries(params.entries());

  const search = params.toString();

  useEffect(() => {
    if (!isFetched) return;
    const params = new URLSearchParams(location.search);
    const filters = Object.fromEntries(params.entries());

    onFilter(() => {
      return [...breeds]
        .sort((a, b) => {
          return filters.sorting === 'asc'
            ? a.name.localeCompare(b.name)
            : filters.sorting === 'desc'
            ? b.name.localeCompare(a.name)
            : 0;
        })
        .filter(({ id }) => (filters.breed !== undefined ? filters.breed == id : true))
        .slice(0, filters.limit ? parseInt(filters.limit) : breeds.length);
    });
  }, [search, isFetched, onFilter]);

  return filters;
};

export default useFilters;
