// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Logo from "./Logo"; // Adjust the path as necessary

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Mobile menu toggle
  const navigate = useNavigate();

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsMenuOpen(false); // Close the menu when scrolling
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { name: "Home", slug: "/", active: true },
    { name: "About", slug: "/about", active: true },
    { name: "Gallery", slug: "/gallery", active: true },
    { name: "Blog", slug: "/blog", active: true },
    { name: "Contact", slug: "/contact", active: true },
    { name: "Team", slug: "/team", active: true },
  ];

  return (
    <header className="bg-white shadow-md py-4 fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-green-600 text-xl font-bold">
            <Logo />
          </Link>

          {/* Menu Toggle Button for Mobile */}
          <button
            className="lg:hidden text-gray-800 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>

          {/* Navigation Links */}
          <ul
            className={`fixed top-0 left-0 h-screen w-1/2 bg-white text-gray-600 space-y-6 p-6 transform ${
              isMenuOpen
                ? "translate-x-0"
                : "-translate-x-full"
            } transition-transform duration-300 lg:static lg:flex lg:transform-none lg:space-y-0 lg:space-x-8 lg:p-0 lg:h-auto lg:w-auto`}
            style={{ zIndex: 50 }} // Ensure the menu has high z-index
          >
            {/* Logo in Mobile Menu */}
            <div className="lg:hidden mb-6">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="text-white text-xl font-bold"
              >
                <Logo width="100px" />
              </Link>
            </div>

            {navItems.map(
              (item) =>
                item.active && (
                  <li key={item.name}>
                    <button
                      onClick={() => {
                        navigate(item.slug);
                        setIsMenuOpen(false); // Close menu on navigation
                      }}
                      className="block text-lg w-full text-left lg:inline-block px-2 py-1 duration-200 hover:bg-gray-900 hover:text-white rounded-lg"
                    >
                      {item.name}
                    </button>
                  </li>
                )
            )}
          </ul>

          {/* Backdrop for mobile menu */}
          {isMenuOpen && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-light-green-400 opacity-50 z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            ></div>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
