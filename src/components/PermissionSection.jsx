import React, { useState } from "react";
import PermissionCard from "../components/PermissionCard";

const PermissionSection = ({ titles, initialPermissions }) => {
  // Create separate permissions for each title
  const [permissionsByCard, setPermissionsByCard] = useState(
    titles.map(() => initialPermissions)
  );

  const togglePermission = (cardIndex, label) => {
    setPermissionsByCard((prev) =>
      prev.map((cardPermissions, i) =>
        i === cardIndex
          ? cardPermissions.map((perm) =>
              perm.label === label ? { ...perm, active: !perm.active } : perm
            )
          : cardPermissions
      )
    );
  };

  const toggleAllPermissions = (cardIndex) => {
    setPermissionsByCard((prev) =>
      prev.map((cardPermissions, i) => {
        if (i === cardIndex) {
          const areAllActive = cardPermissions.every((perm) => perm.active);
          return cardPermissions.map((perm) => ({
            ...perm,
            active: !areAllActive,
          }));
        }
        return cardPermissions;
      })
    );
  };

 return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6  lg:pr-32">
      {titles.map((item, index) => {
        const cardPermissions = permissionsByCard[index];
        const areAllActive = cardPermissions.every((perm) => perm.active);
        return (
          <div key={index}>
            <PermissionCard
              title={item}
              permissions={cardPermissions}
              onPermissionToggle={(label) => togglePermission(index, label)}
              onToggleAll={() => toggleAllPermissions(index)}
              isAllActive={areAllActive}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PermissionSection;
