'use client';

import { cloneElement, Fragment, ReactElement, ReactNode } from 'react';
import classes from 'classnames';

import useFavorite from '@/app/(site)/voting/useFavorite';
import usePhotos from '@/app/(site)/voting/usePhotos';
import Grid from '@/components/Grid';
import NoItem from '@/components/NoItem';

import useFavorites from '../voting/useFavorites';

import FilledHeart from './icons/filled-heart.svg';

export default function Container({ initialData }: { initialData: Favorite[] }) {
  const { data: favorites, isLoading, isFetched } = useFavorites({ initialData });
  const { remove } = useFavorite({ instantRemove: true });

  const photos = usePhotos({ type: 'favorites', list: favorites || [] });

  if (isFetched && !photos.length) return <NoItem>favorites</NoItem>;

  return (
    <Grid photos={photos}>
      {(images, hoveredClassName) =>
        images.map((imageNode, index) => {
          let image: HTMLImageElement;
          return (
            <Fragment key={photos[index].name}>
              {cloneElement(imageNode as ReactElement, {
                ref: (element: HTMLImageElement) => {
                  image = element;
                  element?.classList.add('remove-transition-init');
                }
              })}
              <button
                tabIndex={-1}
                className={classes(hoveredClassName, 'button vector')}
                onClick={() => {
                  image?.classList.add('remove-transition-emit');
                  image?.addEventListener(
                    'transitionend',
                    () => remove.mutate({ favoriteId: photos[index].id?.toString() }),
                    { once: true }
                  );
                }}
                disabled={remove.isLoading}
                title='Remove from favorite'
              >
                <FilledHeart />
              </button>
            </Fragment>
          );
        })
      }
    </Grid>
  );
}
