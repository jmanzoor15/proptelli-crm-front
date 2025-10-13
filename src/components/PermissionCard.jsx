import React from "react";
import PermissionButton from "./PermissionButton";

const PermissionCard = ({ title, permissions, onPermissionToggle, onToggleAll, isAllActive }) => {
 return (
    <div className="bg-gray-50 rounded-2xl w-full p-4 shadow-sm">
      <div className="flex justify-between items-center mb-3">
        <span className="font-semibold text-sm sm:text-base text-black">{title}</span>
        <PermissionButton
          label="ALL"
          active={isAllActive}
          onClick={onToggleAll}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        {permissions.map((perm, index) => (
          <PermissionButton
            key={index}
            label={perm.label}
            active={perm.active}
            onClick={() => onPermissionToggle(perm.label)}
          />
        ))}
      </div>
    </div>
  );
};

export default PermissionCard;