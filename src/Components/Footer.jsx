/* eslint-disable no-unused-vars */
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaCar,
  FaArrowUp,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const legalLinks = [
    { name: "Terms of Service", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  const socialLinks = [
    {
      Icon: FaFacebook,
      href: "#",
      name: "Facebook",
      color: "hover:text-blue-500",
    },
    {
      Icon: FaTwitter,
      href: "#",
      name: "Twitter",
      color: "hover:text-sky-400",
    },
    {
      Icon: FaInstagram,
      href: "#",
      name: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      Icon: FaLinkedin,
      href: "#",
      name: "LinkedIn",
      color: "hover:text-blue-600",
    },
  ];

  return (
    <footer className="relative bg-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex items-center space-x-3">
            <h3 className="text-3xl font-bold text-blue-600">
              AutoFlex
            </h3>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map(({ Icon, href, name, color }) => (
              <a
                key={name}
                href={href}
                aria-label={name}
                className={`text-gray-400 ${color} transition-colors duration-300`}
              >
                <Icon className="text-2xl" />
              </a>
            ))}
          </div>
        </div>

        
        <div className="py-6 border-t border-zinc-400 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-gray-400 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} AutoFlex. All rights reserved.
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {legalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      </div>

      
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-500/50 z-50"
        aria-label="Scroll to top"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </footer>
  );
};

export default Footer;
