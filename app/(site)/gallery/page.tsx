import type { Metadata } from 'next';

import { title } from '@/constants/title';

import Container from './container';

export const metadata: Metadata = {
  title: `Gallery - ${title}`
};

export default function Gallery() {
  return <Container />;
}
