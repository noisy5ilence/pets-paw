import Toolbar from "@/components/Toolbar";

import styles from "./layout.module.css";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import ReactQueryProvider from "@/components/ReactQueryProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactQueryProvider>
      <main className={styles.root}>
        <div className={styles.content}>
          <div className={styles.toolbar}>
            <Toolbar />
          </div>
          <div className={styles.page}>
            <div className={styles.breadcrumbs}>
              <Breadcrumbs />
            </div>
            {children}
          </div>
        </div>
      </main>
    </ReactQueryProvider>
  );
}
