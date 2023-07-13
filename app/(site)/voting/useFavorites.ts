import { useQuery, useQueryClient } from 'react-query';
import { Updater } from 'react-query/types/core/utils';

import API from './api';

export const KEY = 'favorites';

export default function useFavorites() {
  return useQuery([KEY], API.favorites.list);
}
