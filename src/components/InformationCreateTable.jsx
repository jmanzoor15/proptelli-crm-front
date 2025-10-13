import React, { useState } from "react";
import ToggleButton from "./buttons/ToggleButton";
import SelectRoleDropdown from "./SelectRoleDropdown";

const InformationCreateTable = ({ fields, onFieldChange }) => {
  const availableRoles = ["BDM", "Sales Agent", "Super Admin"];
  const [selectedRole, setSelectedRole] = useState("");
 
  const handleRoleSelect = (role) => {
    console.log("Role selected in parent:", role);
    setSelectedRole(role);
  };
  console.log(selectedRole);
 
  return (
    <div className="w-full">
      <div className="md:border md:border-gray-200 bg-white md:rounded-3xl md:p-4">
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-between items-center py-2 md:py-3">
              <span className="text-black text-sm md:text-base font-medium">
                {field.label}
              </span>
              
              {/* Input Field */}
              {field.type === "input" ? (
                <input
                  type="text"
                  value={field.value}
                  onChange={(e) => onFieldChange(field.name, e.target.value)}
                  placeholder={field.placeholder || "Enter Role Name"}
                  className="text-right text-sm md:text-base text-gray-400 placeholder-gray-400 bg-transparent border-none outline-none focus:text-black"
                />
              ) : field.type === "dropdown" ? (
                <SelectRoleDropdown
                  roles={availableRoles}
                  defaultLabel="SELECT"
                  onSelect={handleRoleSelect}
                />
              ) : field.type === "toggle" ? (
                <ToggleButton
                  isActive={field.value}
                  onToggle={(value) => onFieldChange(field.name, value)}
                  activeLabel="Yes"
                  inactiveLabel="No"
                />
              ) : (
                <span className="font-normal text-sm md:text-base text-black">
                  {field.value}
                </span>
              )}
            </div>
            {index !== fields.length - 1 && <hr className="border-gray-200" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InformationCreateTable;