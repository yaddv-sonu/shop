import React from "react";

const SummerSaleBanner = () => {
  // Function to generate a random number between 1 and 1000 for the Unsplash image
  const getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;

  // URL for a random Unsplash image of fruits and vegetables
  const backgroundImageUrl = `https://source.unsplash.com/random/1920x1080?fruit,vegetable${getRandomNumber()}`;

  return (
    <div
      className="relative bg-cover bg-center py-16 text-white text-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold mb-4">Summer Sale!</h2>
        <p className="text-lg mb-8">
          Enjoy a refreshing 37% off on selected items.
        </p>
        <button className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-600">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default SummerSaleBanner;
