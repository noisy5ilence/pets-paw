import { forwardRef, ReactNode } from 'react';
import classes from 'classnames';
import NextImage from 'next/image';
import { v4 as uniqueId } from 'uuid';

import ImageStub from '@/public/photo-stub.svg';

import styles from './styles.module.css';

interface Props {
  images?: Omit<Image, 'width' | 'height'>[];
  className?: string;
  children?: (children: ReactNode[], hoveredClassName: string) => ReactNode[];
  footer?: ReactNode;
}

const Grid = forwardRef<HTMLDivElement, Props>(({ images, className, children, footer }, ref) => {
  const handleLoadImage = (image: HTMLImageElement) => {
    image?.parentElement?.classList.add(styles.loaded);
  };

  const frames = images?.map((image) => {
    return !image?.url ? (
      <ImageStub key={uniqueId()} />
    ) : (
      <NextImage key={image.id} onLoadingComplete={handleLoadImage} src={image.url} layout='fill' alt={'Pet'} />
    );
  });

  const imageNodes = children?.(frames || [], styles.action) || frames;

  return (
    <div className={styles.root} ref={ref}>
      <div className={styles.content}>
        <div className={classes(styles.grid, className)}>
          {images?.map(({ id, url }, index) => {
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
