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
  image: ImageWithBreeds;
  favoriteId?: number;
  disabled?: boolean;
  onChangeImage: () => void;
}

const Activities: FC<Props> = ({ image, favoriteId, disabled, onChangeImage }) => {
  const vote = useVote();
  const { add, remove } = useFavorite();
  const updateLogs = useSetAtom(updateLogsAtom);

  const isFav = Boolean(favoriteId);

  const handleVote = (value: 1 | -1) => {
    updateLogs({ type: value > 0 ? 'likes' : 'dislikes' });
    vote.mutate({ image, vote: value });
    onChangeImage();
  };

  const handleFav = () => {
    if (isFav) return remove.mutate({ favoriteId: favoriteId! });
    updateLogs({ type: 'favorites' });
    add.mutate({ image });
  };

  return (
    <ul className={styles.list}>
      <li className={cn(styles.item, styles.like)} title='Like'>
        <button className='button' onClick={() => handleVote(1)} disabled={disabled}>
          <LikeIcon />
        </button>
      </li>
      <li className={cn(styles.item, styles.fav)} title={isFav ? 'Remove from favorite' : 'Add to favorite'}>
        <button className='button' onClick={handleFav} disabled={disabled || remove.isLoading || add.isLoading}>
          {isFav ? <UnFavIcon /> : <FavIcon />}
        </button>
      </li>
      <li className={cn(styles.item, styles.dislike)} title='Dislike'>
        <button className='button' onClick={() => handleVote(-1)} disabled={disabled}>
          <DislikeIcon />
        </button>
      </li>
    </ul>
  );
};

export default Activities;
