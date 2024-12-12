import React from "react";
// import Hero_Image from "../assets/hero_image.webp"
import Hero_Image from "../assets/hero_image.jpg";

const HeroSection = () => {
  return (
    <div
      className=" h-[93vh] text-white flex"
      style={{
        backgroundImage: `url(${Hero_Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: "-10",
      }}
    >
      <div className="bg-slate-950/60 w-full mx-auto text-white flex">
        <div className="max-w-[1200px] mx-auto h-[inherit] flex flex-col items-center justify-end gap-9 py-10">
          <div className="text-7xl text-center">
          Real-Time Price Recommendations Driven by Market Data
          </div>
          <div className="text-2xl text-center">
          Maximize revenue with recommendations fueled by current competitor pricing, product demand, and customer preferences.
          </div>
          <div className="flex gap-6">
            <button className="border-[2px] border-white p-4 text-xl rounded-xl bg-slate-950 text-white hover:bg-slate-900  ">
            Get Started
            </button> 
            <button className="border-[2px] border-black p-4 text-xl rounded-xl bg-slate-200 text-black hover:bg-slate-300  ">
            Learn More
            </button> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
