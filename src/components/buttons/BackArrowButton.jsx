import React from "react";

const BackArrowButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="text-black  hover:text-gray-900">
      <img width={12} height={20} src="src/assets/icons/back-arrow.svg" />
    </button>
  );
};

export default BackArrowButton;
