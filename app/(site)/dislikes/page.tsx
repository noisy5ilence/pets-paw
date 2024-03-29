import type { Metadata } from 'next';

import { title } from '@/constants/title';

import Container from './container';

export const metadata: Metadata = {
  title: `Dislikes - ${title}`
};

export default async function Dislikes() {
  return <Container />;
}
