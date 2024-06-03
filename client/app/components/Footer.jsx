import React from "react";

const Footer = () => {

    const currentYear = new Date().getFullYear();

  return (
    <footer className="flex justify-center items-center h-16 lg:h-10 font-[Inter] text-[#61bc84] text-base lg:text-xs">
      <p className="text-center lg:text-left">
        &copy; {currentYear} Created from scratch by &nbsp;
        <a
          className="no-underline font-bold text-blue-500"
          href="https://www.linkedin.com/in/nacreddine-chouich-9a72aa1ba/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Nacereddine Chouich.
        </a>
        &nbsp;All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
