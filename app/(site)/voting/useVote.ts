import { useMutation } from '@tanstack/react-query';

import useQueryStateUpdater from '@/hooks/useQueryStateUpdater';

import API from './api';
import { KEY } from './useVotes';

export default function useVote() {
  const setVotes = useQueryStateUpdater<Vote[]>({ key: KEY });

  return useMutation(
    ({ image, vote }: { vote: 1 | -1; image: ImageWithBreeds }) => {
      setVotes((state) => {
        return [
          { image_id: image.id, value: vote, image: { id: image.id, url: image.url }, created_at: new Date() } as Vote,
          ...(state || [])
        ];
      });
      return API.votes.vote({ vote, image_id: image.id });
    },
    {
      onError(_, { image }) {
        setVotes((state: Vote[]) => {
          return state?.filter(({ image_id }) => image_id != image.id) || [];
        });
      }
    }
  );
}
