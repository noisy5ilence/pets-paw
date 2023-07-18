import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { cookies } from 'next/headers';

import Aside from '@/components/Aside';
import Header from '@/components/Header';
import { title } from '@/constants/title';

import '@/styles/global.css';

export const metadata: Metadata = {
  title,
  description: 'PetsPaw. For all cat and dogs lovers.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/favicon/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/favicon/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon/favicon-16x16.png' />
        <link rel='manifest' href='/manifest.json' />
        <link rel='mask-icon' href='/favicon/safari-pinned-tab.svg' color='#5bbad5' />
        <meta name='msapplication-TileColor' content='#00aba9' />
        <meta name='theme-color' content='#ffffff' />
      </head>
      <body data-theme={cookies().get('theme')?.value || 'light'}>
        <Aside header={<Header />} />

        {children}
      </body>
    </html>
  );
}
