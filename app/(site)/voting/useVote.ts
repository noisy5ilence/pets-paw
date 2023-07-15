import { useMutation } from 'react-query';

import useQueryStateUpdater from '@/hooks/useQueryStateUpdater';

import API from './api';
import { KEY } from './useVotes';

export default function useVote({ pet }: { pet?: RandomPet }) {
  const setVotes = useQueryStateUpdater<Vote[]>({ key: KEY });

  return useMutation(
    ({ vote }: { vote: 1 | -1 }) => {
      setVotes((state) => {
        return [
          { image_id: pet?.id, value: vote, image: { id: pet?.id, url: pet?.url }, created_at: new Date() } as Vote,
          ...(state || [])
        ];
      });
      return API.votes.vote({ vote, petId: pet?.id! });
    },
    {
      onError() {
        setVotes((state) => {
          return state?.filter(({ image_id }) => image_id !== pet?.id) || [];
        });
      }
    }
  );
}
