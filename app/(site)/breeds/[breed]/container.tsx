'use client';

import ImageSlider from '@/components/ImageSlider';
import NoItem from '@/components/NoItem';

import styles from './styles.module.css';

interface Props {
  imagesWithBreeds: ImageWithBreeds[];
}

export default function Container({ imagesWithBreeds }: Props) {
  if (!imagesWithBreeds?.length) return <NoItem replace>No breed was found</NoItem>;
  return (
    <div className={styles.root}>
      <div className={styles.slider}>
        <ImageSlider images={imagesWithBreeds} />
      </div>
    </div>
  );
}
