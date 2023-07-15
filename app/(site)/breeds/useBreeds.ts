import { useQuery } from 'react-query';

import API from '@/app/(site)/breeds/api';

const useBreeds = () => {
  return useQuery(['breeds'], API.breeds);
};

export default useBreeds;
