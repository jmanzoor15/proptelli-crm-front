import React, { useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import PermissionSection from "../components/PermissionSection";
import InformationCreateTable from "../components/InformationCreateTable";
import BackArrowButton from "../components/buttons/BackArrowButton";
import BackIconButton from "../components/buttons/BackIconButton";

const UserCreatePage = () => {
  const leadsPermissions = [
    { label: "VIEW", active: false },
    { label: "CREATE", active: true },
    { label: "EDIT", active: true },
    { label: "DELETE", active: false },
    { label: "ASSIGN", active: true },
  ];

  const [formData, setFormData] = useState({
    roleName:"",
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
  { 
    label: "Full Name", 
    name: "fullName",
    value: formData.roleName || "", 
    type: "input",
    placeholder: "Enter Full Name"
  },    {
      label: "Role",
      name: "role",
      value: "SELECT",
      type: "dropdown",
      options: ["SELECT", "Admin", "Manager", "Sales Agent"],
    },
 { 
    label: "Email", 
    name: "email",
    value: formData.roleName || "", 
    type: "input",
    placeholder: "Enter Email"
  },
{ 
    label: "Phone Number", 
    name: "phone number",
    value: formData.roleName || "", 
    type: "input",
    placeholder: "Enter Phone Number"
  },
    {
      label: "Status",
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
            <div className="md:hidden">
              <BackIconButton />
            </div>
            <h1 className="text-2.5xl hidden md:block font-semibold text-black">Create User</h1>
          </div>
          <div className="flex items-center gap-3">
            <PrimaryButton
              label="Submit"
              onClick={() => alert("Deactivate Clicked!")}
              bgcolor={"black"}
              src={null}
              iconheight={24}
              iconwidth={24}
            />
          </div>
        </div>
      </div>

      {/* Information Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:mb-8">
        <div>
          <h3 className="md:text-xl text-lg md:pl-4 font-semibold text-black md:mb-10">
            User Overview
          </h3>
          <InformationCreateTable
            fields={fields}
            onFieldChange={handleFieldChange}
          />
        </div>
        <div></div>
      </div>

      {/* Permissions Section */}
      <div>
        <h3 className="md:text-xl text-lg md:pl-4 mb-4  font-semibold text-black md:mb-10">
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

export default UserCreatePage;
