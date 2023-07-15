import { atom } from 'jotai';

const updateLogsAtom = atom<{ type: 'likes' | 'dislikes' | 'favorites' } | undefined>(undefined);

export default updateLogsAtom;