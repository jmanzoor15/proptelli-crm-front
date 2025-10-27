import React from "react";
import { ChevronRight } from "lucide-react";
import ColourStatusBadge from "./ColourStatusBadge";

const ReferralPartnersList = ({
  title = "Referred Channel Partners",
  partners = [],
  onViewAll,
  onPartnerClick,
}) => {
  return (
    <div className="w-full bg-white rounded-30 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex justify-between items-center px-[29px] py-5">
        <h2 className="text-md font-semibold text-black">{title}</h2>
        {onViewAll && (
          <button
            onClick={onViewAll}
            className="text-md text-black hover:text-gray-900 font-normal"
          >
            View All
          </button>
        )}
      </div>
      {/* Partners List */}
      <div className="divide-y divide-gray-100">
        {partners.map((partner) => (
          <div
            key={partner.id}
            onClick={() => onPartnerClick && onPartnerClick(partner)}
            className="flex items-center px-[29px] py-2 hover:bg-gray-50 cursor-pointer transition-colors group"
          >
            {/* Left Section: Avatar and Name */}
            <div className="flex items-center gap-3 w-[180px]">
              <img
                src={partner.avatar}
                alt={partner.name}
                className="w-12 h-12 rounded-full object-cover flex-shrink-0"
              />
              <span className="text-md font-medium text-black">
                {partner.name}
              </span>
            </div>

            {/* Email */}
            <div className="flex-1 ml-4">
              <span className="text-xs font-normal text-black">
                {partner.email}
              </span>
            </div>

            {/* Status Badge */}
            <div className="flex items-center pr-[140px]">
              <ColourStatusBadge status={partner.status} />
            </div>

            {/* Chevron */}
            <div className="flex items-center">
              <img
                className="w-[7px] h-[12px] mr-[20px] transition-transform duration-300 cursor-pointer"
                src="/icons/dropdownarrow-icon.svg"
                alt="arrow"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReferralPartnersList;
