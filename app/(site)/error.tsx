'use client';

import { useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  const queryClient = useQueryClient();
  const [isPending, setIsPending] = useState(false);

  const handleReset = () => {
    setIsPending(true);
    queryClient
      .refetchQueries()
      .then(() => reset())
      .finally(() => setIsPending(false));
  };

  return (
    <div className='error-boundary'>
      <h2>Something went wrong</h2>
      <button className='button alt' onClick={handleReset} disabled={isPending}>
        Try again
      </button>
    </div>
  );
}
