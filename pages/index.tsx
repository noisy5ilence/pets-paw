import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import classes from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home - PetsPaw</title>
        <meta name="PetsPaw" content="PetsPaw test task project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        <div className={classes.figure}/>
        <div className={classes.background}/>
      </main>
    </>
  );
};

export default Home;
