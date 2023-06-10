import styles from "./layout.module.css";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <header></header>
      <main>{children}</main>
    </div>
  );
}
