"use client";

import type { Metadata } from "next";
import { title } from "@/constants/title";

import Image from "next/image";

import styles from "./styles.module.css";
import Activities from "./components/Activities";
import Logs from "./components/Logs";
import useRandomCat from "./useRandomCat";
import { useState } from "react";
import Loader from "@/components/Loader";
import useLogs from "./useLogs";

export const metadata: Metadata = {
  title: `Voting - ${title}`,
};

export default function Voting() {
  const { cat, onChangeCat, isLoading } = useRandomCat();
  const [isImageLoading, setIsImageLoading] = useState(true);

  const { logs, favoriteId } = useLogs({ catId: cat?.id });

  if (isLoading) {
    return (
      <div className={styles.voting}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={styles.voting}>
      <figure className={styles.photo}>
        <Image
          src={cat!.url}
          layout="fill"
          alt="Cat"
          onLoadingComplete={() => {
            setIsImageLoading(false);
          }}
        />
      </figure>
      <div className={styles.activities}>
        <Activities
          disabled={isImageLoading}
          cat={cat}
          favoriteId={favoriteId}
          onChangeCat={() => {
            setIsImageLoading(true);
            onChangeCat();
          }}
        />
      </div>
      <div className={styles.logs}>
        <Logs logs={logs} className={styles.list} />
      </div>
    </div>
  );
}
