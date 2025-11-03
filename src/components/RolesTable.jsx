import { useState } from "react";
import { PermissionsGroup } from "./PermissionsGroup";
import { StatusBadge } from "./StatusBadge";
import IconButton from "./buttons/IconButton";
import { formatDate } from "@/utils/commonFunctions";
import DeletePopup from "./buttons/DeleteButtonPopup";
import { useNavigate } from "react-router-dom";




const RolesTable = ({ roles, headings }) => {

const navigate = useNavigate();


const [showDialog, setShowDialog] = useState(false);
  
  
  const handleDeleteButtonClick = () => {
      setShowDialog(true);
    };
  
     const handleCancel = () => {
      // console.log("Delete cancelled");
      setShowDialog(false);
    };
  
    const handleConfirmDelete = () => {
      // console.log("Role deleted!");
      setShowDialog(false);
    };

  return (
    <div className="w-full">
      {/* Desktop Table View */}
      <div className="hidden md:block">
        <table className="w-full border-collapse overflow-hidden rounded-2xl">
          {/* Table Header */}
          <thead>
            <tr className="bg-gray-100">
              {headings.map((heading, index) => (
                <th
                  key={index}
                  className={`px-6 py-4 text-left text-base font-semibold text-black ${
                    heading === "Status" || heading === "Actions"
                      ? "text-center"
                      : ""
                  }`}
                >
                  {heading}
                </th>
              ))}
            </tr>
          </thead>

          {/* Table Body */}
          <tbody>
            {roles?.map((role, index) => (
              <tr
                key={index}
                className="border-t border-gray-200 bg-white hover:bg-gray-50"
              >
                <td className="px-6 py-4 text-base font-medium text-gray-900">
                  {role.label}
                </td>
                <td className="px-6 py-4">
                  <PermissionsGroup permissions={role.permissions} />
                </td>
                <td className="px-6 py-4 text-base font-normal text-gray-900">
                  {formatDate(role.created_at)}
                </td>
                <td className="px-6 py-4 text-center">
                  <StatusBadge status={role.is_active ? "Active" : "Inactive"} />
                </td>
                <td className="px-6 py-4 text-center">
                  <div className="flex justify-center items-center gap-3">
                    <IconButton
                      icon={"/icons/eye.svg"}
                      alt="View"
                      onClick={() => navigate(`/roles/${role.uid}`)}
                    />
                    {role.is_editable && <IconButton
                  icon={"/icons/edit.svg"}
                  alt="Edit"
                 onClick={() => navigate(`/role/edit/${role.uid}`)}
                  />}               
                    {role.is_deletable &&<IconButton
                  icon={"/icons/delete.svg"}
                  alt="Delete"
                  onClick={handleDeleteButtonClick}
                />}
                  </div>

              {showDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                  <DeletePopup
                    description="Are you sure you want to delete this role?"
                    handleCancel={handleCancel}
                    handleDelete={handleConfirmDelete}
                  />
                </div>
              )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {roles.map((role, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm"
          >
            {/* Role Name and Status */}
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-md text-black font-semibold mb-1">
                  Role Name
                </p>
                <h3 className="text-base font-semibold text-gray-900">
                  {role.label}
                </h3>
              </div>
              <div>
                <p className="text-md text-black mb-1 font-semibold text-center">
                  Status
                </p>
                <StatusBadge
                  status={role.is_active ? "Active" : "Inactive"}
                />
              </div>
            </div>

            {/* Permissions */}
            <div className="mb-4">
              <p className="text-dm text-black font-semibold mb-2">
                Permissions
              </p>
              <PermissionsGroup permissions={role.permissions} />
            </div>

            {/* Created On and Actions */}
            <div className="flex justify-between items-center pt-3">
              <div>
                <p className="text-md text-black font-semibold mb-1">
                  Created on
                </p>
                <p className="text-sm font-medium text-gray-900">
                  {formatDate(role.created_at)}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <IconButton
                  icon={"/icons/eye.svg"}
                  alt="View"
                  onClick={() => navigate(`/roles/${role.uid}`)}
                />
                {role.is_editable && <IconButton
                  icon={"/icons/edit.svg"}
                  alt="Edit"
                  onClick={() => alert("edit clicked...")}
                />}
                {role.is_deletable &&<IconButton
                  icon={"/icons/delete.svg"}
                  alt="Delete"
                  onClick={handleDeleteButtonClick}
                />}
              </div>
            </div>
          </div>
        ))}
        {showDialog && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/50">
                  <DeletePopup
                    description="Are you sure you want to delete this role?"
                    handleCancel={handleCancel}
                    handleDelete={handleConfirmDelete}
                  />
                </div>
              )}
      </div>
    </div>
  );
};

export default RolesTable;