import React from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import Menu from "./Menu";

const About = () => {
  return (
    <section id="About" className=" min-h-screen  overflow-hidden about_bg">
      <div className="w-full min-h-screen flex flex-col gap-16 bg-black bg-opacity-30 pt-4">
        <h1
          className="flex justify-center items-center w-full h-[10vh] lg:text-5xl text-2xl "
          data-aos="zoom-in-down"
        >
          <span className="mt-10">
            <span className="text-[#61bc84]">A</span>bout
          </span>
        </h1>
        <div className="flex justify-between h-full">
          <span className="w-[30%] flex justify-center items-center">
            <img
              data-aos="fade-down-left"
              src="/assets/me.png"
              alt="me"
              className="w-[50%] h-[100%]"
            />
          </span>

          <span
            className="w-[70%] flex items-center justify-cente"
            data-aos="fade-left"
          >
            <span
              className="w-[90%] h-[90%] bg-[#0e0e0e] bg-opacity-50 border-[1.2px] rounded-tl-full rounded-br-full border-[#61bc84] py-3 flex flex-col overflow-hidden"
              data-aos="zoom-in-up"
            >
              <h1 className="w-full h-content text-center">
                Lorem, ipsum dolor.
              </h1>
              <h1 className="w-full h-content text-center">
                Lorem ipsum dolor sit amet consectetur.
              </h1>
              <h1 className="flex self-center w-[90%] h-content text-center ">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum
                debitis ullam dolorem fugit, cumque a, consequatur veniam eum
                laudantium veritatis fuga laborum adipisci sit assumenda iste?
                Inventore eligendi aliquam soluta.
              </h1>
            </span>
          </span>
        </div>

        <div className="flex flex-col">
          <h1
            className="flex justify-center items-center w-full h-[10vh] lg:text-5xl text-2xl pb-4"
            data-aos="zoom-in-down"
          >
            <span className="text-[#61bc84]">T</span>ools
          </h1>
          <div className="container">
            <div data-text="Github" style={{ "--r": "-15" }} className="glass">
              1
            </div>
            <div data-text="Github" style={{ "--r": "-15" }} className="glass">
              1
            </div>
            <div data-text="Github" style={{ "--r": "-15" }} className="glass">
              1
            </div>
            <div data-text="Code" style={{ "--r": "5" }} className="glass">
              2
            </div>
            <div data-text="Earn" style={{ "--r": "25" }} className="glass">
              3
            </div>
            <div data-text="Earn" style={{ "--r": "25" }} className="glass">
              3
            </div>
            <div data-text="Earn" style={{ "--r": "25" }} className="glass">
              3
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
