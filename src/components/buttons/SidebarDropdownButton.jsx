import React, { useState } from "react";

export const SidebarDropdownButton = ({
  icon,
  label,
  submenuItems = [],
  defaultOpen = false,
  active = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const buttonClasses = `flex items-center h-60 justify-between px-2 py-2.5 w-[228px] transition-all ${
    active
      ? "bg-goldgreen shadow-md"
      : "text-gray-800 hover:bg-white bg-white rounded-full"
  }`;

  return (
    <li>
      <button onClick={() => setIsOpen(!isOpen)} className={buttonClasses}>
        <div className="flex items-center gap-2">
          <div className="p-2 border border-greywhite bg-greywhite w-[48px] h-[48px] flex justify-center items-center rounded-full transition-colors">
            <div className="flex justify-center items-center h-[21px] w-[17px]">
              <img src={icon} />
            </div>
          </div>
          <span className="text-sm font-normal not-italic">{label}</span>
        </div>
        <img src="src/assets/icons/down-arrow.svg"
          size={16}
          className={`transition-transform mr-4 ${
            active ? "text-white" : "text-yellow-600"
          } ${!isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Submenu */}
      {isOpen && (
        <ul className="mt-2 pl-19 pt-18 pb-18 bg-white rounded-20">
          {submenuItems.map((subItem, index) => (
            <li key={index}>
              <a
                href={subItem.path}
                className="flex items-center gap-3 px-4 py-2 rounded-lg text-gray-700 hover:bg-white transition-all"
              >
                <img src={subItem.icon} />
                <span className="text-xs">{subItem.label}</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};
