import React from "react";
import white_bg from "../assets/white_bg2.jpg";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="max-w-[1200px] mx-auto py-10">
      <div
        className="mx-[24px] py-10 flex flex-col items-center gap-6 "
        style={{
          backgroundImage: `url(${white_bg})`,
        }}
      >
        <div className="flex flex-col items-center gap-2">
          <img src={""} alt="logo" />
          <h1 className="text-4xl font-semibold">Create an Account!</h1>
          <p className="text-sm">
            Welcome! Enter your details to start Prediction.
          </p>
        </div>
        <div className="w-[70%] flex flex-col items-center gap-6 text-sm">
          <div className="flex flex-col w-[80%] gap-2 font-semibold">
            <label htmlFor="fullname">Full Name</label>
            <input
              type="text"
              className="outline-none rounded-lg p-2 bg-white outline-black/20"
              placeholder="Enter your fullname.."
              id="fullname"
            />
          </div>
          <div className="flex flex-col w-[80%] gap-2 font-semibold">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="outline-none rounded-lg p-2 bg-white outline-black/20"
              placeholder="Enter your email.."
              id="email"
            />
          </div>
          <div className="flex flex-col w-[80%] gap-2 font-semibold ">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="text"
              className="outline-none rounded-lg p-2 bg-white outline-black/20"
              placeholder="Enter your Phone Number.."
              id="phoneNumber"
            />
          </div>
          <div className="flex flex-col w-[80%] gap-2 font-semibold ">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              className="outline-none rounded-lg p-2 bg-white outline-black/20"
              placeholder="Enter your password.."
              id="password"
            />
          </div>
          <div className="flex w-[100%] justify-center pt-2 ">
            <button className="bg-purple-800 text-white w-[80%] p-2 rounded-lg text-lg hover:bg-purple-900">
              Sign Up
            </button>
          </div>
          <div className="flex w-[100%] justify-center ">
            <button className="bg-white/70 border-2 border-black/30 text-black font-semibold w-[80%] p-2 rounded-lg text-lg flex justify-center gap-2">
              <span>
                <img src="" alt="G" />
              </span>
              Sign up with Google
            </button>
          </div>
        </div>
        <div>
          <div>
            Already have an Account?{" "}
            <span>
              <Link to="/" className="text-purple-800 font-semibold">
                Sign in
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
