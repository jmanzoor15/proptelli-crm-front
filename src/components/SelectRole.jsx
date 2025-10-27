import React, { useState } from "react";

const RoleDropdown = ({ roles = [], defaultLabel = "SELECT", onSelect }) => {
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
        className="bg-goldgreen text-white rounded-md min-w-[175px] min-h-[25px] flex items-center justify-center px-2 py-1"
      >
        <span className="flex items-center"></span>
        {selectedRole}
        <img
          src={"/icons/uparrow.svg"}
          alt="arrow"
          className={`ml-2 w-4 h-4 transition-transform duration-200 transform ${
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

export default RoleDropdown;
