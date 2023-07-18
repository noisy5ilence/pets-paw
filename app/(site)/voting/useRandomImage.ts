import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import API from './api';

const UPDATE_RATE = 5;

let preservedIndex = 0;

export default function useRandomImage() {
  const [index, setIndex] = useState(preservedIndex);

  const {
    data: images,
    refetch,
    isLoading,
    isRefetching
  } = useQuery<ImageWithBreeds[]>(['randomImage'], API.randomImages, {
    suspense: true,
    structuralSharing(current, next) {
      const uniqueIds: Record<string, string> = {};

      return (current || []).concat(next).reduce((unique, image) => {
        if (uniqueIds[image.id]) return unique;

        uniqueIds[image.id] = image.id;
        unique.push(image);

        return unique;
      }, [] as ImageWithBreeds[]);
    }
  });

  const handleChangeImage = () => {
    if (index && index % UPDATE_RATE === 0) {
      refetch();
    }

    const nextIndex = index + 1;
    preservedIndex = nextIndex;

    setIndex(nextIndex);
  };

  return {
    index,
    images,
    isLoading,
    isRefetching,
    image: images?.[index],
    onChangeImage: handleChangeImage
  };
}
