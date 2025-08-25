import React from "react";
import { useState } from "react";
import { navLinks } from "../Constants";
import { RiCloseLine } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prevIsOpen) => !prevIsOpen);
  const NavItems = () => {
    return (
      <ul className="flex flex-col items-center gap-4 sm:flex-row md:gap-6 relative z-20">
        {navLinks.map(({ id, href, name }) => (
          <li
            key={id}
            className="text-zinc-400 hover:text-white font-poppins max-sm:hover:bg-black/70 max-sm:w-full max-sm:rounded-md py-2 max-sm:px-5"
          >
            <a
              href={href}
              className="text-sm md:text-base hover:text-zinc-500 transition-colors"
              onClick={() => {}}
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
    );
  };
  return (
    <header className="fixed shadow-sm top-0 left-0 z-50 right-0 bg-white px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5">
          <a
            href="/"
            className="text-3xl font-bold text-blue-500 hover:opacity-70 cursor-pointer no-underline"
          >
            AutoFlex
          </a>
          <button
            onClick={toggleMenu}
            className="text-zinc-400 text-2xl hover:text-zinc-800 focus:outline-none sm:hidden flex cursor-pointer"
          >
            {isOpen ? <RiCloseLine /> : <FaBars />}
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>
      <div
        className={`absolute left-0 right-0 bg-black-600 backdrop-blur-xl cursor-pointer transition-all duration-300 ease-in-out overflow-hidden z-20 mx-auto sm:hidden block ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
