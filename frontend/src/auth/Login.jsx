import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaSpinner } from "react-icons/fa";
import Header from "../components/Header";
import { FiLogIn } from "react-icons/fi";
import { login } from "../utils/api";
import { useDispatch } from "react-redux";
import { setUser as setUserAction } from "../redux/userSlice.js";
import { toast } from "react-hot-toast";
import Footer from "../components/Footer.jsx";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      setIsLoading(true);
      const response = await login(user);
      if (response?.data?.success) {
        toast.success(response?.data?.message);
      }
      dispatch(setUserAction(response?.data?.user));
      localStorage.setItem("token", response.data.token);
      navigate("/");
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
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-dark-900/50 backdrop-blur-lg border border-neon-blue/20 rounded-3xl overflow-hidden shadow-glass">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left side - Form */}
              <div className="p-12 space-y-8">
                <div className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-purple rounded-2xl animate-float">
                    <FiLogIn className="text-white text-2xl" />
                  </div>
                  <h1 className="text-4xl font-bold gradient-text">Welcome Back!</h1>
                  <p className="text-gray-400">
                    Enter your credentials to access your dashboard
                  </p>
                </div>

                <form className="space-y-6">
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
                        placeholder="Enter your password"
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

                  <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center gap-2 text-gray-300 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-neon-blue bg-dark-800 border-neon-blue/30 rounded focus:ring-neon-blue/20" />
                      Remember me for 30 days
                    </label>
                    <Link to="/" className="text-neon-blue hover:text-neon-purple transition-colors">
                      Forgot Password?
                    </Link>
                  </div>

                  <div className="space-y-4">
                    <button
                      type="button"
                      onClick={handleLogin}
                      disabled={isLoading}
                      className="btn-neon w-full text-lg py-4"
                    >
                      {isLoading ? (
                        <span className="flex items-center gap-2 justify-center">
                          <div className="spinner"></div>
                          Signing in...
                        </span>
                      ) : (
                        <span>Sign In</span>
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
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-neon-blue hover:text-neon-purple font-semibold transition-colors">
                    Sign up here
                  </Link>
                </div>
              </div>

              {/* Right side - Image/Branding */}
              <div className="relative bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 flex items-center justify-center p-12">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-neon-blue/5 to-neon-purple/10"></div>
                <div className="relative text-center space-y-6">
                  <div className="w-48 h-48 mx-auto bg-gradient-to-br from-neon-blue to-neon-purple rounded-full flex items-center justify-center animate-float">
                    <div className="w-32 h-32 bg-white/20 backdrop-blur-lg rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">P</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold gradient-text">Join the Future</h2>
                    <p className="text-gray-300 text-lg">
                      Experience next-generation pricing intelligence with our advanced SaaS platform
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-4 text-left">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-green rounded-full"></div>
                      <span className="text-gray-300">Real-time Analytics</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
                      <span className="text-gray-300">AI-Powered Insights</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-neon-purple rounded-full"></div>
                      <span className="text-gray-300">Enterprise Security</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
