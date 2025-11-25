import React from "react";
import Header from "./Header";
import FeatureCard from "./FeatureCard";

const Features = () => {
  const features = [
    {
      title: "Real-Time Data Collection",
      description: "Seamlessly fetch the latest market prices from trusted sources to ensure accurate recommendations.",
      icon: "📊"
    },
    {
      title: "Competitor Price Comparison", 
      description: "Compare your prices with competitors to identify market opportunities and stay ahead.",
      icon: "⚖️"
    },
    {
      title: "Historical Price Trends",
      description: "Analyze historical trends to predict price fluctuations and make informed decisions.",
      icon: "📈"
    },
    {
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms provide intelligent pricing insights and recommendations.",
      icon: "🤖"
    },
    {
      title: "Real-Time Alerts",
      description: "Get instant notifications when market conditions change or opportunities arise.",
      icon: "🔔"
    },
    {
      title: "Custom Dashboards",
      description: "Personalized dashboards with real-time metrics and customizable reporting tools.",
      icon: "📋"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-5xl md:text-6xl font-bold gradient-text animate-fade-in">
              Powerful Features
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Advanced tools and intelligent analytics to revolutionize your pricing strategy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
