import React, { useEffect, useState } from "react";
import InfoCard from "@/components/module/MinfoCard";
import BackArrowButton from "../components/buttons/BackArrowButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import BackIconButton from "@/components/buttons/BackIconButton";
import { useNavigate } from "react-router-dom";
import { fetchModule } from "@/api/services/moduleServices";
import { formatDate } from "@/utils/commonFunctions";
import RoundedButton from "@/components/buttons/RoundedButton";

const ManageModule = () => {
  const navigate = useNavigate();
  const [modules, setModules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getModules = async () => {
      try {
        const data = await fetchModule();
        if (data) setModules(data);
      } catch (error) {
        console.error("Error loading modules:", error);
      } finally {
        setLoading(false);
      }
    };

    getModules();
  }, []);

  const getButtons = (mod) => {
    return [
      {
        text: "View",
        icon: "/icons/white_eye.svg",
        bgColor: "bg-skyblue",
        onClick: () => navigate(`/module/${mod.id}`),
      },
      {
        text: "Edit",
        icon: "/icons/edit-w-icon.svg",
        bgColor: "bg-gold",
        onClick: () => navigate(`/module/edit/${mod.id}`),
      },
      // {
      //   text: "Delete",
      //   icon: "/icons/whitedelete.svg",
      //   bgColor: "bg-darkred",
      //   onClick: () => alert(`Deleting ${mod.name}`),
      // },
    ];
  };

  if (loading)
    return <div className="p-8 text-gray-500">Loading modules...</div>;

  return (
    <div className="p-8 min-h-screen bg-white">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center pl-[26px] gap-4">
          <div className="hidden md:block pt-2">
            <BackArrowButton onClick={() => navigate(-1)} />
          </div>
          <div className="md:hidden">
            <BackIconButton onClick={() => navigate(-1)} />
          </div>
          <h1 className="text-2.5xl hidden md:block font-semibold text-black">
            Manage Modules
          </h1>
        </div>
        <div className=" flex gap-[9px]">
          <PrimaryButton
            label="Create Module"
            onClick={() => alert("Create Module")}
            src={"/icons/add-icon.svg"}
            bgcolor={"black"}
            iconheight={24}
            iconwidth={24}
          />

          <RoundedButton onClick={()=>alert("Menu Clicked....")} src={"/icons/menudots-icon.svg"} />
        </div>
      </div>

      {/* Results Count */}
      <p className="text-md text-black font-medium mb-4 mt-[43px] pl-[26px]">
        Showing {modules.length} Results
      </p>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 px-[30px] sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-[15px]">
        {modules.map((mod) => (
          <InfoCard
            key={mod.id}
            title={mod.name}
            status={mod.isActive ? "Active" : "Inactive"}
            createdOn={mod.createdOn ? formatDate(mod.createdOn) : ""}
            buttons={getButtons(mod)}
          />
        ))}
      </div>
    </div>
  );
};

export default ManageModule;