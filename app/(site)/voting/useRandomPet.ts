import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import API from './api';

export default function useRandomPet() {
  const [index, setIndex] = useState(0);
  const { data, refetch, isLoading, isRefetching } = useQuery(['randomPets'], API.randomPets, {
    onSuccess(pets) {
      setPets((state) => state.concat(pets));
    }
  });

  useEffect(() => {
    return () => {
      refetch();
    };
  }, [refetch]);

  const [pets, setPets] = useState<RandomPet[]>(data || []);

  const handleChangePet = () => {
    if (index >= Math.abs(pets!.length / 2)) {
      refetch();
    }

    const nextIndex = index + 1;

    setIndex(nextIndex);
  };

  return {
    index,
    pets,
    isLoading,
    isRefetching,
    pet: pets?.[index],
    onChangePet: handleChangePet
  };
}
