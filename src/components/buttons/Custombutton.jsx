import React from "react";

export default function CustomButton({
  label = "Apply",  
  bgColor = "bg-black",    
  textColor = "text-white", 
  onClick = () => {},      
  className = "",           
}) {
  return (
    <button
      onClick={onClick}
      className={`
        ${bgColor} ${textColor} 
        w-[134px] h-[59px]  
        px-6 py-2 rounded-full font-sm
        transition-all duration-200 
        hover:opacity-90 active:scale-95 
        focus:outline-none ${className}
      `}
    >
      {label}
    </button>
  );
}
