import { useCallback } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export type ApplyFilters = ({ target: { value, name } }: { target: { value: string; name: string } }) => void;

type Filters<T> = {
  [K in keyof T]: T[K] extends T[keyof T] ? T[K] : T[K] | undefined;
};

const useQueryFilters = <F>({
  mapper
}: { mapper?: (filters: Filters<F>, name: string, value: string) => Filters<F> } = {}) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useSearchParams();
  const filters = Object.fromEntries(params.entries()) as Filters<F>;

  const search = params.toString();

  const applyFilters = useCallback(
    ({ target: { value, name } }: { target: { value: string; name: string } }) => {
      const updatedFilters = mapper?.(filters, name, value) || { ...filters, [name]: value };
      const search = Object.entries(updatedFilters)
        .filter(([_, value]) => (value === '0' ? false : value))
        .map(([key, value]) => `${key}=${value}`)
        .join('&');

      router.replace(`${pathname}?${search}`);
    },
    [router, filters, pathname, mapper]
  );

  return {
    params,
    filters,
    search,
    applyFilters
  };
};

export default useQueryFilters;
