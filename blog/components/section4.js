import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

export default function section4() {
  return (
    <section className="container mx-auto md:px-20 py-16">
      <div className="grid lg:grid-cols-2">
        <div className="item">
          <h1 className="font-bold text-4xl py-12 ">Business</h1>
          <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
        <div className="items">
          <h1 className="font-bold text-4xl py-12 ">Travel</h1>
          <div className="flex flex-col gap-6">
            {Post()}
            {Post()}
            {Post()}
          </div>
        </div>
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="flex gap-5">
      <div className="image flex flex-col justify-start">
        <Link href={"/"} legacyBehavior>
          <a>
            <Image
              alt="A descriptive text about the image"
              src={"/images/img1.jpg"}
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
            <a className="text-orange-600 hover:text-orange-800">Bussiness</a>
          </Link>
          <Link href={"/"} legacyBehavior>
            <a className="text-gray-800 hover:text-gray-800">-Jully 3, 2023</a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"} legacyBehavior>
            <a className="text-xl font-bold text-gray-800 hover:text-gray-600">
              Your most unhappy customers are your fretest soure of learning
            </a>
          </Link>
        </div>
        <Author>Author</Author>
      </div>
    </div>
  );
}
