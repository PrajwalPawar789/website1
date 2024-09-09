import React, { useState } from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white-800">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <img
              className="h-12 w-auto"
              src={logo}
              alt="Logo"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontSize: '15px' }}
            >
              ABOUT
            </a>
            <a
              href="#pricing"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontSize: '15px' }}
            >
              PRICE
            </a>
            <a
              href="#gallery"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontSize: '15px' }}
            >
              GALLERY
            </a>
            <a
              href="#amenities"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontSize: '15px' }}
            >
              AMENITIES
            </a>
            <a
              href="#unit-plan"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontSize: '15px' }}
            >
              UNIT PLAN
            </a>
            <a
              href="#location"
              className="text-black-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              style={{ fontSize: '15px' }}
            >
              LOCATION
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-black-300 hover:text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu Items */}
        <div
          className={`md:hidden fixed inset-0 bg-white-800 bg-opacity-75 flex flex-col items-center justify-center space-y-6 ${isOpen ? "block" : "hidden"}`}
        >
          <button
            onClick={toggleMenu}
            className="absolute top-4 right-4 text-white"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
          <a
            href="#about"
            className="text-black text-lg"
            onClick={toggleMenu}
          >
            ABOUT
          </a>
          <a
            href="#pricing"
            className="text-black text-lg"
            onClick={toggleMenu}
          >
            PRICE
          </a>
          <a
            href="#gallery"
            className="text-black text-lg"
            onClick={toggleMenu}
          >
            GALLERY
          </a>
          <a
            href="#amenities"
            className="text-black text-lg"
            onClick={toggleMenu}
          >
            AMENITIES
          </a>
          <a
            href="#unit-plan"
            className="text-black text-lg"
            onClick={toggleMenu}
          >
            UNIT PLAN
          </a>
          <a
            href="#location"
            className="text-black text-lg"
            onClick={toggleMenu}
          >
            LOCATION
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
