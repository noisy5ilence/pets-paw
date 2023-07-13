import { useMutation } from 'react-query';

import useQueryStateUpdater from '@/hooks/useQueryStateUpdater';

import API from './api';
import { KEY } from './useFavorites';

export default function useFavorite({ pet }: { pet?: RandomPet }) {
  const setFavorites = useQueryStateUpdater<Favorite[]>({ key: KEY });

  const add = useMutation(() => API.favorites.add({ petId: pet?.id! }), {
    onSuccess({ id }) {
      setFavorites((state) => {
        return [
          { id, image_id: pet?.id, image: { id: pet?.id, url: pet?.url }, created_at: new Date() } as Favorite,
          ...(state || []),
        ];
      });
    },
  });

  const remove = useMutation(
    ({ favoriteId }: { favoriteId: string }) =>
      API.favorites.delete({ favoriteId }),
    {
      onSuccess(_, { favoriteId }) {
        setFavorites((state) => {
          return state?.filter(({ id }) => id?.toString() != favoriteId) || [];
        });
      },
    }
  );

  return {
    remove,
    add,
  };
}
