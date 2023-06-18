"use client";
import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";
import { Swiper, SwiperSlide } from "swiper/react";

export default function section3() {
  return (
    <section className="conatiner mx-auto md:px-20 py-16">
      <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>
      <Swiper slidesPerView={2}>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
        <SwiperSlide>{Post()}</SwiperSlide>
      </Swiper>
    </section>
  );
}

function Post() {
  return (
    <div className="grid">
      <div className="images">
        <Link href={"/"} legacyBehavior>
          <a>
            <Image
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
