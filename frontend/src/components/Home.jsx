import React from "react";
// 1. Import Helmet
import { Helmet } from "react-helmet"; 
import Header from "./Header";
import HeroSection from "./HeroSection";
import LandingPageContent from "./LandingPageContent";
import FAQs from "./FAQs";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      {/* 2. Add Helmet tags for the entire page */}
      <Helmet>
        {/*
          CRITICAL SEO TAGS
          These keywords should reflect the primary theme of the page:
          "Real-Time Price Recommendations"
        */}
        <title>Real-Time Pricing & Revenue Optimization | Your Company Name</title>
        
        <meta 
          name="description" 
          content="Leverage our AI-powered, real-time price recommendation engine to optimize your e-commerce pricing strategy, maximize profit, and outpace competitors. Free demo available." 
        />
        
        {/* Optional: Open Graph Tags for Social Media Sharing (Facebook/LinkedIn) */}
        <meta property="og:title" content="AI Real-Time Price Recommendations" />
        <meta property="og:description" content="Maximize profit with data-driven pricing." />
        {/* You should replace this with the actual URL of your homepage */}
        <link rel="canonical" href="https://www.yourdomain.com/" /> 
      </Helmet>

      {/* 3. The Page Structure (Semantic Body) */}
      <div className="font-semibold">
        {/* Header and Footer are generally semantic and self-contained */}
        <Header /> 
        
        {/* HeroSection contains the H1 for the page (Critical SEO structure) */}
        <HeroSection /> 
        
        {/* Contains the body content (H2s, H3s, feature descriptions) */}
        <LandingPageContent /> 
        
        {/* FAQs is a great place for structured data (schema.org) */}
        <FAQs /> 
        
        <Footer />
      </div>
    </>
  );
};

export default Home;