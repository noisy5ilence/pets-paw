'use client';

import { useMemo } from 'react';

import BreedsGrid from '@/app/(site)/breeds/components/BreedsGrid';
import NoItem from '@/components/NoItem';

import useBreeds from './useBreeds';

import styles from './styles.module.css';

export default function Container() {
  const { query, data: breeds, isFetched } = useBreeds();

  const photos = useMemo(() => {
    return breeds?.map(({ image, name, id }) => ({ ...image, id, name })) || [];
  }, [breeds]);

  return (
    <>
      <div className={styles.root}>
        <span className={styles.label}>Search results for:</span>
        <span className={styles.query}>{query}</span>
      </div>
      {isFetched && !breeds?.length ? (
        <NoItem replace>No breeds have been found</NoItem>
      ) : (
        <BreedsGrid photos={photos} />
      )}
    </>
  );
}
