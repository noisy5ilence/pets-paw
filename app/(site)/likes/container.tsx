'use client';

import usePhotos from '@/app/(site)/voting/usePhotos';
import Grid from '@/components/Grid';
import NoItem from '@/components/NoItem';

import useVotes from '../voting/useVotes';

export default function Container() {
  const { data: votes, isFetched } = useVotes({ suspense: true });

  const photos = usePhotos({ type: 'likes', list: votes || [] });

  if (isFetched && !photos.length) return <NoItem>likes</NoItem>;

  return <Grid photos={photos} />;
}
