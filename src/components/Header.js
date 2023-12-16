// src/components/Header.js

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <header className="bg-white p-4">
      <div className="flex items-center justify-between">
        {/* Logo and Search Bar */}
        <div className="flex items-center space-x-96">
          {/* Replace the logo with orangemerat image */}
          <img
            src="https://placekitten.com/50/50" // Replace this URL with the orangemerat image URL
            alt="Logo"
            className="w-10 h-10"
          />

          {/* Add margin to create a gap between the logo and search bar */}
          <div className="flex items-center ml-4">
            {/* Search Bar */}
            <input
              type="text"
              placeholder="Search for fruits..."
              className="p-2 border border-white rounded"
            />
            <button className="bg-yellow-600 text-white p-2 rounded">
              Search
            </button>
          </div>
        </div>

        {/* Shopping Cart */}
        <div className="flex items-center space-x-4">
          {/* Add your shopping cart icon and link here */}
          <a href="#" className="text-gray-800">
            <FontAwesomeIcon icon={faShoppingCart} size="2x" />
          </a>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex items-center justify-between mt-4 bg-yellow-600 p-4 rounded">
        <ul className="flex space-x-6 text-white">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">Pages</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
