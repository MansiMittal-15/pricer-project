import React, { useState } from "react";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // 1. Import Helmet

const MobileNavigation = ({ onClose }) => {
  // ... (State and functions remain the same)
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const navigate = useNavigate();

  const navItems = [
    { name: "Contact", path: "/contact", type: "link" },
    { name: "Features", path: "/features", type: "link" },
    {
      name: "Pricing",
      type: "submenu",
      items: [
        { label: "Free Trial", path: "/pricing/trial" },
        { label: "Usage-Based Pricing", path: "/pricing/usage" },
        { label: "Price Comparison", path: "/pricing/comparison" },
        { label: "Billing FAQs", path: "/pricing/faqs" },
      ],
    },
    {
      name: "Services",
      type: "submenu",
      items: [
        { label: "Consulting Services", path: "/services/consulting" },
        { label: "Support Services", path: "/services/support" },
        { label: "Training and Development", path: "/services/training" },
      ],
    },
  ];

  const handleToggleSubmenu = (name) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (onClose) onClose();
  };

  return (
    <>
      {/* 👑 Helmet for Metadata (SEO) 👑 */}
      {/* This is typically unnecessary for a temporary UI overlay.
        The SEO tags should be managed by the parent page component.
        If you must place a generic tag, ensure it doesn't conflict.
      */}
      <Helmet>
        <title>Menu | Pricer</title> 
      </Helmet>

      <div className="flex flex-col gap-6 m-6 bg-dark-900 text-white min-h-screen">
        <FaTimes
          className="text-purple-500 hover:text-purple-700 text-2xl place-self-end cursor-pointer"
          onClick={onClose || (() => navigate("/"))}
        />

        <nav className="flex flex-col gap-6">
          {navItems.map((item) => (
            <div key={item.name}>
              {item.type === "link" ? (
                <div
                  className="hover:text-purple-700 cursor-pointer font-semibold border-b-2 border-purple-500/50 pb-2"
                  onClick={() => handleNavigation(item.path)}
                >
                  <Link to={item.path} className="text-purple-500 hover:text-purple-700">
                    {item.name}
                  </Link>
                </div>
              ) : (
                <div className="text-purple-500 hover:text-purple-700 cursor-pointer font-semibold flex flex-col border-b-2 border-purple-500/50">
                  <div
                    className="flex items-center justify-between pb-2"
                    onClick={() => handleToggleSubmenu(item.name.toLowerCase())}
                  >
                    {item.name}
                    <FaAngleDown
                      className={`text-purple-500 transition-transform duration-300 ${
                        openSubmenu === item.name.toLowerCase() ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>

                  {openSubmenu === item.name.toLowerCase() && (
                    <div className="flex flex-col gap-3 py-3 pl-4 bg-purple-500/10 rounded-b">
                      {item.items.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.path}
                          onClick={() => handleNavigation(subItem.path)}
                          className="text-white/80 hover:text-white text-sm"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-4">
          <button
            className="bg-purple-700 text-white py-3 rounded-lg font-bold hover:bg-purple-800 transition-colors"
            onClick={() => handleNavigation("/signup")}
          >
            Sign Up
          </button>
          <button
            className="border border-purple-700 text-purple-500 py-3 rounded-lg font-bold hover:bg-purple-700/10 transition-colors"
            onClick={() => handleNavigation("/login")}
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileNavigation;