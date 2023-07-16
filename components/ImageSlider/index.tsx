import { FC, SyntheticEvent, useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import classes from 'classnames';

import useDraggingScroll from '@/hooks/useDraggingScroll';

import styles from './styles.module.css';

interface Props {
  images: Image[];
  index?: number;
}
const ImageSlider: FC<Props> = ({ images, index }) => {
  const useInternalControl = index === undefined;

  const [internalIndex, setIndex] = useState(0);
  const selectedIndex = useRef<number>();

  const sliderRef = useDraggingScroll({ disableScroll: !useInternalControl });
  const slidesRefs = useRef<Record<string, HTMLLIElement>>({});

  const changeSlideTimeout = useRef<NodeJS.Timeout>();

  const handleChangeIndex = useCallback(
    (index: number) => {
      slidesRefs.current[index]?.scrollIntoView({ behavior: 'smooth' });

      if (!useInternalControl) return;

      setIndex(index);
      selectedIndex.current = index;
    },
    [useInternalControl]
  );

  const handleLoadImage = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    const container = (event.target as HTMLImageElement)?.parentElement;
    if (!container) return;

    container.classList.remove(styles.loading);
  };

  useEffect(() => {
    if (useInternalControl) return;

    handleChangeIndex(index);
  }, [handleChangeIndex, index, useInternalControl]);

  useLayoutEffect(() => {
    if (!useInternalControl) return;

    const slides = new Map<HTMLLIElement, string>();

    Object.entries(slidesRefs.current).forEach(([index, li]) => slides.set(li, index));

    if (!slides.size) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        clearTimeout(changeSlideTimeout.current!);

        changeSlideTimeout.current = setTimeout(() => {
          const index = slides.get(entry.target as HTMLLIElement);

          if (selectedIndex.current === undefined) return index !== undefined && setIndex(+index);

          if (index != selectedIndex.current?.toString()) return;

          selectedIndex.current = undefined;
        }, 100);
      },
      { threshold: 1 }
    );

    slides.forEach((_, slide) => observer.observe(slide));

    return () => observer.disconnect();
  }, [useInternalControl]);

  return (
    <div className={classes(styles.root, 'appear-bottom')}>
      <figure
        className={classes(styles.slider, 'hidden-scroll-bar', { [styles.draggable]: useInternalControl })}
        ref={sliderRef}
      >
        <ul className={styles.list}>
          {images?.map((image, index) => (
            <li
              key={image.id}
              className={classes(styles.item, styles.loading)}
              ref={(element) => (slidesRefs.current[index] = element!)}
            >
              <img src={image.url} onLoad={handleLoadImage} alt='Pet' />
            </li>
          ))}
        </ul>
      </figure>
      {useInternalControl && (
        <ul className={styles.navigation}>
          {images.map((image, index) => (
            <li
              key={image.id}
              className={classes(styles.index, { [styles.active]: index === internalIndex })}
              onClick={() => handleChangeIndex(index)}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ImageSlider;
