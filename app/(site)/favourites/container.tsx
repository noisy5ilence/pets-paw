'use client';

import { useMemo } from 'react';

import Grid from '@/components/Grid';
import NoItem from '@/components/NoItem';

import useFavorites from '../voting/useFavorites';

export default function Container() {
  const { data: favorites, isLoading, isFetched } = useFavorites();

  const photos = useMemo(() => {
    return (
      favorites
        ?.filter(({ value }) => [undefined, 0].includes(value) )
        ?.map(({ image, image_id }) => ({ name: image_id, image })) || []
    );
  }, [favorites]);

  if (isFetched && !photos.length) return <NoItem>favorites</NoItem>;

  return <Grid photos={photos} isLoading={isLoading}/>;
}
