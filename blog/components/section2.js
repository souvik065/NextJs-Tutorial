"use client";

import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import getPost from "../lib/helper";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";

export default function section2() {
  getPost().then((res) => console.log("res"));

  const { data, isLoading, isError } = fetcher("api/posts");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Latest Post</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {data &&
          data.map((value, index) => <Post data={value} key={index}></Post>)}
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, category, img, published, author, title } = data;

  return (
    <div className="item">
      <div className="images">
        <Link href={"/"} legacyBehavior>
          <a>
            <Image
              alt="A descriptive text about the image"
              src={img || "/"}
              className="rounded"
              width={500}
              height={350}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <Link href={"/"} legacyBehavior>
          <a className="text-orange-600 hover:text-orange-800">
            {category || "Unknown"}
          </a>
        </Link>
        <Link href={"/"} legacyBehavior>
          <a className="text-gray-800 hover:text-gray-800">
            -{published || "Unknown"}
          </a>
        </Link>
      </div>
      <div className="title">
        <Link href={"/"} legacyBehavior>
          <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">
            {title || "Title"}
          </a>
        </Link>
      </div>
      <p className="text-gray-500 py-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos unde sed
        voluptas possimus? Debitis obcaecati, sunt neque sint magni cumque
        pariatur laudantium, ratione laboriosam possimus vel ipsa, quis iusto
        dignissimos quod minima doloremque quidem. Ducimus, culpa perferendis
      </p>
      {author ? <Author></Author> : <></>}
    </div>
  );
}
