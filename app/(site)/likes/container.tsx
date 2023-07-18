'use client';

import useImages from '@/app/(site)/voting/useImages';
import Grid from '@/components/Grid';
import NoItem from '@/components/NoItem';

import useVotes from '../voting/useVotes';

export default function Container() {
  const { data: votes, isFetched } = useVotes({ suspense: true });

  const images = useImages({ type: 'likes', list: votes || [] });

  if (isFetched && !images.length) return <NoItem>likes</NoItem>;

  return <Grid images={images} />;
}
