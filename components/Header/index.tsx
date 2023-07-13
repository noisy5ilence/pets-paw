import { FC } from "react";
import { cookies } from "next/headers";

import Logo from "./components/Logo";
import ThemeToggle from "./components/ThemeToggle";

import styles from "./styles.module.css";

const Header: FC = () => {
  return (
    <header className={styles.root}>
      <Logo />
      <ThemeToggle initialTheme={cookies().get("theme")?.value as Theme} />
    </header>
  );
};

export default Header;
