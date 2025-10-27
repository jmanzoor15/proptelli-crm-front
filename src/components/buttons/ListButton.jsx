import React from "react";

export default function ListButton({
  label = "Time Period",
  iconWidth = 12,
  iconHeight = 20,
  buttonWidth = 239,
  buttonHeight = 59,
}) {
  return (
    <button
      className={`
        bg-white border border-gray-300 
        rounded-full flex items-center justify-between
        px-5 text-gray-700 font-medium text-base
        hover:bg-gray-50 active:scale-95 transition-all duration-200
        focus:outline-none
      `}
      style={{ width: `${buttonWidth}px`, height: `${buttonHeight}px` }}
    >
      <span className="text-normal text-sm text-black">{label}</span>

      <img
        src="/icons/uparrow.svg"
        width={iconWidth}
        height={iconHeight}
        className="filter invert-0 brightness-0"
        alt="arrow"
      />
    </button>
  );
}
