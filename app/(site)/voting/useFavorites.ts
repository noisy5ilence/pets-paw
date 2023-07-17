import { useQuery } from '@tanstack/react-query';

import API from './api';

export const KEY = 'favorites';

export default function useFavorites({ suspense }: { suspense?: boolean } = { suspense: false }) {
  return useQuery([KEY], API.favorites.list, {
    suspense
  });
}
