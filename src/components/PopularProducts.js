import React from "react";
import { FaStar, FaShoppingBag } from "react-icons/fa";

const PopularProducts = () => {
  const popularFruits = [
    {
      name: "Apple",
      image: "https://source.unsplash.com/weekly?apple",
      price: "$1.99",
      rating: 4.5,
    },
    {
      name: "Banana",
      image: "https://source.unsplash.com/weekly?banana",
      price: "$0.99",
      rating: 4.0,
    },
    {
      name: "Orange",
      image: "https://source.unsplash.com/weekly?orange",
      price: "$2.49",
      rating: 4.8,
    },
    {
      name: "Strawberry",
      image: "https://source.unsplash.com/weekly?strawberry",
      price: "$3.99",
      rating: 4.2,
    },
    {
      name: "Mango",
      image: "https://source.unsplash.com/weekly?mango",
      price: "$2.29",
      rating: 4.6,
    },
    {
      name: "Grapes",
      image: "https://source.unsplash.com/weekly?grapes",
      price: "$4.99",
      rating: 4.7,
    },
    {
      name: "Watermelon",
      image: "https://source.unsplash.com/weekly?watermelon",
      price: "$5.99",
      rating: 4.9,
    },
    {
      name: "Pineapple",
      image: "https://source.unsplash.com/weekly?pineapple",
      price: "$2.99",
      rating: 4.4,
    },
    {
      name: "Kiwi",
      image: "https://source.unsplash.com/weekly?kiwi",
      price: "$1.49",
      rating: 4.3,
    },
    {
      name: "Peach",
      image: "https://source.unsplash.com/weekly?peach",
      price: "$3.49",
      rating: 4.1,
    },
  ];

  return (
    <div className="mt-4">
      <h2 className="text-black text-3xl font-semibold mb-2">
        Popular Products
      </h2>

      <div className="grid grid-flow-col">
        {popularFruits.map((fruit, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="product-container bg-white p-4 border-2">
              <img
                src={fruit.image}
                alt={fruit.name}
                className="w-16 h-16 object-cover rounded-md mb-2"
              />
              <div className="flex justify-between w-full">
                <div className="text-left">
                  <h3 className="text-green-500 text-lg font-semibold mb-1">
                    {fruit.name}
                  </h3>
                  <p className="text-gray-700">${fruit.price}</p>
                  <div className="flex items-center">
                    <span className="text-yellow-500">{fruit.rating}</span>
                    <FaStar className="ml-1" />
                  </div>
                </div>
                <div className="flex items-center">
                  <a
                    href="#"
                    className="text-green-500 block text-center bg-blue-200 p-2 rounded-md"
                  >
                    <FaShoppingBag />
                  </a>
                </div>
              </div>
            </div>
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
