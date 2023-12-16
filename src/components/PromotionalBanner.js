import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTruck,
  faHeadset,
  faLock,
  faMoneyBill,
  faShippingFast,
  faHeadphonesAlt,
} from "@fortawesome/free-solid-svg-icons";

const PromotionalBanner = () => {
  // Function to generate a random number between 1 and 1000 for the Unsplash image
  const getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;

  // URL for a random Unsplash image
  const backgroundImageUrl = `https://source.unsplash.com/random/1920x1080?${getRandomNumber()}`;

  return (
    <div
      className="relative bg-cover bg-center py-16 text-white text-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4">Shop with Confidence</h2>
        <p className="text-lg mb-8">
          Explore our wide range of products with exclusive offers and
          discounts.
        </p>
        <div className="flex justify-center space-x-8">
          <div>
            <FontAwesomeIcon
              icon={faTruck}
              className="text-white text-3xl mb-2"
            />
            <p className="text-sm mt-2">Free Shipping</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faHeadset}
              className="text-white text-3xl mb-2"
            />
            <p className="text-sm mt-2">Customer Support</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faLock}
              className="text-white text-3xl mb-2"
            />
            <p className="text-sm mt-2">100% Secure Payment</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faMoneyBill}
              className="text-white text-3xl mb-2"
            />
            <p className="text-sm mt-2">Money-Back Guarantee</p>
          </div>
          {/* Additional Icons */}
          <div>
            <FontAwesomeIcon
              icon={faShippingFast}
              className="text-white text-3xl mb-2"
            />
            <p className="text-sm mt-2">Fast Shipping</p>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faHeadphonesAlt}
              className="text-white text-3xl mb-2"
            />
            <p className="text-sm mt-2">24/7 Customer Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
