import { useMutation } from '@tanstack/react-query';

import useQueryStateUpdater from '@/hooks/useQueryStateUpdater';

import API from './api';
import { KEY } from './useFavorites';

export default function useFavorite({ instantRemove }: { instantRemove?: boolean } = {}) {
  const setFavorites = useQueryStateUpdater<Favorite[]>({ key: KEY });

  const add = useMutation(
    ({ image }: { image: Omit<ImageWithBreeds, 'breeds'> }) => {
      return API.favorites.add({ image_id: image.id });
    },
    {
      onSuccess({ id }, { image }) {
        setFavorites((state) => {
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

  const handleRemove = (favoriteId: number) => {
    setFavorites((state: Favorite[]) => {
      return state?.filter(({ id }) => id != favoriteId) || [];
    });
  };

  const remove = useMutation(
    ({ favoriteId }: { favoriteId: number }) => {
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
