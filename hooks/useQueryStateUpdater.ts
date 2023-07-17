import { Updater } from 'react-query/types/core/utils';
import { useQueryClient } from '@tanstack/react-query';

export default function useQueryStateUpdater<TData>({ key }: { key: string }) {
  const queryClient = useQueryClient();

  return (state: Updater<TData | undefined, TData>) => queryClient.setQueryData<TData>([key], state);
}
