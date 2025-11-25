import React from "react";
import { Link } from "react-router-dom";

const LandingPageContent = () => {
  return (
    <div className="py-20 px-6">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Section 1: AI-Powered Pricing */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-neon-blue/10 border border-neon-blue/30 px-4 py-2 rounded-full text-sm">
              <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
              <span className="text-neon-blue font-semibold">AI-Powered Intelligence</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="gradient-text">Smart Pricing</span><br />
              <span className="text-white">for Revenue Growth</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Transform your pricing strategy with cutting-edge AI that analyzes market trends, 
              competitor behavior, and customer patterns to maximize your revenue potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/dataForm">
                <button className="btn-neon text-lg px-8 py-4 min-w-[200px]">
                  <span>Start Free Trial</span>
                </button>
              </Link>
              <button className="btn-glass text-lg px-8 py-4 min-w-[200px]">
                <span>Watch Demo</span>
              </button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">99.9%</div>
                <div className="text-gray-400 text-sm">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">24/7</div>
                <div className="text-gray-400 text-sm">Monitoring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold gradient-text">15%</div>
                <div className="text-gray-400 text-sm">Revenue Boost</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-float">
            <div className="card-neon p-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
                  <span className="text-2xl">📊</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Real-Time Analytics</h3>
                  <p className="text-gray-400">Live market data</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center p-4 bg-dark-800/50 rounded-lg">
                  <span className="text-gray-300">Market Price</span>
                  <span className="text-neon-green font-bold">$2,450</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-dark-800/50 rounded-lg">
                  <span className="text-gray-300">Your Price</span>
                  <span className="text-neon-blue font-bold">$2,380</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-neon-green/10 border border-neon-green/30 rounded-lg">
                  <span className="text-gray-300">Recommendation</span>
                  <span className="text-neon-green font-bold">+$70</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Trust & Reliability */}
        <section className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="card-glass p-8 space-y-6">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-neon-purple to-neon-pink rounded-full flex items-center justify-center mx-auto animate-bounce-soft">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="text-2xl font-bold gradient-text">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level encryption and compliance</p>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                  <span className="text-gray-300">SOC 2 Type II Certified</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                  <span className="text-gray-300">GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                  <span className="text-gray-300">256-bit SSL Encryption</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8 order-1 lg:order-2 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-neon-purple/10 border border-neon-purple/30 px-4 py-2 rounded-full text-sm">
              <div className="w-2 h-2 bg-neon-purple rounded-full animate-pulse"></div>
              <span className="text-neon-purple font-semibold">Trusted by 500+ Companies</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-white">Price Recommendations</span><br />
              <span className="gradient-text">You Can Trust</span>
            </h2>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Our intelligent system analyzes market trends, competitor behavior, and historical data 
              to provide accurate pricing recommendations that boost your revenue and market competitiveness.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-neon-green/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-neon-green text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Advanced Machine Learning</h3>
                  <p className="text-gray-400">AI algorithms that learn and adapt to market changes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-neon-blue/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-neon-blue text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Real-Time Market Data</h3>
                  <p className="text-gray-400">Live updates from thousands of data sources</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-neon-purple/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-neon-purple text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Predictive Analytics</h3>
                  <p className="text-gray-400">Forecast trends and optimize pricing strategies</p>
                </div>
              </div>
            </div>
            
            <Link to="/dataForm">
              <button className="btn-neon text-lg px-8 py-4 min-w-[200px]">
                <span>Get Started Now</span>
              </button>
            </Link>
          </div>
        </section>

        {/* Section 3: CTA Section */}
        <section className="text-center space-y-8 py-20">
          <div className="card-neon p-12 max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-5xl font-bold gradient-text mb-6">
              Ready to Transform Your Pricing?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using our AI-powered pricing platform 
              to maximize revenue and stay competitive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dataForm">
                <button className="btn-neon text-lg px-8 py-4 min-w-[200px]">
                  <span>Start Free Trial</span>
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn-glass text-lg px-8 py-4 min-w-[200px]">
                  <span>Contact Sales</span>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default LandingPageContent;
