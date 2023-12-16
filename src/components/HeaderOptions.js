import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isCurrencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("Select Language");
  const [selectedCurrency, setSelectedCurrency] = useState("Select Currency");

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  const toggleCurrencyDropdown = () => {
    setCurrencyDropdownOpen(!isCurrencyDropdownOpen);
  };

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setLanguageDropdownOpen(false);
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setCurrencyDropdownOpen(false);
  };

  return (
    <header className="bg-white text-black p-4 flex justify-between items-center">
      {/* Left side with location icon */}
      <div className="flex items-center">
        <span className="text-xl mr-2">
          <FontAwesomeIcon icon={faMapMarkerAlt} />
        </span>
        <span>Your Location</span>
      </div>

      {/* Right side with dropdown options */}
      <div className="flex items-center">
        {/* Language Dropdown */}
        <div className="relative inline-block mr-4">
          <button
            className="px-4 py-2 rounded focus:outline-none border"
            onClick={toggleLanguageDropdown}
          >
            {selectedLanguage}
          </button>
          {isLanguageDropdownOpen && (
            <div className="absolute bg-white text-gray-800 p-2 mt-2 rounded shadow-lg">
              {/* Language options */}
              <div onClick={() => handleLanguageChange("English")}>English</div>
              <div onClick={() => handleLanguageChange("Spanish")}>Spanish</div>
              <div onClick={() => handleLanguageChange("French")}>French</div>
            </div>
          )}
        </div>

        {/* Currency Dropdown */}
        <div className="relative inline-block mr-4">
          <button
            className="px-4 py-2 rounded focus:outline-none border"
            onClick={toggleCurrencyDropdown}
          >
            {selectedCurrency}
          </button>
          {isCurrencyDropdownOpen && (
            <div className="absolute bg-white text-gray-800 p-2 mt-2 rounded shadow-lg">
              {/* Currency options */}
              <div onClick={() => handleCurrencyChange("USD")}>USD</div>
              <div onClick={() => handleCurrencyChange("EUR")}>EUR</div>
              <div onClick={() => handleCurrencyChange("GBP")}>GBP</div>
            </div>
          )}
        </div>

        {/* Sign In/Sign Up options as links */}
        <div>
          <a href="#" className="text-blue-500 mr-2">
            Sign In
          </a>
          <a href="#" className="text-green-500">
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
