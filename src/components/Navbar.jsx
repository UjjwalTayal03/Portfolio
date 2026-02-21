import React, { useState } from "react";
import resume from "/resume.pdf"; // adjust path

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full z-50" id="Nav">
      {/* Main Navbar */}
      <div className="flex bg-[rgb(26,11,46)] text-white h-16 items-center justify-between px-6 md:px-16 lg:px-24 bg-opacity-95 backdrop-blur-3xl">

        {/* Logo */}
        <div className="text-lg font-medium">
          Ujjwal's Portfolio
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-lg">
          <button
            onClick={() => scrollToSection("Hero")}
            className="relative border-b-2 border-transparent hover:border-white transition-all duration-300"
          >
            Home
          </button>

          <button
            onClick={() => scrollToSection("Projects")}
            className="relative border-b-2 border-transparent hover:border-white transition-all duration-300"
          >
            Projects
          </button>

          <button
            onClick={() => scrollToSection("Contact")}
            className="relative border-b-2 border-transparent hover:border-white transition-all duration-300"
          >
            Contact
          </button>

          {/* Resume Button */}
          <a
  href={resume}
  target="_blank"
  rel="noopener noreferrer"
  className="px-4 py-1.5 rounded-md bg-purple-600/20 text-purple-300 border border-purple-500/30 hover:bg-purple-600/30 hover:border-purple-400 transition-all duration-300"
>
  Resume
</a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-3xl transition-transform duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            <span className={`${menuOpen ? "rotate-90" : ""} inline-block`}>
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        } bg-[rgb(26,11,46)] text-white text-center bg-opacity-95 backdrop-blur-3xl`}
      >
        <div className="flex flex-col py-4 space-y-4">
          <button
            onClick={() => {
              scrollToSection("Hero");
              setMenuOpen(false);
            }}
          >
            Home
          </button>

          <button
            onClick={() => {
              scrollToSection("Projects");
              setMenuOpen(false);
            }}
          >
            Projects
          </button>

          <button
            onClick={() => {
              scrollToSection("Contact");
              setMenuOpen(false);
            }}
          >
            Contact
          </button>

          {/* Resume Button Mobile */}
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="border border-white px-4 py-2 rounded-full mx-auto w-fit transition-all duration-300 hover:scale-105 hover:text-purple-300 hover:border-purple-300"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;