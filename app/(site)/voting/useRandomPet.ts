import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import API from './api';

const UPDATE_RATE = 5;

export default function useRandomPet() {
  const [index, setIndex] = useState(0);

  const {
    data: pets,
    refetch,
    isLoading,
    isRefetching
  } = useQuery<RandomPet[]>(['randomPets'], API.randomPets, {
    suspense: true,
    structuralSharing(current, next) {
      return (current || []).concat(next);
    }
  });

  useEffect(() => {
    return () => {
      refetch();
    };
  }, [refetch]);

  const handleChangePet = () => {
    if (index && index % UPDATE_RATE === 0) {
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
