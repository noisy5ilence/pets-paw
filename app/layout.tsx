import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import Aside from '@/components/Aside';
import Header from '@/components/Header';
import { title } from '@/constants/title';

import '@/styles/global.css';

export const metadata: Metadata = {
  title,
  description: 'PetsPaw. For all cat and dogs lovers.',
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body data-theme={cookies().get('theme')?.value || 'light'}>
        <Aside header={<Header />} />

        {children}
      </body>
    </html>
  );
}
