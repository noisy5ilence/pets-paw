'use client';

import classes from 'classnames';

import ImageSlider from '@/components/ImageSlider';

import Activities from './components/Activities';
import Logs from './components/Logs';
import useLogs from './useLogs';
import useRandomImage from './useRandomImage';

import styles from './styles.module.css';

export default function Container() {
  const { image, onChangeImage, images, index } = useRandomImage();
  const { logs, favoriteId, isFetched } = useLogs({ image_id: image!.id });

  return (
    <div className={styles.voting}>
      <ImageSlider images={images || []} index={index} />
      {image && (
        <div className={classes(styles.activities)}>
          <Activities
            disabled={!images?.[index + 1]}
            image={image}
            favoriteId={favoriteId}
            onChangeImage={onChangeImage}
          />
        </div>
      )}
      <div className={styles.logs}>{isFetched && <Logs logs={logs} className={styles.list} />}</div>
    </div>
  );
}
