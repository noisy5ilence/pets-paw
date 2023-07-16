'use client';

import usePhotos from '@/app/(site)/voting/usePhotos';
import Grid from '@/components/Grid';
import NoItem from '@/components/NoItem';

import useVotes from '../voting/useVotes';

export default function Container({ initialData }: { initialData: Vote[] }) {
  const { data: votes, isFetched } = useVotes({ initialData });

  const photos = usePhotos({ type: 'dislikes', list: votes || [] });

  if (isFetched && !photos.length) return <NoItem>dislikes</NoItem>;

  return <Grid photos={photos} />;
}
