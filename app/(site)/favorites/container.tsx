'use client';

import { Fragment } from 'react';
import classes from 'classnames';

import useFavorite from '@/app/(site)/voting/useFavorite';
import usePhotos from '@/app/(site)/voting/usePhotos';
import Grid from '@/components/Grid';
import NoItem from '@/components/NoItem';

import useFavorites from '../voting/useFavorites';

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
              <svg width='20' height='18' viewBox='0 0 20 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M5.38071 0C2.40903 0 0 2.40903 0 5.38071C0 6.80777 0.566893 8.17637 1.57597 9.18545L9.5286 17.1381C9.78895 17.3984 10.2111 17.3984 10.4714 17.1381L18.424 9.18545C19.4331 8.17637 20 6.80777 20 5.38071C20 2.40903 17.591 0 14.6193 0C13.1922 0 11.8236 0.566894 10.8146 1.57597L10 2.39052L9.18545 1.57597C8.17637 0.566895 6.80777 0 5.38071 0Z'
                  fill='#FF868E'
                />
              </svg>
            </button>
          </Fragment>
        ))
      }
    </Grid>
  );
}
