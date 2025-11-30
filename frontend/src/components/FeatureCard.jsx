import React from "react";

// Renamed props for clarity: color1 and color2 were unused and have been removed.
const FeatureCard = ({ title, description, icon }) => {
  return (
    // 1. Semantic Tag: Use <article> for self-contained, distributable content
    <article className="card-neon group hover:scale-105 transition-all duration-300 p-8 animate-fade-in" aria-labelledby={`${title.replace(/\s/g, '-')}-heading`}>
      <div className="space-y-6">
        
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl group-hover:animate-bounce-soft" aria-hidden="true">
          {icon && <div className="text-white text-2xl">{icon}</div>}
        </div>
        
        {/* Title */}
        {/* 2. Semantic Heading and ID: Use h3 and a unique ID for A11Y linking */}
        <h3 id={`${title.replace(/\s/g, '-')}-heading`} className="text-2xl font-bold gradient-text group-hover:animate-pulse-neon">
          {title}
        </h3>
        
        {/* Description */}
        {/* 3. Keyword Placement: The description already acts as supporting content */}
        <p className="text-gray-300 leading-relaxed text-lg">
          {description}
        </p>
        
        {/* Learn More Button */}
        <button
          // 4. A11Y Label: Use a descriptive and unique aria-label
          aria-label={`learn more about ${title} feature`}
          className="btn-glass w-full text-center py-3 group-hover:btn-neon transition-all duration-300"
        >
          <span>Learn More</span>
        </button>
      </div>
      
      {/* Animated Border Effect (kept aria-hidden as it is purely decorative) */}
      <div 
          className="absolute inset-0 rounded-2xl bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink p-[1px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          aria-hidden="true" 
      >
        <div className="w-full h-full bg-dark-900 rounded-2xl"></div>
      </div>
    </article>
  );
};

export default FeatureCard;