import React from "react";

const IconTextButton = ({
  text = "Button",
  icon,
  bgColor = "bg-red-800",
  textColor = "text-white",
  onClick,
}) => {
  return (
   <button
  onClick={onClick}
  className={`flex items-center justify-center gap-2 min-h-[30px] min-w-[84px] px-4 py-2 rounded-10 ${bgColor} ${textColor} hover:opacity-90 transition-all duration-200`}
>
  {icon && (
    <img
      src={icon}
      alt={`${text} icon`}
      className="w-5 h-5 object-contain"
    />
  )}
  <span className="font-normal text-xss">{text}</span>
</button>

  );
};

export default IconTextButton;