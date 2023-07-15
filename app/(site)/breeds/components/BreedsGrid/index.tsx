'use client';

import { FC, Fragment, ReactNode } from 'react';
import classes from 'classnames';
import Link from 'next/link';

import Grid from '@/components/Grid';
import { routes } from '@/constants/routes';

import styles from './styles.module.css';

interface Props {
  children?: ReactNode;
  photos: GridImage[];
  isLoading: boolean;
}

const BreedsGrid: FC<Props> = ({ photos, children, isLoading }) => {
  return (
    <Grid photos={photos} isLoading={isLoading} footer={children}>
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
};

export default BreedsGrid;
