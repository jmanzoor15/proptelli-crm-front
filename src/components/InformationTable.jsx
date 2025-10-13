import React from "react";

const InformationTable = ({ fields}) => {
 return (
    <div className="w-full">
      <div className="md:border md:border-gray-200 bg-white md:rounded-3xl md:px-4">
        {fields.map((field, index) => (
          <React.Fragment key={index}>
            <div className="flex justify-between py-3">
              <span className="text-black text-sm font-medium">{field.label}</span>
              <span className="font-normal text-sm text-black">
                {typeof field.value === "boolean"
                  ? field.value
                    ? "YES"
                    : "NO"
                  : field.value}
              </span>
            </div>
            {index !== fields.length - 1 && (
              <hr className="border-gray-200" />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default InformationTable;