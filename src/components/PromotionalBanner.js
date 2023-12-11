import React from "react";

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
            <i className="fas fa-truck fa-3x text-white"></i>
            <p className="text-sm mt-2">Free Shipping</p>
          </div>
          <div>
            <i className="fas fa-headset fa-3x text-white"></i>
            <p className="text-sm mt-2">Customer Support</p>
          </div>
          <div>
            <i className="fas fa-lock fa-3x text-white"></i>
            <p className="text-sm mt-2">100% Secure Payment</p>
          </div>
          <div>
            <i className="fas fa-money-bill fa-3x text-white"></i>
            <p className="text-sm mt-2">Money-Back Guarantee</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromotionalBanner;
