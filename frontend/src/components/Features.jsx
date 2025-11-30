import React from "react";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet
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
    <>
      {/* 👑 1. React Helmet: Page-Specific Metadata 👑 */}
      <Helmet>
        <title>Features | AI Pricing Intelligence Platform - Pricer</title>
        <meta
          name="description"
          content="Explore the powerful features of Pricer: real-time competitor tracking, AI analytics, historical trend analysis, and customizable pricing dashboards."
        />
        {/* Replace with your actual domain */}
        <link rel="canonical" href="https://www.yourdomain.com/features" /> 
      </Helmet>

      {/* 2. Semantic HTML: Use <main> for the primary content */}
      <div className="min-h-screen">
        <Header />
        <main className="py-20 px-6" role="main">
          <div className="max-w-7xl mx-auto">
            <header className="text-center space-y-6 mb-16">
              
              {/* 3. H1 Optimization: Strong primary keyword focus */}
              <h1 className="text-5xl md:text-6xl font-bold gradient-text animate-fade-in">
                Powerful AI Pricing Features
              </h1>
              
              {/* 4. Sub-Headline Optimization: Keyword-rich summary */}
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Advanced competitor tracking tools and intelligent analytics to revolutionize your pricing strategy and maximize revenue.
              </p>
            </header>
            
            {/* 5. Semantic HTML: Use <section> for the feature grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" aria-labelledby="feature-list-heading">
              {/* Added a visually hidden heading for screen readers to label the grid */}
              <h2 id="feature-list-heading" className="sr-only">List of Key Pricing Intelligence Features</h2> 

              {/* Feature Cards Mapping */}
              {features.map((feature, index) => (
                <div key={index} className="animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
                  {/* Assuming FeatureCard internally uses h3 or h4 for title */}
                  <FeatureCard
                    title={feature.title}
                    description={feature.description}
                    icon={feature.icon}
                  />
                </div>
              ))}
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default Features;