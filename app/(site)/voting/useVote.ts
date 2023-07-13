import { useMutation } from "react-query";
import API from "./api";

import { KEY } from "./useVotes";
import useQueryStateUpdater from "@/hooks/useQueryStateUpdater";

export default function useVote({ cat }: { cat?: RandomCat }) {
  const setVotes = useQueryStateUpdater<Vote[]>({ key: KEY });

  return useMutation(
    ({ vote }: { vote: 1 | -1 }) => {
      setVotes((state) => {
        return [
          { image_id: cat?.id, value: vote, created_at: new Date() } as Vote,
          ...(state || []),
        ];
      });
      return API.votes.vote({ vote, catId: cat?.id! });
    },
    {
      onError() {
        setVotes((state) => {
          return state?.filter(({ image_id }) => image_id !== cat?.id) || [];
        });
      },
    }
  );
}
