import React, { useState } from "react";
import { Eye, Edit2, Trash2 } from "lucide-react";
import IconButton from "./buttons/IconButton";
import ColourStatusBadge from "./ColourStatusBadge";

const CPTable = ({data,name}) => {
  const [selectedRows, setSelectedRows] = useState([]);
 

  const toggleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((row) => row.id));
    }
  };

  const toggleSelectRow = (id) => {
    if (selectedRows.includes(id)) {
      setSelectedRows(selectedRows.filter((rowId) => rowId !== id));
    } else {
      setSelectedRows([...selectedRows, id]);
    }
  };

 

  return (
    <div className="w-full min-h-screen">
      <div className=" mx-auto">
        <div className="bg-white rounded-full overflow-hidden">
          <table className="w-full">
            <thead className="w-full">
              <tr className="bg-gray-50 flex gap-[85px] ">
                <th className="px-6 py-4">
                  <input
                    type="checkbox"
                    checked={selectedRows.length === data.length}
                    onChange={toggleSelectAll}
                    className="w-4 h-4 border-gray-300 text-purple-600 focus:ring-purple-500 "
                  />
                </th>
                <th className="px-6 py-4 pl-[20px] text-base font-semibold text-black">
                  {name}
                </th>
                <th className="px-6 py-4 pl-[20px]  text-base font-semibold text-black">
                  Type
                </th>
                <th className="px-6 py-4 pl-[60px] text-base font-semibold text-black">
                  Contact
                </th>
                <th className="px-6 py-4 pl-[20px]  text-base font-semibold text-black">
                  Created on
                </th>
                <th className="px-6 py-4 pl-[20px] text-base font-semibold text-black">
                  BDM
                </th>
                <th className="px-6 py-4 pl-[20px] text-base font-semibold text-black">
                  Status
                </th>
                <th className="px-6 py-4 pl-[20px] text-base font-semibold text-black">
                  Actions
                </th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="bg-white overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <tbody className="bg-white">
                {data.map((row) => (
                  <tr
                    key={row.id}
                    className="border-t border-gray-100 hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        checked={selectedRows.includes(row.id)}
                        onChange={() => toggleSelectRow(row.id)}
                        className="w-4 h-4 rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                      />
                    </td>
                    <td className="px-6 py-3">
                      <div className="flex items-center">
                        <div className="relative">
                          <img
                            src={row.avatar}
                            alt={row.name}
                            className="h-[50px] w-[50px] rounded-full object-cover"
                          />
                          {row.verified && (
                            <div className="absolute -top-0.5 -right-0.5 bg-white rounded-full h-[18px] w-[18px]">
                              <img className="w-[25px] h-[25px]" src="/icons/verified-icon.svg"/>
                            </div>
                          )}
                        </div>
                        <span className="ml-3 text-base font-semibold text-black">
                          {row.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4 font-normal text-base text-black">
                      {row.type}
                    </td>
                    <td className="px-6 py-4 font-normal text-base text-black">
                      {row.contact}
                    </td>
                    <td className="px-6 py-4 font-normal text-base text-black">
                      {row.created}
                    </td>
                    <td className="px-6 py-4 font-normal text-base text-black">
                      {row.bdm}
                    </td>
                    <td className="px-6 py-4">
                     <ColourStatusBadge status={row.status}/>
                    </td>

                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                         <IconButton
                      icon={"/icons/black-eye.svg"}
                      alt="View"
                      onClick={() => alert("view clicked...")}
                    />
                    <IconButton
                      icon={"/icons/black-edit.svg"}
                      alt="Edit"
                      onClick={() => alert("edit clicked...")}
                    />
                    <IconButton
                      icon={"/icons/black-delete.svg"}
                      alt="Delete"
                      onClick={() => alert("Delete clicked...")}
                    />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CPTable;
