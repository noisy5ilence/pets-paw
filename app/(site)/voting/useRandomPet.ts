import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';

import API from './api';

export default function useRandomCat() {
  const [catIndex, setCatIndex] = useState(0);
  const { data, refetch, isLoading } = useQuery(
    ['randomCats'],
    API.randomCats,
    {
      keepPreviousData: true,
      onSuccess(cats) {
        setCats((state) => state.concat(cats));
      },
    }
  );

  useEffect(() => {
    return () => {
      refetch();
    };
  }, [refetch]);

  const [cats, setCats] = useState<RandomPet[]>(data || []);

  const handleChangeCat = () => {
    if (catIndex === cats!.length - 5) {
      refetch();
    }

    const nextIndex = catIndex + 1;

    setCatIndex(nextIndex);
  };

  return {
    isLoading,
    cat: cats?.[catIndex],
    onChangeCat: handleChangeCat,
  };
}
