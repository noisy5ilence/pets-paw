import { FC } from 'react';
import cn from 'classnames';
import { useSetAtom } from 'jotai';

import updateLogsAtom from '@/constants/updateLogsAtom';

import useFavorite from '../../useFavorite';
import useVote from '../../useVote';

import DislikeIcon from './icons/dislike.svg';
import FavIcon from './icons/fav.svg';
import LikeIcon from './icons/like.svg';
import UnFavIcon from './icons/un-fav.svg';

import styles from './styles.module.css';

interface Props {
  pet?: RandomPet;
  favoriteId?: number;
  disabled?: boolean;
  onChangeCat: () => void;
}

const Activities: FC<Props> = ({ pet, favoriteId, disabled, onChangeCat }) => {
  const vote = useVote({ pet });
  const { add, remove } = useFavorite({ pet });
  const updateLogs = useSetAtom(updateLogsAtom);

  const isFav = Boolean(favoriteId);

  return (
    <ul className={styles.list}>
      <li className={cn(styles.item, styles.like)} title='Like'>
        <button
          className='button'
          onClick={() => {
            onChangeCat();
            updateLogs({ type: 'likes' });
            vote.mutateAsync({ vote: 1 });
          }}
          disabled={disabled}
        >
          <LikeIcon />
        </button>
      </li>
      <li className={cn(styles.item, styles.fav)} title={isFav ? 'Remove from favorite' : 'Add to favorite'}>
        <button
          className='button'
          onClick={() => {
            if (isFav) return remove.mutate({ favoriteId: favoriteId!.toString() });
            updateLogs({ type: 'favorites' });
            add.mutate();
          }}
          disabled={disabled || remove.isLoading || add.isLoading}
        >
          {isFav ? <UnFavIcon /> : <FavIcon />}
        </button>
      </li>
      <li className={cn(styles.item, styles.dislike)} title='Dislike'>
        <button
          className='button'
          onClick={() => {
            onChangeCat();
            updateLogs({ type: 'dislikes' });
            vote.mutateAsync({ vote: -1 });
          }}
          disabled={disabled}
        >
          <DislikeIcon />
        </button>
      </li>
    </ul>
  );
};

export default Activities;
