"use client";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import { title } from "process";

export default function section4() {
  const { data, isLoading, isError } = fetcher("api/popular");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12 ">Business</h1>
          <div className="flex flex-col gap-6">
            {data[1] ? <Post data={data[1]}></Post> : <></>}
            {data[2] ? <Post data={data[2]}></Post> : <></>}
            {data[3] ? <Post data={data[3]}></Post> : <></>}
          </div>
        </div>
        <div className="items">
          <h1 className="font-bold text-4xl py-12 ">Travel</h1>
          <div className="flex flex-col gap-6">
            {data[4] ? <Post data={data[4]}></Post> : <></>}
            {data[5] ? <Post data={data[5]}></Post> : <></>}
            {data[6] ? <Post data={data[6]}></Post> : <></>}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post({ data }) {
  const { id, category, img, published, author, description, title } = data;

  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"} legacyBehavior>
          <a>
            <Image
              alt="A descriptive text about the image"
              src={img || "/"}
              className="rounded"
              width={300}
              height={250}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col ">
        <div className="info flex justify-center flex-col">
          <Link href={"/"} legacyBehavior>
            <a className="text-orange-600 hover:text-orange-800">
              {category || "No Category"}
            </a>
          </Link>
          <Link href={"/"} legacyBehavior>
            <a className="text-gray-800 hover:text-gray-800">
              -{published || ""}
            </a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"} legacyBehavior>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              {title || "No Title"}
            </a>
          </Link>
        </div>
        <p className="text-gray-500 py-3">{description || "description"}</p>
        {author ? <Author></Author> : <></>}
      </div>
    </div>
  );
}
