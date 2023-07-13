import SideMenu from "./components/SideMenu";
import Search from "./components/Search";
import Navigation from "./components/Navigation";

import styles from "./styles.module.css";

const Toolbar = () => {
  return (
    <header className={styles.root}>
      <div className={styles.sideMenu}>
        <SideMenu />
      </div>
      <div className={styles.search}>
        <Search />
      </div>
      <div className={styles.navigation}>
        <Navigation />
      </div>
    </header>
  );
};

export default Toolbar;
