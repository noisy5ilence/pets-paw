import type { Metadata } from 'next';

import API from '@/app/(site)/breeds/api';
import { title } from '@/constants/title';

import Container from './container';

interface Props {
  params: { breed?: string };
}

export async function generateMetadata({ params: { breed: breedId } }: Props) {
  const imagesWithBreeds = await API.breed({ breed: breedId! });

  if (!imagesWithBreeds?.length)
    return {
      title: `Breed - ${title}`
    };

  const [
    {
      breeds: [breed]
    }
  ] = imagesWithBreeds;

  return {
    title: `${breed?.name || 'Breed'} - ${title}`
  };
}

export default async function Breed({ params: { breed: breedId } }: Props) {
  const imagesWithBreeds = await API.breed({ breed: breedId! });

  return <Container imagesWithBreeds={imagesWithBreeds} />;
}
