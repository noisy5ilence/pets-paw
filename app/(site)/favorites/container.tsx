'use client';

import { Fragment } from 'react';
import classes from 'classnames';

import useFavorite from '@/app/(site)/voting/useFavorite';
import usePhotos from '@/app/(site)/voting/usePhotos';
import Grid from '@/components/Grid';
import NoItem from '@/components/NoItem';

import useFavorites from '../voting/useFavorites';

import FilledHeart from './icons/filled-heart.svg';

export default function Container() {
  const { data: favorites, isLoading, isFetched } = useFavorites();
  const { remove } = useFavorite({ instantRemove: true });

  const photos = usePhotos({ type: 'favorites', list: favorites || [] });

  if (isFetched && !photos.length) return <NoItem>favorites</NoItem>;

  return (
    <Grid photos={photos} isLoading={isLoading}>
      {(images, hoveredClassName) =>
        images.map((imageNode, index) => (
          <Fragment key={photos[index].name}>
            {imageNode}
            <button
              tabIndex={-1}
              className={classes(hoveredClassName, 'button vector')}
              onClick={() => remove.mutate({ favoriteId: photos[index].id?.toString() })}
              disabled={remove.isLoading}
              title='Remove from favorite'
            >
              <FilledHeart />
            </button>
          </Fragment>
        ))
      }
    </Grid>
  );
}
