import React from "react";

const PermissionButton = ({ label, active, onClick }) => {
 return (
    <button
      onClick={onClick}
      className={`px-3 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border transition whitespace-nowrap
        ${active ? "bg-goldgreen text-white border-goldgreen" : "bg-white text-black border-gray-300"}`}
    >
      {label}
    </button>
  );
};

export default PermissionButton;