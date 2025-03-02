import Link from "next/link";
import { FaLinkedin, FaGithub, FaBehance, FaDribbble } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100 py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-6 font-playfair">Khushi</h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Crafting intuitive and beautiful digital experiences that solve real user problems and elevate brands through thoughtful design.
            </p>
            <div className="flex space-x-6 mt-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="GitHub"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Behance"
              >
                <FaBehance size={22} />
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition-colors"
                aria-label="Dribbble"
              >
                <FaDribbble size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 font-playfair">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-gray-600 hover:text-black transition-colors relative inline-block group">
                  Home
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-black transition-colors relative inline-block group">
                  Projects
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-black transition-colors relative inline-block group">
                  About
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-100 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} Khushi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 