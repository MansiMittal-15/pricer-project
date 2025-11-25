import React from "react";
import { Helmet } from "react-helmet";
// import Hero_Image from "../assets/hero_image.webp"
// import Hero_Image from "../assets/hero_image.jpg";
// import bg_image from "../assets/bg_image.jpeg";
// import bg_image from "../assets/white_bg1.jpeg"
import greenTick from "../assets/check.png";
import bg_image from "../assets/white_bg2.jpg";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <>
    <Helmet>
        {/* The most important tag for SEO */}
        <title>Real-Time Price Recommendations | Maximize Revenue</title>
        
        {/* A compelling, keyword-rich description */}
        <meta 
          name="description" 
          content="Get real-time price recommendations fueled by competitor data, product demand, and customer preferences to maximize your e-commerce revenue." 
        />
        
        {/* Optional: Add social sharing tags */}
        <meta property="og:title" content="No. 1 Real-Time Price Recommender" />
    </Helmet>
    <section
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
          {/* Information/Callout Block */}
          <div className="text-sm bg-slate-200 max-sm:text-[10px] text-black p-2 border rounded-3xl flex gap-2 justify-center items-center">
            <span>
              {/* Improved Alt Text: Describe the image function/content */}
              <img src={greenTick} alt="Green verification tick icon" className="w-6 max-sm:w-4" />
            </span>
            {/* The main keyword "Real-Time Price Recommender" is in a visible, prominent spot */}
            <span className="text-purple-700">No. 1</span> Real-Time Price Recommender
          </div>

          {/* Main Heading: Use h1 for the primary topic of the page/section for SEO. */}
          <h1 className="text-7xl font-bold text-center max-sm:text-3xl max-md:text-4xl max-lg:text-5xl">
            Real-Time <br /> <span className="text-purple-700">Price Recommendations</span> <br />
          </h1>
          
          {/* Subheading/Descriptive Paragraph: Good place for supporting keywords and value proposition. 
              The content is already quite strong: "Maximize revenue with recommendations..." */}
          <p className="text-xl text-center max-sm:text-xs max-lg:text-lg font-normal max-md:text-sm">
            Maximize revenue with recommendations fueled by current competitor
            pricing, product demand, and customer preferences.
          </p>
          
          {/* Call-to-Action Buttons */}
          <div className="flex gap-6 max-sm:gap-2 max-md:gap-4">
            <Link to={"/dataForm"}>
              <button className="border-[2px] max-lg:w-40 max-md:text-sm max-md:w-32 max-sm:text-xs max-sm:w-24 border-black p-2 text-lg w-52 rounded-xl bg-purple-700/90 text-white hover:bg-purple-800  ">
                {/* Clear CTA text: "Get Started" */}
                Get Started
              </button>
            </Link>
            <Link to={"/features"}>
              <button className="border-[2px] max-lg:w-40 max-md:text-sm max-md:w-32 max-sm:text-xs max-sm:w-24 border-black p-2 text-lg w-52 rounded-xl bg-white text-black hover:bg-slate-200  ">
                {/* Clear CTA text: "Learn More" is fine, but if possible, try "Explore Features" */}
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default HeroSection;