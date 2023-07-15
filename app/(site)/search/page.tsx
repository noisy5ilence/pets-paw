import type { Metadata } from 'next';

import { title } from '@/constants/title';

import Container from './container';

export const metadata: Metadata = {
  title: `Search - ${title}`
};

export default function Search() {
  return <Container />;
}
