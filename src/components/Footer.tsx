import Link from "next/link";
import { FaGithub, FaLinkedin, FaInstagram, FaInbox } from "react-icons/fa";

function Footer() {
  return (
    <footer className="md:container py-8 md:mx-auto border-t border-neutral-300 px-4 lg:px-20">
      <div className="flex justify-between">
        <p className="text-neutral-300">© 2024 Emir Yaşa.</p>
        <div className="space-x-5 flex">
          <Link href="https://github.com/emiryasa">
            <FaGithub
              className="text-neutral-300 hover:scale-125 active:scale-125 transition-all duration-200"
              size={23}
            />
          </Link>

          <Link href="https://www.linkedin.com/in/emir-yasa/">
            <FaLinkedin
              className="text-neutral-300 hover:scale-125 active:scale-125 transition-all duration-200"
              size={23}
            />
          </Link>
          <Link href="https://www.instagram.com/bzarreuproar/">
            <FaInstagram
              className="text-neutral-300 hover:scale-125 active:scale-125 transition-all duration-200"
              size={23}
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
