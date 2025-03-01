import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { Link } from "react-router-dom";

const Header = () => {
  const dropDownRef = useRef(null);

  const [dropDownConfig, setDropDownConfig] = useState({
    isOpen: false,
    position: { left: 0, top: 0 },
    items: [],
    name: "",
  });

  const handleToggleDropDown = (e, name, items) => {
    const isSameDropDown =
      dropDownConfig.isOpen && dropDownConfig.name === name;
    setDropDownConfig({
      isOpen: !isSameDropDown,
      position: { left: e.clientX, top: e.clientY + 20 },
      items: items,
      name: name,
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setDropDownConfig((prev) => ({ ...prev, isOpen: false }));
      }
    };

    if (dropDownConfig.isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropDownConfig.isOpen]);

  return (
    <>
      {dropDownConfig.isOpen && (
        <Dropdown
          ref={dropDownRef}
          items={dropDownConfig.items}
          position={dropDownConfig.position}
        />
      )}

      <div className="text-xl text-white bg-slate-950 py-5 px-5 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto flex justify-between ">
          <div className="flex items-center gap-16 ">
            <p className="text-3xl text-white font-bold "><Link to={'/'}>Pricer</Link></p>
            <div className="flex gap-6 ">
              <div>
                <div className=" hover:text-slate-500 cursor-pointer font-semibold">
                  <Link to={'/contact'}>Contact</Link>
                </div>
              </div>
              <div>
                <div className=" hover:text-slate-500 cursor-pointer font-semibold">
                  <Link to="/features">Features</Link>
                </div>
              </div>
              <div className="">
                <div
                  className=" hover:text-slate-500 cursor-pointer font-semibold z-100"
                  onClick={(e) =>
                    handleToggleDropDown(e, "jobs", [
                      "Free Trial",
                      "Usage-Based Pricing",
                      "Price Comparison",
                      "Billing FAQs",
                    ])
                  }
                >
                  Pricing
                </div>
              </div>
              <div>
                <div
                  className=" hover:text-slate-500 cursor-pointer font-semibold"
                  onClick={(e) =>
                    handleToggleDropDown(e, "services", [
                      "Consulting Services",
                      "Support Services",
                      "Training and Development",
                    ])
                  }
                >
                  Services
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            {/* <button className="border rounded-xl bg-slate-900 font-semibold p-2 hover:bg-black text-lg">
              Login/Sign Up
            </button> */}
            <Link to={"/login"}>
              <button className="border-[2px] border-white p-2 text-xl rounded-xl bg-slate-950 text-white hover:bg-slate-800  ">
                Login
              </button>
            </Link>
            <Link to={"/signup"}>
              <button className="border-[2px] border-black p-2 text-xl rounded-xl bg-slate-200 text-black hover:bg-slate-300  ">
                Signup
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
