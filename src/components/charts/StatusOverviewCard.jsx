import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function StatusOverviewCard({
  title = "Status Overview",
  data = [
    { label: "Verified", value: 78, color: "#8b5cf6" }, 
    { label: "Pending", value: 34, color: "#A9832C" },  
    { label: "Rejected", value: 13, color: "#ef4444" }, 
  ],
}) {
  return (
    <Card className="w-full max-w-xs rounded-2xl p-2 shadow-sm border border-gray-200">
      <CardContent className="p-6  pl-8">
        {/* Header */}
        <h3 className="text-md font-semibold text-black mb-4">{title}</h3>

        {/* Status List */}
        <div className="space-y-3">
          {data.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between text-sm font-medium"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-[18px] h-[17px] rounded-5"
                  style={{ backgroundColor: item.color }}
                ></span>
                <span className="text-black text-xs font-normal">{item.label}</span>
              </div>
              <span className="text-gray-900">{item.value}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
