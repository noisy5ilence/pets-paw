import { useMutation, useQueryClient } from '@tanstack/react-query';

import API from './api';
import { KEY } from './useVotes';

export default function useVote() {
  const queryClient = useQueryClient();

  return useMutation(
    ({ image, vote }: { vote: 1 | -1; image: ImageWithBreeds }) => API.votes.vote({ vote, image_id: image.id }),
    {
      onMutate: async ({ image, vote }) => {
        if (!queryClient.getQueryState([KEY])) await queryClient.fetchQuery([KEY]);

        const snapshot = queryClient.getQueryData<Vote[]>([KEY]);

        queryClient.setQueryData<Vote[]>([KEY], (state) => {
          return [
            {
              image_id: image.id,
              value: vote,
              image: { id: image.id, url: image.url },
              created_at: new Date()
            } as Vote,
            ...(state || [])
          ];
        });

        return snapshot;
      },
      onError(error, variables, snapshot) {
        queryClient.setQueryData<Vote[]>([KEY], snapshot);
      }
    }
  );
}
