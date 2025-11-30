import React from 'react';
import { Helmet } from 'react-helmet-async'; 
// Assuming the path to your content and layout components:
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import LandingPageContent from './LandingPageContent'; 

const LandingPage = () => {
  return (
    <>
      {/* 👑 React Helmet: The SEO Core 👑 */}
      <Helmet>
        {/* Primary Keyword-Rich Title */}
        <title>Pricer | AI Pricing Intelligence & Dynamic Revenue Growth Platform</title>
        
        {/* Highly Descriptive Meta Description (Crucial for Click-Through Rate) */}
        <meta
          name="description"
          content="Transform your revenue with Pricer's AI-powered pricing intelligence platform. Get real-time competitor analysis, dynamic price recommendations, and market trend forecasts to maximize profit."
        />
        
        {/* Canonical URL (Prevents Duplicate Content Issues) */}
        <link rel="canonical" href="https://www.yourdomain.com/" />
        
        {/* Open Graph Tags for Social Sharing */}
        <meta property="og:title" content="Pricer | AI Pricing Intelligence & Dynamic Revenue Growth Platform" />
        <meta property="og:description" content="Transform your revenue with Pricer's AI-powered pricing intelligence platform. Get real-time competitor analysis, dynamic price recommendations, and market trend forecasts." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.yourdomain.com/" />
        <meta property="og:image" content="https://www.yourdomain.com/images/pricer-social-preview.jpg" /> 

        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@yourcompanyhandle" />
        <meta name="twitter:title" content="Pricer: AI Pricing Intelligence" />
        <meta name="twitter:description" content="Get real-time competitor analysis and dynamic price recommendations to maximize your profit." />
        <meta name="twitter:image" content="https://www.yourdomain.com/images/pricer-social-preview.jpg" />
      </Helmet>
      
      {/* Page Structure */}
      <Header />
      <div className="bg-dark-900 text-white min-h-screen">
         <LandingPageContent /> {/* Renders the core content */}
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;