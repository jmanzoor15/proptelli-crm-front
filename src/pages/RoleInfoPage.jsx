import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchRoleDetail } from "@/api/services/roleServices";
import InformationTable from "../components/InformationTable";
import PermissionDisplay from "../components/PermissionDisplay";
import PrimaryButton from "../components/buttons/PrimaryButton";
import BackArrowButton from "../components/buttons/BackArrowButton";
import BackIconButton from "../components/buttons/BackIconButton";
import EditMobileButton from "../components/buttons/EditMobileButton";
import { StatusBadge } from "../components/StatusBadge";
import { useNavigate } from "react-router-dom";


const RoleInfoPage = () => {
  const navigate = useNavigate();
  const { uid } = useParams();
  const [roleDetail, setRoleDetail] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRoleDetail = async () => {
      try {
        setLoading(true);
        const data = await fetchRoleDetail(uid);
        setRoleDetail(data);
      } catch (err) {
        setError(err.message || "Error fetching role details");
      } finally {
        setLoading(false);
      }
    };

    if (uid) getRoleDetail();
  }, [uid]);

  // Loader & error handling
  if (loading) return <div className="p-10 text-gray-500">Loading role details...</div>;
  if (error) return <div className="p-10 text-red-600">{error}</div>;
  if (!roleDetail) return null;

  // Prepare information tables
  const basicFields = [
    { label: "Role Name", value: roleDetail?.label || "—" },
    { label: "Created on", value: new Date(roleDetail?.created_at).toLocaleDateString() },
    { label: "Editable", value: roleDetail?.is_editable ? "YES" : "NO" },
    { label: "Deletable", value: roleDetail?.is_deletable ? "YES" : "NO" },
  ];

  const hierarchyFields = [
    { label: "Parent Role", value: roleDetail?.parent_role_name || "—" },
    { label: "Parent Role UID", value: roleDetail?.parent_role || "—" },
  ];

  // Group permissions by module name
  const groupedPermissions = roleDetail?.permissions?.reduce((acc, p) => {
    if (!acc[p.module_name]) acc[p.module_name] = [];
    acc[p.module_name].push({ label: p.action_label, active: true });
    return acc;
  }, {}) || {};


  return (
    <div className="pt-25 px-20 md:px-39 bg-white pb-25">
      {/* Header Section */}
      <div className="mb-28">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="hidden md:block pt-2">
              <BackArrowButton />
            </div>
            <div className="md:hidden">
              <BackIconButton />
            </div>
            <h1 className="text-2.5xl hidden md:block font-semibold text-black">
              Role Info
            </h1>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            <PrimaryButton
              label={roleDetail.is_active ? "Deactivate" : "Activate"}
              onClick={() => alert("Status toggle clicked!")}
              src={"/icons/close-icon.svg"}
              bgcolor={roleDetail.is_active ? "brickred" : "green"}
              iconheight={24}
              iconwidth={24}
            />
            <div className="block md:hidden">
              <EditMobileButton
                onClick={() => navigate(`/role/edit/${uid}`)}
                src={"/icons/edit-w-icon.svg"}
              />
            </div>
            <div className="hidden md:block">
              <PrimaryButton
                label="Edit Role"
                onClick={() => navigate(`/role/edit/${uid}`)}
                src={"/icons/edit-w-icon.svg"}
                bgcolor={"black"}
                iconheight={24}
                iconwidth={24}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Role Name and Status */}
      <div className="mb-6 flex items-center gap-27">
        <h2 className="md:text-3.5xl text-25 pl-4 font-semibold text-gray-900">
          {roleDetail.label}
        </h2>
        <div className="pt-2">
          <StatusBadge
            status={roleDetail.is_active ? "Active" : "Inactive"}
            icon="/icons/active-icon.svg"
            iconWidth={18}
            iconHeight={18}
          />
        </div>
      </div>

      {/* Information Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:mb-8">
        <div>
          <h3 className="md:text-xl text-lg pl-4 font-semibold text-black md:mb-10">
            Basic Information
          </h3>
          <InformationTable fields={basicFields} />
        </div>
        <div>
          <h3 className="md:text-xl text-lg font-semibold pl-4 text-black md:mb-10">
            Hierarchy Information
          </h3>
          <InformationTable fields={hierarchyFields} />
        </div>
      </div>

      {/* Permissions Section */}
      <div className="mt-4">
        <h3 className="md:text-xl pl-4 text-lg font-semibold text-black mb-4 px-1">
          Permissions
        </h3>
        {Object.keys(groupedPermissions).length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-18 md:pr-134">
            {Object.keys(groupedPermissions).map((moduleName, i) => (
              <PermissionDisplay
                key={i}
                title={moduleName}
                permissions={groupedPermissions[moduleName]}
              />
            ))}
          </div>
        ) : (
          <p className="text-gray-500 pl-4">No permissions assigned.</p>
        )}
      </div>


    </div>
  );
};

export default RoleInfoPage;