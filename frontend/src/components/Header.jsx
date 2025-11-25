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

      {/* SEO Improvement 1: Using the semantic <header> tag */}
      <header className="text-xl text-black bg-white py-5 px-5 sticky top-0 z-20 border-b-2">
        <div className="max-w-7xl mx-auto flex justify-between ">
          <div className="flex items-center gap-16 max-lg:gap-6 ">
            <div className="flex items-center gap-4">
              <FaBars onClick={() => navigate("/mobileNavigation")} className="text-purple-700 text-2xl cursor-pointer hidden max-md:block" aria-label="Open Mobile Navigation Menu" />
               {/* SEO Improvement 2: Using a heading tag (h2) for the brand name/logo */}
                <h2 className="text-3xl text-purple-700 font-bold max-sm:text-xl max-md:text-2xl">
                <Link to={"/"} title="Pricer - Project Cost Estimation Tool">Pricer</Link>
              </h2>
            </div>
            {/* SEO Improvement 3: Wrapping main navigation in the semantic <nav> tag */}
            <nav className="flex gap-6 max-md:hidden" aria-label="Primary Navigation">
                {/* SEO Improvement 4: Using <ul>/<li> for structure and descriptive title attributes */}
                <ul className="flex gap-6">
                    <li className=" hover:text-slate-500 cursor-pointer font-semibold">
                    <Link
                      to={"/contact"}
                      className="text-purple-500 hover:text-purple-700"
                      title="Contact Pricer Sales and Support"
                    >
                      Contact
                    </Link>
                  </li>
                  <li className=" hover:text-slate-500 cursor-pointer font-semibold">
                    <Link
                      to="/features"
                      className="text-purple-500 hover:text-purple-700"
                      title="View Pricer's Product Features and Capabilities"
                    >
                      Features
                    </Link>
                  </li>
                  {/* NOTE: Ideally, 'Pricing' and 'Services' would also link to a main page,
                        but keeping your JS click handler for the dropdown functionality. 
                        Added role="button" for accessibility. */}
                  <li
                    className=" hover:text-purple-700/90 text-purple-500 cursor-pointer font-semibold z-100 flex items-center gap-1"
                    onClick={(e) =>
                      handleToggleDropDown(e, "jobs", [
                        "Free Trial",
                        "Usage-Based Pricing",
                        "Price Comparison",
                        "Billing FAQs",
                      ])
                    }
                    role="button"
                    aria-expanded={dropDownConfig.isOpen && dropDownConfig.name === "jobs"}
                    aria-controls="pricing-dropdown"
                    tabIndex="0"
                  >
                    Pricing
                    <FaAngleDown className="text-purple-500 hover:text-purple-700" />
                  </li>
                  <li
                    className=" hover:text-purple-700/90 text-purple-500 cursor-pointer font-semibold flex items-center gap-1"
                    onClick={(e) =>
                      handleToggleDropDown(e, "services", [
                        "Consulting Services",
                        "Support Services",
                        "Training and Development",
                      ])
                    }
                    role="button"
                    aria-expanded={dropDownConfig.isOpen && dropDownConfig.name === "services"}
                    aria-controls="services-dropdown"
                    tabIndex="0"
                  >
                    Services
                    <FaAngleDown className="text-purple-500 hover:text-purple-700" />
                  </li>
                </ul>
              </nav>
          </div>
          {user ? (
            <div className="flex gap-4 items-center">
              <p className="text-purple-500 hover:text-purple-700">
                {" "}
                {user?.fullname}
              </p>
              <FaUserCircle className="text-purple-500 text-4xl hover:text-purple-700" aria-label={`Profile icon for ${user?.fullname}`} />
              <button
                onClick={handleLogout}
                className=" border-[2px] border-black p-2 text-lg rounded-xl bg-purple-700/90 w-28 text-white hover:bg-purple-800"
                title="Log out of Pricer"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link to={"/login"}>
                <button 
                    className="border-[2px] w-28 max-sm:w-20 max-sm:text-sm border-black p-2 text-lg rounded-xl bg-purple-700/90 text-white hover:bg-purple-800"
                    title="Sign In to your Pricer Account"
                >
                  Sign In
                </button>
              </Link>
              <Link to={"/signup"}>
                <button 
                    className="border-[2px] w-28 max-sm:w-20 max-sm:text-sm border-black p-2 text-lg rounded-xl bg-white text-black hover:bg-slate-200"
                    title="Create a new Pricer account"
                >
                  SignUp
                </button>
              </Link>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;