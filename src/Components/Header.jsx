import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCallOutline } from "react-icons/io5";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header id="home" className="flex flex-col lg:flex-row justify-between items-center bg-black text-white px-4 py-2 relative z-10">
      <div className="flex items-center justify-between w-full lg:w-auto">
        <div className="avatar">
          <div className="ring-red-500 ring-offset-base-100 w-[8vh] h-[8vh] rounded-full ring ring-offset-2 flex items-center justify-center">
            <img
              src="public/assets/Photo.jpg"
              alt="Avatar"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <h1 className="font-extrabold text-xl md:text-2xl lg:text-3xl ml-4">
          PRAVIN M BALE
        </h1>
        <button
          className="lg:hidden flex items-center text-white ml-4"
          onClick={toggleMenu}
        >
          <AiOutlineMenu className="text-3xl" />
        </button>
      </div>

      <nav
        ref={menuRef}
        className={`fixed top-0 right-0 w-3/4 h-screen bg-black text-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } lg:relative lg:flex lg:flex-grow lg:items-center lg:justify-center lg:space-x-6 lg:w-auto lg:h-auto lg:bg-transparent lg:translate-x-0`}
      >
        <ul
          className={`flex flex-col items-center lg:flex-row lg:space-x-6 mt-16 lg:mt-0 ${
            isMenuOpen ? "lg:space-x-6" : "lg:space-x-0"
          }`}
        >
          {["Home", "About", "Education", "Skills", "Projects", "Contact"].map(
            (item, index) => (
              <li key={index}>
                <a
                   href={`#${item.toLowerCase()}`}
                  className="block px-4 py-1 text-lg md:text-base lg:text-lg rounded-full hover:bg-orange-400 hover:border-b-2 border-transparent transition-all duration-300"
                  onClick={closeMenu}
                >
                  {item}
                </a>
              </li>
            )
          )}
        </ul>
      </nav>

      <div className="xl:flex items-center mt-2">
        <button className="flex items-center bg-sky-300 border border-black font-bold hover:bg-green-500 hover:border-b-2 px-4 py-2 rounded-full text-sm md:text-base lg:text-lg">
          <IoCallOutline className="text-green-900" />
          <a
            href="tel:+919764007164"
            className="ml-2 text-sm md:text-base lg:text-lg"
          >
            Make a call
          </a>
        </button>
      </div>
    </header>
  );
}
