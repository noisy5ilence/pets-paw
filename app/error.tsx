'use client';

export default function Error({ reset }: { error: Error; reset: () => void }) {
  return (
    <div className='error-boundary'>
      <h2>Something went wrong</h2>
      <button className='button alt' onClick={reset}>
        Try again
      </button>
    </div>
  );
}
