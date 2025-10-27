import React, { useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import SearchInput from "../components/SearchInput ";
import RolesTable from "../components/RolesTable";
import StatCard from "../components/StatCard";
import MobileSearchBar from "../components/MobileSearchBar";
const RoleManagementPage = () => {
  const [query, setQuery] = useState("");

  const roles = [
    {
      name: "Sales Agent",
      permissions: ["VIEW", "EDIT", "CREATE"],
      extraPermissions: 0,
      createdOn: "Aug 2, 2025",
      status: "Active",
    },
    {
      name: "BDM",
      permissions: ["VIEW", "EDIT", "CREATE"],
      extraPermissions: 1,
      createdOn: "Aug 2, 2025",
      status: "Inactive",
    },
    {
      name: "Super Admin",
      permissions: ["VIEW", "EDIT", "CREATE"],
      extraPermissions: 2,
      createdOn: "Aug 2, 2025",
      status: "Active",
    },
  ];
  const headings = [
    "Role Name",
    "Permissions",
    "Created on",
    "Status",
    "Actions",
  ];
  return (
    <div className="bg-white pt-25 px-20 md:px-39">
      <div className="md:hidden pb-3">
        <MobileSearchBar
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search Roles ..."
        />
      </div>
      <div className="">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-6">
          <h1 className=" md:text-2xl xs:text-lg sm:text-lg font-bold text-gray-900">
            Role Management
          </h1>
          <PrimaryButton
            label={
              <>
                <span className="hidden sm:inline">Create Role</span>
                <span className="inline sm:hidden">Create</span>
              </>
            }
            onClick={() => alert("Create Role Clicked!")}
            src={"/icons/add-icon.svg"}
            bgcolor={"black"}
            iconheight={24}
            iconwidth={24}
          />
        </div>

        {/* Stats Cards */}
        <div className="flex gap-4 mb-6">
          <StatCard
            src={"/icons/suitcase.svg"}
            title="Roles"
            count={3}
            iconBg="#E6A100"
            onClick={() => console.log("Roles clicked")}
          />
          <StatCard
            src={"/icons/users-1.svg"}
            title="Users"
            count={15}
            iconBg="#4A90E2"
            onClick={() => console.log("Users clicked")}
          />
        </div>

        {/* Showing text */}

        {/* Search Input */}
        <div className="flex justify-between items-center pb-3">
          <div className=" pl-5">
            <p className="text-md font-semibold text-black">Showing 3 out 3</p>
          </div>

          <div className="hidden md:block">
            <SearchInput
              placeholder="Search Roles..."
              onChange={(val) => console.log("Typing:", val)}
              onSubmit={(val) => console.log("Submitted:", val)}
            />
          </div>
        </div>

        <div className="flex justify-between items-center pb-3">
      
      
      <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Role Management</h1>

    </div>
  
  </div>

        {/* Roles Table */}
        <RolesTable roles={roles} headings={headings} />

        {/* Pagination */}
        <div className="flex justify-between items-center mt-4">
          <p className="text-sm text-gray-600">Showing 1 to 3 of 3 entries</p>
          
          <div className="flex items-center gap-2">
            <button
              className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="px-3 py-1 bg-gray-900 text-white rounded">
              1
            </button>

            <button
              className="p-2 border border-gray-300 rounded hover:bg-gray-50 disabled:opacity-50"
              disabled
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoleManagementPage;
