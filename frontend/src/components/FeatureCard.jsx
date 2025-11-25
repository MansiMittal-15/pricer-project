// import React from "react";

// const FeatureCard = ({ color1, color2, title, description }) => {
//   const gradientStyle = {
//     // backgroundImage: `linear-gradient(to top right, ${color1}, ${color2})`
//     backgroundImage: `linear-gradient(to top left, rgb(126 34 206 / 0.3), #E2E8F0, #fffeee, #E2E8F0, rgb(126 34 206 / 0.3), #fffeee, #E2E8F0, rgb(126 34 206 / 0.3), #fffeee, #E2E8F0)`,
//   };
//   return (
//     <div
//       style={gradientStyle}
//       className={`relative border-2 flex flex-col justify-between rounded-xl p-2 my-2 border-blue-950 `}
//     >
//       <h1 className="text-2xl text-purple-700 font-medium">{title}</h1>
//       <p className="text-lg font-light my-2">{description}</p>
//       <button
//         aria-label={`learn more about ${title}`}
//         className="bg-white p-2 rounded-xl hover:bg-slate-200 border-2 text-center border-black"
//       >
//         Learn More
//       </button>
//     </div>
//   );
// };

// export default FeatureCard;



import React from "react";

const FeatureCard = ({ color1, color2, title, description, headingLevel = 'h2' }) => {
  
  // Dynamic Gradient Style (Kept your complex gradient)
  const gradientStyle = {
    // Note: You are not currently using color1/color2, but I've kept the props.
    backgroundImage: `linear-gradient(to top left, rgb(126 34 206 / 0.3), #E2E8F0, #fffeee, #E2E8F0, rgb(126 34 206 / 0.3), #fffeee, #E2E8F0, rgb(126 34 206 / 0.3), #fffeee, #E2E8F0)`,
  };

  // Dynamically create the Heading Tag based on the prop
  // This is the most crucial change for structural SEO.
  const FeatureHeading = ({ children, className }) => {
    // Convert the string prop (e.g., 'h2') into an actual React component/tag
    const Tag = headingLevel; 
    
    // Ensure the title is always rendered as <h2> for sub-sections on your features page
    if (Tag === 'h1' || Tag === 'h2' || Tag === 'h3') {
        return <Tag className={className}>{children}</Tag>;
    }
    // Fallback to a div or strong element if an invalid tag is passed
    return <h2 className={className}>{children}</h2>;
  };
  
  return (
    <div
      style={gradientStyle}
      className={`relative border-2 flex flex-col justify-between rounded-xl p-4 my-4 border-blue-950 shadow-lg hover:shadow-xl transition-shadow duration-300`} // Added better styling for UX
    >
      {/* 🛑 SEO FIX: Replaced <h1> with a dynamic heading component (defaults to <h2>) */}
      <FeatureHeading 
        className="text-2xl text-purple-700 font-medium mb-3"
      >
        {title}
      </FeatureHeading>
      
      {/* Keyword-rich and descriptive content is good for SEO */}
      <p className="text-lg font-light mb-4 text-slate-800">{description}</p>
      
      {/* ♿ ACCESSIBILITY IMPROVEMENT: Use role="button" if not a native <button> or <a>, 
         but using a native <button> is best. Added a descriptive title for tooltips. 
      */}
      <button
        aria-label={`Learn more about the ${title} feature in Pricer`}
        title={`Discover the details of ${title}`} // Good for desktop UX/Accessibility
        className="bg-white p-3 rounded-xl hover:bg-slate-200 border-2 text-center border-black font-semibold text-base transition duration-200 mt-auto" // Added mt-auto to push button to the bottom
      >
        Learn More
      </button>
    </div>
  );
};

export default FeatureCard;