import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaGithub, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 1. Semantic HTML: The component is already wrapped in the correct <footer> tag.
  return (
    <footer className="bg-dark-950 border-t border-neon-blue/20" role="contentinfo" aria-label="Site Footer and Navigation">
      
      {/* CTA Section */}
      <section className="bg-gradient-to-r from-neon-blue/10 via-neon-purple/10 to-neon-pink/10 border-b border-neon-blue/20" aria-labelledby="footer-cta-heading">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center space-y-8">
            
            {/* 2. Heading Hierarchy: Using h2 for CTA section heading */}
            <h2 id="footer-cta-heading" className="text-4xl md:text-5xl font-bold gradient-text">
              Ready to Transform Your Pricing?
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI-powered pricing platform to maximize revenue and stay competitive in today's market.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dataForm">
                <button className="btn-neon text-lg px-8 py-4 min-w-[200px]" aria-label="Start a free trial by submitting your data">
                  <span>Start Free Trial</span>
                </button>
              </Link>
              <Link to="/contact">
                <button className="btn-glass text-lg px-8 py-4 min-w-[200px]" aria-label="Contact the sales team">
                  <span>Contact Sales</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="space-y-4">
              {/* 3. Heading Hierarchy: Using h3 for major footer sections */}
              <h3 className="text-3xl font-bold gradient-text">Pricer</h3>
              <p className="text-gray-300 leading-relaxed">
                The ultimate AI-powered pricing intelligence platform that helps businesses 
                optimize their pricing strategies and maximize revenue through data-driven insights.
              </p>
            </div>
            
            <div className="space-y-4">
              {/* 4. Heading Hierarchy: Using h4 for sub-sections */}
              <h4 className="text-lg font-semibold text-white">Follow Us</h4>
              {/* 5. A11Y: Added aria-label to social links */}
              <div className="flex gap-4" role="navigation" aria-label="Social media links">
                <a href="#" className="social-icon" aria-label="Follow Pricer on Facebook">
                  <FaFacebook className="text-neon-blue" />
                </a>
                <a href="#" className="social-icon" aria-label="Follow Pricer on Instagram">
                  <FaInstagram className="text-neon-purple" />
                </a>
                <a href="#" className="social-icon" aria-label="Follow Pricer on LinkedIn">
                  <FaLinkedin className="text-neon-pink" />
                </a>
                <a href="#" className="social-icon" aria-label="Follow Pricer on Twitter/X">
                  <FaTwitter className="text-neon-green" />
                </a>
                <a href="#" className="social-icon" aria-label="Pricer GitHub repository">
                  <FaGithub className="text-neon-cyan" />
                </a>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-white">Product</h4>
            {/* 6. A11Y: Added role="navigation" to link lists */}
            <ul className="space-y-3" role="navigation" aria-label="Product links">
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
            <ul className="space-y-3" role="navigation" aria-label="Company links">
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
            <ul className="space-y-3" role="navigation" aria-label="Support and help links">
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
            {/* 7. Semantic HTML: Newsletter is a form, use <form> tag */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto" role="search" aria-label="Newsletter Subscription">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="input-neon flex-1"
                aria-label="Email address for newsletter subscription" // A11Y label
                required 
              />
              <button type="submit" className="btn-neon px-6 py-3 whitespace-nowrap">
                <span>Subscribe</span>
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Legal and Copyright */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Pricer. All rights reserved.
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap gap-6 text-sm" role="navigation" aria-label="Legal links">
              <Link to="/privacy" className="text-gray-400 hover:text-neon-blue transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-neon-blue transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="text-gray-400 hover:text-neon-blue transition-colors">Cookie Policy</Link>
              <Link to="/gdpr" className="text-gray-400 hover:text-neon-blue transition-colors">GDPR</Link>
            </div>
            
            {/* Scroll-to-Top Button */}
            <button 
              onClick={scrollToTop}
              className="w-10 h-10 bg-gradient-to-br from-neon-blue to-neon-purple rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
              aria-label="Scroll to the top of the page" // A11Y label
            >
              <FaArrowUp className="text-white" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;