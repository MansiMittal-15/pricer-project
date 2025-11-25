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
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden py-4">
      {/* Animated Background */}
      <div className="absolute inset-0 animated-bg"></div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950/50 via-transparent to-dark-950/50"></div>

      {/* Floating particles effect */}
      <div className="absolute inset-0">
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
          {/* Badge */}
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-neon-blue/30 px-6 py-3 rounded-full text-sm animate-bounce-soft">
            <img src={greenTick} alt="check" className="w-5 h-5" />
            <span className="text-neon-blue font-semibold">#1</span>
            <span className="text-gray-300">
              Real-Time Price Intelligence Platform
            </span>
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="block text-white">Smart Pricing</span>
              <span className="block gradient-text animate-pulse-neon">
                Revolution
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your revenue strategy with AI-powered pricing
              recommendations.
              <span className="text-neon-blue">
                {" "}
                Real-time competitor analysis
              </span>
              , demand forecasting, and customer behavior insights.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a href="https://shubh1502-pricer.hf.space/" target="_blank" >
              <div className="btn-neon text-lg px-8 py-4 min-w-[200px] ">
                Start Free Trial
              </div>
            </a>

            <Link to={"/features"}>
              <button className="btn-glass text-lg px-8 py-4 min-w-[200px]">
                <span>Explore Features</span>
              </button>
            </Link>
          </div>

          {/* Stats or Social Proof */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 max-w-4xl mx-auto">
            <div className="card-glass p-6 text-center">
              <div className="text-3xl font-bold gradient-text">500+</div>
              <div className="text-gray-400 mt-2">Enterprise Clients</div>
            </div>
            <div className="card-glass p-6 text-center">
              <div className="text-3xl font-bold gradient-text">15%</div>
              <div className="text-gray-400 mt-2">Average Revenue Increase</div>
            </div>
            <div className="card-glass p-6 text-center">
              <div className="text-3xl font-bold gradient-text">99.9%</div>
              <div className="text-gray-400 mt-2">Uptime Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
