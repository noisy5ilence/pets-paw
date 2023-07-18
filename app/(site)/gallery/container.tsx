'use client';

import { Fragment, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import classes from 'classnames';

import useFavorite from '@/app/(site)/voting/useFavorite';
import useFavorites from '@/app/(site)/voting/useFavorites';
import Grid from '@/components/Grid';
import Paginator from '@/components/Paginator';
import breadcrumbsPortalId from '@/constants/breadcrumbsPortalId';
import useMounted from '@/hooks/useMounted';
import useQueryFilters from '@/hooks/useQueryFilters';

import Filters, { QueryFilters } from './components/Filters';
import UnFavIcon from './icons/filled-heart.svg';
import FavIcon from './icons/like.svg';
import UploadIcon from './icons/upload.svg';
import useGallery from './useGallery';

import styles from './styles.module.css';

export default function Container() {
  const mounted = useMounted();
  const gridRef = useRef<HTMLDivElement>(null);
  const { filters, applyFilters } = useQueryFilters<QueryFilters>();
  const { add, remove } = useFavorite();
  const { data: favorites } = useFavorites();

  const favoritesIdsMap = useMemo(() => {
    return (
      favorites?.reduce((map, favorite) => {
        map[favorite.image.url] = favorite.id;
        return map;
      }, {} as Record<string, number>) || {}
    );
  }, [favorites]);

  const { data: response, isRefetching, refetch } = useGallery({ params: filters });

  const images = useMemo(() => {
    return response?.data?.map(({ breeds, ...image }) => image) || [];
  }, [response]);

  useEffect(() => {
    if (isRefetching) return;

    gridRef.current?.scrollTo({ behavior: 'smooth', top: 0 });
  }, [filters.limit, filters.page, isRefetching]);

  return (
    <>
      {mounted &&
        createPortal(
          <button className={classes(styles.upload, 'button')}>
            <span className={styles.icon}>
              <UploadIcon />
            </span>
            Upload
          </button>,
          document.getElementById(breadcrumbsPortalId)!
        )}
      <div className={styles.filters}>
        <Filters onFilter={() => refetch()} isLoading={isRefetching} />
      </div>
      <Grid
        ref={gridRef}
        images={images}
        footer={
          <Paginator
            disabled={isRefetching}
            name='page'
            page={parseInt(filters.page || '0')}
            onChange={applyFilters}
            total={response?.paginator?.total || 1}
            perPage={parseInt(filters.limit || '5')}
          />
        }
      >
        {(nodes, hoveredClassName) =>
          nodes.map((node, index) => {
            const url = images?.[index]?.url;
            const favoriteId = favoritesIdsMap[url];
            return (
              <Fragment key={images?.[index].url}>
                {node}
                <button
                  tabIndex={-1}
                  className={classes(hoveredClassName, 'button vector')}
                  title={favoriteId ? 'Remove from favorites' : 'Add to favorites'}
                  onClick={() => (favoriteId ? remove.mutate({ favoriteId }) : add.mutate({ image: images[index] }))}
                  disabled={
                    (add.variables?.image?.url == url && add.isLoading) ||
                    (remove.variables?.favoriteId == favoriteId && remove.isLoading)
                  }
                >
                  {favoriteId ? <UnFavIcon /> : <FavIcon />}
                </button>
              </Fragment>
            );
          })
        }
      </Grid>
    </>
  );
}
