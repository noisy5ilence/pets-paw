import { useQuery } from 'react-query';

import API from '@/app/(site)/breeds/api';

const useBreed = ({ breed }: { breed: string }) => {
  return useQuery([breed], () => API.breed({ breed }), {
    retry: false
  });
};

export default useBreed;
