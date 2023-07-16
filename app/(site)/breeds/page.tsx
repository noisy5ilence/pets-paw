import type { Metadata } from 'next';

import API from '@/app/(site)/breeds/api';
import { title } from '@/constants/title';
import server from '@/network/server';

import Container from './container';

export const metadata: Metadata = {
  title: `Breeds - ${title}`
};

export default async function Breeds() {
  const initialData = await API.breeds();
  return <Container initialData={initialData} />;
}
