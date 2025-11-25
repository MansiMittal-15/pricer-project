import React, { useEffect, useRef, useState } from "react";
import Dropdown from "./Dropdown";
import { Link, useNavigate } from "react-router-dom";
import { FaAngleDown, FaBars, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/userSlice";
import toast from "react-hot-toast";
import { logout } from "../utils/api";

const Header = () => {
  const dropDownRef = useRef(null);
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  const handleLogout = async () => {
    await logout();
    dispatch(setUser(null));
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <>
      {dropDownConfig.isOpen && (
        <Dropdown
          ref={dropDownRef}
          items={dropDownConfig.items}
          position={dropDownConfig.position}
        />
      )}

      {/* Modern SaaS Header with neon effects */}
      <div className="bg-dark-950/95 backdrop-blur-lg border-b border-neon-blue/20 py-4 px-5 sticky top-0 z-50 animate-fade-in">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-16 max-lg:gap-6">
            <div className="flex items-center gap-4">
              <FaBars 
                onClick={() => navigate("/mobileNavigation")} 
                className="text-neon-blue text-2xl cursor-pointer hidden max-md:block hover:text-neon-purple transition-colors duration-300" 
              />
              <div className="text-3xl font-bold max-sm:text-xl max-md:text-2xl">
                <Link to={"/"} className="gradient-text hover:animate-pulse-neon transition-all duration-300">
                  Pricer
                </Link>
              </div>
            </div>
            <nav className="flex gap-8 max-md:hidden">
              <Link to={"/contact"} className="nav-link">
                Contact
              </Link>
              <Link to="/features" className="nav-link">
                Features
              </Link>
              <div
                className="nav-link cursor-pointer flex items-center gap-1"
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
                <FaAngleDown className="text-sm transition-transform duration-300 hover:rotate-180" />
              </div>
              <div
                className="nav-link cursor-pointer flex items-center gap-1"
                onClick={(e) =>
                  handleToggleDropDown(e, "services", [
                    "Consulting Services",
                    "Support Services", 
                    "Training and Development",
                  ])
                }
              >
                Services
                <FaAngleDown className="text-sm transition-transform duration-300 hover:rotate-180" />
              </div>
            </nav>
          </div>
          
          {user ? (
            <div className="flex gap-4 items-center">
              <p className="text-gray-300 hover:text-neon-blue transition-colors">
                Welcome, {user?.fullname}
              </p>
              <div className="relative">
                <FaUserCircle className="text-neon-blue text-4xl hover:text-neon-purple transition-colors animate-bounce-soft" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-neon-green rounded-full animate-pulse"></div>
              </div>
              <button
                onClick={handleLogout}
                className="btn-neon-outline min-w-[100px] text-sm"
              >
                <span>Logout</span>
              </button>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link to={"/login"}>
                <button className="btn-neon min-w-[100px] max-sm:min-w-[80px] text-sm">
                  <span>Sign In</span>
                </button>
              </Link>
              <Link to={"/signup"}>
                <button className="btn-glass min-w-[100px] max-sm:min-w-[80px] text-sm">
                  <span>Sign Up</span>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
