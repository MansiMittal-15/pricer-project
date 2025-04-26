import React from "react";

const FeatureCard = ({ color1, color2, title, description }) => {
  const gradientStyle = {
    // backgroundImage: `linear-gradient(to top right, ${color1}, ${color2})`
    backgroundImage: `linear-gradient(to top left, rgb(126 34 206 / 0.3), #E2E8F0, #fffeee, #E2E8F0, rgb(126 34 206 / 0.3), #fffeee, #E2E8F0, rgb(126 34 206 / 0.3), #fffeee, #E2E8F0)`,
  };
  return (
    <div
      style={gradientStyle}
      className={`relative border-2 flex flex-col justify-between rounded-xl p-2 my-2 border-blue-950 `}
    >
      <h1 className="text-2xl text-purple-700 font-medium">{title}</h1>
      <p className="text-lg font-light my-2">{description}</p>
      <button
        aria-label={`learn more about ${title}`}
        className="bg-white p-2 rounded-xl hover:bg-slate-200 border-2 text-center border-black"
      >
        Learn More
      </button>
    </div>
  );
};

export default FeatureCard;
