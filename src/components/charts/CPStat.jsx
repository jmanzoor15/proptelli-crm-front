import React from "react";
import StatBadge from "./StatBadge";
import { Card, CardContent } from "@/components/ui/card";

export default function StatCard({
  title = "Total CP",
  value = "1,850",
  percentage ,
  subtitle = "Last Week",
  showBadge = true
}) {
  return (
    <Card className="w-full max-w-xs rounded-2xl p-2 shadow-sm border border-gray-200">
      <CardContent className="p-6 pt-6 pl-8">
        {/* Title */}
        <h3 className="text-md font-medium text-black">{title}</h3>

        {/* Main value */}
        <p className="text-4xl font-bold text-black mt-1">{value}</p>

        {/* Footer section */}
        <div className="flex items-center gap-3 mt-4">
          {/* Stat badge */}
          {showBadge && percentage && (
          <div>
            <StatBadge value={percentage} />
          </div>
          )}

          {/* Subtitle */}
          <span className="text-xs text-black">{subtitle}</span>
        </div>
      </CardContent>
    </Card>
  );
}