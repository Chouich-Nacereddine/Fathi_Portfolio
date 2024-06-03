import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className=" min-h-screen  overflow-hidden bg-black">
      <div className="w-full min-h-screen flex flex-col gap-16 bg-black bg-opacity-30 pt-4">
        <h1
          className="flex justify-center items-center w-full h-[10vh] lg:text-5xl text-2xl "
          data-aos="zoom-in-down"
        >
          <span className="mt-10">
            <span className="text-[#61bc84]">C</span>ontact
          </span>
        </h1>
      <div className="w-full flex justify-center items-center">
        
      <div className="form-container bg-[#1e1e1f]">
          <form className="form">
            <div className="form-group">
              <label for="email">Company Email</label>
              <input required="" name="email" id="email" type="text" />
            </div>
            <div className="form-group">
              <label for="textarea">How Can I Help You?</label>
              <textarea
                required=""
                cols="50"
                rows="10"
                id="textarea"
                name="textarea"
              ></textarea>
            </div>
            <button type="submit" className="form-submit-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Contact;
