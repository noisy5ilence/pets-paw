import { FC, useRef } from 'react';
import classes from 'classnames';
import NextImage from 'next/image';

import Loader from '@/components/Loader';
import imageStub from '@/public/photo-stub.svg';

import styles from './styles.module.css';

type Photos = Array<{ image: Image | undefined; name: string }>;

interface Props {
  photos: Photos;
  className?: string;
  isLoading?: boolean;
}

const Grid: FC<Props> = ({ photos, className, isLoading }) => {
  const loadedImages = useRef(0);

  if (isLoading) {
    return (
      <div className={ styles.loading }>
        <Loader/>
      </div>
    );
  }

  const handleLoadImage = (image: HTMLImageElement) => {
    const photo = image.parentElement;
    if (!photo) return;

    loadedImages.current = loadedImages.current + 1;

    photo.classList.add(styles.loaded);
    photo.style.transitionDelay = `${loadedImages.current * 100}ms`;
  };

  return (
    <div className={styles.root} onScroll={() => loadedImages.current = 0}>
      <div className={classes(styles.grid, className)}>
        {photos.map(({ image, name }) => {
          return (
            <figure key={name} className={styles.photo}>
              <NextImage
                onLoadingComplete={handleLoadImage}
                src={image?.url || imageStub.src}
                placeholder="empty"
                width={image?.url ? undefined : 200}
                height={image?.url ? undefined : 200}
                layout={image?.url ? 'fill' : 'row'}
                alt={name}
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default Grid;
