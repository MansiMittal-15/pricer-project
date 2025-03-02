import React from "react";
import Header from "./Header";

const Contact = () => {
  return (
    <div>
      <Header />
      <div className="bg-gradient-to-b from-pink-200/20 to-orange-200/20 min-h-screen ">
        <div className="max-w-7xl mx-auto px-10 ">
          <div className="flex justify-between gap-16 items-center h-[90vh] ">
            <div className="w-[50%] flex flex-col gap-8 ">
              <h1 className="text-5xl font-medium">Contact us</h1>
              <p className="text-xl font-light">
                Need to get in touch with us? Either fill out the form with your
                inquiry or find the department email you'd like to contact
                below.
              </p>
            </div>
            <form className="w-[50%] mx-auto flex flex-col justify-center items-center border-2 bg-white/40 border-slate-900 rounded-2xl">
              <div className="h-[400px] flex flex-col gap-4 p-6" >
                <div className="flex gap-4"  >
                  <div className="flex flex-col gap-1">
                    <label className="text-xl font-serif" htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" className="rounded-xl outline-none p-2" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="text-xl font-serif" htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" className="rounded-xl outline-none p-2" />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xl font-serif " htmlFor="email">Email</label>
                  <input type="email" id="email" className="rounded-xl outline-none p-2" />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-xl font-serif" htmlFor="message">What can we help you with?</label>
                  <textarea id="message" className="h-20 outline-none rounded-xl"/>
                </div>
                <div>
                  <button className="bg-slate-800 w-full p-2 text-white rounded-xl text-xl hover:bg-black">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
