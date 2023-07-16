import { useQuery } from 'react-query';

import API from './api';

export const KEY = 'votes';

export default function useVotes({ initialData }: { initialData?: Vote[] } = { initialData: undefined }) {
  const query = useQuery([KEY], API.votes.list, {
    initialData
  });

  return {
    ...query,
    isFetched: Boolean(query?.data) || query.isFetched
  };
}
