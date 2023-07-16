import type { Metadata } from 'next';

import API from '@/app/(site)/voting/api';
import { title } from '@/constants/title';

import Container from './container';

export const metadata: Metadata = {
  title: `Likes - ${title}`
};

export default async function Likes() {
  const initialData = await API.votes.list();
  return <Container initialData={initialData} />;
}
