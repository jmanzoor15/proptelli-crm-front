import React from "react";

export default function UpdatesCard({
  badge = "Updates",
  date = "Aug 3, 2025",
  content = "Default content goes here.",
}) {
  return (
    <div className="max-w-md mx-auto p-6">
      <div
        className="bg-white rounded-2xl shadow-sm overflow-visible 
                   min-w-[344px] min-h-[155px] flex flex-col justify-between"
      >
        {/* Header */}
        <div className="flex gap-3 px-4 pt-4">
          <button
            className="px-5 py-2 text-sm  rounded-full bg-goldgreen text-white shadow-md"
          >
            {badge}
          </button>

          <div className="text-xs text-gray-400 self-center">
            {date}
          </div>
        </div>

        <div className="px-4 py-4 font-medium ">
          <p className="text-gray-800 text-base leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
}
