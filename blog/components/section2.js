"use client";

import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import getPost from "../lib/helper";
import fetcher from "../lib/fetcher";

export default function section2() {
  getPost().then((res) => console.log("res"));

  const { data, isLoading, isError } = fetcher("api/posts");
  if (data) console.log(data);
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="font-bold text-4xl py-12 text-center">Lates Post</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"} legacyBehavior>
          <a>
            <Image
              alt="A descriptive text about the image"
              src={"/images/img1.jpg"}
              className="rounded"
              width={500}
              height={350}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <Link href={"/"} legacyBehavior>
          <a className="text-orange-600 hover:text-orange-800">Bussiness</a>
        </Link>
        <Link href={"/"} legacyBehavior>
          <a className="text-gray-800 hover:text-gray-800">-Jully 3, 2023</a>
        </Link>
      </div>
      <div className="title">
        <Link href={"/"} legacyBehavior>
          <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">
            Your most unhappy customers are your fretest soure of learning
          </a>
        </Link>
      </div>
      <p className="text-gray-500 py-3">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos unde sed
        voluptas possimus? Debitis obcaecati, sunt neque sint magni cumque
        pariatur laudantium, ratione laboriosam possimus vel ipsa, quis iusto
        dignissimos quod minima doloremque quidem. Ducimus, culpa perferendis
      </p>
      <Author>Author</Author>
    </div>
  );
}
