import { useMemo } from 'react';

const usePhotos = ({ type, list }: { type: 'likes' | 'dislikes' | 'favorites'; list: Log[] }) => {
  return useMemo(() => {
    return (
      [...list]
        ?.filter(({ value }) =>
          type === 'likes' ? value > 0 : type === 'dislikes' ? value < 0 : [undefined, 0].includes(value)
        )
        ?.sort((a, b) => {
          return +new Date(b.created_at) - +new Date(a.created_at);
        })
        ?.map(({ image, image_id, id }) => ({ name: image_id, image, id })) || []
    );
  }, [list, type]);
};

export default usePhotos;
