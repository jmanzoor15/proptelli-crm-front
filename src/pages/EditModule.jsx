import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackIconButton from "@/components/buttons/BackIconButton";
import BackArrowButton from "@/components/buttons/BackArrowButton";
import ActionTags from "@/components/module/ActionTags";
import TrashButton from "@/components/buttons/TrashButton";
import AvailableActions from "@/components/module/Action";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import InformationCreateTable from "@/components/InformationCreateTable";
import axiosInstance from "../api/axiosInstance";
import API_ENDPOINTS from "../api/endPoints";
import { fetchActions } from "../api/services/actionsServices";

const EditModulePage = () => {
  const navigate = useNavigate();
  const { uid } = useParams();

  // ===== State =====
  const [loading, setLoading] = useState(false);
  const [selectedActionUids, setSelectedActionUids] = useState([]); 
  const [allActions, setAllActions] = useState([]);
  const [fields, setFields] = useState([
    { name: "title", label: "Title", type: "input", value: "" },
    { name: "status", label: "Status", type: "toggle", value: true },
  ]);

  // ===== Fetch Module + Actions =====
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Fetch module details and actions list in parallel
        const [moduleRes, actionsRes] = await Promise.all([
          axiosInstance.get(API_ENDPOINTS.MODULE.DETAIL(uid)),
          fetchActions(),
        ]);

        const moduleData = moduleRes.data.module;
        const actionsList = actionsRes.actions || actionsRes; 

      
        setFields([
          { 
            name: "title", 
            label: "Title", 
            type: "input", 
            value: moduleData.title 
          },
          { 
            name: "status", 
            label: "Status", 
            type: "toggle", 
            value: moduleData.is_active ?? true 
          },
        ]);

        // Store all available actions
        console.log("All Actions:", actionsList);
        setAllActions(actionsList);

        // Extract UIDs from module's current actions
        const currentActionUids = moduleData.actions?.map((action) => action.uid) || [];
        console.log("Current Action UIDs:", currentActionUids);
        setSelectedActionUids(currentActionUids);

      } catch (error) {
        console.error("Error fetching module or actions:", error);
        alert("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [uid]);

  // ===== Handlers =====
  const handleFieldChange = (name, value) => {
    setFields((prev) =>
      prev.map((field) => (field.name === name ? { ...field, value } : field))
    );
  };

  const handleRemoveAction = (actionUid) => {
    setSelectedActionUids((prev) => prev.filter((uid) => uid !== actionUid));
  };

  const normalizeUid = (uid) => uid.replace(/-/g, "").toLowerCase();

const handleAddAll = () => {
  setSelectedActionUids((prev) => {
    const normalizedPrev = prev.map(normalizeUid);
    const newUids = allActions
      .map((a) => a.uid)
      .filter((uid) => !normalizedPrev.includes(normalizeUid(uid)));
    return [...prev, ...newUids];
  });
};

const handleAddSingle = (actionUid) => {
  setSelectedActionUids((prev) => {
    const normalizedPrev = prev.map(normalizeUid);
    if (normalizedPrev.includes(normalizeUid(actionUid))) {
      return prev; // Already exists
    }
    return [...prev, actionUid];
  });
};

  const handleSave = async () => {
    try {
      const payload = {
        title: fields.find((f) => f.name === "title")?.value,
        status: fields.find((f) => f.name === "status")?.value,
        actions: selectedActionUids, // Send array of UIDs
      };

      const res = await axiosInstance.put(API_ENDPOINTS.MODULE.UPDATE(uid), payload);
      navigate(-1);
    } catch (error) {
      console.error("Error updating module:", error);
      alert("Failed to update module.");
    }
  };

  const handleDelete = async () => {
    if (!window.confirm("Coming Soon")) return;
    
    try {
      await axiosInstance.delete(API_ENDPOINTS.MODULE.DELETE(uid));
      alert("Module deleted successfully!");
      navigate(-1);
    } catch (error) {
      console.error("Error deleting module:", error);
      alert("Failed to delete module.");
    }
  };

  // ===== Helper: Get labels for selected UIDs =====
  const getSelectedActionLabels = () => {
    return selectedActionUids.map((uid) => {
      // Normalize UIDs by removing dashes for comparison
      const normalizedUid = uid.replace(/-/g, '');
      const action = allActions.find((a) => {
        const normalizedActionUid = a.uid.replace(/-/g, '');
        return normalizedActionUid === normalizedUid || a.uid === uid;
      });
      return {
        uid,
        label: action?.label || uid
      };
    });
  };

  const selectedActionsDisplay = getSelectedActionLabels();

  // ===== Render =====
  return (
    <div className="min-h-screen bg-white px-8 py-6 relative">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <div className="hidden md:block pt-2">
            <BackArrowButton onClick={() => navigate(-1)} />
          </div>
          <div className="md:hidden">
            <BackIconButton onClick={() => navigate(-1)} />
          </div>
          <h1 className="text-lg md:text-xl font-semibold text-gray-800">
            {loading ? "Loading..." : "Edit Module"}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <PrimaryButton
            label="Save Changes"
            onClick={handleSave}
            bgcolor="black"
          />
          <TrashButton onClick={handleDelete} />
        </div>
      </div>

      {/* Module Information */}
      <div className="mt-6 flex justify-start">
        <div className="min-w-[668px] h-[118px]">
          <InformationCreateTable
            fields={fields}
            onFieldChange={handleFieldChange}
          />
        </div>
      </div>

      {/* Current Module Actions */}
      <div className="mt-12">
        <h2 className="text-lg font-semibold text-black mb-3">
          Current Module Actions
        </h2>
        <div className="border min-h-[182px] border-gray-200 rounded-xl p-4">
          <ActionTags 
            actions={selectedActionsDisplay.map(a => a.label)}
            onRemove={(label) => {
              // Find UID by label and remove it
              const action = selectedActionsDisplay.find(a => a.label === label);
              if (action) handleRemoveAction(action.uid);
            }} 
          />
        </div>
      </div>

      {/* Available Actions */}
      <AvailableActions
        title="Available Actions"
        availableActions={allActions}
        onAddAll={handleAddAll}
        onAddSingle={handleAddSingle}
      />
    </div>
  );
};

export default EditModulePage;