import React, { useState } from "react";
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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <>
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

              <form className="space-y-6 max-w-2xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="fullname" className="block text-sm font-medium text-gray-300">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullname"
                      name="fullname"
                      value={user.fullname}
                      onChange={handleInputChange}
                      className="input-neon w-full"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-300">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={user.phoneNumber}
                      onChange={handleInputChange}
                      className="input-neon w-full"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={user.email}
                    onChange={handleInputChange}
                    className="input-neon w-full"
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      value={user.password}
                      onChange={handleInputChange}
                      className="input-neon w-full pr-12"
                      placeholder="Create a strong password"
                    />
                    <button
                      type="button"
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-neon-blue transition-colors"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash className="text-lg" /> : <FaEye className="text-lg" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <button
                    type="button"
                    onClick={handleSignup}
                    disabled={isLoading}
                    className="btn-neon w-full text-lg py-4"
                  >
                    {isLoading ? (
                      <span className="flex items-center gap-2 justify-center">
                        <div className="spinner"></div>
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

              {/* Terms and Privacy */}
              <div className="text-center text-sm text-gray-500">
                By creating an account, you agree to our{" "}
                <Link to="#" className="text-neon-blue hover:text-neon-purple transition-colors">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="#" className="text-neon-blue hover:text-neon-purple transition-colors">
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
