// src/components/Header.js

import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 p-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <img src="path/to/your/logo.png" alt="Logo" className="w-10 h-10" />
          <div className="text-white text-2xl font-bold">Fruit Shop</div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for fruits..."
            className="p-2 mr-2 border border-white rounded"
          />
          <button className="bg-green-500 text-white p-2 rounded">
            Search
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4 text-white">
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
