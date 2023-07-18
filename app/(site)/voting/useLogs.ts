import { useMemo } from 'react';
import { useQuery } from '@tanstack/react-query';

import API from './api';
import useFavorites from './useFavorites';
import useVotes from './useVotes';

export default function useLogs({ image_id }: { image_id?: string | number }) {
  const { data: favorites, isFetched: isFetchedFavorites } = useFavorites();
  const { data: votes, isFetched: isFetchedVotes } = useVotes();

  return {
    isFetched: isFetchedFavorites && isFetchedVotes,
    favoriteId: useMemo(() => {
      return favorites?.find((fav) => fav.image_id === image_id)?.id;
    }, [favorites, image_id]),
    logs: useMemo(() => {
      const logs: Log[] = [];

      logs.push(...(favorites || []));

      logs.push(...(votes || []));

      return logs.sort((a, b) => {
        return Number(new Date(b.created_at)) - Number(new Date(a.created_at));
      });
    }, [favorites, votes])
  };
}
