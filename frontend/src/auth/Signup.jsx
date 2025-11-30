import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaSpinner,
  FaUserPlus,
} from "react-icons/fa";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet
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

  // 2. Modified to accept the event object for form submission
  const handleSignup = async (e) => {
    e.preventDefault(); // Prevent default form submission/page reload

    // Basic client-side check
    if (!user.fullname || !user.email || !user.password) {
        toast.error("Please fill in all required fields.");
        return;
    }
    
    try {
      setIsLoading(true);
      const response = await register(user);
      
      if (response?.data?.success) {
        toast.success(response?.data?.message || "Registration successful!");
      }
      navigate("/login");
    } catch (error) {
      toast.error(error?.response?.data?.message || "Signup failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  
  return (
    <>
      {/* 👑 Helmet for Metadata (SEO) 👑 */}
      <Helmet>
        <title>Pricer | Create Your Account</title>
        <meta
          name="description"
          content="Create your Pricer account to start using real-time pricing intelligence and analytics for your business."
        />
        <meta name="robots" content="noindex, nofollow" /> {/* Recommended for authentication pages */}
        <link rel="canonical" href="https://www.yourdomain.com/signup" />
      </Helmet>

      <Header />
      <div className="min-h-screen pt-8 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-dark-900/50 backdrop-blur-lg border border-neon-blue/20 rounded-3xl overflow-hidden shadow-glass">
            <div className="p-12 space-y-8">
              <div className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-neon-purple to-neon-pink rounded-2xl animate-float">
                  <FaUserPlus className="text-white text-2xl" />
                </div>
                <h1 className="text-4xl font-bold gradient-text">Join Pricer Today!</h1>
                <p className="text-gray-400">
                  Create your account and start your pricing intelligence journey
                </p>
              </div>

              {/* 3. UX/A11Y FIX: Attached handleSignup to form onSubmit */}
              <form onSubmit={handleSignup} className="space-y-6 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Full Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="fullname" className="block text-sm font-medium text-gray-300">
                      Full Name <span className="text-neon-pink">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={user.fullname}
                      onChange={handleInputChange}
                      className="input-neon w-full"
                      placeholder="Enter your full name"
                      autoComplete="name" // A11Y/UX: Helps browser autofill
                      required
                    />
                  </div>

                  {/* Phone Number Input */}
                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300">
                      Phone Number
                    </label>
                    <input
                      type="tel" // UX/A11Y: Use type="tel" for mobile friendly input
                      id="phoneNumber"
                      name="phoneNumber"
                      value={user.phoneNumber}
                      onChange={handleInputChange}
                      className="input-neon w-full"
                      placeholder="Enter your phone number (optional)"
                      autoComplete="tel"
                    />
                  </div>
                </div>

                {/* Email Input */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address <span className="text-neon-pink">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="input-neon w-full"
                    placeholder="Enter your email address"
                    autoComplete="email" // A11Y/UX: Helps browser autofill
                    required
                  />
                </div>

                {/* Password Input */}
                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password <span className="text-neon-pink">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={handleInputChange}
                      className="input-neon w-full pr-12"
                      placeholder="Create a strong password (min 8 characters)"
                      autoComplete="new-password" // A11Y/UX: Indicates new password field
                      required
                      minLength="8" // UX improvement
                    />
                    <button
                      type="button"
                      aria-label={showPassword ? "Hide password" : "Show password"} // A11Y improvement
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-neon-blue transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-4 pt-2">
                  <button
                    type="submit" // 4. Changed type="button" to type="submit"
                    disabled={isLoading}
                    className="btn-neon w-full text-lg py-4"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2 justify-center" aria-live="assertive" aria-busy="true"> {/* A11Y: Added aria-live/busy */}
                        <FaSpinner className="animate-spin" />
                        Creating Account...
                      </span>
                    ) : (
                      <span>Create Account</span>
                    )}
                  </button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-600"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-dark-900 text-gray-400">Or continue with</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn-glass w-full text-lg py-4 flex items-center justify-center gap-3"
                    aria-label="Sign up with Google"
                  >
                    <FaGoogle className="text-xl" />
                    <span>Google</span>
                  </button>
                </div>
              </form>

              <div className="text-center text-gray-400">
                Already have an account?{" "}
                <Link to="/login" className="text-neon-blue hover:text-neon-purple font-semibold transition-colors">
                  Sign in here
                </Link>
              </div>

              {/* Terms and Privacy - Great UX addition */}
              <div className="text-center text-sm text-gray-500">
                By creating an account, you agree to our{" "}
                <Link to="/terms" className="text-neon-blue hover:text-neon-purple transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="text-neon-blue hover:text-neon-purple transition-colors">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;