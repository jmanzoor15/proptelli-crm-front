import React from "react";
import StatBadge from "./StatBadge";

export default function BarChartCard({
  title = "Chart Title",
  total = 0,
  percentage = "+0%",
  subtitle = "Last Week",
  barColor = "#2563eb",
  bars = [],
  roundedBars = true, 
}) {
  const maxHeight = Math.max(...bars.map((b) => b.heightPct), 1);

  return (
    <div className="w-full bg-white rounded-2xl  border border-gray-200 p-5 flex flex-col justify-between h-[275px]">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-800">{title}</h3>
          <p className="text-[26px] font-bold text-gray-900 mt-2 leading-none">
            {total}
          </p>
        </div>
        <div className="flex  items-center gap-2">
          <span className="text-xs text-black">{subtitle}</span>
          <StatBadge value={percentage} />
        </div>
      </div>

      {/* Chart */}
      <div className="flex flex-col justify-end flex-1 mt-4">
        <div className="relative flex items-end justify-between px-3 gap-[10px] h-[101px]">
          {bars.map((b,) => (
            <div
              key={b.day}
              className="flex flex-col items-center justify-end h-full"
            >
              <div
                className={`w-[37px] transition-all duration-300 cursor-pointer $
                 ${roundedBars ? "rounded-t-lg" : ""}`} 
                style={{
                  height: `${(b.heightPct / maxHeight) * 100}%`,
                  backgroundColor: barColor,
                  minHeight: "4px",
                }}
                title={`${b.day}: ${b.heightPct}%`}
              ></div>
            </div>
          ))}

          {/* Baseline */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gray-200"></div>
        </div>

        {/* Day Labels */}
        <div className="flex justify-between px-3 mt-2">
          {bars.map((b) => (
            <span
              key={b.day}
              className="text-xs font-medium text-gray-600 text-center w-[37px]"
            >
              {b.day}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
