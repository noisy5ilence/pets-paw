import { Log } from '@/models';
import { FC, useMemo } from 'react';
import Image from 'next/image';

import { RandomCat } from './models';
import { Activities, ActionLogs } from './components';

import classes from './Voting.module.css';

interface Props {
  cat: RandomCat;
  logs: Array<Log>;
}

export const Voting: FC<Props> = ({ logs, cat }) => {
  const favourite = useMemo(() => {
    return logs.find(({ image_id, value }) => image_id === cat.id && value < 0);
  }, [logs, cat.id]);

  return (
    <div className={classes.voting}>
      <figure className={classes.photo}>
        <Image src={cat.url} layout='fill' alt='Cat'/>
      </figure>
      <div className={classes.activities}>
        <Activities catId={cat.id} favouriteId={favourite?.id}/>
      </div>
      <div className={classes.logs}>
        <ActionLogs logs={logs}/>
      </div>
    </div>
  );
};