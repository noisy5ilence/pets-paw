import type { Metadata } from 'next';

import { title } from '@/constants/title';

import Container from './container';

export const metadata: Metadata = {
  title: `Voting - ${title}`
};

export default async function Voting() {
  return <Container />;
}
