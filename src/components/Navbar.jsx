import logo from "../assets/boubous.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="rounded-2xl w-10" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <button>
          <FaInstagram />
        </button>
        <button>
          <FaGithub />
        </button>
        <button>
          <FaLinkedin />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
