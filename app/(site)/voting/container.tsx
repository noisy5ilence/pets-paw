'use client';

import classes from 'classnames';
import type { Metadata } from 'next';

import useRandomPet from '@/app/(site)/voting/useRandomPet';
import ImageSlider from '@/components/ImageSlider';
import { title } from '@/constants/title';

import Activities from './components/Activities';
import Logs from './components/Logs';
import useLogs from './useLogs';

import styles from './styles.module.css';

export const metadata: Metadata = {
  title: `Voting - ${title}`
};

export default function Voting({ initialData }: { initialData: RandomPet[] }) {
  const { pet, onChangePet, isRefetching, pets, index } = useRandomPet({ initialData });

  const { logs, favoriteId, isFetched } = useLogs({ petId: pet?.id });

  return (
    <div className={styles.voting}>
      <ImageSlider images={pets} index={index} />
      <div className={classes(styles.activities)}>
        <Activities
          disabled={isRefetching && index + 1 >= pets.length}
          pet={pet}
          favoriteId={favoriteId}
          onChangeCat={onChangePet}
        />
      </div>

      <div className={styles.logs}>{isFetched && <Logs logs={logs} className={styles.list} />}</div>
    </div>
  );
}
