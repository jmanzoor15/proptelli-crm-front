import { CreateChannelPartnerStatus } from "@/api/services/channelPartnerServices";
import BackArrowButton from "@/components/buttons/BackArrowButton";
import BackIconButton from "@/components/buttons/BackIconButton";
import PrimaryButton from "@/components/buttons/PrimaryButton";
import InformationCreateTable from "@/components/InformationCreateTable";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateCPStatus = () => {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    name: "",
    code: "",
    color_code: "",
    is_active: true,
  });

  const fields = [
    {
      label: "Status Name",
      name: "name",
      value: formData.name,
      type: "input",
    },
    {
      label: "Color",
      name: "color_code",
      value: formData.color_code,
      type: "color",
    },
    {
      label: "Value",
      name: "code",
      value: formData.code,
      type: "input",
    },
    {
      label: "Status",
      name: "is_active",
      value: formData.is_active,
      type: "toggle",
    },
  ];
  const handleFieldChange = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  async function handleSubmit() {
    try {
      setErrors({});

      const response = await CreateChannelPartnerStatus(formData);
      console.log(response);
      alert("CPStatus Created");
      navigate("/channel-partner/status/");
    } catch (error) {
      const apiErrors = error || {};

      setErrors(apiErrors.errors || apiErrors);
    }
  }

  return (
    <div className="pt-25 px-20 md:px-39  bg-white pb-25 ">
      {/* Header Section */}
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
              Create Status
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <PrimaryButton
              label="Submit"
              onClick={handleSubmit}
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
            Module Information
          </h3>
          <InformationCreateTable
            fields={fields}
            onFieldChange={handleFieldChange}
            errors={errors}
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default CreateCPStatus;