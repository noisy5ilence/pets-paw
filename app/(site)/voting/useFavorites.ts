import { useQuery, useQueryClient } from 'react-query';
import { Updater } from 'react-query/types/core/utils';

import API from './api';

export const KEY = 'favorites';

export default function useFavorites({ initialData }: { initialData?: Favorite[] } = { initialData: undefined }) {
  const query = useQuery([KEY], API.favorites.list, {
    initialData
  });

  return {
    ...query,
    isFetched: Boolean(query?.data) || query.isFetched
  };
}
