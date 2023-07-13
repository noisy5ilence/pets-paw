import type { Metadata } from "next";

import { title } from "@/constants/title";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `Home - ${title}`,
};

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.figure} />
      <div className={styles.background} />
    </div>
  );
}
