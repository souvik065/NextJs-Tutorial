import Head from "next/head";
import Image from "next/image";
import nextjs from "../../public/images/nextjs.png";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>NextJs First Post</title>
      </Head>
      <h1>First Blog Post</h1>
      {/* <Image src={nextjs} /> */}
      <Image src="/images/nextjs.png" layout="fill" />
      {/* NextJs require some width & height property or layout="fill" property because
      nextjs dosen't have the access of local files. */}
    </>
  );
}
