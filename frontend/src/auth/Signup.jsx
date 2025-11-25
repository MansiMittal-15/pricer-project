import React, { useState } from "react";
// 🔑 SEO: Import Helmet for managing the document head
import { Helmet } from "react-helmet-async"; 
import white_bg from "../assets/white_bg2.jpg";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaSpinner,
  FaUserPlus,
} from "react-icons/fa";
import Header from "../components/Header";
import { register } from "../utils/api";
import { toast } from "react-hot-toast";
import Footer from "../components/Footer";

const Signup = () => {
  const [user, setUser] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      setIsLoading(true);
      const response = await register(user);
      if (response?.data?.success) {
        toast.success(response?.data?.message);
      }
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message ? error?.response?.data?.message : error?.message);
    } finally {
      setIsLoading(false);
    }
  };

  // 🔑 SEMANTIC: New function to handle the native form submission event
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents default form refresh
    handleSignup();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  
  return (
    <>
      {/* 1. 🔑 HEAD MANAGER: Helmet for Title, Description, and Indexing Control */}
      <Helmet>
        {/* Title: Concise and descriptive (Crucial) */}
        <title>Create Your Account | [Your App Name]</title>
        
        {/* Meta Description: Provides a summary for search results */}
        <meta 
          name="description" 
          content="Sign up quickly to create your account and access all features, including personalized predictions, on [Your App Name]." 
        />
        
        {/* Control Indexing: Recommended for signup pages to keep them out of general search results */}
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header />
      <div className="max-w-[1200px] mx-auto ">
        <div
          className="mx-[24px] py-10 flex flex-col items-center gap-6 "
          style={{
            backgroundImage: `url(${white_bg})`,
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <FaUserPlus className="text-purple-800 text-4xl" />
            {/* Heading Hierarchy: Use a clear <h1> for the page topic */}
            <h1 className="text-4xl font-semibold">Create an Account!</h1>
            <p className="text-sm">
              Welcome! Enter your details to start Prediction.
            </p>
          </div>
          
          {/* 2. 🔑 SEMANTIC HTML: Wrap inputs and buttons in a <form> element */}
          <form onSubmit={handleSubmit} className="w-[70%] flex flex-col items-center gap-6 text-sm">

            {/* Full Name Field */}
            <div className="flex flex-col w-[80%] gap-2 font-semibold">
              <label htmlFor="fullname">Full Name</label>
              <input
                type="text"
                className="outline-none rounded-lg p-2 bg-white outline-black/20"
                placeholder="Enter your fullname.."
                id="fullname"
                name="fullname"
                value={user.fullname}
                onChange={handleInputChange}
                required // Added for better UX/validation
              />
            </div>
            
            {/* Email Field */}
            <div className="flex flex-col w-[80%] gap-2 font-semibold">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="outline-none rounded-lg p-2 bg-white outline-black/20"
                placeholder="Enter your email.."
                id="email"
                name="email"
                value={user.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            {/* Phone Number Field */}
            <div className="flex flex-col w-[80%] gap-2 font-semibold ">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                // 🔑 SEMANTIC: Use type="tel" for phone numbers
                type="tel" 
                className="outline-none rounded-lg p-2 bg-white outline-black/20"
                placeholder="Enter your Phone Number.."
                id="phoneNumber"
                name="phoneNumber"
                value={user.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            
            {/* Password Field */}
            <div className="flex flex-col w-[80%] gap-2 font-semibold relative justify-center ">
              <label htmlFor="password">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                className="outline-none rounded-lg p-2 bg-white outline-black/20"
                placeholder="Enter your password.."
                id="password"
                name="password"
                value={user.password}
                onChange={handleInputChange}
                required
              />
              <span
                className="absolute right-2 top-12 -translate-y-1/2 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
                // 🔑 ACCESSIBILITY: Add aria-label
                aria-label={showPassword ? "Hide password" : "Show password"} 
              >
                {showPassword ? (
                  <FaEyeSlash className="text-black/50 text-lg" />
                ) : (
                  <FaEye className="text-black/50 text-lg" />
                )}
              </span>
            </div>
            
            {/* Primary Submit Button */}
            <div className="flex w-[100%] justify-center pt-2 ">
              <button
                type="submit" // 🔑 SEMANTIC: Ensures pressing Enter submits the form
                disabled={isLoading} // Good UX to prevent double submission
                className="bg-purple-800 text-white w-[80%] p-2 rounded-lg text-lg hover:bg-purple-900"
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    Signing Up... <FaSpinner className="animate-spin" />
                  </span>
                ) : (
                  "Sign Up"
                )}
              </button>
            </div>
            
            {/* Social Sign Up Button */}
            <div className="flex w-[100%] justify-center ">
              <button className="bg-white/70 border-2 items-center border-black/30 text-black font-semibold w-[80%] p-2 rounded-lg text-lg flex justify-center gap-2">
                <span><FaGoogle /></span>
                Sign up with Google
              </button>
            </div>
          </form>

          <div>
            <div>
              Already have an Account?{" "}
              <span>
                <Link to="/login" className="text-purple-800 font-semibold">
                  Sign in
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;