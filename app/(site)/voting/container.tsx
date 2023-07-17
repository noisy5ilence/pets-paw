'use client';

import classes from 'classnames';

import useRandomPet from '@/app/(site)/voting/useRandomPet';
import ImageSlider from '@/components/ImageSlider';

import Activities from './components/Activities';
import Logs from './components/Logs';
import useLogs from './useLogs';

import styles from './styles.module.css';

export default function Container() {
  const { pet, onChangePet, pets, index } = useRandomPet();
  const { logs, favoriteId, isFetched } = useLogs({ petId: pet?.id });

  return (
    <div className={styles.voting}>
      <ImageSlider images={pets || []} index={index} />
      <div className={classes(styles.activities)}>
        <Activities disabled={!pets?.[index + 1]} pet={pet} favoriteId={favoriteId} onChangeCat={onChangePet} />
      </div>
      <div className={styles.logs}>{isFetched && <Logs logs={logs} className={styles.list} />}</div>
    </div>
  );
}
