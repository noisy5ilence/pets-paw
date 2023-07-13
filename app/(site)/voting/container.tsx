'use client';

import { useState } from 'react';
import classes from 'classnames';
import type { Metadata } from 'next';

import Pet from '@/app/(site)/voting/components/RandomPet';
import useRandomPet from '@/app/(site)/voting/useRandomPet';
import Loader from '@/components/Loader';
import { title } from '@/constants/title';

import Activities from './components/Activities';
import Logs from './components/Logs';
import useLogs from './useLogs';

import styles from './styles.module.css';

export const metadata: Metadata = {
  title: `Voting - ${title}`,
};

export default function Voting() {
  const { pet, onChangePet, isLoading } = useRandomPet();
  const [isImageLoading, setIsImageLoading] = useState(true);

  const { logs, favoriteId } = useLogs({ petId: pet?.id });

  if (isLoading) {
    return (
      <div className={styles.voting}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.voting}>
      <figure className={classes(styles.photo)}>
        <Pet pet={pet} onLoadingComplete={() => setIsImageLoading(false)}/>
      </figure>
      <div className={classes(styles.activities)}>
        <Activities
          disabled={isImageLoading}
          pet={pet}
          favoriteId={favoriteId}
          onChangeCat={() => {
            setIsImageLoading(true);
            onChangePet();
          }}
        />
      </div>
      <div className={styles.logs}>
        <Logs logs={logs} className={styles.list} />
      </div>
    </div>
  );
}
