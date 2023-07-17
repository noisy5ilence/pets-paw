'use client';

import ImageSlider from '@/components/ImageSlider';
import NoItem from '@/components/NoItem';

import useBreed from './useBreed';

import styles from './styles.module.css';

export default function Container({ breedId }: { breedId: string }) {
  const { data: imagesWithBreeds } = useBreed({ suspense: true, breed: breedId });

  if (!imagesWithBreeds?.length) return <NoItem replace>No breed was found</NoItem>;

  const [
    {
      breeds: [breed]
    }
  ] = imagesWithBreeds;

  return (
    <div className={styles.root}>
      <div className={styles.slider}>
        <ImageSlider images={imagesWithBreeds} />
      </div>
      <div className={styles.info}>
        <h3 className={styles.title}>{breed.name}</h3>
        <div className={styles.details}>
          <div className={styles.content}>
            <h5 className={styles.description}>{breed.description}</h5>
            <div className={styles.columns}>
              <div className={styles.column}>
                <div className={styles.row}>
                  <span className={styles.label}>Temperament:</span>
                  <span className={styles.value}>{breed.temperament}</span>
                </div>
              </div>
              <div className={styles.column}>
                <div className={styles.row}>
                  <span className={styles.label}>Origin:</span>
                  <span className={styles.value}>{breed.origin}</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.label}>Weight:</span>
                  <span className={styles.value}>{breed.weight.metric} kgs</span>
                </div>
                <div className={styles.row}>
                  <span className={styles.label}>Life span:</span>
                  <span className={styles.value}>{breed.life_span} years</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
