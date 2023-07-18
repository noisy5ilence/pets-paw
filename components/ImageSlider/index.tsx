import { FC, UIEventHandler, useCallback, useEffect, useRef, useState } from 'react';
import classes from 'classnames';
import NextImage from 'next/image';

import useDraggingScroll from '@/hooks/useDraggingScroll';

import styles from './styles.module.css';

interface Props {
  images: Image[];
  index?: number;
}
const ImageSlider: FC<Props> = ({ images, index }) => {
  const useInternalControl = index === undefined;

  const [internalIndex, setIndex] = useState(0);

  const sliderRef = useDraggingScroll({ disableScroll: !useInternalControl });
  const slidesRefs = useRef<Record<string, HTMLLIElement>>({});

  const changeSlideTimeout = useRef<NodeJS.Timeout>();

  const handleChangeSlide = useCallback((index: number) => {
    slidesRefs.current[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  }, []);

  const handleLoadImage = (image: HTMLImageElement) => {
    const container = image?.parentElement;
    if (!container) return;

    container.classList.remove(styles.loading);
  };

  const handleScroll: UIEventHandler<HTMLElement> = (event) => {
    const slider = event.target as HTMLDivElement;
    const slideWidth = slider.scrollWidth / images.length;
    const scrollOffset = slider.scrollLeft;
    const index = Math.ceil(scrollOffset / slideWidth);

    clearTimeout(changeSlideTimeout.current!);

    changeSlideTimeout.current = setTimeout(() => setIndex(index), 30);
  };

  useEffect(() => {
    if (useInternalControl) return;

    handleChangeSlide(index);
  }, [handleChangeSlide, index, useInternalControl]);

  return (
    <div className={classes(styles.root, 'appear-bottom')}>
      <figure
        className={classes(styles.slider, 'hidden-scroll-bar', { [styles.draggable]: useInternalControl })}
        onScroll={handleScroll}
        ref={sliderRef}
      >
        <ul className={styles.list}>
          {images?.map((image, index) => {
            return (
              <li
                key={image.id}
                className={classes(styles.item, styles.loading)}
                ref={(element) => (slidesRefs.current[index] = element!)}
              >
                <NextImage
                  src={image.url}
                  layout='fill'
                  ref={(image) => image?.complete && handleLoadImage(image)}
                  onLoad={(event) => handleLoadImage(event.target as HTMLImageElement)}
                  alt='Pet'
                />
              </li>
            );
          })}
        </ul>
      </figure>
      {useInternalControl && (
        <ul className={styles.navigation}>
          {images.map((image, index) => (
            <li
              key={image.id}
              className={classes(styles.index, { [styles.active]: index === internalIndex })}
              onClick={() => handleChangeSlide(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageSlider;
