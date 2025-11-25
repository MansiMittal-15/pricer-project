// import React, { useEffect, useRef, useState } from "react";
// import { FaAngleDown, FaTimes } from "react-icons/fa";
// import { Link, useNavigate } from "react-router-dom";
// import Dropdown from "./Dropdown";

// const MobileNavigation = () => {
//   const dropDownRef = useRef(null);
//   const [dropDownConfig, setDropDownConfig] = useState({
//     isOpen: false,
//     position: { left: 0, top: 0 },
//     items: [],
//     name: "",
//   });

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
//         setDropDownConfig((prev) => ({ ...prev, isOpen: false }));
//       }
//     };

//     if (dropDownConfig.isOpen) {
//       document.addEventListener("mousedown", handleClickOutside);
//     } else {
//       document.removeEventListener("mousedown", handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropDownConfig.isOpen]);

//   const handleToggleDropDown = (e, name, items) => {
//     const isSameDropDown =
//       dropDownConfig.isOpen && dropDownConfig.name === name;
//     setDropDownConfig({
//       isOpen: !isSameDropDown,
//       position: { left: e.clientX, top: e.clientY + 20 },
//       items: items,
//       name: name,
//     });
//   };

//   const navigate = useNavigate();

//   return (
//     <>
//       {dropDownConfig?.isOpen && (
//         <Dropdown
//           ref={dropDownRef}
//           items={dropDownConfig.items}
//           position={dropDownConfig.position}
//         />
//       )}
//       <div className="flex flex-col gap-6 m-6 ">
//         <FaTimes className="text-purple-500 hover:text-purple-700 text-2xl place-self-end" onClick={()=> navigate("/")} />
//         <div className=" hover:text-slate-500 cursor-pointer font-semibold border-b-2 border-purple-500">
//           <Link
//             to={"/contact"}
//             className="text-purple-500 hover:text-purple-700 "
//           >
//             Contact
//           </Link>
//         </div>
//         <div className=" hover:text-slate-500 cursor-pointer font-semibold border-b-2 border-purple-500">
//           <Link
//             to="/features"
//             className="text-purple-500 hover:text-purple-700"
//           >
//             Features
//           </Link>
//         </div>
//         <div
//           className=" hover:text-purple-700/90 text-purple-500 cursor-pointer font-semibold z-100 flex items-center gap-1 border-b-2 border-purple-500"
//           onClick={(e) =>
//             handleToggleDropDown(e, "jobs", [
//               "Free Trial",
//               "Usage-Based Pricing",
//               "Price Comparison",
//               "Billing FAQs",
//             ])
//           }
//         >
//           Pricing
//           <FaAngleDown className="text-purple-500 hover:text-purple-700" />
//         </div>
//         <div
//           className=" hover:text-purple-700/90 text-purple-500 cursor-pointer font-semibold flex items-center gap-1 border-b-2 border-purple-500"
//           onClick={(e) =>
//             handleToggleDropDown(e, "services", [
//               "Consulting Services",
//               "Support Services",
//               "Training and Development",
//             ])
//           }
//         >
//           Services
//           <FaAngleDown className="text-purple-500 hover:text-purple-700" />
//         </div>
//       </div>
//     </>
//   );
// };

// export default MobileNavigation;


import React, { useEffect, useRef, useState } from "react";
import { FaAngleDown, FaTimes } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "./Dropdown";

// NOTE: This component assumes a parent component manages its visibility
// and has a prop like 'onClose' to hide itself after a navigation action.

const MobileNavigation = ({ onClose }) => {
  const dropDownRef = useRef(null);
  const [dropDownConfig, setDropDownConfig] = useState({
    isOpen: false,
    position: { left: 0, top: 0 },
    items: [],
    name: "",
  });

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

  const handleToggleDropDown = (e, name, items) => {
    // Prevent the default link/button action if necessary
    e.preventDefault(); 
    
    const isSameDropDown =
      dropDownConfig.isOpen && dropDownConfig.name === name;
    setDropDownConfig({
      isOpen: !isSameDropDown,
      // For mobile, fixed position for the dropdown is usually better than calculating click coordinates
      position: { left: 0, top: 0 }, 
      items: items,
      name: name,
    });
  };

  const navigate = useNavigate();

  // Helper function to handle navigation and close the menu (if an onClose prop exists)
  const handleNavigation = (path) => {
    navigate(path);
    if (onClose) {
      onClose(); // Assuming this prop is passed to close the mobile menu modal
    }
  };

  return (
    <>
      {dropDownConfig?.isOpen && (
        <Dropdown
          ref={dropDownRef}
          items={dropDownConfig.items}
          position={dropDownConfig.position}
        />
      )}
      
      {/* 1. Use the <nav> element for semantic navigation */}
      <nav className="flex flex-col gap-6 m-6">
        
        {/* 2. Accessible Close Button */}
        <FaTimes 
          className="text-purple-500 hover:text-purple-700 text-2xl place-self-end cursor-pointer" 
          onClick={() => handleNavigation("/")} 
          aria-label="Close mobile menu"
          role="button" // Clarify this is an interactive element
        />

        {/* 3. Use <ul> and <li> for semantic list of links */}
        <ul>
          {/* Contact Link */}
          <li className="font-semibold border-b-2 border-purple-500">
            <Link
              to={"/contact"}
              className="text-purple-500 hover:text-purple-700 block py-2" // Added block/padding for better touch target
              onClick={() => handleNavigation("/contact")}
            >
              Contact
            </Link>
          </li>
          
          {/* Features Link */}
          <li className="font-semibold border-b-2 border-purple-500">
            <Link
              to="/features"
              className="text-purple-500 hover:text-purple-700 block py-2"
              onClick={() => handleNavigation("/features")}
            >
              Features
            </Link>
          </li>

          {/* Pricing Dropdown */}
          <li
            className=" hover:text-purple-700/90 text-purple-500 cursor-pointer font-semibold z-100 flex items-center justify-between gap-1 border-b-2 border-purple-500 py-2"
            onClick={(e) =>
              handleToggleDropDown(e, "pricing", [
                "Free Trial",
                "Usage-Based Pricing",
                "Price Comparison",
                "Billing FAQs",
              ])
            }
            aria-expanded={dropDownConfig.isOpen && dropDownConfig.name === "pricing"}
            aria-controls="pricing-dropdown-menu"
            role="button"
          >
            Pricing
            <FaAngleDown className="text-purple-500 hover:text-purple-700" />
          </li>

          {/* Services Dropdown */}
          <li
            className=" hover:text-purple-700/90 text-purple-500 cursor-pointer font-semibold flex items-center justify-between gap-1 border-b-2 border-purple-500 py-2"
            onClick={(e) =>
              handleToggleDropDown(e, "services", [
                "Consulting Services",
                "Support Services",
                "Training and Development",
              ])
            }
            aria-expanded={dropDownConfig.isOpen && dropDownConfig.name === "services"}
            aria-controls="services-dropdown-menu"
            role="button"
          >
            Services
            <FaAngleDown className="text-purple-500 hover:text-purple-700" />
          </li>
        </ul>
      </nav>
    </>
  );
};

export default MobileNavigation;