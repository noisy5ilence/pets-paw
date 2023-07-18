'use client';

import { FC, forwardRef, Fragment, ReactNode } from 'react';
import classes from 'classnames';
import Link from 'next/link';

import Grid from '@/components/Grid';
import { routes } from '@/constants/routes';

import styles from './styles.module.css';

interface Props {
  children?: ReactNode;
  images?: Omit<ImageWithName, 'width' | 'height'>[];
}

const BreedsGrid = forwardRef<HTMLDivElement, Props>(({ images, children }, ref) => {
  return (
    <Grid images={images} footer={children} ref={ref}>
      {(nodes, hoveredClassName) =>
        nodes.map((node, index) => (
          <Fragment key={images?.[index].id}>
            {node}
            <Link
              href={`${routes.breeds.path}/${images?.[index].id}`}
              tabIndex={-1}
              className={classes(hoveredClassName, styles.link, 'button vector')}
            >
              {images?.[index].name}
            </Link>
          </Fragment>
        ))
      }
    </Grid>
  );
});

BreedsGrid.displayName = 'BreedsGrid';

export default BreedsGrid;
