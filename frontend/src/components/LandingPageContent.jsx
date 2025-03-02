import React from "react";
import image from "../assets/left_image.jpeg";

const LandingPageContent = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-24 ">
      <div className="flex flex-col gap-24 mx-10">
        <div className="flex h-[400px] py-10 justify-center items-center gap-16 ">
          <img
            src={image}
            alt="Left Image"
            className="w-[45%] h-[350px] object-cover rounded-4xl "
          />
          <div className="w-[50%] p-10 flex flex-col gap-9 items-start ">
            <h2 className="text-5xl">Smart pricing for smarter revenue growth!</h2>
            <p className="font-normal">
            Your pricing can make or break your business. Boost revenue with AI-driven insights!
            </p>
            <button className="bg-slate-200 hover:bg-slate-300  p-4 border-black border-2 rounded-2xl w-52 text-xl ">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex h-[400px] items-center py-10 justify-center gap-20 ">
          <div className="w-[47%]  flex flex-col gap-9 items-start ">
            <h2 className="text-5xl">Price Recommendations You Can Trust</h2>
            <p className="font-normal">
            We analyze market trends and recommend the best price for you. Our intelligent system helps you price products strategically to increase revenue and market competitiveness.
            </p>
            <button className="bg-slate-200 hover:bg-slate-300  p-4 border-black border-2 rounded-2xl w-52 text-xl ">
              Get Started
            </button>
          </div>
          <img
            src={image}
            alt="right Image"
            className="w-[45%] h-[350px] object-cover "
          />
        </div>
      </div>
    </div>
  );
};

export default LandingPageContent;
