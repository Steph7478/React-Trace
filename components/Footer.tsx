import Link from "next/link";
import { GrLinkedin } from "react-icons/gr";
import { VscGithub } from "react-icons/vsc";

const Footer = () => {
  return (
    <footer className="bg-[#00000045] w-full text-white py-4 flex justify-center items-center  px-5">
      <div className="max-w-[1000px] w-full flex justify-between max-[600px]:flex-wrap-reverse gap-y-8">
        <div className="container text-start">
          <p>&copy; 2025 Stéphanie Gurgel Estevam. All rights reserved.</p>
          <p>Landing page based on a free template created by Webflow.</p>
        </div>
        <div className="flex gap-x-5 justify-center items-center">
          <Link href="https://github.com/Steph7478" target="_blank">
            <VscGithub className="w-8 h-8" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/stephanie-gurgel-7998aa35b/"
            target="_blank"
          >
            <GrLinkedin className="w-8 h-8" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
