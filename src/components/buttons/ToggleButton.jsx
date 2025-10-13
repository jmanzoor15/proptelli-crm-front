import React from "react";
const ToggleButton = ({
  isActive,
  onToggle,
  activeLabel = "Active",
  inactiveLabel = "Inactive",
}) => {
  return (
    <div className=" flex w-[175px] h-[25px] rounded-lg shadow-lg ">
      <button
        onClick={() => onToggle(true)}
        className={`w-1/2 h-full font-medium transition-colors rounded-l-lg
${
  isActive
    ? "bg-goldgreen text-greywhite"
    : "bg-greywhite text-black hover:bg-goldgreen-100"
}`}
      >
        {activeLabel}
      </button>
      <button
        onClick={() => onToggle(false)}
        className={`w-1/2 h-full font-medium transition-colors rounded-r-lg
${
  !isActive
    ? "bg-goldgreen text-greywhite"
    : "bg-greywhite text-black hover:bg-goldgreen-100"
}`}
      >
        {inactiveLabel}
      </button>
    </div>
  );
};
export default ToggleButton;
