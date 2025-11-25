import React from "react";

const FeatureCard = ({ color1, color2, title, description, icon }) => {
  return (
    <div className="card-neon group hover:scale-105 transition-all duration-300 p-8 animate-fade-in">
      <div className="space-y-6">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl group-hover:animate-bounce-soft">
          {icon && <div className="text-white text-2xl">{icon}</div>}
        </div>
        
        {/* Title */}
        <h3 className="text-2xl font-bold gradient-text group-hover:animate-pulse-neon">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-lg">
          {description}
        </p>
        
        {/* Learn More Button */}
        <button
          aria-label={`learn more about ${title}`}
          className="btn-glass w-full text-center py-3 group-hover:btn-neon transition-all duration-300"
        >
          <span>Learn More</span>
        </button>
      </div>
      
      {/* Animated Border Effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10">
        <div className="w-full h-full bg-dark-900 rounded-2xl"></div>
      </div>
    </div>
  );
};

export default FeatureCard;
