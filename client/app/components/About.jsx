import React from "react";
import Menu from "./Menu";

const About = () => {
  return (
    <section id="About" className="pt-16 min-h-screen aboutShadow flex flex-col gap-20 overflow-hidden">
      <h1
        className="flex justify-center items-center w-full h-[10vh] lg:text-5xl text-2xl "
        data-aos="zoom-in-down"
      >
        <span className="mt-10"><span className="text-[#61bc84]">A</span>bout</span>
      </h1>
      <Menu />
    </section>
  );
};

export default About;
