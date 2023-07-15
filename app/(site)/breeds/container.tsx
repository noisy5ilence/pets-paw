'use client';

import { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import classes from 'classnames';
import Link from 'next/link';

import Grid from '@/components/Grid';
import NoItem from '@/components/NoItem';
import Paginator from '@/components/Paginator';
import breadcrumbsPortalId from '@/constants/breadcrumbsPortalId';
import { routes } from '@/constants/routes';
import useMounted from '@/hooks/useMounted';

import Filters from './components/Filters';
import useBreeds from './useBreeds';
import { useQueryFilters } from './useFilters';

import styles from './styles.module.css';

export default function Container() {
  const mounted = useMounted();
  const [photos, setPhotos] = useState<GridImage[]>([]);
  const { data: breeds, isFetched, isLoading } = useBreeds();
  const { filters, applyFilters } = useQueryFilters();

  const filtersNode =
    mounted &&
    createPortal(
      <Filters breeds={breeds || []} onFilter={setPhotos} isFetched={isFetched} />,
      document.getElementById(breadcrumbsPortalId)!
    );

  if (isFetched && !breeds?.length) {
    return (
      <>
        {filtersNode}
        <NoItem replace>No breeds found</NoItem>
      </>
    );
  }

  const isShowPaginator =
    Boolean(photos.length) && photos.length !== breeds?.length && photos.length >= parseInt(filters.limit || '0');

  return (
    <>
      {filtersNode}
      <Grid
        photos={photos}
        isLoading={isLoading}
        footer={
          isShowPaginator && (
            <Paginator
              name='page'
              onChange={applyFilters}
              total={breeds?.length || 0}
              perPage={parseInt(filters.limit || '0')}
              page={parseInt(filters.page || '0')}
            />
          )
        }
      >
        {(images, hoveredClassName) =>
          images.map((imageNode, index) => (
            <Fragment key={photos?.[index].id}>
              {imageNode}
              <Link
                href={`${routes.breeds.path}/${photos?.[index].id}`}
                tabIndex={-1}
                className={classes(hoveredClassName, styles.link, 'button vector')}
              >
                {photos?.[index].name}
              </Link>
            </Fragment>
          ))
        }
      </Grid>
    </>
  );
}
