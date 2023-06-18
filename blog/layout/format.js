import Header from "../components/header";
import Footer from "../components/footer";
import Head from "next/head";
import "../app/layout";

export default function format({ children }) {
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <Header></Header>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}
