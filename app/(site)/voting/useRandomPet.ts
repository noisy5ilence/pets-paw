import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import API from './api';

export default function useRandomPet() {
  const [petIndex, setCatIndex] = useState(0);
  const { data, refetch, isLoading } = useQuery(
    ['randomCats'],
    API.randomCats,
    {
      keepPreviousData: true,
      onSuccess(pets) {
        setPets((state) => state.concat(pets));
      },
    }
  );

  useEffect(() => {
    return () => {
      refetch();
    };
  }, [refetch]);

  const [pets, setPets] = useState<RandomPet[]>(data || []);

  const handleChangeCat = () => {
    if (petIndex === pets!.length - 5) {
      refetch();
    }

    const nextIndex = petIndex + 1;

    setCatIndex(nextIndex);
  };

  return {
    isLoading,
    pet: pets?.[petIndex],
    onChangePet: handleChangeCat,
  };
}
