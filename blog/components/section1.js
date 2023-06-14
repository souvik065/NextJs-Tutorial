import Image from "next/image";
import Link from "next/link";

export default function section1() {
  return (
    <section className="py-16">
      <div className="container mx-auto md:px-20">
        <h1 className="font-bold text-4xl pb-12 text-center">Trending</h1>
        {Slide()}
      </div>
    </section>
  );
}

function Slide() {
  return (
    <div className="grid md:grid-cols-2 gap-10">
      <div className="image">
        <Link href={"/"} legacyBehavior>
          <a>
            <Image src={"/images/img1.jpg"} width={600} height={600} />
          </a>
        </Link>
      </div>
      <div className="info flex justify-center flex-col">
        <div className="cat">
          <Link href={"/"} legacyBehavior>
            <a className="text-orange-600 hover:text-orange-800">Bussiness</a>
          </Link>
          <Link href={"/"} legacyBehavior>
            <a className="text-gray-800 hover:text-gray-800">-Jully 3, 2023</a>
          </Link>
        </div>
        <div className="title">
          <Link href={"/"} legacyBehavior>
            <a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">
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
        <h1>Author</h1>
      </div>
    </div>
  );
}
