import { useMutation } from 'react-query';

import useQueryStateUpdater from '@/hooks/useQueryStateUpdater';

import API from './api';
import { KEY } from './useFavorites';

export default function useFavorite({ pet, instantRemove }: { pet?: RandomPet; instantRemove?: boolean } = {}) {
  const setFavorites = useQueryStateUpdater<Favorite[]>({ key: KEY });

  const add = useMutation(() => API.favorites.add({ petId: pet?.id! }), {
    onSuccess({ id }) {
      setFavorites((state) => {
        return [
          { id, image_id: pet?.id, image: { id: pet?.id, url: pet?.url }, created_at: new Date() } as Favorite,
          ...(state || [])
        ];
      });
    }
  });

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
