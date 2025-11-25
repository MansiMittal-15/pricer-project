import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-black text-white/80 "> {/* 1. Use <footer/> tag */}
      <div className="max-w-[1200px] mx-auto">
        <div className="mx-10">
          {/* Call-to-Action Section */}
          <div className="flex gap-10 py-10 justify-between border-b-2 border-b-white/40 ">
            <div className="flex flex-col w-[40%] gap-3 ">
              {/* 2. Use a semantic heading for the main CTA */}
              <h2 className="text-4xl">Shape Your Pricing Strategy</h2> 
              <p className="text-sm">
                See how businesses are optimizing their pricing with Pricer.
                Real insights, real results, and success stories from startups
                maximizing their revenue.
              </p>
            </div>
            <div>
              {/* 3. Wrap button content in an anchor tag if it navigates to another page */}
              <button className="text-xl text-white font-bold bg-purple-500 hover:bg-purple-600 p-6 rounded-full inline-block"
              >
                Get Started
              </button>
            </div>
          </div>
          
          {/* Main Footer Links Section */}
          <div className="flex flex-col">
            <div className="flex gap-4 py-10 justify-between ">
              
              {/* Logo/Description Section */}
              <div className="w-[30%] flex gap-4 flex-col ">
                {/* 4. Use a specific heading for the company name/logo */}
                <h3 className="text-2xl">Pricer</h3> 
                <p className="text-sm">
                  Pricer is the ultimate solution for data-driven pricing
                  decisions, ensuring businesses achieve profitability and
                  market success through intelligent pricing strategies.
                </p>
              </div>
              
              {/* Navigation Links Section */}
              <nav className="flex gap-16 w-[40%] "> {/* 5. Use <nav> for link sections */}
                
                {/* Help Links */}
                <div className="flex flex-col gap-3 ">
                  <h4 className="text-xl">Help</h4> {/* 6. Use <h4> for sub-headings */}
                  <ul className="text-sm flex flex-col gap-2">
                    {/* 7. All navigation items should be <a> tags */}
                    <li><a href="/">Home</a></li> 
                    <li><a href="/blog">Blog</a></li> 
                    <li><a href="/contact">Contact</a></li> 
                  </ul>
                </div>
                
                {/* Company Links */}
                <div className="flex flex-col gap-3 ">
                  <h4 className="text-xl" >Company</h4>
                  <ul className="text-sm flex flex-col gap-2">
                    <li><a href="/about">Our Story</a></li>
                    <li><a href="/careers">Careers</a></li>
                    <li><a href="/features">Features</a></li>
                  </ul>
                </div>
                
                {/* Social Media Links */}
                <div className="flex flex-col gap-5 ">
                  <h4 className="text-xl">Social Media</h4>
                  <ul className="flex gap-4">
                    {/* 8. Use <a> tags for social links and add accessibility text */}
                    <li>
                      <a 
                        href="[Facebook URL]" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Pricer on Facebook" // Accessibility/SEO text
                      >
                        <FaFacebook className="text-2xl hover:bg-purple-800 hover:text-white rounded-full" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="[Instagram URL]" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Pricer on Instagram"
                      >
                        <FaInstagram className="text-2xl hover:bg-purple-800 hover:text-white rounded-full" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="[LinkedIn URL]" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Pricer on LinkedIn"
                      >
                        <FaLinkedin className="text-2xl hover:bg-purple-800 hover:text-white rounded-full" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="[Twitter URL]" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Pricer on Twitter"
                      >
                        <FaTwitter className="text-2xl hover:bg-purple-800 hover:text-white rounded-full" />
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
            
            {/* Copyright and Legal Links Section */}
            <div className="py-6 text-sm flex justify-between border-t-2 border-t-white/40"> {/* Add border for better separation */}
              <div>&copy; Pricer {new Date().getFullYear()} All Rights Reserved</div>
              <nav> {/* Use nav again for legal links */}
                <ul className="flex gap-10">
                  {/* 9. Legal links also need <a> tags */}
                  <li><a href="/privacy-policy">Privacy Policy</a></li>
                  <li><a href="/legal-stamp">Legal Stamp</a></li>
                  <li><a href="/cookies-policy">Cookies Policy</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;