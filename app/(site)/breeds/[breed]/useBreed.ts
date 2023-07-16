import { useQuery } from 'react-query';

import API from '@/app/(site)/breeds/api';

const useBreed = ({ initialData, breed }: { initialData: ImageWithBreeds[]; breed: string }) => {
  const query = useQuery([breed], () => API.breed({ breed }), {
    retry: false,
    initialData
  });

  return {
    ...query,
    isFetched: Boolean(query?.data) || query.isFetched
  };
};

export default useBreed;
