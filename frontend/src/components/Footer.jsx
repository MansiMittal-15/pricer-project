import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-neon-blue/20">
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 border-b border-neon-blue/20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Ready to Transform Your Pricing?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI-powered pricing platform 
              to maximize revenue and stay competitive in today's market.
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
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              <h3 className="text-3xl font-bold gradient-text">Pricer</h3>
              <p className="text-gray-300 leading-relaxed">
                The ultimate AI-powered pricing intelligence platform that helps businesses 
                optimize their pricing strategies and maximize revenue through data-driven insights.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-neon-blue/20 hover:bg-neon-blue/30 rounded-lg flex items-center justify-center transition-colors group">
                  <FaFacebook className="text-neon-blue group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 bg-neon-purple/20 hover:bg-neon-purple/30 rounded-lg flex items-center justify-center transition-colors group">
                  <FaInstagram className="text-neon-purple group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 bg-neon-pink/20 hover:bg-neon-pink/30 rounded-lg flex items-center justify-center transition-colors group">
                  <FaLinkedin className="text-neon-pink group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 bg-neon-green/20 hover:bg-neon-green/30 rounded-lg flex items-center justify-center transition-colors group">
                  <FaTwitter className="text-neon-green group-hover:scale-110 transition-transform" />
                </a>
                <a href="#" className="w-10 h-10 bg-neon-cyan/20 hover:bg-neon-cyan/30 rounded-lg flex items-center justify-center transition-colors group">
                  <FaGithub className="text-neon-cyan group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Product</h4>
            <ul className="space-y-3">
              <li><Link to="/features" className="text-gray-300 hover:text-neon-blue transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-neon-blue transition-colors">Pricing</Link></li>
              <li><Link to="/integrations" className="text-gray-300 hover:text-neon-blue transition-colors">Integrations</Link></li>
              <li><Link to="/api" className="text-gray-300 hover:text-neon-blue transition-colors">API Documentation</Link></li>
              <li><Link to="/security" className="text-gray-300 hover:text-neon-blue transition-colors">Security</Link></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-gray-300 hover:text-neon-blue transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-gray-300 hover:text-neon-blue transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-neon-blue transition-colors">Blog</Link></li>
              <li><Link to="/press" className="text-gray-300 hover:text-neon-blue transition-colors">Press</Link></li>
              <li><Link to="/partners" className="text-gray-300 hover:text-neon-blue transition-colors">Partners</Link></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-3">
              <li><Link to="/help" className="text-gray-300 hover:text-neon-blue transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-neon-blue transition-colors">Contact Us</Link></li>
              <li><Link to="/status" className="text-gray-300 hover:text-neon-blue transition-colors">System Status</Link></li>
              <li><Link to="/community" className="text-gray-300 hover:text-neon-blue transition-colors">Community</Link></li>
              <li><Link to="/training" className="text-gray-300 hover:text-neon-blue transition-colors">Training</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-gray-700 pt-8 mb-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            <h4 className="text-xl font-semibold text-white">Stay Updated</h4>
            <p className="text-gray-300">Get the latest pricing insights and product updates delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="input-neon flex-1"
              />
              <button className="btn-neon px-6 py-3 whitespace-nowrap">
                <span>Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Pricer. All rights reserved.
            </div>
            
            <div className="flex flex-wrap gap-6 text-sm">
              <Link to="/privacy" className="text-gray-400 hover:text-neon-blue transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-neon-blue transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-neon-blue transition-colors">Cookie Policy</Link>
              <Link to="/gdpr" className="text-gray-400 hover:text-neon-blue transition-colors">GDPR</Link>
            </div>
            
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
            >
              <FaArrowUp className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
