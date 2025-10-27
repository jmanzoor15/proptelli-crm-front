import React from "react";

export default function StatBadge({
  value = "+17%",
  color = "#A9832C", 
}) {
  return (
    <div
      className="inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold"
      style={{
        borderColor: "#e5e7eb", // light gray border (#e5e7eb ≈ Tailwind gray-200)
        backgroundColor: "white",
        color: color,
      }}
    >
      <img src="/icons/icon_up.svg"/>
      <span>{value}</span>
    </div>
  );
}
