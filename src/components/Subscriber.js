
import React from "react";

const Subscriber = () => {
  return (
    <div className="mt-4">
      <h2 className="text-green-500 text-lg font-semibold mb-2">
        Subscribe to Our Newsletter
      </h2>
      <div className="flex">
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border border-green-500 rounded-l"
        />
        <button className="bg-green-500 text-white p-2 rounded-r">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Subscriber;
