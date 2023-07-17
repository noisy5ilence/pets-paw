import { forwardRef, ReactNode } from 'react';
import classes from 'classnames';
import NextImage from 'next/image';

import ImageStub from '@/public/photo-stub.svg';

import styles from './styles.module.css';

interface Props {
  photos?: Image[];
  className?: string;
  children?: (children: ReactNode[], hoveredClassName: string) => ReactNode[];
  footer?: ReactNode;
}

const Grid = forwardRef<HTMLDivElement, Props>(({ photos, className, children, footer }, ref) => {
  const handleLoadImage = (image: HTMLImageElement) => {
    image?.parentElement?.classList.add(styles.loaded);
  };

  const images = photos?.map(({ id, url, name }) => {
    return !url ? (
      <ImageStub />
    ) : (
      <NextImage key={id} onLoadingComplete={handleLoadImage} src={url} layout='fill' alt={name || 'Pet'} />
    );
  });

  const imageNodes = children?.(images || [], styles.action) || images;

  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.content}>
        <div className={classes(styles.grid, className)}>
          {photos?.map(({ id, url }, index) => {
            return (
              <figure
                key={id}
                className={classes(styles.photo, {
                  [styles.transparent]: Boolean(url),
                  [styles.stub]: !url,
                  [styles.withAction]: Boolean(children)
                })}
              >
                {imageNodes?.[index]}
              </figure>
            );
          })}
        </div>
        {footer}
      </div>
    </div>
  );
});

Grid.displayName = 'Grid';
export default Grid;
