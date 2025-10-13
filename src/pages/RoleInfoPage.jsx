import React from "react";
import InformationTable from "../components/InformationTable";
import PermissionSection from "../components/PermissionSection";
import { StatusBadge } from "../components/StatusBadge";
import PrimaryButton from "../components/buttons/PrimaryButton";
import PermissionDisplay from "../components/PermissionDisplay";
import EditMobileButton from "../components/buttons/EditMobileButton";
import BackIconButton from "../components/buttons/BackIconButton";
import BackArrowButton from "../components/buttons/BackArrowButton";

const RoleInfoPage = () => {
  const basicFields = [
    { label: "Role Name", value: "Sales Agent" },
    { label: "Created on", value: "Aug 2, 2025" },
    { label: "Editable", value: "YES" },
    { label: "Deletable", value: "YES" },
  ];

  const hierarchyFields = [
    { label: "Parent Role", value: "Super Admin" },
    { label: "Parent Role ID", value: "18864" },
  ];

  const leadsPermissions = [
    { label: "VIEW", active: false },
    { label: "CREATE", active: true },
    { label: "EDIT", active: true },
    { label: "DELETE", active: false },
    { label: "ASSIGN", active: true },
  ];

  const titles = ["Leads", "Tasks", "Clients", "Reports"];

  return (
    <div className="pt-25 px-20 md:px-39  bg-white pb-25 ">
      {/* Header Section */}
      <div className="mb-28">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
           <div className="hidden md:block pt-2">
            <BackArrowButton/>
           </div>
            <div className=" md:hidden">
              <BackIconButton />
            </div>
            <h1 className="text-2.5xl hidden md:block font-semibold text-black">
              Role Info
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <PrimaryButton
              label="Deactivate"
              onClick={() => alert("Deactivate Clicked!")}
              src={"src/assets/icons/close-icon.svg"}
              bgcolor={"brickred"}
              iconheight={24}
              iconwidth={24}
            />
            <div className="block md:hidden">
              <EditMobileButton
                onClick={() => alert("Edit Role Clicked!")}
                src={"src/assets/icons/edit-w-icon.svg"}
              />
            </div>
            <div className="hidden md:block">
              <PrimaryButton
                label="Edit Role"
                onClick={() => alert("Edit Role Clicked!")}
                src={"src/assets/icons/edit-w-icon.svg"}
                bgcolor={"black"}
                iconheight={24}
                iconwidth={24}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Role Name and Status Badge */}
      <div className="mb-6 flex items-center gap-27">
        <h2 className="md:text-3.5xl text-25 pl-4 font-semibold text-gray-900">
          Sales Agent
        </h2>
        <div className=" pt-2">
          <StatusBadge
            status="Active"
            icon="src/assets/icons/active-icon.svg"
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
      <div>
        <h3 className="md:text-xl pl-4 text-lg font-semibold text-black mt-2 mb-4 px-1">
          Permissions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-18 md:pr-134">
          {titles?.map((item, index) => (
            <PermissionDisplay
              key={index}
              title={item}
              permissions={leadsPermissions}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RoleInfoPage;
