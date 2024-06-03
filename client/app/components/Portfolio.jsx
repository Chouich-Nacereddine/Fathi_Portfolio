import React from "react";
import "aos/dist/aos.css";

const Portfolio = () => {
  return (
    <section
      id="Portfolio"
      className=" min-h-screen  overflow-hidden bg-black "
    >
      <div className="w-full min-h-screen flex flex-col gap-16 bg-black bg-opacity-30 pt-4 py-6 px-[8%]">
        <h1
          className="flex justify-center items-center w-full h-[10vh] lg:text-5xl text-2xl "
          data-aos="zoom-in-down"
        >
          <span className="mt-10">
            <span className="text-[#61bc84]">P</span>ortfolio
          </span>
        </h1>
        <div className="flex flex-wrap justify-around gap-10">
          <div className="card-container bg-[#34373b] bg-opacity-35 " data-aos="zoom-in-up">
            <div className="card">
              <div className="front-content">
                <p>Hover me</p>
              </div>
              <div className="content">
                <p className="heading">Card Hover</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipii voluptas ten
                  mollitia pariatur odit, ab minus ratione adipisci accusamus
                  vel est excepturi laboriosam magnam necessitatibus dignissimos
                  molestias.
                </p>
              </div>
            </div>
          </div>

          <div className="card-container bg-[#34373b] bg-opacity-35 text" data-aos="zoom-in-up">
            <div className="card">
              <div className="front-content">
                <p>Hover me</p>
              </div>
              <div className="content">
                <p className="heading">Card Hover</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipii voluptas ten
                  mollitia pariatur odit, ab minus ratione adipisci accusamus
                  vel est excepturi laboriosam magnam necessitatibus dignissimos
                  molestias.
                </p>
              </div>
            </div>
          </div>

          <div className="card-container bg-[#34373b] bg-opacity-35 text" data-aos="zoom-in-up">
            <div className="card">
              <div className="front-content">
                <p>Hover me</p>
              </div>
              <div className="content">
                <p className="heading">Card Hover</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipii voluptas ten
                  mollitia pariatur odit, ab minus ratione adipisci accusamus
                  vel est excepturi laboriosam magnam necessitatibus dignissimos
                  molestias.
                </p>
              </div>
            </div>
          </div>

          <div className="card-container bg-[#34373b] bg-opacity-35 text" data-aos="zoom-in-up">
            <div className="card">
              <div className="front-content">
                <p>Hover me</p>
              </div>
              <div className="content">
                <p className="heading">Card Hover</p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipii voluptas ten
                  mollitia pariatur odit, ab minus ratione adipisci accusamus
                  vel est excepturi laboriosam magnam necessitatibus dignissimos
                  molestias.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
