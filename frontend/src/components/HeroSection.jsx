import React from "react";
import { Link } from "react-router-dom";
import greenTick from "../assets/check.png";
// Note: Unused imports are already removed.

const HeroSection = () => {
  return (
    // 1. Semantic Tag: Changed role="region" to <section> for better semantics.
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-4" 
      aria-label="AI Pricing Platform Hero Introduction" // Improved descriptive label
    >
      
      {/* Animated Background and Particles (decorative, kept aria-hidden="true") */}
      <div className="absolute inset-0 animated-bg" aria-hidden="true"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950/50 via-transparent to-dark-950/50" aria-hidden="true"></div>
      <div className="absolute inset-0" aria-hidden="true">
        {/* Particle divs remain here */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-neon-blue rounded-full animate-float opacity-70"></div>
        <div
          className="absolute top-40 right-32 w-1 h-1 bg-neon-purple rounded-full animate-float opacity-60"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-neon-pink rounded-full animate-float opacity-80"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/3 right-20 w-1 h-1 bg-neon-green rounded-full animate-float opacity-50"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute bottom-40 right-1/3 w-2 h-2 bg-neon-cyan rounded-full animate-float opacity-70"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8 animate-fade-in">
          
          {/* Badge: Informative and clearly labeled */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-neon-blue/30 px-6 py-3 rounded-full text-sm animate-bounce-soft">
            <img 
                src={greenTick} 
                alt="Green checkmark" 
                className="w-5 h-5" 
            />
            <span className="text-neon-blue font-semibold">#1</span>
            {/* 2. Keyword Focus: Reinforced "Pricing Intelligence Platform" */}
            <span className="text-gray-300">
              Real-Time **Pricing Intelligence Platform**
            </span>
          </div>

          {/* Main Heading: H1 is preserved and strong keywords are present */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white">Smart Pricing</span>
              <span className="block gradient-text animate-pulse-neon">
                Revolution
              </span>
            </h1>

            {/* 3. Sub-Headline: Clear, keyword-rich statement */}
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your revenue strategy with AI-powered pricing recommendations.
              <span className="text-neon-blue">
                {" "}
                Real-time competitor analysis
              </span>
              , demand forecasting, and customer behavior insights.
            </p>
          </div>

          {/* CTA Buttons: Use proper <button> within <Link> or <a> */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a 
                href="https://shubh1502-pricer.hf.space/" 
                target="_blank" 
                rel="noopener noreferrer" // Security & SEO improvement
                className="min-w-[200px]"
            >
              <button 
                  className="btn-neon text-lg px-8 py-4 w-full" 
                  aria-label="Start Free Trial on our AI Pricing Platform" // Accessibility label for button
              >
                Start Free Trial
              </button>
            </a>

            <Link to={"/features"} className="min-w-[200px]">
              <button 
                  className="btn-glass text-lg px-8 py-4 w-full"
                  aria-label="Explore the list of Pricer features"
              >
                <span>Explore Features</span>
              </button>
            </Link>
          </div>

          {/* Stats or Social Proof: Changed to semantic <ul>/<li> list */}
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto" aria-label="Key Performance Statistics">
            <li className="card-glass p-6 text-center">
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-gray-400 mt-2">Enterprise Clients</div>
            </li>
            <li className="card-glass p-6 text-center">
              <div className="text-3xl font-bold gradient-text">15%</div>
              <div className="text-gray-400 mt-2">Average Revenue Increase</div>
            </li>
            <li className="card-glass p-6 text-center">
              <div className="text-3xl font-bold gradient-text">99.9%</div>
              <div className="text-gray-400 mt-2">Uptime Guarantee</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;