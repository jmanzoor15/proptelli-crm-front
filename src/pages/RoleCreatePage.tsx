import React, { useEffect, useState } from "react";
import PrimaryButton from "../components/buttons/PrimaryButton";
import PermissionSectionNew from "../components/PermissionSectionNew";
import InformationCreateTable from "../components/InformationCreateTable";
import BackArrowButton from "../components/buttons/BackArrowButton";
import BackIconButton from "../components/buttons/BackIconButton";
import { useNavigate } from "react-router-dom";
import { fetchModule } from "@/api/services/moduleServices";
import { createRole } from "@/api/services/roleServices";

const RoleCreatePage = () => {
  const navigate = useNavigate();

  // 🔹 State for permission and module data
  const [selectedPermissions, setSelectedPermissions] = useState([]);
  const [modules, setModules] = useState([]);

  // 🔹 State for form fields
  const [formData, setFormData] = useState({
    roleName: "",
    status: "active",
  });

  // 🔹 Handle input changes
  const handleFieldChange = (name, value) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Form fields config for InformationCreateTable
  const fields = [
    {
      label: "Role Name",
      name: "roleName",
      value: formData.roleName || "",
      type: "input",
      placeholder: "Enter Role Name",
    },
    {
      label: "Status",
      name: "status",
      value: formData.status || "",
      type: "toggle",

    },
  ];

  // 🔹 Handle permission selection from child component
  const handleSelectionChange = (updatedPermissions) => {
    setSelectedPermissions(updatedPermissions || []);
    console.log("🧩 Updated Permissions:", updatedPermissions);
  };

  // 🔹 Create role function
  const addRole = async () => {
    try {
      // 🔸 Basic validation
      if (!formData.roleName.trim()) {
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
        label: formData.roleName,
        is_active: formData.status === true,
        value: formData.roleName.toLowerCase().replace(/\s+/g, "_"),
        parent_role: 2, // static or dynamic based on your backend logic
        parent_role_name: "Admin", // can be dynamic later
        permissions: allActionIds,
        module_access: selectedPermissions.map((mod) => ({
          module_uid: mod.moduleId,
          access_level_code: "OWN", // can adjust later if needed
        })),
      };


      // 🔸 Call API
      const response = await createRole(payload);

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
      const confirmed = window.confirm("Role created successfully! View role?");
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
        "Failed to create role.";
      alert(errorMessage);
    }
  };

  // 🔹 Fetch module data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchModule();
        setModules(response);
      } catch (error) {
        console.error("Error fetching modules:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pt-25 px-20 md:px-39 bg-white pb-25">
      {/* 🔹 Header */}
      <div className="mb-28">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="hidden md:block pt-2">
              <BackArrowButton onClick={() => navigate(-1)} />
            </div>
            <div className="md:hidden">
              <BackIconButton onClick={() => navigate(-1)} />
            </div>
            <h1 className="text-2.5xl hidden md:block font-semibold text-black">
              Create Role
            </h1>
          </div>
          <PrimaryButton label="Submit" onClick={addRole} bgcolor="black" />
        </div>
      </div>

      {/* 🔹 Role Info Section */}
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

      {/* 🔹 Permissions Section */}
      <div>
        <h3 className="md:text-xl md:pl-4 text-lg font-semibold text-black md:mt-2 mb-2 md:mb-4 md:px-1">
          Permissions
        </h3>
        <PermissionSectionNew
          onSelectionChange={handleSelectionChange}
          assignedPermissions={[]}
          initialPermissions={modules}
        />
      </div>
    </div>
  );
};

export default RoleCreatePage;