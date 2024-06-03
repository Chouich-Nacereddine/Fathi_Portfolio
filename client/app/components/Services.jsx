import React from "react";
import "aos/dist/aos.css";

const Services = () => {
  return (
    <section id="Services" className=" min-h-screen  overflow-hidden bg-black">
      <div className="w-full min-h-screen flex flex-col justify-center gap-16 bg-black bg-opacity-30 pt-4">
        <h1
          className="flex justify-center items-center w-full h-[10vh] lg:text-5xl text-2xl "
          data-aos="zoom-in-down"
        >
          <span className="mt-10">
            <span className="text-[#61bc84]">S</span>ervices
          </span>
        </h1>

        <div className="flex justify-evenly flex-wrap pt-10">

          <span className="outer" data-aos="zoom-in-up">
            <div className="dot"></div>
            <div className="services-card">
              <div className="ray"></div>
              <div className="text">¨DevSecOps¨</div>
              <div>
                <img src="/assets/devsecops.png" alt="" className="w-[4rem]"/>
              </div>
              <div className="line topl"></div>
              <div className="line leftl"></div>
              <div className="line bottoml"></div>
              <div className="line rightl"></div>
            </div>
          </span>

          <span className="outer" data-aos="zoom-in-up">
            <div className="dot"></div>
            <div className="services-card">
              <div className="ray"></div>
              <div className="text">¨Pentesting¨</div>
              <div>
                <img src="/assets/penetration-testing.png" alt="" className="w-[4rem]"/>
              </div>
              <div className="line topl"></div>
              <div className="line leftl"></div>
              <div className="line bottoml"></div>
              <div className="line rightl"></div>
            </div>
          </span>

        </div>
      </div>
    </section>
  );
};

export default Services;
