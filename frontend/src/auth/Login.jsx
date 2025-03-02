import React from "react";
import purpleImage from "../assets/purple_image.jpeg";
import white_bg from "../assets/white_bg2.jpg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="mx-[24px] flex my-10 border-2 border-black ">
        <div
          className="w-[50%] flex flex-col items-center justify-center gap-6"
          style={{
            backgroundImage: `url(${white_bg})`,
          }}
        >
          <div className="flex flex-col items-center gap-2">
            <img src={""} alt="logo" />
            <h1 className="text-4xl font-semibold">Welcome Back!</h1>
            <p className="text-sm">Welcome back! Please enter your details.</p>
          </div>
          <div className="w-[70%] flex flex-col items-center gap-4 text-sm">
            <div className="flex flex-col w-[80%] gap-2 font-semibold ">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                className="outline-none rounded-lg p-2 bg-white outline-black/20"
                placeholder="Enter your email.."
                id="email"
              />
            </div>
            <div className="flex flex-col w-[80%] gap-2 font-semibold">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Enter password here.."
                className="outline-none rounded-lg p-2 outline-black/20"
                id="password"
              />
            </div>
            <div className="flex justify-between w-[80%] gap-2 font-semibold ">
              <div className="flex items-center gap-1">
                <input type="checkbox" id="checkbox" />
                <label htmlFor="checkbox">Remember for 30 days</label>
              </div>
              <div>
                <Link to="/" className="font-semibold text-purple-800">
                  Forgot Password
                </Link>
              </div>
            </div>
            <div className="flex w-[100%] justify-center ">
              <button className="bg-purple-800 text-white w-[80%] p-2 rounded-lg text-lg hover:bg-purple-900">
                Sign in
              </button>
            </div>
            <div className="flex w-[100%] justify-center ">
              <button className="bg-white/70 border-2 border-black/30 text-black font-semibold w-[80%] p-2 rounded-lg text-lg flex justify-center gap-2">
                <span>
                  <img src="" alt="G" />
                </span>
                Sign in with Google
              </button>
            </div>
          </div>
          <div>
            <div>
              Don't have an Account?{" "}
              <span>
                <Link to="/" className="text-purple-800 font-semibold">
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[50%]">
          <img src={purpleImage} alt="purple image" />
        </div>
      </div>
    </div>
  );
};

export default Login;
