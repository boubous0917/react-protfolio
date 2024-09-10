import logo from "../../assets/boubous.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { GITHUB_LINK, IG_LINK, LINKEDIN_LINK } from "../../data/cn";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-20">
      <div className="flex items-center flex-shrink-0">
        <img className="w-10 rounded-2xl" src={logo} alt="logo" />
      </div>
      <div className="flex items-center justify-center gap-4 m-8 text-2xl">
        <a href={IG_LINK}>
          <FaInstagram />
        </a>
        <a href={GITHUB_LINK}>
          <FaGithub />
        </a>
        <a href={LINKEDIN_LINK}>
          <FaLinkedin />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
