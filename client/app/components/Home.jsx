"use client";


import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { TbBrandFiverr } from "react-icons/tb";

import "aos/dist/aos.css";
import AOS from "aos";
import Typed from "typed.js";
import LottieAnimation from "./LottieAnimation";

const Home = () => {
  const el = useRef(null);
  const [hover, setHover] = useState(null);

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  useEffect(() => {
    if (el.current) {
      const typed = new Typed(el.current, {
        strings: [
          "<span style='color: #61bc84; font-weight: 600;'>F</span>athi <span style='color: #61bc84; font-weight: 600;'>I</span>smail.",
          "",
        ],
        typeSpeed: 100,
        loop: true,
      });

      return () => {
        typed.destroy();
      };
    }
  }, []);

  return (
    <>
      <section className="aboutShadow min-h-screen relative lg:bg-home-bg-img lg:bg-no-repeat lg:bg-top-left lg:bg-100 lg:m-0 mb-10 flex flex-col-reverse mt-[10vh] lg:mt-0 lg:flex-row items-center justify-between h-max overflow-hidden -z-0">
        <div className=" lg:max-w-[55vw] max-w-[100vw] px-[8%] h-max lg:items-start flex flex-col lg:justify-center items-center lg:pt-0 pt-16 ">
          <div
            className="lg:text-4xl text-2xl tracking-wider overflow-hidden w-max "
            id="content"
          >
            <h1 className="flex" data-aos="fade-up">
              Hi, I'm&nbsp;
              <span className="lg:hidden block">
                <span className="text-[#61bc84] font-semibold">F</span>
                athi <span className="text-[#61bc84] font-semibold">I</span>
                smail.
              </span>
              <span className="lg:block hidden">
                <span ref={el} />
              </span>
            </h1>
          </div>
          <div className="text-animated lg:text-4xl text-xl">
            <h3>Network & Cybersecurity Engineer</h3>
          </div>
          <p
            data-aos="zoom-in"
            data-aos-delay="200"
            className="lg:text-base text-xs lg:text-justify text-center w-full mt-2 text-[#ededed] bg-black bg-opacity-30 tracking-wide"
          >
            I'm a Network & Cybersecurity Engineer. I specialize
            in securing digital infrastructures against cyber threats and
            ensuring robust network defenses. With a solid background in
            cybersecurity protocols, ethical hacking, and incident response, I
            am dedicated to safeguarding systems and data from vulnerabilities.
            Let's fortify your digital assets together.
          </p>

          <div
            className="flex items-center justify-start mt-4"
            data-aos="fade-right"
          >
            <Link
              href="#Contact"
              className="flex items-center justify-center w-max h-max text-xl font-black"
            >
              <div className="btn">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span>Hire Me</span>
              </div>
            </Link>
          </div>
          <div className="absolute lg:left-auto left-[20%] lg:bottom-10 bottom-[60%] flex lg:justify-start gap-6 lg:items-center">
            <Link
              href="https://www.instagram.com/nacer_edd/?igsh=ZHY2bnB1d2puMWMy&utm_source=qr"
              target="_blanc"
            >
              <span
                className="border-2 border-[#61bc84] p-1 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#61bc84]"
                onMouseEnter={() => setHover("instagram")}
                onMouseLeave={() => setHover(null)}
              >
                <FaInstagram
                  type="logo"
                  name="instagram"
                  color={hover === "instagram" ? "black" : "#61bc84"}
                  className="w-6 h-6"
                />
              </span>
            </Link>
            <Link href="https://github.com/Chouich-Nacereddine" target="_blanc">
              <span
                className="border-2 border-[#61bc84] p-1 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#61bc84]"
                onMouseEnter={() => setHover("github")}
                onMouseLeave={() => setHover(null)}
              >
                <FaGithub
                  name="github"
                  type="logo"
                  color={hover === "github" ? "black" : "#61bc84"}
                  className="h-6 w-6"
                />
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/nacreddine-chouich/"
              target="_blanc"
            >
              <span
                className="border-2 border-[#61bc84] p-1 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#61bc84]"
                onMouseEnter={() => setHover("linkedin")}
                onMouseLeave={() => setHover(null)}
              >
                <FaLinkedinIn
                  name="linkedin"
                  type="logo"
                  color={hover === "linkedin" ? "black" : "#61bc84"}
                  className="h-6 w-6"
                />
              </span>
            </Link>
            {/* <Link
              href="https://www.fiverr.com/nacreddine1/build-a-portfolio-website-business-website-with-next-js-and-node-js"
              target="_blanc"
            >
              <span
                className="border-2 border-[#61bc84] p-1 flex items-center justify-center rounded-full transition-all duration-300 hover:bg-[#61bc84]"
                onMouseEnter={() => setHover("fiver")}
                onMouseLeave={() => setHover(null)}
              >
                <TbBrandFiverr
                  name="fiver"
                  type="logo"
                  color={hover === "fiver" ? "black" : "#61bc84"}
                  className="h-6 w-6"
                />
              </span>
            </Link> */}
          </div>
        </div>

        <div className="hidden w-[50vw] p-0 lg:flex items-center justify-center h-full pt-16">
          <LottieAnimation />
          {/* <img
            data-aos="fade-down-left"
            src="/assets/me.png"
            alt="me"
            className=" lg:w-[120%] lg:mr-[10%] lg:mt-[13.5%]"
          /> */}
        </div>
        <img
          data-aos="fade-up"
          src="/assets/me.png"
          alt="me"
          className="lg:hidden block w-[50vw]"
        />
      </section>
    </>
  );
};

export default Home;
