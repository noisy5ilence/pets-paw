import { useQuery } from '@tanstack/react-query';

import API from '@/app/(site)/breeds/api';

const useBreeds = ({ suspense }: { suspense?: boolean } = { suspense: false }) => {
  return useQuery(['breeds'], API.breeds, {
    suspense: true
  });
};

export default useBreeds;
