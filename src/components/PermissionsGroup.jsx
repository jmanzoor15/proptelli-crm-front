import { PermissionBadge } from "./PermissionBadge";

export const PermissionsGroup = ({ permissions }) => {
  // Show only first 3
  const visiblePermissions = permissions.slice(0, 3);
  const extraCount = permissions.length - 3;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {visiblePermissions.map((permission, index) => (
        <PermissionBadge key={index} label={permission} />
      ))}

      {extraCount > 0 && (
        <span className="px-3 py-1.5 text-sm bg-gray-200 rounded-full font-medium text-gray-600">
          +{extraCount}
        </span>
      )}
    </div>
  );
};
