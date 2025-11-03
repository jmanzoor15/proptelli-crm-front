import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import PrimaryButton from "../components/buttons/PrimaryButton";
import InformationCreateTable from "../components/InformationCreateTable";
import TrashButton from "../components/buttons/TrashButton";
import BackArrowButton from "../components/buttons/BackArrowButton";
import BackIconButton from "../components/buttons/BackIconButton";
import DeletePopup from "../components/buttons/DeleteButtonPopup";
import { fetchRoleDetail, updateRole } from "@/api/services/roleServices";
import PermissionSectionNew from "@/components/PermissionSectionNew";
import { fetchModule } from "@/api/services/moduleServices";

const RoleEditPage = () => {
  const { uid } = useParams();
  const navigate = useNavigate();

  const [showDialog, setShowDialog] = useState(false);
  const [loading, setLoading] = useState(true);
  const [roleData, setRoleData] = useState(null);
  const [modules, setModules] = useState([]);
  const [selectedPermissions, setSelectedPermissions] = useState([]);



  const [formData, setFormData] = useState({
    label: "",
    value: "",
    status: false,
    editable: false,
    deletable: false,
  });

  const [permissions, setPermissions] = useState([]);
  const [moduleAccess, setModuleAccess] = useState([]);

  // Fetch role details
  useEffect(() => {
    const getRoleDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchRoleDetail(uid);
        setRoleData(data);



        // Populate form
        setFormData({
          label: data.label || "",
          value: data.value || "",
          status: data.is_active,
          editable: data.is_editable,
          deletable: data.is_deletable,
        });

        setPermissions(data.permissions || []);
        setModuleAccess(data.module_access || []);

        const moduleresponse = await fetchModule();
        setModules(moduleresponse);


        const assingedPermissions = [];
        data.permissions.forEach(permission => {
          moduleresponse.forEach(module => {
            const action = module.actions.find(a => a.id === permission.uid);
            if (action) {
              assingedPermissions.push({
                moduleId: module.id,
                actionId: action.id
              });
            }
          });
        });
        setSelectedPermissions(assingedPermissions)

      } catch (error) {
        console.error("Error fetching role:", error);
      } finally {
        setLoading(false);
      }
    };

    if (uid) getRoleDetails();
  }, [uid]);

  // Handle input changes
  const handleFieldChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSelectionChange = (updatedPermissions) => {
    setSelectedPermissions(updatedPermissions || []);
  };


  const handleDeleteButtonClick = () => setShowDialog(true);
  const handleCancel = () => setShowDialog(false);
  const handleConfirmDelete = () => setShowDialog(false);

  if (loading) return <div className="p-10 text-center">Loading...</div>;

  const fields = [
    {
      label: "Role Name",
      name: "label",
      value: formData.label,
      type: "text",
    },
    {
      label: "Status",
      name: "status",
      value: formData.status,
      type: "toggle",
    },
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

  // 🔹 Create role function
  const editRole = async () => {
    try {
      // 🔸 Basic validation
      if (!formData.label.trim()) {
        alert("Role name is required.");
        return;
      }

      if (selectedPermissions.length === 0) {
        alert("Please select at least one permission.");
        return;
      }

      // 🔸 Flatten all action IDs from selected modules
      const allActionIds = selectedPermissions.flatMap((p) => p.actionIds);

      // 🔸 Build payload matching backend JSON format
      const payload = {
        label: formData.label,
        value: formData.label.toLowerCase().replace(/\s+/g, "_"),
        parent_role: 2, // static or dynamic based on your backend logic
        parent_role_name: "Admin", // can be dynamic later
        permissions: allActionIds,
        module_access: selectedPermissions.map((mod) => ({
          module_uid: mod.moduleId,
          access_level_code: "OWN", // can adjust later if needed
        })),
      };


      // 🔸 Call API
      const response = await updateRole(uid, payload);

      console.log("✅ Role created successfully:", response);

      // ⚡ Extract UID (adjust based on your backend response)
      const newRoleUid =
        response?.uid ||
        response?.data?.uid ||
        response?.data?.role?.uid ||
        response?.data?.id; // fallback safety

      if (!newRoleUid) {
        alert("Role created, but UID not found in response.");
        return;
      }

      // 🔹 Show confirmation popup and redirect if OK clicked
      const confirmed = window.confirm("Role updated successfully! View role?");
      if (confirmed) {
        navigate(`/roles/${newRoleUid}`);
      } else {
        navigate("/roles");
      }
    } catch (error) {
      console.error("❌ Error creating role:", error);
      const errorMessage =
        error.response?.data?.message ||
        error.response?.data ||
        error.message ||
        "Failed to Update role.";
      alert(errorMessage);
    }
  };



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
              Edit Role
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <PrimaryButton
              label="Save Changes"
              onClick={editRole}
              bgcolor="black"
            />
            <TrashButton onClick={handleDeleteButtonClick} />
          </div>
        </div>
      </div>

      {/* Information Section */}
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
      </div>

      {/* Permissions Section */}
      <div className="w-full">
        <h3 className="md:text-xl md:pl-4 text-lg font-semibold text-black md:mt-2 mb-2 md:mb-4 md:px-1">
          Permissions
        </h3>



        <PermissionSectionNew
          onSelectionChange={handleSelectionChange}
          assignedPermissions={selectedPermissions}
          initialPermissions={modules}

        />
      </div>

      {/* Delete Confirmation Popup */}
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
  );
};

export default RoleEditPage;