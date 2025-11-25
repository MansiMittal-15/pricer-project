import React from "react";
// 1. Import Helmet for SEO
import { Helmet } from "react-helmet-async"; 
import Header from "./Header";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <>
      {/* 👑 SEO Optimization with React Helmet 👑 */}
      <Helmet>
        {/* Optimized Title Tag (Max 60 characters) */}
        <title>Pricer Core Features | Real-Time Pricing & Competitor Analysis</title> 
        
        {/* Optimized Meta Description (Max 160 characters) */}
        <meta
          name="description"
          content="Explore Pricer's core features: Real-Time Data, Competitor Comparison, and Historical Price Trends. Make smarter, data-driven pricing decisions today."
        />
        
        {/* Canonical Link (replace with your actual domain) */}
        <link rel="canonical" href="https://www.yourdomain.com/features" /> 
      </Helmet>
      
      {/* 🎁 Main Component Content */}
      <div>
        <Header />
        <div className="bg-slate-50 min-h-screen">
          <div className="max-w-7xl mx-auto px-10">
            {/* <h1> is the main page heading, now more keyword-rich */}
            <h2 className="mx-[24px] text-5xl font-medium py-2 border-b-black border-b-2 ">
              Explore Our Core Pricing Features: Real-Time Data & Analytics
            </h2>
            
            <p className="text-xl font-extralight my-1 ">
              Optimized tools to help you make smarter **pricing decisions** powered
              by **real-time data**, **analytics**, and **market trends**. Gain an edge
              with our state-of-the-art competitor monitoring platform.
            </p>
            
            <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-2 gap-5 my-4">
              
              {/* Feature 1 */}
              <FeatureCard
                color1="#bbf7d0"
                color2="pink"
                title={"Real-Time Data Collection"}
                description={
                  "Seamlessly fetch the latest market prices from trusted sources to ensure accurate recommendations."
                }
                // Recommend passing an H2 prop, see Note below
                isH2={true}
              />
              
              {/* Feature 2 */}
              <FeatureCard
                color1="#fef08a"
                color2="#93c5fd"
                title={"Competitor Price Comparison"}
                description={
                  "Compare your prices with competitors to identify market opportunities and stay ahead."
                }
                isH2={true}
              />
              
              {/* Feature 3 */}
              <FeatureCard
                color1="#fca5a5 "
                color2="#d8b4fe "
                title={"Historical Price Trends"}
                description={
                  "Analyze historical trends to predict price fluctuations and make informed decisions."
                }
                isH2={true}
              />
              
              {/* Feature 4 - Keyword Adjustment (Real-Time vs Instant) */}
              <FeatureCard
                color1="#fdba74 "
                color2="#5eead4 "
                title={"Instant Construction Price Monitoring"}
                description={
                  "Instantly compare prices from multiple vendors for construction materials and services. Get up-to-date price insights."
                }
                isH2={true}
              />
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;