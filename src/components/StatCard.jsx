import React, { useState } from "react";

const StatCard = ({ src, title, count, iconBg, onClick }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
    if (onClick) onClick();
  };

  return (
    <div
      onClick={handleClick}
      className={`cursor-pointer flex items-center gap-3 sm:gap-4 p-2 sm:p-4 md:p-6 rounded-20 md:rounded-30 bg-greywhite transition-all border
        w-full md:w-[261px] md:h-[134px] 
        hover:shadow-sm
        ${active ? "border-goldgreen shadow-md" : "border-gray-200 hover:border-gray-300"}`}
    >
      {/* Icon container */}
      <div
        className="flex items-center justify-center rounded-full flex-shrink-0 
                   w-[30px] h-[30px] sm:w-[30px] sm:h-[30px] md:w-[75px] md:h-[75px] md:mb-0 mb-7"
        style={{ backgroundColor: iconBg }}
      >
        <img
          className="w-[15px] h-[15px] sm:w-[15px] sm:h-[15px] md:w-[33px] md:h-[31px]"
          src={src}
          alt={title}
        />
      </div>

      {/* Text content */}
      <div className="flex flex-col">
        <p className="text-base font-medium text-black leading-tight">
          {title}
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black leading-snug">
          {count}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
