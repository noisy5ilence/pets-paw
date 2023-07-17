import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';

import API from './api';

const useBreeds = () => {
  const query = useSearchParams().get('query');
  const breedsQuery = useQuery([`breeds-search-${query}`], () => API.search({ query: query! }), {
    suspense: true,
    enabled: Boolean(query)
  });

  return { ...breedsQuery, query };
};

export default useBreeds;
