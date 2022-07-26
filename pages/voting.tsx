import { Favourite, Log, Vote } from '@/models';
import { useQueries } from '@tanstack/react-query';
import type { NextPage, NextPageContext } from 'next';
import Head from 'next/head';

import { getUid } from '@/providers/uid';
import { MainLayout } from '@/components';
import { Voting as VotingContainer, API, RandomCat } from '@/containers/Voting';
import { API as CommonAPI } from '@/api';
import { useMemo } from 'react';

interface Props {
  cats: Array<RandomCat>;
  votes: Array<Vote>;
  favourites: Array<Favourite>;
}

const Voting: NextPage<Props> = props => {
  const [{ data: cat }, { data: votes }, { data: favourites }] = useQueries({
    queries: [
      { queryKey: ['cat'], queryFn: API.fetchRandomCat, initialData: props.cats, select: ([cat]: RandomCat[]) => cat },
      { queryKey: ['votes'], queryFn: () => CommonAPI.votes.get({ uid: getUid() }), initialData: props.votes },
      { queryKey: ['favourites'], queryFn: () => CommonAPI.favourites.get({ uid: getUid() }), initialData: props.favourites }
    ]
  });

  const logs = useMemo(() => {
    return [...(votes as Log[]), ...(favourites as Log[])].sort((a, b) => {
      return (+new Date(b.created_at)) - (+new Date(a.created_at));
    }).map(log => {
      log.value = log.value ?? -1;
      return log;
    });
  }, [votes, favourites]);

  return (
    <>
      <Head>
        <title>Voting - PetsPaw</title>
        <meta name="PetsPaw" content="PetsPaw test task project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <VotingContainer cat={cat!} logs={logs!}/>
      </MainLayout>
    </>
  );
};

export async function getServerSideProps(context: NextPageContext) {
  const uid = getUid(context);

  const [cats, votes, favourites] = await Promise.all([
    API.fetchRandomCat(),
    CommonAPI.votes.get({ uid }).catch(() => Promise.resolve([])),
    CommonAPI.favourites.get({ uid }).catch(() => Promise.resolve([]))
  ]);

  return {
    props: {
      cats,
      votes,
      favourites
    }
  }
}

export default Voting;
