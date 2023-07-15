import type { Metadata, NextPage } from 'next';
import { AppProps } from 'next/app';

import { title } from '@/constants/title';

import Container from './container';

export const metadata: Metadata = {
  title: `Breeds - ${title}`
};

export default function Breeds() {
  return <Container />;
}
