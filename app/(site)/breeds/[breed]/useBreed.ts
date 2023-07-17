import { useQuery } from '@tanstack/react-query';

import API from '@/app/(site)/breeds/api';

const useBreed = ({ suspense, breed }: { suspense?: boolean; breed: string }) => {
  return useQuery([breed], () => API.breed({ breed }), {
    retry: false,
    suspense
  });
};

export default useBreed;
