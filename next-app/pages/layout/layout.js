import styles from "./layout.module.css";
import Head from "next/head";
import { navLinks } from "../lib/navLinks";
import Link from "next/link";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
      </Head>
      <header>{home ? Home_nav() : <div>Other Page Header</div>}</header>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}

function Home_nav() {
  return (
    <nav>
      {navLinks.map((link, i) => {
        return (
          <ul key={link.name}>
            <Link href={link.path}>
              <li>{link.name}</li>
            </Link>
          </ul>
        );
      })}
    </nav>
  );
}
