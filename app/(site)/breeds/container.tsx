'use client';

import { Fragment, useState } from 'react';
import { createPortal } from 'react-dom';
import classes from 'classnames';
import Link from 'next/link';

import useBreeds from '@/app/(site)/breeds/useBreeds';
import Grid from '@/components/Grid';
import NoItem from '@/components/NoItem';
import breadcrumbsPortalId from '@/constants/breadcrumbsPortalId';
import { routes } from '@/constants/routes';
import useMounted from '@/hooks/useMounted';

import Filters from './components/Filters';

import styles from './styles.module.css';

export default function Container() {
  const mounted = useMounted();
  const [photos, setPhotos] = useState<GridImage[]>([]);
  const { data: breeds, isFetched, isLoading } = useBreeds();

  const filtersNode =
    mounted &&
    createPortal(
      <Filters breeds={breeds || []} onFilter={setPhotos} isFetched={isFetched} />,
      document.getElementById(breadcrumbsPortalId)!
    );

  if (isFetched && !photos.length) {
    return (
      <>
        {filtersNode}
        <NoItem>breeds</NoItem>
      </>
    );
  }

  return (
    <>
      {filtersNode}
      <Grid photos={photos} isLoading={isLoading}>
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
