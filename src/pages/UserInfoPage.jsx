import React from "react";
import InformationTable from "../components/InformationTable";
import PermissionSection from "../components/PermissionSection";
import { StatusBadge } from "../components/StatusBadge";
import PrimaryButton from "../components/buttons/PrimaryButton";
import PermissionDisplay from "../components/PermissionDisplay";
import BackArrowButton from "../components/buttons/BackArrowButton";
import BackIconButton from "../components/buttons/BackIconButton";
import EditMobileButton from "../components/buttons/EditMobileButton";

const UserInfoPage = () => {
  const basicFields = [
    { label: "Role Name", value: "Sales Agent" },
    { label: "Email", value: "ameenshareef03@gmail.com" },
    { label: "Phone Number", value: "9995004971" },
    { label: "User Id", value: "17364" },
    { label: "Date Created", value: "Aug 2,2025" },
    { label: "Last Login", value: "5 hours ago" },
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
              <BackArrowButton />
            </div>
            <div className="md:hidden">
              <BackIconButton />
            </div>
            <h1 className="text-2.5xl hidden md:block font-semibold text-black">
              User Info
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
        <h2 className="md:text-3.5xl text-25 md:pl-4 font-semibold text-gray-900">David Gin</h2>
        <div className=" pt-2">
          <StatusBadge
            status="Active"
            icon="src/assets/icons/active-icon.svg"
            iconWidth={24}
            iconHeight={24}
          />
        </div>
      </div>

      {/* Information Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:mb-8">
        <div>
          <h3 className="md:text-xl text-lg md:pl-4 font-semibold text-black md:mb-10">
            User Overview
          </h3>
          <InformationTable fields={basicFields} />
        </div>
      </div>

      {/* Permissions Section */}
      <div>
        <h3 className="md:text-xl md:pl-4 text-lg font-semibold text-black mt-2 mb-4 px-1">
          Permissions
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-18 md:pr-134 ">
          {titles?.map((item, index) => (
            <div key={index}>
              <PermissionDisplay title={item} permissions={leadsPermissions} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserInfoPage;
