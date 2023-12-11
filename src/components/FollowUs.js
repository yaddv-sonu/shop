import React from "react";

const FollowUs = () => {
  return (
    <div className="mt-4">
      <h2 className="text-green-500 text-lg font-semibold mb-2">Follow Us</h2>
      <div className="flex space-x-4">
        <a href="#" className="text-green-500">
          <i className="fab fa-facebook"></i> Facebook
        </a>
        <a href="#" className="text-green-500">
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a href="#" className="text-green-500">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div>
    </div>
  );
};

export default FollowUs;
