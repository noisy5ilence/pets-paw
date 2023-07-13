import { useMutation } from "react-query";
import API from "./api";

import { KEY } from "./useFavorites";
import useQueryStateUpdater from "@/hooks/useQueryStateUpdater";

export default function useFavorite({ cat }: { cat?: RandomCat }) {
  const setFavorites = useQueryStateUpdater<Favorite[]>({ key: KEY });

  const add = useMutation(() => API.favorites.add({ catId: cat?.id! }), {
    onSuccess({ id }) {
      setFavorites((state) => {
        return [
          { id, image_id: cat?.id, created_at: new Date() } as Favorite,
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
