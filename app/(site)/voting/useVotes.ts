import { useQuery } from '@tanstack/react-query';
import { boolean } from 'zod';

import API from './api';

export const KEY = 'votes';

export default function useVotes({ suspense }: { suspense?: boolean } = { suspense: false }) {
  return useQuery([KEY], API.votes.list, {
    suspense
  });
}
