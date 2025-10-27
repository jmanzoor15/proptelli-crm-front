import React, { useState } from "react";
import InformationTable from "../components/InformationTable";
import PermissionSection from "../components/PermissionSection";
import { StatusBadge } from "../components/StatusBadge";
import PrimaryButton from "../components/buttons/PrimaryButton";
import PermissionDisplay from "../components/PermissionDisplay";
import EditMobileButton from "../components/buttons/EditMobileButton";
import BackIconButton from "../components/buttons/BackIconButton";
import BackArrowButton from "../components/buttons/BackArrowButton";
import TrashButton from "../components/buttons/TrashButton";
import UploadProfilePicture from "../components/UploadProfilePicture";
import EditableInfoTable from "../components/EditableInfoTable";
import ProfileCardDropdown from "../components/ProfileCardDropdown";
import { FileCard } from "../components/FileCard";

const EditChannelPartner = () => {
  const [userData, setUserData] = useState({
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    phone: "+1 234 567 8900",
  });

  const handleCopy = () => {
    alert("File copied to clipboard!");
  };

  const handleDownload = () => {
    alert("Downloading file...");
  };

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
              Edit Channel Partner
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <PrimaryButton
              label="Deactivate"
              onClick={() => alert("Deactivate Clicked!")}
              src={"/icons/close-icon.svg"}
              bgcolor={"brickred"}
              iconheight={24}
              iconwidth={24}
            />
            <div className="block md:hidden">
              <EditMobileButton
                onClick={() => alert("Edit Role Clicked!")}
                src={"/icons/edit-w-icon.svg"}
              />
            </div>
            <div className="hidden md:block">
              <PrimaryButton
                label="Save Changes"
                onClick={() => alert(" Clicked!")}
                bgcolor={"black"}
                iconheight={24}
                iconwidth={24}
              />
            </div>
            <TrashButton onClick={() => alert("Clicked...")} />
          </div>
        </div>
        <UploadProfilePicture />
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-[34px] md:mb-8 ">
          <div>
            <h3 className="md:text-xl text-lg md:pl-4 font-semibold text-black md:mb-10">
              Personal Details
            </h3>
            <EditableInfoTable
              data={userData}
              labels={{
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email Address",
                phone: "Phone Number",
              }}
              requiredFields={["firstName", "lastName", "email"]}
              onChange={(updated) => {
                setUserData(updated);
                console.log("Data updated:", updated);
              }}
            />{" "}
          </div>
          <div>
            <h3 className="md:text-xl text-lg md:pl-4 font-semibold text-black md:mb-10">
              Address Information
            </h3>
            <EditableInfoTable
              data={userData}
              labels={{
                firstName: "First Name",
                lastName: "Last Name",
                email: "Email Address",
                phone: "Phone Number",
              }}
              requiredFields={["firstName", "lastName", "email"]}
              onChange={(updated) => {
                setUserData(updated);
                console.log("Data updated:", updated);
              }}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[34px] md:mb-8">
          <div>
            <h3 className="md:text-xl text-lg md:pl-1 font-semibold text-black md:mb-10">
              Assigned BDM
            </h3>
            <ProfileCardDropdown
              name={"David Buttler(davidbutler@gmail.com)"}
              profileImg={
                "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              }
            />
          </div>
          <div>
            <h3 className="md:text-xl text-lg md:pl-1 font-semibold text-black md:mb-10">
              Assigned BDM
            </h3>
            <div className="pb-[13px]">
              <FileCard
                fileName="Aadhaar Card"
                fileSize="3.5 MB"
                onCopy={handleCopy}
                onDownload={handleDownload}
              />
            </div>
            <div className="pb-[13px]" >
              {/* Example 2 */}
              <FileCard
                fileName="Passport Document"
                fileSize="2.1 MB"
                onCopy={handleCopy}
                onDownload={handleDownload}
              />
            </div>
            <div className="pb-[13px]">
              {/* Example 3 - Without copy button */}
              <FileCard
                fileName="Resume.pdf"
                fileSize="1.8 MB"
                onCopy={handleCopy}
                onDownload={handleDownload}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditChannelPartner;
