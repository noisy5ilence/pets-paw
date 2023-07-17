import { useMutation, useQueryClient } from '@tanstack/react-query';

import useQueryStateUpdater from '@/hooks/useQueryStateUpdater';

import API from './api';
import { KEY } from './useFavorites';

export default function useFavorite({ pet, instantRemove }: { pet?: RandomPet; instantRemove?: boolean } = {}) {
  const setFavorites = useQueryStateUpdater<Favorite[]>({ key: KEY });
  const queryClient = useQueryClient();

  const add = useMutation(
    (params: { pet?: Omit<RandomPet, 'breeds'> }) => API.favorites.add({ petId: (pet?.id || params.pet?.id)! }),
    {
      onSuccess({ id }, params) {
        if (!queryClient.getQueryState([KEY])?.fetchStatus) return queryClient.refetchQueries([KEY]);
        setFavorites((state) => {
          return [
            {
              id,
              image_id: (pet || params?.pet)?.id,
              image: { id: (pet || params?.pet)?.id, url: (pet || params?.pet)?.url },
              created_at: new Date()
            } as Favorite,
            ...(state || [])
          ];
        });
      }
    }
  );

  const handleRemove = (favoriteId: string) => {
    setFavorites((state) => {
      return state?.filter(({ id }) => id?.toString() != favoriteId) || [];
    });
  };

  const remove = useMutation(
    ({ favoriteId }: { favoriteId: string }) => {
      instantRemove && handleRemove(favoriteId);
      return API.favorites.delete({ favoriteId });
    },
    {
      onSuccess(_, { favoriteId }) {
        if (instantRemove) return;
        handleRemove(favoriteId);
      }
    }
  );

  return {
    remove,
    add
  };
}
