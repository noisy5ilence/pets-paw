import { forwardRef, ReactNode, useEffect, useRef } from 'react';
import classes from 'classnames';
import NextImage from 'next/image';

import Loader from '@/components/Loader';
import ImageStub from '@/public/photo-stub.svg';

import styles from './styles.module.css';

interface Props {
  photos: GridImage[];
  className?: string;
  isLoading?: boolean;
  children?: (children: ReactNode[], hoveredClassName: string) => ReactNode[];
  footer?: ReactNode;
}

const Grid = forwardRef<HTMLDivElement, Props>(({ photos, className, isLoading, children, footer }, ref) => {
  const loadedImages = useRef(0);

  useEffect(() => {
    loadedImages.current = 0;
  }, [photos]);

  const handleLoadImage = (image: HTMLImageElement) => {
    const photo = image.parentElement;
    if (!photo) return;

    loadedImages.current = loadedImages.current + 1;

    photo.classList.add(styles.loaded);
    photo.style.transitionDelay = `${loadedImages.current * 100}ms`;
  };

  const images = photos.map(({ image, name }) => {
    return !image?.url ? (
      <ImageStub />
    ) : (
      <NextImage key={name} onLoadingComplete={handleLoadImage} src={image.url} layout='fill' alt={name} />
    );
  });

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <Loader />
      </div>
    );
  }

  const imageNodes = children?.(images, styles.action) || images;

  return (
    <div className={styles.root} onScroll={() => (loadedImages.current = 0)} ref={ref}>
      <div className={styles.content}>
        <div className={classes(styles.grid, className)}>
          {photos.map(({ name, image }, index) => {
            return (
              <figure
                key={name}
                className={classes(styles.photo, {
                  [styles.transparent]: Boolean(image?.url),
                  [styles.stub]: !image?.url,
                  [styles.withAction]: Boolean(children)
                })}
              >
                {imageNodes[index]}
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
