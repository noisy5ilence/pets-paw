import { useQuery } from '@tanstack/react-query';

import { QueryFilters } from './components/Filters';
import API from './api';

const useGallery = ({ params }: { params: QueryFilters }) => {
  return useQuery(['gallery', params], () => API.images({ ...params, limit: params.limit || '5' }), {
    suspense: true
  });
};

export default useGallery;
