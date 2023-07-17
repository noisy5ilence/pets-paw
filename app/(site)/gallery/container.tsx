'use client';

import { Fragment, useEffect, useMemo, useRef } from 'react';
import { createPortal } from 'react-dom';
import classes from 'classnames';

import useGallery from '@/app/(site)/gallery/useGallery';
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

import styles from './styles.module.css';

export default function Container() {
  const mounted = useMounted();
  const gridRef = useRef<HTMLDivElement>(null);
  const { filters, applyFilters } = useQueryFilters<QueryFilters>();
  const { add, remove } = useFavorite();
  const { data: favorites } = useFavorites();

  const favoritesIdsMap = useMemo(() => {
    return (
      favorites?.reduce((map, fav) => {
        map[fav?.image?.url] = fav?.id?.toString();
        return map;
      }, {} as Record<string, string>) || {}
    );
  }, [favorites]);

  const { data, isRefetching, refetch } = useGallery({ params: filters });

  const photos = useMemo(() => {
    return data?.data?.map(({ breeds, ...image }) => image) || [];
  }, [data]);

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
        photos={photos}
        footer={
          <Paginator
            disabled={isRefetching}
            name='page'
            page={parseInt(filters.page || '0')}
            onChange={applyFilters}
            total={data?.paginator?.total || 1}
            perPage={parseInt(filters.limit || '5')}
          />
        }
      >
        {(images, hoveredClassName) =>
          images.map((imageNode, index) => {
            const favoriteId = favoritesIdsMap[photos?.[index]?.url];
            return (
              <Fragment key={photos?.[index].id}>
                {imageNode}
                <button
                  tabIndex={-1}
                  className={classes(hoveredClassName, 'button vector')}
                  title={favoriteId ? 'Remove from favorite' : 'Add to favorite'}
                  onClick={() => (favoriteId ? remove.mutate({ favoriteId }) : add.mutate({ pet: photos[index] }))}
                  disabled={add.isLoading}
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
