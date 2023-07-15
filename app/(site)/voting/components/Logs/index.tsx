import { FC } from 'react';
import classes from 'classnames';
import cn from 'classnames';

import NoItem from '@/components/NoItem';

import DislikeIcon from './icons/dislike.svg';
import FavIcon from './icons/fav.svg';
import LikeIcon from './icons/like.svg';

import styles from './styles.module.css';

interface Props {
  logs: Array<Log>;
  className?: string;
}

const Logs: FC<Props> = ({ logs, className }) => {
  return (
    <ul className={cn(styles.root, className)}>
      {!logs.length ? (
        <li>
          <NoItem>actions</NoItem>
        </li>
      ) : (
        logs.map(({ created_at, id, image_id, value }, index) => {
          const createdAt = new Date(created_at);
          const hours = createdAt.getHours();
          const minutes = createdAt.getMinutes();

          const isLike = value > 0;
          const isDislike = value < 0;

          return (
            <li key={id || image_id} className={classes(styles.item, 'appear-top')}>
              <time className={styles.time}>
                {hours}:{minutes < 10 ? `0${minutes}` : minutes}
              </time>
              <span className={styles.info}>
                Image ID: <b>{image_id}</b> was added to {isLike ? 'Likes' : isDislike ? 'Dislikes' : 'Favorites'}
              </span>
              <span className={classes(styles.status, 'appear-above', 'delay')}>
                {isLike ? <LikeIcon /> : isDislike ? <DislikeIcon /> : <FavIcon />}
              </span>
            </li>
          );
        })
      )}
    </ul>
  );
};

export default Logs;
