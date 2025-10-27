import React from "react";

export default function NotDialog({

  description = "",
}) {
  const handleCancel = () => {
    console.log("Delete cancelled");
  };

  const handleDelete = () => {
    console.log("Role deleted");
  };

  return (
      <div className="bg-goldgreen  rounded-3xl shadow-xl p-7 max-w-[390px] h-[135px] w-full">
        <div className="text-white space-y-2 mb-6">
          <p className="text-sm font-normal leading-snug">{description}</p>
        </div>

        <div className="flex justify-end gap-3 mt-5">
          <button
            onClick={handleCancel}
            className=" bg-white text-gray-900 text-base font-normal py-1 px-7 rounded-full hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleDelete}
            className=" bg-gray-900 text-white text-sm   py-1 px-7 rounded-full hover:bg-black transition-colors"
          >
            Yes, Delete
          </button>
        
      </div>
    </div>
  );
}
