// src/components/Navbar.js
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Effect untuk mendeteksi scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Navigation items
  const navItems = [
    { id: "/", label: "Home" },
    { id: "/about", label: "Meet Me" },
    { id: "/projects", label: "Projects" },
    { id: "/contact", label: "Get in Touch" },
  ];

  return (
    <header
      className={`fixed w-full z-20 transition-all duration-300 ${
        scrolled
          ? "bg-white bg-opacity-95 shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-center items-center relative">
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 hidden md:block">
          <div className="flex items-center space-x-2">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-rose-300"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-rose-200"></span>
          </div>
        </div>

        {/* Desktop Navigation - Centered with elegant hover effect */}
        <nav className="hidden md:flex items-center space-x-12">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              className={`relative py-2 px-1 font-medium transition-all duration-300 text-lg group ${
                location.pathname === item.id
                  ? "text-rose-500"
                  : scrolled
                  ? "text-gray-700"
                  : "text-rose-800"
              }`}
            >
              {item.label}
              {/* Underline animation on hover */}
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 bg-rose-400 transition-all duration-300 group-hover:w-full ${
                  location.pathname === item.id ? "w-full" : ""
                }`}
              ></span>
              {/* Subtle dot above active link */}
              {location.pathname === item.id && (
                <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 h-1 w-1 bg-rose-400 rounded-full"></span>
              )}
            </Link>
          ))}
        </nav>

        {/* Decorative elements - right side */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 hidden md:block">
          <div className="flex items-center space-x-2">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-200"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-rose-300"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400"></span>
          </div>
        </div>

        {/* Mobile menu button with elegant styling */}
        <button
          className="md:hidden text-rose-500 hover:text-rose-600 focus:outline-none bg-white bg-opacity-80 p-2 rounded-full shadow-sm"
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation with smooth transition */}
      <div
        className={`md:hidden bg-white shadow-md overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-60" : "max-h-0"
        }`}
      >
        <div className="px-4 py-3 space-y-3 flex flex-col items-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.id}
              className={`py-2 px-4 w-full text-center rounded-full transition-all font-medium ${
                location.pathname === item.id
                  ? "bg-rose-50 text-rose-500"
                  : "text-gray-700 hover:bg-rose-50 hover:text-rose-500"
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
