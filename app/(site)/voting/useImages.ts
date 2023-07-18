import { useMemo } from 'react';

const useImages = ({ type, list }: { type: 'likes' | 'dislikes' | 'favorites'; list: Log[] }) => {
  return useMemo(() => {
    const logs = list || [];
    return (type === 'favorites' ? logs : logs.filter(({ value }) => (type === 'likes' ? value! > 0 : value! < 0))).map(
      ({ image, id }) => ({ ...image, logId: id })
    );
  }, [list, type]);
};

export default useImages;
