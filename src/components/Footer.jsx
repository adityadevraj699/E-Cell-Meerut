import React from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo/logo22.png';

function Footer() {
  return (
    <footer className="bg-gray-200 text-black py-12">
      <div className="container mx-auto px-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-12 md:space-y-0">
          
          {/* Logo Section */}
          <div className="flex-1 text-center md:text-left">
            <Link to="/" className="flex items-center justify-center md:justify-start space-x-4">
              <img
                src={logo}
                alt="E-Cell MIT Logo"
                className="w-24 h-24 object-contain"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-teal-400 transition duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-teal-400 transition duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-teal-400 transition duration-300">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-teal-400 transition duration-300">
                  Team
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-teal-400 transition duration-300">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-teal-400 transition duration-300">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6">Follow Us</h4>
            <div className="flex justify-center md:justify-start space-x-6">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 text-2xl transition duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 text-2xl transition duration-300"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 text-2xl transition duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 text-2xl transition duration-300"
              >
                <i className="fab fa-facebook"></i>
              </a>
            </div>
          </div>

          {/* Legal Section */}
          <div className="flex-1 text-center md:text-left">
            <h4 className="text-lg font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/privacy-policy" className="hover:text-teal-400 transition duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-and-conditions" className="hover:text-teal-400 transition duration-300">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe Section */}
          <div className="flex-1 text-center md:text-right">
            <h4 className="text-lg font-semibold mb-6">Subscribe</h4>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <button
                type="submit"
                className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 my-8"></div>

        {/* Bottom Section */}
        <div className="text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} E-Cell MIT. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
