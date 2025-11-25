import React from "react";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet
import Header from "./Header";
// Note: Icon imports are already handled in the original code.
import { FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"; 
import Footer from "./Footer";

const Contact = () => {
  return (
    <>
      {/* 👑 SEO Optimization with React Helmet 👑 */}
      <Helmet>
        {/* Optimized Title Tag */}
        <title>Contact Us | Get in Touch with Pricer Support</title>
        
        {/* Optimized Meta Description */}
        <meta
          name="description"
          content="Have a question about real-time pricing or analytics? Contact the Pricer support team by phone, email, or using our quick message form."
        />
        
        {/* Canonical Link (Replace with your actual domain) */}
        <link rel="canonical" href="https://www.yourdomain.com/contact" />
      </Helmet>

      <Header />
      <div className="max-w-[1200px] mx-auto">
        <div className="mx-[24px] flex flex-col gap-10 items-center py-10">
          <div className="flex flex-col gap-2 items-center">
            {/* H1 is perfect for the main page title */}
            <h1 className="text-5xl font-semibold">Contact Us</h1>
            <p className="text-lg">Any question or remarks? Just write us a message!</p>
          </div>

          <div className="w-[100%] flex shadow-2xl rounded-2xl"> {/* Added shadow for professional look */}
            {/* 📍 Left Panel: Contact Information */}
            <div className="w-[40%] text-white/90 p-10 bg-black/90 rounded-tl-2xl flex flex-col rounded-bl-2xl gap-20 ">
              <div className="flex flex-col gap-3">
                <h2 className="text-4xl">Contact Information</h2> {/* Use H2 for section heading */}
                <p className="text-white/70">Say something to start a live chat!</p>
              </div>
              
              {/* Contact Details */}
              <div className="flex flex-col gap-6">
                <div className="flex gap-6 items-center">
                  <FaPhone className="text-purple-400 text-2xl hover:text-purple-800 cursor-pointer" />
                  <a href="tel:+12183327238" className="hover:underline">+1218 3327 238</a> {/* SEO/UX: Use tel: link */}
                </div>
                <div className="flex gap-6 items-center">
                  <FaMailBulk className="text-purple-400 text-2xl hover:text-purple-800 cursor-pointer" />
                  <a href="mailto:demo@gmail.com" className="hover:underline">demo@gmail.com</a> {/* SEO/UX: Use mailto: link */}
                </div>
                <div className="flex gap-6 items-start"> {/* Use items-start for better alignment with text */}
                  <FaLocationArrow className="text-purple-400 text-3xl hover:text-purple-800 cursor-pointer mt-1" />
                  <address> {/* Use <address> tag for semantic SEO */}
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia earum
                    consequatur delectus?
                  </address>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div>
                <ul className="flex gap-6">
                  <li>
                    <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                      <FaTwitter className="text-white text-2xl hover:text-purple-400 transition" />
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                      <FaInstagram className="text-white text-2xl hover:text-purple-400 transition" />
                    </a>
                  </li>
                  <li>
                    <a href="https://linkedin.com/in/yourhandle" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                      <FaLinkedin className="text-white text-2xl hover:text-purple-400 transition" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* 📝 Right Panel: Contact Form */}
            <div className="w-[60%] p-10 bg-white flex flex-col gap-6 rounded-tr-2xl rounded-br-2xl">
              {/* 3. SEO/UX FIX: Wrap inputs in a <form> element */}
              <form action="/submit-contact-form" method="POST" className="flex flex-col gap-6"> 
                
                {/* Name Fields */}
                <div className="flex justify-between ">
                  <div className="flex flex-col w-[45%] gap-2 font-semibold ">
                    <label htmlFor="firstName">First Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      className="outline-none rounded-lg p-3 bg-slate-100 border border-slate-300 focus:ring-2 focus:ring-purple-500 transition"
                      placeholder="Enter your First Name.."
                      id="firstName"
                      required // Accessibility/UX: Add 'required' attribute
                    />
                  </div>
                  <div className="flex flex-col w-[45%] gap-2 font-semibold ">
                    <label htmlFor="lastName">Last Name <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      className="outline-none rounded-lg p-3 bg-slate-100 border border-slate-300 focus:ring-2 focus:ring-purple-500 transition"
                      placeholder="Enter your Last Name.."
                      id="lastName"
                      required
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="flex justify-between">
                  <div className="flex flex-col w-[45%] gap-2 font-semibold ">
                    <label htmlFor="email">Email <span className="text-red-500">*</span></label>
                    <input
                      type="email" // Use type="email" for validation
                      className="outline-none rounded-lg p-3 bg-slate-100 border border-slate-300 focus:ring-2 focus:ring-purple-500 transition"
                      placeholder="Enter your email.."
                      id="email"
                      required
                    />
                  </div>
                  <div className="flex flex-col w-[45%] gap-2 font-semibold ">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="tel" // Use type="tel" for semantic mobile entry
                      className="outline-none rounded-lg p-3 bg-slate-100 border border-slate-300 focus:ring-2 focus:ring-purple-500 transition"
                      placeholder="Enter your Phone Number (optional).."
                      id="phoneNumber"
                    />
                  </div>
                </div>

                {/* Subject Field */}
                <div>
                  <div className="flex flex-col w-[100%] gap-2 font-semibold ">
                    <label htmlFor="subject">Subject <span className="text-red-500">*</span></label> {/* Use lowercase 'subject' for consistency */}
                    <input
                      type="text"
                      className="outline-none rounded-lg p-3 bg-slate-100 border border-slate-300 focus:ring-2 focus:ring-purple-500 transition"
                      placeholder="Write your Subject.."
                      id="subject"
                      required
                    />
                  </div>
                </div>

                {/* Message Field */}
                <div>
                  <div className="flex flex-col w-[100%] gap-2 font-semibold ">
                    <label htmlFor="message">Message <span className="text-red-500">*</span></label> {/* Use lowercase 'message' for consistency */}
                    {/* 3. SEO/UX FIX: Changed input type="text" to <textarea> for long messages */}
                    <textarea
                      className="outline-none rounded-lg p-3 bg-slate-100 border border-slate-300 focus:ring-2 focus:ring-purple-500 transition resize-y"
                      placeholder="Write your Message..."
                      id="message"
                      rows="5" // Set a default height
                      required
                    ></textarea>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex w-[100%] justify-end"> {/* Centered submission button is better */}
                  <button 
                    type="submit" // Set type="submit"
                    className="bg-purple-700 text-white w-auto px-8 py-3 rounded-lg text-lg font-semibold hover:bg-purple-800 transition duration-200 shadow-md"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;