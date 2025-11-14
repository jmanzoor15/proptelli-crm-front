import React, { useState, useRef, useEffect } from "react";
import ToggleButton from "./buttons/ToggleButton";
import SelectRoleDropdown from "./SelectRoleDropdown";
import { HexColorPicker } from "react-colorful"; // 🎨 color picker library

// 🧠 Custom hook to detect outside clicks
function useOutsideClick(ref, callback) {
  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref, callback]);
}

const InformationCreateTable = ({
  fields,
  onFieldChange,
  errors = {},
  roleDropdownUpdate,
}) => {
  const [selectedRole, setSelectedRole] = useState("");
  const [showPicker, setShowPicker] = useState(false); // 🎨 popup toggle
  const pickerRef = useRef(null); // 🎨 for outside click

  useOutsideClick(pickerRef, () => setShowPicker(false)); // 🧠 close picker

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    onFieldChange("role", role);
  };

  return (
    <div className="w-full">
      <div className="md:border md:border-gray-200 bg-white md:rounded-3xl md:p-4">
        {fields.map((field) => (
          <div key={field.label} className="py-2 md:py-3 relative">
            <div className="flex items-center justify-between">
              {/* Label */}
              <label className="text-black text-sm md:text-base font-medium">
                {field.label}
              </label>

              {/* Input Field */}
              {field.type === "input" && (
                <div className="flex flex-col items-end">
                  <input
                    type="text"
                    value={field.value}
                    onChange={(e) =>
                      onFieldChange(field.name, e.target.value)
                    }
                    placeholder={field.placeholder || "Enter value"}
                    className={`border ${
                      errors[field.name]
                        ? "border-red-500"
                        : "border-gray-300"
                    } rounded-md px-2 py-1 w-[175px] text-sm text-gray-600 focus:outline-none focus:border-black`}
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1 text-right w-[175px]">
                      {errors[field.name][0]}
                    </p>
                  )}
                </div>
              )}

              {/* 🎨 Color Picker Field */}
              {field.type === "color" && (
                <div className="flex flex-col items-end">
                  <div className="flex items-center gap-2">
                    <span
                      onClick={() => setShowPicker((prev) => !prev)}
                      className="text-black text-base font-normal cursor-pointer"
                    >
                      Choose color
                    </span>
                    <div
                      onClick={() => setShowPicker((prev) => !prev)}
                      className="w-[26px] h-[26px] rounded cursor-pointer border border-gray-300"
                      style={{ backgroundColor: field.value || "#ffffff" }}
                    ></div>
                  </div>

                  {/* Popup color picker */}
                  {showPicker && (
                    <div
                      ref={pickerRef}
                      className="absolute z-50 mt-2 right-0 bg-white rounded-lg shadow-lg p-2"
                    >
                      <HexColorPicker
                        color={field.value || "#ffffff"}
                        onChange={(color) => onFieldChange(field.name, color)}
                      />
                    </div>
                  )}

                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1 text-right w-[175px]">
                      {errors[field.name][0]}
                    </p>
                  )}
                </div>
              )}

              {/* Dropdown Field */}
              {field.type === "dropdown" && (
                <div className="flex flex-col items-end">
                  <SelectRoleDropdown
                    roles={field.options}
                    defaultLabel={roleDropdownUpdate || "SELECT"}
                    onSelect={handleRoleSelect}
                    value={selectedRole || field.value}
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1 text-right w-[175px]">
                      {errors[field.name][0]}
                    </p>
                  )}
                </div>
              )}

              {/* Toggle Field */}
              {field.type === "toggle" && (
                <div className="flex flex-col items-end">
                  <ToggleButton
                    isActive={field.value}
                    onToggle={(val) => onFieldChange(field.name, val)}
                    activeLabel="ACTIVE"
                    inactiveLabel="INACTIVE"
                  />
                  {errors[field.name] && (
                    <p className="text-red-500 text-xs mt-1 text-right w-[175px]">
                      {errors[field.name][0]}
                    </p>
                  )}
                </div>
              )}

              {/* Static Text */}
              {!["input", "toggle", "dropdown", "color"].includes(field.type) && (
                <span className="text-sm md:text-base text-gray-700">
                  {field.value}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InformationCreateTable;