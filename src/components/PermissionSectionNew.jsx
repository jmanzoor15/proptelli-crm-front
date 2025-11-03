import React, { useState, useEffect } from "react";
import PermissionCard from "./PermissionCard";

const PermissionSectionNew = ({ initialPermissions = [], assignedPermissions, onSelectionChange }) => {
  const [permissionsByCard, setPermissionsByCard] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState([]);


  console.log("🧩 initialPermissions:", initialPermissions);
  console.log("✅ assignedPermissions (from parent):", assignedPermissions);
  console.log("🎯 selectedPermissions (state):", selectedPermissions);

  // Initialize permissions with inactive actions
  useEffect(() => {
    if (initialPermissions.length > 0) {
      const initialized = initialPermissions.map((module) => ({
        ...module,
        actions: module.actions.map((a) => ({
          ...a,
          active: assignedPermissions.some(
            (p) =>
           p.actionId === a.id
          ),
        })),
      }));
      setPermissionsByCard(initialized);
      setSelectedPermissions(assignedPermissions);
    }
  }, [initialPermissions]);

  // Notify parent on update
  useEffect(() => {
    if (onSelectionChange) {
      const grouped = selectedPermissions.reduce((acc, { moduleId, actionId }) => {
        const existing = acc.find((x) => x.moduleId === moduleId);
        if (existing) existing.actionIds.push(actionId);
        else acc.push({ moduleId, actionIds: [actionId] });
        return acc;
      }, []);
      onSelectionChange(grouped);
    }


    console.log({ selectedPermissions });

  }, [selectedPermissions]);

  // Toggle a single permission
  const togglePermission = (moduleIndex, actionId) => {
    setPermissionsByCard((prev) =>
      prev.map((module, i) => {
        if (i !== moduleIndex) return module;
        const updatedActions = module.actions.map((a) =>
          a.id === actionId ? { ...a, active: !a.active } : a
        );
        return { ...module, actions: updatedActions };
      })
    );

    setSelectedPermissions((prev) => {
      const exists = prev.some(
        (p) =>
          p.moduleId === permissionsByCard[moduleIndex].id &&
          p.actionId === actionId
      );
      if (exists) {
        return prev.filter(
          (p) =>
            !(
              p.moduleId === permissionsByCard[moduleIndex].id &&
              p.actionId === actionId
            )
        );
      } else {
        return [
          ...prev,
          { moduleId: permissionsByCard[moduleIndex].id, actionId },
        ];
      }
    });
  };

  // Toggle all permissions in one module
  const toggleAllPermissions = (moduleIndex) => {
    const module = permissionsByCard[moduleIndex];
    const allActive = module.actions.every((a) => a.active);

    setPermissionsByCard((prev) =>
      prev.map((m, i) => {
        if (i !== moduleIndex) return m;
        return {
          ...m,
          actions: m.actions.map((a) => ({ ...a, active: !allActive })),
        };
      })
    );

    setSelectedPermissions((prev) => {
      let updated = prev.filter((p) => p.moduleId !== module.id);
      if (!allActive) {
        updated = [
          ...updated,
          ...module.actions.map((a) => ({
            moduleId: module.id,
            actionId: a.id,
          })),
        ];
      }
      return updated;
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:pr-32">
      {permissionsByCard.map((module, i) => {
        const allActive =
          module.actions.length > 0 &&
          module.actions.every((a) => a.active);
        return (
          <div key={module.id}>
            <PermissionCard
              title={module.name}
              permissions={module.actions}
              onPermissionToggle={(permId) => togglePermission(i, permId)}
              onToggleAll={() => toggleAllPermissions(i)}
              isAllActive={allActive}
            />
          </div>
        );
      })}
    </div>
  );
};

export default PermissionSectionNew;