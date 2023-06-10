import Head from "next/head";
import Image from "next/image";
import nextjs from "../../public/images/nextjs.png";
import Layout from "../layout/layout";
import Link from "next/link";

export default function FirstPost() {
  return (
    <>
      <Layout>
        <Link href="/posts/first-post">Go to First Post</Link>
      </Layout>
    </>
  );
}
