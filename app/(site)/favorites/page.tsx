import type { Metadata } from 'next';

import API from '@/app/(site)/voting/api';
import { title } from '@/constants/title';
import server from '@/network/server';

import Container from './container';

export const metadata: Metadata = {
  title: `Favorites - ${title}`
};

export default async function Favorites() {
  const initialData = await API.favorites.list();
  return <Container initialData={initialData} />;
}
