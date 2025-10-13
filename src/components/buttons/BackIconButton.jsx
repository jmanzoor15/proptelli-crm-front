import React from "react";

const BackIconButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-black block hover:text-gray-900"
    >
      <img width={17} height={17} src="src/assets/icons/back-icon.svg" />
    </button>
  );
};

export default BackIconButton;