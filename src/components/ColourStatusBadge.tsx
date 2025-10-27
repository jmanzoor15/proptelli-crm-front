import React from "react";

// You can define getStatusColor here or import it from your utils
const getStatusColor = (status) => {
  switch (status?.toLowerCase()) {
    case "verified":
      return "bg-purple-600 text-white";
    case "pending":
      return " bg-pendingcolour text-white";
    case "rejected":
      return "bg-red-600 text-white";
    default:
      return "bg-gray-400 text-white";
  }
};

const ColourStatusBadge = ({ status }) => {
  return (
    <span
      className={`px-5 py-1.5 rounded-full text-xss font-normal ${getStatusColor(
        status
      )}`}
    >
      {status}
    </span>
  );
};

export default ColourStatusBadge;
