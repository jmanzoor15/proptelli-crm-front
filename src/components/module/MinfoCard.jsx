import React from "react";
import { StatusBadge } from "../StatusBadge";
import IconTextButton from "./icontextbutton";


const InfoCard = ({
  title,
  status,
  createdOn,
  buttons = [], // array of button configs
}) => {
  return (
   <div className="border border-gray-200 rounded-20 px-4 py-3 min-h-[150px] w-full shadow-sm bg-white flex flex-col justify-between">

      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h2 className="font-semibold text-17 text-black">{title}</h2>
        <StatusBadge status={status} />
      </div>

      {/* Description */}
      <p className="text-xss text-normal text-black mb-4">Created on: {createdOn}</p>

      {/* Action Buttons */}
      <div className="flex gap-3">
        {buttons.map((btn, index) => (
          <IconTextButton
            key={index}
            text={btn.text}
            icon={btn.icon}
            bgColor={btn.bgColor}
            onClick={btn.onClick}
          />
        ))}
      </div>
    </div>
  );
};

export default InfoCard;