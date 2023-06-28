"use client";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import fetcher from "../lib/fetcher";
import Spinner from "./_child/spinner";
import Error from "./_child/error";
import { Swiper, SwiperSlide } from "swiper/react";

export default function section3() {
  const { data, isLoading, isError } = fetcher("api/popular");
  if (isLoading) return <Spinner></Spinner>;
  if (isError) return <Error></Error>;

  return (
    <section className="conatiner mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
        }}
      >
        {data.map((value, index) => (
          <SwiperSlide key={index}>
            <Post data={value}></Post>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

function Post({ data }) {
  const { id, category, img, published, author, description, title } = data;

  return (
    <div className="grid">
      <div className="images">
        <Link href={`/posts/${id}`} legacyBehavior>
          <a>
            <Image
              src={img || "/"}
              alt="A descriptive text about the image"
              className="rounded"
              width={500}
              height={350}
            />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <Link href={`/posts/${id}`} legacyBehavior>
          <a className="text-orange-600 hover:text-orange-800">
            {category || "Unknown"}
          </a>
        </Link>
        <Link href={`/posts/${id}`} legacyBehavior>
          <a className="text-gray-800 hover:text-gray-800">
            -{published || "Unknown"}
          </a>
        </Link>
      </div>
      <div className="title">
        <Link href={`/posts/${id}`} legacyBehavior>
          <a className="text-xl  font-bold text-gray-800 hover:text-gray-600">
            {title || "Unknown"}
          </a>
        </Link>
      </div>
      <p className="text-gray-500 py-3">{description || "description"}</p>
      {author ? <Author {...author}></Author> : <></>}
    </div>
  );
}
