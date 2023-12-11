import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black p-4 text-white text-center">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="list-none">
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Order History</a>
            </li>
            <li>
              <a href="#">Shopping Cart</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Categories</h4>
          <ul className="list-none">
            <li>
              <a href="#">Fruits</a>
            </li>
            <li>
              <a href="#">Vegetables</a>
            </li>
            <li>
              <a href="#">Drinks</a>
            </li>
            {/* Add more categories */}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="list-none">
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-2">Connect With Us</h4>
          <ul className="list-none">
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-4">&copy; 2023 Fruit Shop. All rights reserved.</div>
    </footer>
  );
};

export default Footer;
