import { Updater, useQueryClient } from '@tanstack/react-query';

export default function useQueryStateUpdater<TData>({ key }: { key: string }) {
  const queryClient = useQueryClient();

  return (state: Updater<TData, TData>) => queryClient.setQueryData<TData>([key], state as TData);
}
