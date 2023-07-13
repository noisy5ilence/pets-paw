import { useQuery } from "react-query";
import API from "./api";
import { useMemo } from "react";
import useFavorites from "./useFavorites";
import useVotes from "./useVotes";

export default function useLogs({ catId }: { catId?: string }) {
  const { data: favorites } = useFavorites();
  const { data: votes } = useVotes();

  return {
    favoriteId: useMemo(() => {
      return favorites?.find(({ image_id }) => image_id === catId)?.id;
    }, [favorites, catId]),
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
    }, [favorites, votes]),
  };
}
