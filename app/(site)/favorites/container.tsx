'use client';

import { cloneElement, Fragment, ReactElement } from 'react';
import classes from 'classnames';

import useFavorite from '@/app/(site)/voting/useFavorite';
import useImages from '@/app/(site)/voting/useImages';
import Grid from '@/components/Grid';
import NoItem from '@/components/NoItem';

import useFavorites from '../voting/useFavorites';

import FilledHeart from './icons/filled-heart.svg';

export default function Container() {
  const { data: favorites, isFetched } = useFavorites({ suspense: true });
  const { remove } = useFavorite({ instantRemove: true });

  const images = useImages({ type: 'favorites', list: favorites || [] });

  if (isFetched && !images.length) return <NoItem>favorites</NoItem>;

  return (
    <Grid images={images}>
      {(nodes, hoveredClassName) =>
        nodes.map((node, index) => {
          let image: HTMLImageElement;
          return (
            <Fragment key={images[index].logId}>
              {cloneElement(node as ReactElement, {
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
                  image?.addEventListener('transitionend', () => remove.mutate({ favoriteId: images[index].logId }), {
                    once: true
                  });
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
