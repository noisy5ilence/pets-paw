'use client';

import { ReactNode, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryStreamedHydration } from '@tanstack/react-query-next-experimental';

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            keepPreviousData: true,
            staleTime: Number.POSITIVE_INFINITY
          }
        }
      })
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryStreamedHydration queryClient={queryClient}>{children}</ReactQueryStreamedHydration>
    </QueryClientProvider>
  );
};

export default Providers;
