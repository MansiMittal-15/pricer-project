import React, { useState } from "react";
import { Helmet } from "react-helmet-async"; // Assuming Helmet is installed and Provider is set up
import Header from "./Header";
import { FaInstagram, FaLinkedin, FaLocationArrow, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa";
import Footer from "./Footer";
import { toast } from "react-hot-toast"; // Assuming react-hot-toast is used for notifications

const Contact = () => {
  // 1. State for form inputs
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  // 2. Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  // 3. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all required fields.");
      return;
    }

    // In a real application, you would send formData to your backend API here.
    console.log("Form Data Submitted:", formData);
    
    // Simulate API call success
    toast.success("Message sent successfully! We'll be in touch.");
    
    // Reset form
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* 👑 SEO Optimization with React Helmet 👑 */}
      <Helmet>
        <title>Contact Us | Get in Touch for Support & Inquiries</title>
        <meta
          name="description"
          content="Contact our team for inquiries, support, or remarks. Reach us via phone, email, or use our quick contact form."
        />
        <link rel="canonical" href="https://www.yourdomain.com/contact" />
      </Helmet>
      
      <Header />
      <div className="max-w-[1200px] mx-auto">
        <div className="mx-[24px] flex flex-col gap-10 items-center py-10">
          
          {/* Main Title Section */}
          <div className="flex flex-col gap-2 items-center">
            <h1 className="text-5xl font-semibold">Contact Us</h1>
            <p>Any question or remarks? Just write us a message!</p>
          </div>

          {/* Contact Box Container */}
          <div className="w-[100%] flex shadow-xl rounded-2xl">
            {/* Left Panel: Contact Info */}
            <div className="w-[40%] text-white/80 p-8 bg-black/90 rounded-tl-2xl flex flex-col rounded-bl-2xl gap-20 ">
              <div className="flex flex-col gap-2">
                <h2 className="text-4xl">Contact Information</h2> {/* Changed to H2 for semantic hierarchy */}
                <p>Say something to start a live chat!</p>
              </div>
              
              {/* Contact Details */}
              <div className="flex flex-col gap-6">
                <div className="flex gap-6 items-center">
                  <FaPhone className="text-white text-2xl hover:text-purple-800 cursor-pointer" />
                  <a href="tel:+12183327238" className="hover:underline">+1218 3327 238</a>
                </div>
                <div className="flex gap-6 items-center">
                  <FaMailBulk className="text-white text-2xl hover:text-purple-800 cursor-pointer" />
                  <a href="mailto:demo@gmail.com" className="hover:underline">demo@gmail.com</a>
                </div>
                <div className="flex gap-6 items-start"> {/* items-start for better multi-line text alignment */}
                  <FaLocationArrow className="text-white text-3xl hover:text-purple-800 cursor-pointer mt-1" />
                  <address> {/* Semantic tag for address */}
                    Lorem ipsum dolor, sit amet consect ing elit. Mollitia earum
                    consequatur delectus?
                  </address>
                </div>
              </div>
              
              {/* Social Media Links */}
              <div>
                <ul className="flex gap-6">
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter profile">
                      <FaTwitter className="text-white text-2xl hover:text-purple-400 transition cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram profile">
                      <FaInstagram className="text-white text-2xl hover:text-purple-400 transition cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                      <FaLinkedin className="text-white text-2xl hover:text-purple-400 transition cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Panel: Contact Form */}
            <div className="w-[60%] p-8 bg-purple-200 flex flex-col rounded-tr-2xl rounded-br-2xl">
              {/* 4. Semantic Fix: Use <form> and attach onSubmit handler */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Row 1: First Name / Last Name */}
                <div className="flex justify-between ">
                  <div className="flex flex-col w-[45%] gap-2 font-semibold ">
                    <label htmlFor="firstName">First Name <span className="text-red-600">*</span></label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="outline-none rounded-lg p-3 bg-white focus:ring-2 focus:ring-purple-700/50"
                      placeholder="Enter your First Name.."
                      required
                    />
                  </div>
                  <div className="flex flex-col w-[45%] gap-2 font-semibold ">
                    <label htmlFor="lastName">Last Name <span className="text-red-600">*</span></label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="outline-none rounded-lg p-3 bg-white focus:ring-2 focus:ring-purple-700/50"
                      placeholder="Enter your Last Name.."
                      required
                    />
                  </div>
                </div>
                
                {/* Row 2: Email / Phone Number */}
                <div className="flex justify-between">
                  <div className="flex flex-col w-[45%] gap-2 font-semibold ">
                    <label htmlFor="email">Email <span className="text-red-600">*</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="outline-none rounded-lg p-3 bg-white focus:ring-2 focus:ring-purple-700/50"
                      placeholder="Enter your email.."
                      required
                    />
                  </div>
                  <div className="flex flex-col w-[45%] gap-2 font-semibold ">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input
                      type="tel" // UX/A11Y: Use type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      className="outline-none rounded-lg p-3 bg-white focus:ring-2 focus:ring-purple-700/50"
                      placeholder="Enter your Phone Number.."
                    />
                  </div>
                </div>
                
                {/* Row 3: Subject */}
                <div>
                  <div className="flex flex-col w-[100%] gap-2 font-semibold ">
                    <label htmlFor="subject">Subject <span className="text-red-600">*</span></label> {/* Lowercase ID for consistency */}
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="outline-none rounded-lg p-3 bg-white focus:ring-2 focus:ring-purple-700/50"
                      placeholder="Write your Subject.."
                      required
                    />
                  </div>
                </div>
                
                {/* Row 4: Message */}
                <div>
                  <div className="flex flex-col w-[100%] gap-2 font-semibold ">
                    <label htmlFor="message">Message <span className="text-red-600">*</span></label> {/* Lowercase ID for consistency */}
                    {/* 5. Semantic Fix: Use <textarea> for multi-line input */}
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="outline-none rounded-lg p-3 bg-white resize-y focus:ring-2 focus:ring-purple-700/50"
                      placeholder="Write your Message.."
                      required
                    ></textarea>
                  </div>
                </div>
                
                {/* Row 5: Submit Button */}
                <div className="flex w-[100%] justify-center ">
                  <button 
                    type="submit" // 6. Semantic Fix: Use type="submit"
                    className="bg-purple-700/90 text-white w-[100%] p-3 rounded-lg text-lg hover:bg-purple-800 font-semibold transition-colors"
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