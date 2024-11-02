import logo from "../assets/vbRushLogo.png";
import { FaLinkedin, FaGithub, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="w-50 h-40" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a 
          href="https://www.linkedin.com/in/vansh-bhardwaj-72881b212/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://github.com/vanshbhardwaj911?tab=repositories" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-gray-800"
        >
          <FaGithub />
        </a>
        <a 
          href="https://twitter.com/your-profile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-blue-400"
        >
          <FaTwitterSquare />
        </a>
        <a 
          href="https://www.instagram.com/your-profile" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
