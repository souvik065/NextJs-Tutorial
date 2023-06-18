import { ImFacebook, ImTwitter, ImGithub } from "react-icons/im";
import Link from "next/link";
import Newsletter from "./_child/newsletter";
export default function footer() {
  const bg = {
    backgroundImage: "url('/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter></Newsletter>
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
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
          <p className="py-5 text-gray-400">
            Copyright ©2022 All rights reserved | This template is made with by
            Souvik Bhattacharya
          </p>
          <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}
