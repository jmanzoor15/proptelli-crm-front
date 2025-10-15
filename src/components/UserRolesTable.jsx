import React from "react";
import { PermissionsGroup } from "./PermissionsGroup";
import { StatusBadge } from "./StatusBadge";
import IconButton from "./buttons/IconButton";

const UserRolesTable = ({ roles }) => {
  return (
    <div className="w-full px-5">
      {/* Desktop View */}
      <div className="hidden md:block">
        {/* Table Header */}
        <div className="bg-white rounded-full overflow-hidden">
          <table className="w-full">
            <thead className="w-full">
              <tr className="bg-gray-100">
                <th className="px-6 py-4 text-left text-base font-semibold text-black">
                  Role Name
                </th>
                <th className="px-6 py-4 text-left text-base font-semibold text-black">
                  Email
                </th>
                <th className="px-6 py-4 text-base font-semibold text-black">
                  Role
                </th>
                <th className="px-6 py-4  text-base font-semibold text-black">
                  Created on
                </th>
                <th className="px-6 py-4 text-left text-base font-semibold text-black">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-base font-semibold text-black">
                  Actions
                </th>
              </tr>
            </thead>
          </table>
        </div>
        {/* Table Body */}
        <table className="w-full">
          <tbody>
            {roles.map((role, index) => (
              <tr key={index} className="border-t border-gray-200 bg-white">
                <td className="px-6 py-11 text-base font-medium text-gray-900">
                  {role.name}
                </td>
                <td className="px-6 py-11 text-base font-normal">
                  <a
                    href={`mailto:${role.email}`}
                    className="text-blue-400 no-underline hover:text-blue-600 transition-colors"
                  >
                    {role.email}
                  </a>
                </td>
                <td className="px-6 py-11">{role.role}</td>
                <td className="px-6 py-11 text-base font-normal text-gray-900">
                  {role.createdOn}
                </td>
                <td className="px-6 py-11">
                  <StatusBadge status={role.status} />
                </td>
                <td className="px-6 py-11">
                  <div className="flex items-center gap-3">
                    <IconButton
                      icon={"/icons/eye.svg"}
                      alt="View"
                      onClick={() => alert("view clicked...")}
                    />
                    <IconButton
                      icon={"/icons/edit.svg"}
                      alt="Edit"
                      onClick={() => alert("edit clicked...")}
                    />
                    <IconButton
                      icon={"/icons/delete.svg"}
                      alt="Delete"
                      onClick={() => alert("Delete clicked...")}
                    />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile View - Card Layout */}
      <div className="md:hidden space-y-4">
        {roles.map((role, index) => (
          <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
            {/* Name and Status Row */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <div className="text-md font-semibold text-black mb-1">Name</div>
                <div className="text-sm font-medium font-bold text-black">{role.name}</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-md font-semibold text-black mb-1">Status</div>
                <StatusBadge status={role.status} />
              </div>
            </div>

            {/* Email and Role Row */}
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1 min-w-0 mr-4">
                <div className="text-sm font-medium text-black mb-1">Email</div>
                <a
                  href={`mailto:${role.email}`}
                  className="text-blue-400 text-base no-underline break-all"
                >
                  {role.email}
                </a>
              </div>
              <div className="text-right flex-shrink-0">
                <div className="text-md font-semibold text-black mb-1">Role</div>
                <div className="text-sm font-medium text-black whitespace-nowrap">{role.role}</div>
              </div>
            </div>

            {/* Created Date and Actions Row */}
            <div className="flex justify-between items-end">
              <div>
                <div className="text-md font-semibold text-black mb-1">Created on</div>
                <div className="text-sm font-medium text-black">{role.createdOn}</div>
              </div>
              <div className="flex items-center gap-2">
                <IconButton
                  icon={"/icons/eye.svg"}
                  alt="View"
                  onClick={() => alert("view clicked...")}
                />
                <IconButton
                  icon={"/icons/edit.svg"}
                  alt="Edit"
                  onClick={() => alert("edit clicked...")}
                />
                <IconButton
                  icon={"/icons/delete.svg"}
                  alt="Delete"
                  onClick={() => alert("Delete clicked...")}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRolesTable;
