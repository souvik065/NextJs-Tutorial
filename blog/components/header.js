import { ImFacebook, ImTwitter, ImGithub } from "react-icons/im";
import Link from "next/link";

function header() {
  return (
    <header className="bg-gray-50 text-black">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 flex justify-center py-4 sm:py">
          <input type="text" className="input-text" placeholder="Search..." />
        </div>
        <div className="shrink w-80 sm:order-2">
          <a className="font-bold uppercase text-3xl">Design</a>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6 ">
            <Link href={"/"} legacyBehavior>
              <a>
                <ImFacebook color="#888888" />
              </a>
            </Link>
            <Link href={"/"} legacyBehavior>
              <a>
                <ImTwitter color="#888888" />
              </a>
            </Link>
            <Link href={"/"} legacyBehavior>
              <a>
                <ImGithub color="#888888" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default header;
