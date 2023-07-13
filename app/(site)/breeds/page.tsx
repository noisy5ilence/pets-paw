import type { Metadata } from 'next';

import { title } from '@/constants/title';

export const metadata: Metadata = {
  title: `Breeds - ${title}`,
};

export default function Breeds() {
  return <div>Breeds</div>;
}
