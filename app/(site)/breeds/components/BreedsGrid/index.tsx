'use client';

import { FC, forwardRef, Fragment, ReactNode } from 'react';
import classes from 'classnames';
import Link from 'next/link';

import Grid from '@/components/Grid';
import { routes } from '@/constants/routes';

import styles from './styles.module.css';

interface Props {
  children?: ReactNode;
  photos: GridImage[];
}

const BreedsGrid = forwardRef<HTMLDivElement, Props>(({ photos, children }, ref) => {
  return (
    <Grid photos={photos} footer={children} ref={ref}>
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
  );
});

BreedsGrid.displayName = 'BreedsGrid';

export default BreedsGrid;
