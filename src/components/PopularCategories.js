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
    { name: "Dairy", image: "https://source.unsplash.com/weekly?dairy" },
    { name: "Meat", image: "https://source.unsplash.com/weekly?meat" },
    { name: "Seafood", image: "https://source.unsplash.com/weekly?seafood" },
    { name: "Snacks", image: "https://source.unsplash.com/weekly?snacks" },
    // Add more popular categories as needed
  ];

  const itemsPerRow = 3;

  const rows = [];
  for (let i = 0; i < popularCategories.length; i += itemsPerRow) {
    rows.push(popularCategories.slice(i, i + itemsPerRow));
  }

  return (
    <div className="mt-4">
      <h2 className="text-black text-3xl font-semibold mb-2">
        Popular Categories
      </h2>

      <div className="grid grid-cols-4 ">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="flex space-x-4">
            {row.map((category, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="category-container bg-white p-4 border-2">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-20 h-10 object-cover rounded-md mb-2"
                  />
                  <a
                    href="#"
                    className=" block text-center p-2 rounded-md"
                  >
                    {category.name}
                  </a>
                </div>
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
