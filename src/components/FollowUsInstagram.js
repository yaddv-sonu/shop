import React from "react";

const FollowUsInstagram = () => {
  // Function to generate a random number between 1 and 1000 for the Unsplash image
  const getRandomNumber = () => Math.floor(Math.random() * 1000) + 1;

  // Function to get an array of random Instagram images related to fruits and vegetables
  const getRandomFruitVegetableImages = (count) => {
    const images = [];
    for (let i = 0; i < count; i++) {
      images.push(
        `https://source.unsplash.com/random/400x400?fruit,vegetable${getRandomNumber()}`
      );
    }
    return images;
  };

  const fruitVegetableImages = getRandomFruitVegetableImages(3); // Adjust the count as needed

  return (
    <div className="mt-4 bg-gray-200 p-4 rounded-lg">
      <h2 className="text-green-500 text-lg font-semibold mb-2">
        Follow Us on Instagram
      </h2>
      <div className="flex items-center justify-center space-x-4">
        {fruitVegetableImages.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Instagram ${index + 1}`}
            className="w-24 h-24 object-cover rounded-full"
          />
        ))}
      </div>
      <p className="text-center text-gray-500 mt-2">
        Follow us on Instagram for the latest updates and behind-the-scenes
        content!
      </p>
    </div>
  );
};

export default FollowUsInstagram;
