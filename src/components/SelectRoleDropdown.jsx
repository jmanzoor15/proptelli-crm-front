import React, { useState } from "react";
import ArrowIcon from "/icons/uparrow.svg";
const SelectRoleDropdown = ({ roles = [], defaultLabel = "SELECT", onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState(defaultLabel);
  const toggleDropdown = () => setIsOpen(!isOpen);
  const handleSelect = (role) => {
    setSelectedRole(role);
    setIsOpen(false);
    if (onSelect) onSelect(role);
  };
  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-goldgreen text-white rounded-md gap-2 w-[175px] h-[25px] flex items-center justify-center px-2 py-1"
      >
        <span className="flex font-normal text-md items-center"></span>
        {selectedRole}
        <img
          src={ArrowIcon}
          alt="arrow"
          className={` w-[15px] h-[15px] transition-transform duration-200 transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>
      {isOpen && (
        <div className="absolute mt-2 bg-greywhite rounded-md  shadow-md z-10 w-[175px] px-1 py-1">
          {roles.map((role) => (
            <div
              key={role}
              onClick={() => handleSelect(role)}
              className="bg-white text-black cursor-pointer min-w-[161px] min-h-[25px] rounded-md my-1  px-1  flex items-center justify-center"
            >
              {role}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default SelectRoleDropdown;
