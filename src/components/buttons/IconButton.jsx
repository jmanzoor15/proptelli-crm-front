import React from "react";

const IconButton = ({ 
  icon, 
  alt = "icon", 
  onClick, 
  size = 35, 
  hoverColor = "text-blue-600", 
  className = "" 
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-blue-500 bg-greywhite p-2 rounded-full hover:${hoverColor} ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={icon}
        alt={alt}
        width={20}
        height={20}
      />
    </button>
  );
};

export default IconButton;
