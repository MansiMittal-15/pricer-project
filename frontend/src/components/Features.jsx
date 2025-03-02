import React from "react";
import Header from "./Header";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div>
      <Header />
      <div className="bg-slate-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-10">
          <h1 className="text-5xl font-medium py-2 border-b-black border-b-2 ">
            Explore Our Core Features
          </h1>
          <p className="text-xl font-extralight my-1 ">
            Optimized tools to help you make smarter pricing decisions powered
            by real-time data, analytics, and trends.
          </p>
          <div className="flex gap-5 flex-wrap my-4">
            <FeatureCard
              color1="#bbf7d0"
              color2="pink"
              title={"Real-Time Data Collection"}
              description={
                "Seamlessly fetch the latest market prices from trusted sources to ensure accurate recommendations."
              }
            />
            <FeatureCard
              color1="#fef08a"
              color2="#93c5fd"
              title={"Competitor Price Comparison"}
              description={
                "Compare your prices with competitors to identify market opportunities and stay ahead."
              }
            />
            <FeatureCard
              color1="#fca5a5 "
              color2="#d8b4fe "
              title={"Historical Price Trends"}
              description={
                "Analyze historical trends to predict price fluctuations and make informed decisions."
              }
            />
            <FeatureCard
              color1="#fdba74 "
              color2="#5eead4 "
              title={"Real-Time Price Comparison"}
              description={
                "Instantly compare prices from multiple vendors for construction materials and services. Get up-to-date price insights."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
