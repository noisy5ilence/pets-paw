import type { Metadata } from 'next';

import { title } from '@/constants/title';

import Container from './container';

export const metadata: Metadata = {
  title: `Favorites - ${title}`
};

export default function Favorites() {
  return <Container />;
}
