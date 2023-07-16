import { useQuery } from 'react-query';

import API from '@/app/(site)/breeds/api';

const useBreeds = ({ initialData }: { initialData?: Breed[] } = { initialData: undefined }) => {
  const query = useQuery(['breeds'], API.breeds, {
    initialData
  });
  return {
    ...query,
    isFetched: Boolean(query?.data) || query.isFetched
  };
};

export default useBreeds;
