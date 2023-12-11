import React from "react";

const PopularProducts = () => {
  const popularFruits = [
    { name: "Apple", image: "https://source.unsplash.com/weekly?apple" },
    { name: "Banana", image: "https://source.unsplash.com/weekly?banana" },
    { name: "Orange", image: "https://source.unsplash.com/weekly?orange" },
    {
      name: "Strawberry",
      image: "https://source.unsplash.com/weekly?strawberry",
    },
    { name: "Mango", image: "https://source.unsplash.com/weekly?mango" },
    { name: "Grapes", image: "https://source.unsplash.com/weekly?grapes" },
    // Add more popular fruits as needed
    {
      name: "Watermelon",
      image: "https://source.unsplash.com/weekly?watermelon",
    },
    {
      name: "Pineapple",
      image: "https://source.unsplash.com/weekly?pineapple",
    },
    { name: "Kiwi", image: "https://source.unsplash.com/weekly?kiwi" },
    { name: "Peach", image: "https://source.unsplash.com/weekly?peach" },
    // Add more popular fruits as needed
  ];

  const itemsPerRow = 2;

  const rows = [];
  for (let i = 0; i < popularFruits.length; i += itemsPerRow) {
    rows.push(popularFruits.slice(i, i + itemsPerRow));
  }

  return (
    <div className="mt-4">
      <h2 className="text-black text-3xl font-semibold mb-2">
        Popular Products
      </h2>

      <div className="grid grid-cols-4 gap-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4">
            {row.map((fruit, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={fruit.image}
                  alt={fruit.name}
                  className="w-40 h-20 object-cover rounded-md"
                />
                <a href="#" className="text-green-500 block mt-2">
                  {fruit.name}
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-4">
        <p className="text-gray-500 text-sm">View All</p>
      </div>
    </div>
  );
};

export default PopularProducts;
