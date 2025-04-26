import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-black text-white/80 ">
      <div className="max-w-[1200px] mx-auto">
        <div className="mx-10">
          <div className="flex gap-10 py-10 justify-between border-b-2 border-b-white/40 ">
            <div className="flex flex-col w-[40%] gap-3 ">
              <h1 className="text-4xl">Shape Your Pricing Strategy</h1>
              <p className="text-sm">
                See how businesses are optimizing their pricing with Pricer.
                Real insights, real results, and success stories from startups
                maximizing their revenue.
              </p>
            </div>
            <div>
              <button className="text-xl text-white font-bold bg-purple-500 hover:bg-purple-600 p-6 rounded-full">Get Started</button>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex gap-4 py-10 justify-between ">
              <div className="w-[30%] flex gap-4 flex-col ">
                <h1 className="text-2xl">Pricer</h1>
                <p className="text-sm">
                  Pricer is the ultimate solution for data-driven pricing
                  decisions, ensuring businesses achieve profitability and
                  market success through intelligent pricing strategies.
                </p>
              </div>
              <div className="flex gap-16 w-[40%] ">
                <div className="flex flex-col gap-3 ">
                  <h3 className="text-xl">Help</h3>
                  <ul className="text-sm flex flex-col gap-2">
                    <li>Home</li>
                    <li>Blog</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 ">
                  <h3 className="text-xl" >Company</h3>
                  <ul className="text-sm flex flex-col gap-2">
                    <li>Our Story</li>
                    <li>Careers</li>
                    <li>Features</li>
                  </ul>
                </div>
                <div className="flex flex-col gap-5 ">
                  <h3 className="text-xl">Social Media</h3>
                  <ul className="flex gap-4">
                    <li>
                      <FaFacebook className="text-2xl hover:bg-purple-800 hover:text-white rounded-full" />
                    </li>
                    <li>
                      <FaInstagram className="text-2xl hover:bg-purple-800 hover:text-white rounded-full" />
                    </li>
                    <li>
                      <FaLinkedin className="text-2xl hover:bg-purple-800 hover:text-white rounded-full" />
                    </li>
                    <li>
                      <FaTwitter className="text-2xl hover:bg-purple-800 hover:text-white rounded-full" />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="py-6 text-sm flex justify-between">
              <div >&copy; Pricer {new Date().getFullYear()} All Rights Reserved</div>
              <div>
                <ul className="flex gap-10">
                  <li>Privacy Policy</li>
                  <li>Legal Stamp</li>
                  <li>Cookies Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
