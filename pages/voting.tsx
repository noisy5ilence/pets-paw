import { MainLayout } from '../components';
import type { NextPage } from 'next';
import Head from 'next/head';
import classes from '../styles/Voting.module.css';

const Voting: NextPage = () => {
  return (
    <>
      <Head>
        <title>Voting - PetsPaw</title>
        <meta name="PetsPaw" content="PetsPaw test task project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MainLayout>
        <h1>Voting</h1>
      </MainLayout>
    </>
  );
};

export default Voting;
