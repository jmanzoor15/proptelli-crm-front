
import React from "react";

export const StatusBadge = ({ 
  status, 
  icon, 
  iconWidth = 16, 
  iconHeight = 16 
}) => {
  const isActive = status?.toLowerCase() === "active";

  return (
    <span
      className={`inline-flex justify-center w-[62px] h-[25px] md:w-96 md:h-30 text-center items-center gap-2 px-4 py-1.5 rounded-full text-10 md:text-xss font-normal ${
        isActive ? "bg-yellow text-white" : "bg-brickred text-white"
      }`}
    >
      {/* Render only if icon prop exists */}
      {icon && (
        <img
          src={icon}
          alt={`${status} icon`}
          width={iconWidth}
          height={iconHeight}
        />
      )}
      {status}
    </span>
  );
};
