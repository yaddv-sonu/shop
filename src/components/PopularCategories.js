
import React from "react";

const PopularCategories = () => {
  const popularCategories = [
    { name: "Fruits", image: "https://source.unsplash.com/weekly?fruit" },
    {
      name: "Vegetables",
      image: "https://source.unsplash.com/weekly?vegetable",
    },
    { name: "Drinks", image: "https://source.unsplash.com/weekly?drink" },
    { name: "Bakery", image: "https://source.unsplash.com/weekly?bakery" },
    // Add more popular categories as needed
  ];

  const itemsPerRow = 2;

  const rows = [];
  for (let i = 0; i < popularCategories.length; i += itemsPerRow) {
    rows.push(popularCategories.slice(i, i + itemsPerRow));
  }

  return (
    <div className="mt-4">
      <h2 className="text-black text-3xl font-semibold mb-2">
        Popular Categories
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4">
            {row.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-40 h-20 object-cover rounded-md"
                />
                <a href="#" className="text-green-500 block mt-2">
                  {category.name}
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

export default PopularCategories;
