import type { Metadata } from 'next';

import API from '@/app/(site)/voting/api';
import { title } from '@/constants/title';
import server from '@/network/server';

import Container from './container';

export const metadata: Metadata = {
  title: `Dislikes - ${title}`
};

export default async function Dislikes() {
  const initialData = await API.votes.list();
  return <Container initialData={initialData} />;
}
