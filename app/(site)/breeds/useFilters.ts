import { Dispatch, SetStateAction, useCallback, useEffect } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type QueryFilters = Partial<{
  page: string;
  limit: string;
  breed: string;
  sorting: 'asc' | 'desc';
}>;

type ApplyFilters = ({ target: { value, name } }: { target: { value: string; name: string } }) => void;

export const useQueryFilters = () => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const filters: QueryFilters = Object.fromEntries(params.entries());

  const search = params.toString();

  const applyFilters = useCallback(
    ({ target: { value, name } }: { target: { value: string; name: string } }) => {
      const updatedFilters = { ...filters, page: name === 'limit' ? '' : filters.page, [name]: value };
      const search = Object.entries(updatedFilters)
        .filter(([_, value]) => (value === '0' ? false : value))
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

      router.replace(`${pathname}?${search}`);
    },
    [router, filters, pathname]
  );

  return {
    params,
    filters,
    search,
    applyFilters
  };
};
const useFilters = ({
  breeds,
  onFilter,
  isFetched
}: {
  isFetched: boolean;
  breeds: Breed[];
  onFilter: Dispatch<SetStateAction<GridImage[]>>;
}): [QueryFilters, ApplyFilters] => {
  const { search, filters, applyFilters } = useQueryFilters();

  useEffect(() => {
    if (!isFetched) return;

    const limit = parseInt(filters.limit || `${breeds.length}`);
    const page = parseInt(filters.page || '0');

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
        .slice(page * limit, page * limit + limit);
    });
  }, [search, isFetched, onFilter]);

  return [filters, applyFilters];
};

export default useFilters;
