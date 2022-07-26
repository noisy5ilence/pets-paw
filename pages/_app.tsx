import type { AppProps } from 'next/app';
import { useState } from 'react';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { Aside } from '@/components';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: Number.POSITIVE_INFINITY
      }
    }
  }));
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Aside/>
        <Component {...pageProps} />
        <div id='portal'/>
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
