import { useMemo } from 'react';
import { useQuery } from 'react-query';

import API from './api';
import useFavorites from './useFavorites';
import useVotes from './useVotes';

export default function useLogs({ petId }: { petId?: string }) {
  const { data: favorites } = useFavorites();
  const { data: votes } = useVotes();

  return {
    favoriteId: useMemo(() => {
      return favorites?.find(({ image_id }) => image_id === petId)?.id;
    }, [favorites, petId]),
    logs: useMemo(() => {
      const logs: Log[] = [];

      logs.push(...(favorites || []));

      logs.push(...(votes || []));

      return logs
        .sort((a, b) => {
          return +new Date(b.created_at) - +new Date(a.created_at);
        })
        .map((log) => {
          log.value = log.value ?? 0;
          return log;
        });
    }, [favorites, votes])
  };
}
