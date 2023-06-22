import Image from "next/image";
import Link from "next/link";

export default function auhor() {
  return (
    <div className="author flex py-5">
      <Image
        alt="A descriptive text about the image"
        src={"/images/author/author1.jpg"}
        width={60}
        height={60}
        className="rounded-full"
      />
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"} legacyBehavior>
          <a className="text-md font-bold text-gray-800 hover:text-gray-600">
            Flying Height
          </a>
        </Link>
        <span className="text-sm text-gray-500">CEO and Founder</span>
      </div>
    </div>
  );
}
