import React from "react";
// import Hero_Image from "../assets/hero_image.webp"
// import Hero_Image from "../assets/hero_image.jpg";
// import bg_image from "../assets/bg_image.jpeg";
// import bg_image from "../assets/white_bg1.jpeg"
import greenTick from "../assets/check.png";
import bg_image from "../assets/white_bg2.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className=" h-[90%] text-white flex"
      style={{
        backgroundImage: `url(${bg_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: "-10",
      }}
    >
      <div className=" w-full mx-auto text-black/80 flex cursor-text max-sm:text-sm">
        <div className="max-w-[1200px] mx-auto h-[inherit] flex flex-col items-center justify-center gap-4 py-10">
          <div className="text-sm bg-slate-200 max-sm:text-[10px] text-black p-2 border rounded-3xl flex gap-2 justify-center items-center">
            <span>
              <img src={greenTick} alt="green tick" className="w-6 max-sm:w-4" />
            </span>
            <span className="text-purple-700">No. 1</span> Real-Time Price Recommender
          </div>
          <div className="text-7xl font-bold text-center max-sm:text-3xl max-md:text-4xl max-lg:text-5xl">
            Real-Time <br /> <span className="text-purple-700">Price Recommendations</span> <br />
          </div>
          <div className="text-xl text-center max-sm:text-xs max-lg:text-lg font-normal max-md:text-sm">
            Maximize revenue with recommendations fueled by current competitor
            pricing, product demand, and customer preferences.
          </div>
          <div className="flex gap-6 max-sm:gap-2 max-md:gap-4">
            <Link to={"/dataForm"}>
              <button className="border-[2px] max-lg:w-40 max-md:text-sm max-md:w-32 max-sm:text-xs max-sm:w-24 border-black p-2 text-lg w-52 rounded-xl bg-purple-700/90 text-white hover:bg-purple-800  ">
                Get Started
              </button>
            </Link>
            <Link to={"/features"}>
              <button className="border-[2px] max-lg:w-40 max-md:text-sm max-md:w-32 max-sm:text-xs max-sm:w-24 border-black p-2 text-lg w-52 rounded-xl bg-white text-black hover:bg-slate-200  ">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
