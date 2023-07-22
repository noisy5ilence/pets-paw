import { useMutation, useQueryClient } from '@tanstack/react-query';

import API from './api';
import { KEY } from './useFavorites';

export default function useFavorite() {
  const queryClient = useQueryClient();

  const add = useMutation(
    ({ image }: { image: Omit<ImageWithBreeds, 'breeds'> }) => API.favorites.add({ image_id: image.id }),
    {
      onSuccess: async ({ id }, { image }) => {
        if (!queryClient.getQueryState([KEY])) await queryClient.fetchQuery([KEY]);

        queryClient.setQueryData<Favorite[]>([KEY], (state) => {
          return [
            {
              id,
              image_id: image.id,
              image: { id: image.id, url: image.url },
              created_at: new Date()
            } as Favorite,
            ...(state || [])
          ];
        });
      }
    }
  );

  const remove = useMutation(API.favorites.delete, {
    onMutate: async ({ favoriteId }) => {
      await queryClient.cancelQueries({ queryKey: [KEY] });

      const snapshot = queryClient.getQueryData<Favorite[]>([KEY]);

      queryClient.setQueryData<Favorite[]>([KEY], (state) => {
        return state?.filter((f) => f.id != favoriteId) || [];
      });

      return snapshot;
    },
    onError(error, variables, snapshot) {
      queryClient.setQueryData<Favorite[]>([KEY], snapshot);
    }
  });

  return {
    remove,
    add
  };
}
