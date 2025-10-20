import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import VMDLogo from "../assets/VMD.png";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);

  const navLinkClasses = ({ isActive }) =>
    `hover:text-gray-200 transition relative pb-1 ${
      isActive ? "border-b-2 border-white" : ""
    }`;

  return (
    <header className="fixed top-0 w-full bg-[#660000] text-white shadow z-50">
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={VMDLogo} alt="VMD Logo" className="h-16" />
        </div>

        {/* Links */}
        <nav className="hidden md:flex gap-6 text-sm uppercase">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About Us
          </NavLink>
          <NavLink to="/courses" className={navLinkClasses}>
            Courses
          </NavLink>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <span className="cursor-pointer hover:text-gray-200 transition relative pb-1">
              International Students
            </span>

            {openDropdown && (
              <div className="absolute left-0 mt-2 w-48 bg-white text-black rounded shadow-lg">
                <NavLink
                  to="/students/why-uk"
                  className="block px-4 py-2  hover:bg-red-300"
                >
                  Study In UK
                </NavLink>
                <NavLink
                  to="/students/europe"
                  className="block px-4 py-2  hover:bg-red-300"
                >
                  Study In Europe
                </NavLink>
                <NavLink
                  to="/students/canada"
                  className="block px-4 py-2  hover:bg-red-300"
                >
                  Canada
                </NavLink>
              </div>
            )}
          </div>

          <NavLink to="/contact" className={navLinkClasses}>
            Contact Us
          </NavLink>
          <NavLink to="/applynow">
            <button className="bg-white text-[#660000] px-3 py-1 rounded font-semibold">
              Upload CV
            </button>
          </NavLink>
        </nav>

        {/* Mobile Menu */}
        <FaBars className="md:hidden text-2xl cursor-pointer" />
      </div>
    </header>
  );
}
