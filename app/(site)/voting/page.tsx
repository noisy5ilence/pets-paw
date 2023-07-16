import type { Metadata } from 'next';

import API from '@/app/(site)/voting/api';
import { title } from '@/constants/title';

import VotingContainer from './container';

export const metadata: Metadata = {
  title: `Voting - ${title}`
};

export default async function Voting() {
  const initialData = await API.randomPets();
  return <VotingContainer initialData={initialData} />;
}
