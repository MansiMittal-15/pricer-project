// import React from "react";
// import image from "../assets/left_image.jpeg";

// const LandingPageContent = () => {
//   return (
//     <div className="max-w-[1200px] mx-auto py-24 max-md:py-8 max-sm:py-0 ">
//       <div className="flex flex-col gap-24 mx-10 max-sm:gap-3">
//         <div className="flex h-[400px] py-10 justify-center items-center gap-16 max-sm:flex-col  max-sm:h-[600px] max-md:h-[500px] max-md:gap-5 max-md:flex-col ">
//           <img
//             src={image}
//             alt="Left Image"
//             className="w-[45%] h-[350px] object-cover rounded-4xl max-sm:p-0 max-sm:w-[100%] max-md:pt-16 max-sm:h-[200px] max-md:h-[300px] max-md:w-[100%] "
//           />
//           <div className="w-[50%] p-10 flex flex-col max-md:w-[100%] gap-9 items-start max-sm:w-[100%] max-sm:p-0 max-sm:gap-4 max-md:gap-6 max-md:text-sm max-md:place-self-start max-md:p-0">
//             <h2 className="text-4xl max-sm:text-2xl max-md:text-3xl">
//               Smart pricing for smarter revenue growth!
//             </h2>
//             <p className="font-normal max-md:text-sm">
//               Your pricing can make or break your business. Boost revenue with
//               AI-driven insights!
//             </p>
//             <button className="bg-purple-700/90 max-md:w-32 max-sm:w-24 max-sm:text-sm max-md:text-sm hover:bg-purple-800 text-white p-2 border-black border-2 rounded-2xl w-52 text-xl ">
//               Get Started
//             </button>
//           </div>
//         </div>
//         <div className="flex h-[400px] items-center py-10 max-sm:gap-3 justify-center gap-20 max-md:gap-10 max-md:flex-col ">
//           <div className="w-[47%] max-sm:w-[100%] max-sm:pt-0  flex flex-col gap-9 items-start max-md:w-[100%] max-md:p-0 max-md:gap-4 max-md:text-sm ">
//             <h2 className="text-5xl max-md:text-3xl">Price Recommendations You Can Trust</h2>
//             <p className="font-normal max-md:text-sm">
//               We analyze market trends and recommend the best price for you. Our
//               intelligent system helps you price products strategically to
//               increase revenue and market competitiveness.
//             </p>
//             <button className="bg-purple-700/90 max-md:w-32 max-sm:w-24 max-sm:text-sm max-md:text-sm hover:bg-purple-800 text-white p-2 border-black border-2 rounded-2xl w-52 text-xl ">
//               Get Started
//             </button>
//           </div>
//           <img
//             src={image}
//             alt="right Image"
//             className="w-[45%] h-[350px] object-cover max-sm:w-[100%] max-sm:h-[200px] max-md:pt-16 max-md:h-[300px] max-md:w-[100%] "
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LandingPageContent;

import React from "react";
import image from "../assets/left_image.jpeg";

const LandingPageContent = () => {
  return (
    // 1. Use <main> for the primary, unique content of the page
    <main className="max-w-[1200px] mx-auto py-24 max-md:py-8 max-sm:py-0 ">
      <div className="flex flex-col gap-24 mx-10 max-sm:gap-3">
        
        {/* Feature Block 1: Smart Pricing for Growth */}
        <section className="flex h-[400px] py-10 justify-center items-center gap-16 max-sm:flex-col max-sm:h-[600px] max-md:h-[500px] max-md:gap-5 max-md:flex-col ">
          <img
            src={image}
            // 4. Improved Alt Text: Describe the image content/purpose
            alt="Dashboard illustrating AI-driven smart pricing data"
            className="w-[45%] h-[350px] object-cover rounded-4xl max-sm:p-0 max-sm:w-[100%] max-md:pt-16 max-sm:h-[200px] max-md:h-[300px] max-md:w-[100%] "
          />
          <div className="w-[50%] p-10 flex flex-col max-md:w-[100%] gap-9 items-start max-sm:w-[100%] max-sm:p-0 max-sm:gap-4 max-md:gap-6 max-md:text-sm max-md:place-self-start max-md:p-0">
            {/* 2. Use <h2> for main feature headings */}
            <h2 className="text-4xl max-sm:text-2xl max-md:text-3xl">
              **AI-Powered Optimization**: Smart Pricing for Smarter Revenue Growth
            </h2>
            {/* 3. Keyword-rich paragraph */}
            <p className="font-normal max-md:text-sm">
              Your pricing can make or break your business. Boost **e-commerce revenue** with
              AI-driven insights that analyze market shifts, competitor strategies,
              and demand elasticity.
            </p>
            <button className="bg-purple-700/90 max-md:w-32 max-sm:w-24 max-sm:text-sm max-md:text-sm hover:bg-purple-800 text-white p-2 border-black border-2 rounded-2xl w-52 text-xl ">
              Get Started
            </button>
          </div>
        </section>

        {/* Feature Block 2: Trustworthy Recommendations */}
        <section className="flex h-[400px] items-center py-10 max-sm:gap-3 justify-center gap-20 max-md:gap-10 max-md:flex-col ">
          <div className="w-[47%] max-sm:w-[100%] max-sm:pt-0  flex flex-col gap-9 items-start max-md:w-[100%] max-md:p-0 max-md:gap-4 max-md:text-sm ">
            {/* 2. Use <h2> for main feature headings */}
            <h2 className="text-5xl max-md:text-3xl">Price Recommendations You Can Trust</h2>
            {/* 3. Keyword-rich paragraph */}
            <p className="font-normal max-md:text-sm">
              We analyze dynamic **market trends** and recommend the optimal **product price** for you. Our
              intelligent system helps you price products strategically to
              increase revenue and maintain a competitive edge in your market.
            </p>
            <button className="bg-purple-700/90 max-md:w-32 max-sm:w-24 max-sm:text-sm max-md:text-sm hover:bg-purple-800 text-white p-2 border-black border-2 rounded-2xl w-52 text-xl ">
              Get Started
            </button>
          </div>
          <img
            src={image}
            // 4. Improved Alt Text: Describe the image content/purpose
            alt="A computer screen showing profitable pricing strategy analysis"
            className="w-[45%] h-[350px] object-cover max-sm:w-[100%] max-sm:h-[200px] max-md:pt-16 max-md:h-[300px] max-md:w-[100%] "
          />
        </section>

      </div>
    </main>
  );
};

export default LandingPageContent;