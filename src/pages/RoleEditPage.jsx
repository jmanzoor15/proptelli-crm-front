import React, { useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import PermissionSection from "../components/PermissionSection";
import InformationCreateTable from "../components/InformationCreateTable";
import TrashButton from "../components/buttons/TrashButton";
import BackArrowButton from "../components/buttons/BackArrowButton";
import BackIconButton from "../components/buttons/BackIconButton";

const RoleEditPage = () => {
  const leadsPermissions = [
    { label: "VIEW", active: false },
    { label: "CREATE", active: true },
    { label: "EDIT", active: true },
    { label: "DELETE", active: false },
    { label: "ASSIGN", active: true },
  ];

  const [formData, setFormData] = useState({
    status: true,
    editable: true,
    deletable: true,
  });

  const handleFieldChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const fields = [
    { label: "Role Name", value: "Sales Agent", type: "text" },
    { label: "Status", name: "status", value: formData.status, type: "toggle" },
    {
      label: "Editable",
      name: "editable",
      value: formData.editable,
      type: "toggle",
    },
    {
      label: "Deletable",
      name: "deletable",
      value: formData.deletable,
      type: "toggle",
    },
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
            <div className=" md:hidden">
              <BackIconButton />
            </div>
            <h1 className="text-2.5xl hidden md:block font-semibold text-black">
              Edit Role
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <PrimaryButton
              label="Save Changes"
              onClick={() => alert("Clicked!")}
              bgcolor={"black"}
              src={null}
              iconheight={24}
              iconwidth={24}
            />
            <TrashButton onClick={() => alert("Clicked...")} />
          </div>
        </div>
      </div>

      {/* Information Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:mb-8">
        <div>
          <h3 className="md:text-xl md:pl-4 text-lg font-semibold text-black mt-2 md:mb-4 md:px-1">
            Role Information
          </h3>
          <InformationCreateTable
            fields={fields}
            onFieldChange={handleFieldChange}
          />
        </div>
        <div></div>
      </div>

      {/* Permissions Section */}
      <div className="w-full">
        <h3 className="md:text-xl md:pl-4 text-lg font-semibold text-black md:mt-2 mb-2 md:mb-4 md:px-1">
          Permissions
        </h3>
        <PermissionSection
          titles={titles}
          initialPermissions={leadsPermissions}
        />
      </div>
    </div>
  );
};

export default RoleEditPage;
