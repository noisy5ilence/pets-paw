'use client';

import { useMemo } from 'react';

import Grid from '@/components/Grid';
import NoItem from '@/components/NoItem';

import useVotes from '../voting/useVotes';

export default function Container() {
  const { data: votes, isLoading, isFetched } = useVotes();

  const photos = useMemo(() => {
    return (
      votes
        ?.filter(({ value }) => value < 0)
        ?.map(({ image, image_id }) => ({ name: image_id, image })) || []
    );
  }, [votes]);

  if (isFetched && !photos.length) return <NoItem>dislikes</NoItem>;

  return <Grid photos={photos} isLoading={isLoading}/>;
}
