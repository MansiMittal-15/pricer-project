import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from "react-icons/fa";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faq_questions = [
    {
      question: "What is Pricer and how does it work?",
      answer:
        "Pricer is an AI-powered price recommendation system that helps businesses optimize their product pricing to maximize revenue. It analyzes market trends, competitor pricing, and consumer behavior to suggest the best price points for your products using advanced machine learning algorithms.",
      category: "General"
    },
    {
      question: "How can Pricer help my business increase revenue?",
      answer:
        "By using data-driven insights, Pricer recommends optimal pricing strategies that balance competitiveness and profitability. Our platform has helped businesses increase revenue by an average of 15% through intelligent pricing optimization and real-time market analysis.",
      category: "Benefits"
    },
    // ... (rest of the faq_questions array remains the same)
    {
      question: "Does Pricer work for all types of products and industries?",
      answer:
        "Yes! Pricer can analyze and recommend pricing for a wide range of products and industries, from electronics and fashion to SaaS services, digital goods, B2B services, and even physical products. Our AI adapts to different market dynamics and pricing models.",
      category: "Compatibility"
    },
    {
      question: "How does Pricer determine the best price for my product?",
      answer:
        "Pricer uses advanced machine learning algorithms that consider multiple factors including market demand, competitor pricing, historical sales data, customer behavior patterns, seasonality, and economic indicators to generate accurate pricing recommendations.",
      category: "Technology"
    },
    {
      question: "Can I integrate Pricer with my existing e-commerce platform?",
      answer:
      "Absolutely! Pricer supports seamless integration with popular e-commerce platforms including Shopify, WooCommerce, Magento, and custom APIs. Our RESTful API makes it easy to automate pricing updates and implement recommendations in real-time.",
      category: "Integration"
    },
    {
      question: "How often does Pricer update pricing recommendations?",
      answer:
        "The frequency of updates depends on your business needs and market dynamics. You can configure Pricer to provide daily, weekly, or real-time pricing suggestions. Most businesses benefit from daily updates to stay competitive in fast-moving markets.",
      category: "Updates"
    },
    {
      question: "Is Pricer suitable for small businesses and startups?",
      answer:
        "Yes! Pricer is designed to help businesses of all sizes, from startups to enterprise companies. We offer flexible pricing plans that scale with your business, making advanced pricing intelligence accessible to companies at any stage of growth.",
      category: "Pricing"
    },
    {
      question: "What makes Pricer different from other pricing tools?",
      answer:
        "Unlike standard pricing tools, Pricer leverages cutting-edge AI to analyze competitor pricing, market trends, and demand elasticity. We provide strategic insights rather than just static price suggestions, with real-time market monitoring and predictive analytics.",
      category: "Comparison"
    },
    {
      question: "How secure is my pricing data with Pricer?",
      answer:
        "Security is our top priority. We use enterprise-grade encryption, are SOC 2 Type II certified, GDPR compliant, and follow industry best practices for data protection. Your pricing data is encrypted both in transit and at rest.",
      category: "Security"
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer comprehensive support including 24/7 technical support, dedicated account managers for enterprise clients, extensive documentation, video tutorials, and regular webinars. Our team is committed to helping you maximize the value of our platform.",
      category: "Support"
    }
  ];

  const categories = [...new Set(faq_questions.map(faq => faq.category))];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // 2. Schema Markup Generation Function
  const generateFaqSchema = () => {
    const mainEntity = faq_questions.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      }
    }));
    
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": mainEntity,
    });
  };

  return (
    <>
      {/* 👑 1. Helmet for Metadata and Schema Markup 👑 */}
      <Helmet>
        <title>FAQ | Frequently Asked Questions about AI Pricing - Pricer</title>
        <meta
          name="description"
          content="Find answers to frequently asked questions about Pricer, our AI pricing platform, integrations, security, and how to increase your revenue."
        />
        <link rel="canonical" href="https://www.yourdomain.com/faqs" />
        
        {/* 2. FAQ Schema Markup (Crucial for Rich Snippets) */}
        <script type="application/ld+json">
          {generateFaqSchema()}
        </script>
      </Helmet>

      {/* 3. Semantic HTML: Use <main> for the primary content */}
      <main className="py-20 px-6" role="main">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <header className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-3 bg-neon-purple/10 border border-neon-purple/30 px-6 py-3 rounded-full text-sm">
              <FaQuestionCircle className="text-neon-purple text-lg" aria-hidden="true" />
              <span className="text-neon-purple font-semibold">Frequently Asked Questions</span>
            </div>
            
            {/* 4. H1 Optimization */}
            <h1 className="text-5xl md:text-6xl font-bold gradient-text animate-fade-in">
              Got Questions About **AI Pricing**?
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Find answers to common questions about our **AI-powered pricing platform**. 
              Can't find what you're looking for? <a href="/contact" className="text-neon-blue hover:underline">Contact our support team</a>.
            </p>
          </header>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12" role="group" aria-label="FAQ Category Filter">
            <button 
              onClick={() => setOpenIndex(null)}
              className="btn-glass px-6 py-2 text-sm"
              aria-current={openIndex === null ? 'true' : 'false'}
            >
              All Questions
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                className="btn-neon-outline px-6 py-2 text-sm"
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ Items (Accordion) */}
          {/* 5. A11Y: Use Accordion ARIA roles and properties */}
          <div className="space-y-4" role="presentation">
            {faq_questions.map((faq, index) => {
              const isOpen = openIndex === index;
              const questionId = `question-${index}`;
              const answerId = `answer-${index}`;
              
              return (
                <div 
                  key={index}
                  className={`bg-dark-800/30 backdrop-blur-lg border border-neon-blue/20 rounded-2xl group transition-all duration-300 ${
                    isOpen ? 'ring-2 ring-neon-blue/50 border-neon-blue/50' : 'hover:border-neon-purple/50'
                  }`}
                  role="region" // Identifies this as an accordion panel
                  aria-labelledby={questionId}
                >
                  <h3 className="text-xl font-semibold text-white group-hover:text-neon-blue transition-colors m-0 p-0">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-neon-blue/5 transition-colors duration-300"
                      aria-expanded={isOpen} // A11Y State: True/False
                      aria-controls={answerId} // Links button to the answer content
                      id={questionId} // Unique ID for the button (question)
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs bg-neon-blue/20 text-neon-blue px-2 py-1 rounded-full">
                            {faq.category}
                          </span>
                        </div>
                        {faq.question}
                      </div>
                      
                      <div className="flex-shrink-0">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`} aria-hidden="true"> {/* Icon is decorative */}
                          {isOpen ? (
                            <FaChevronUp className="text-white text-sm" />
                          ) : (
                            <FaChevronDown className="text-white text-sm" />
                          )}
                        </div>
                      </div>
                    </button>
                  </h3>
                  
                  {/* Answer Content */}
                  <div 
                    id={answerId} // Unique ID for the answer content
                    role="region" // Identifies this as an answer/panel
                    aria-labelledby={questionId} // Links content back to the question
                    hidden={!isOpen} // Hides from screen readers when collapsed
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-6 pb-6">
                      <div className="border-t border-gray-700 pt-4">
                        <p className="text-gray-300 leading-relaxed text-lg">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-16">
            <div className="card-glass p-8 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold gradient-text mb-4"> {/* Heading Hierarchy H2 */}
                Still have questions?
              </h2>
              <p className="text-gray-300 mb-6">
                Our support team is here to help you get the most out of Pricer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-neon px-8 py-3" aria-label="Contact Pricer support team">
                  <span>Contact Support</span>
                </button>
                <button className="btn-glass px-8 py-3" aria-label="Schedule a demonstration of the Pricer platform">
                  <span>Schedule Demo</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default FAQs;