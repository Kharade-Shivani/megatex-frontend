import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      {/* Top Bar - Adjusted height */}
      <div className="bg-gray-100 py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Left side - AAA ME Megatex */}
          <div className="text-sm font-semibold text-gray-800">
            {/* AAA ME Megatex */}
          </div>

          {/* Right side - Contact info */}
          <div className="text-xs text-gray-600">
            Contact: info@megatexindia.com | 9860067776
          </div>
        </div>
      </div>

      {/* Main Navigation - Adjusted height */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo Section with Image */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/Assets/logo.png" 
                alt="Megatex Protective Fabrics" 
                className="h-10 w-auto sm:h-12 lg:h-14 object-contain" // Reduced logo size
              />
              {/* Text alongside logo */}
              <div className="ml-3 flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-800 leading-tight">
                  Megatex
                </span>
                <span className="text-xs sm:text-xs lg:text-sm text-black font-medium leading-tight">
                  Protective Fabrics Pvt. Ltd.
                </span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6"> {/* Reduced spacing */}
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 text-sm">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 text-sm">
              About Us
            </Link>
            <Link to="/solutions" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 text-sm">
              FIBC Solutions
            </Link>
            <Link to="/tarpaulin" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 text-sm">
              Tarpaulin
            </Link>
            <Link to="/product" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 text-sm">
              Products
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-2 text-sm">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200"> {/* Reduced padding */}
            <div className="flex flex-col space-y-3"> {/* Reduced spacing */}
              <Link to="/" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-1 text-sm">
                Home
              </Link>
              <Link to="/about" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-1 text-sm">
                About Us
              </Link>
              <Link to="/solutions" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-1 text-sm">
                FIBC Solutions
              </Link>
              <Link to="/tarpaulin" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-1 text-sm">
                Tarpaulin
              </Link>
              <Link to="/product" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-1 text-sm">
                Products
              </Link>
              <Link to="/contact" onClick={toggleMenu} className="text-gray-700 hover:text-blue-600 font-medium transition duration-300 py-1 text-sm">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;