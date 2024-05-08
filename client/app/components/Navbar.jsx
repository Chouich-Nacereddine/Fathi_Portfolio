"use client";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  return (
    <>
      <header className="fixed top-0 left-0 w-full py-6 px-[8%] bg-transparent flex justify-between items-center z-[100]">
        <Link
          href="/"
          className="text-2xl tracking-wider"
          onClick={() => {
            setActiveLink("Home");
          }}
        >
          <span className="text-[#61bc84] text-4xl font-black">F</span>
          athi <span className="text-[#61bc84] text-4xl font-black">I</span>smail
          <span className="text-[#61bc84] text-4xl font-black">.</span>
        </Link>

        <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            size="lg"
            color="#61bc84"
          />
        </button>
        <nav
          className={`lg:block lg:translate-x-[59vw] lg:w-max lg:h-max lg:pt-8 lg:px-0 lg:mt-0 flex flex-col z-10 mt-[12vh] gap-2 fixed top-0 left-0 w-[50vw] h-screen py-3 px-[8%] text-lg text-[#ededed] bg-transparent bg-opacity-85 transition-transform duration-300 ${
            isOpen ? "" : "-translate-x-[100vw]"
          }`}
        >
          <Link
            href="/"
            className={`lg:ml-6 transition-[.3s] hover:text-[#61bc84] ${
              activeLink === "Home" ? "text-[#61bc84] font-semibold" : ""
            }`}
            onClick={() => {
              setActiveLink("Home");
              setIsOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            href="#About"
            className={`lg:ml-6 transition-[.3s] hover:text-[#61bc84] ${
              activeLink === "About" ? "text-[#61bc84] font-semibold" : ""
            }`}
            onClick={() => {
              setActiveLink("About");
              setIsOpen(false);
            }}
          >
            About
          </Link>
          <Link
            href="#Portfolio"
            className={`lg:ml-6 transition-[.3s] hover:text-[#61bc84] ${
              activeLink === "Portfolio" ? "text-[#61bc84] font-semibold" : ""
            }`}
            onClick={() => {
              setActiveLink("Portfolio");
              setIsOpen(false);
            }}
          >
            Portfolio
          </Link>
          <Link
            href="#Services"
            className={`lg:ml-6 transition-[.3s] hover:text-[#61bc84] ${
              activeLink === "Services" ? "text-[#61bc84] font-semibold" : ""
            }`}
            onClick={() => {
              setActiveLink("Services");
              setIsOpen(false);
            }}
          >
            Services
          </Link>
          <Link
            href="#Contact"
            className={`lg:ml-6 transition-[.3s] hover:text-[#61bc84] ${
              activeLink === "Contact" ? "text-[#61bc84] font-semibold" : ""
            }`}
            onClick={() => {
              setActiveLink("Contact");
              setIsOpen(false);
            }}
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
