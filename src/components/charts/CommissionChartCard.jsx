import React from "react";
import StatBadge from "./StatBadge";
import { Card, CardContent } from "@/components/ui/card";

export default function CommissionChartCard({
  title1 = "Gross Commission",
  title2 = "Deductions",
  value1 = "$13,785,089",
  value2 = "$85,089",
  subtitle = "Last Week",
  percentage = "+17%",
  bars = [
    { day: "Mon", commission: 70000, deduction: 65000 },
    { day: "Tue", commission: 90000, deduction: 75000 },
    { day: "Wed", commission: 50000, deduction: 45000 },
    { day: "Thu", commission: 70000, deduction: 60000 },
    { day: "Fri", commission: 30000, deduction: 25000 },
    { day: "Sat", commission: 50000, deduction: 42000 },
    { day: "Sun", commission: 85000, deduction: 65000 },
  ],
  maxValue = 100000,
  color1 = "#2563eb", // blue
  color2 = "#d1d5db", // light gray
}) {
  const ticks = [100000, 80000, 60000, 40000, 20000, 0];
  const gutterWidth = 64; // y-axis width
  const gridHeight = 240;
  const totalHeight = 300;

  const toPx = (val) => `${(val / maxValue) * gridHeight}px`;

  return (
    <Card className="w-full rounded-2xl p-2 shadow-sm border border-gray-200">
      <CardContent className="p-6">
        {/* === Header === */}
        <div className="flex items-start justify-between">
          <div className="flex gap-12">
            <div>
              <h3 className="text-sm font-semibold text-gray-900">{title1}</h3>
              <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1">{value1}</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-900">{title2}</h3>
              <p className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-1">{value2}</p>
            </div>
          </div>
          <div className="flex flex-col items-end sm:items-center sm:flex-row gap-2">
            <span className="text-xs text-black">{subtitle}</span>
            <StatBadge value={percentage} />
          </div>
        </div>

        {/* === Chart === */}
        <div className="relative mt-6" style={{ height: totalHeight }}>
          {/* Grid Layer */}
          <div className="absolute inset-0 flex z-0" style={{ height: gridHeight }}>
            {/* Y-axis labels */}
            <div style={{ width: gutterWidth }} className="pr-2">
              <div className="h-full flex flex-col justify-between">
                {ticks.map((t) => (
                  <div key={t} className="text-xs text-gray-400">{`$${t === 0 ? "0k" : Math.round(t / 1000) + "k"}`}</div>
                ))}
              </div>
            </div>

            {/* Grid lines */}
            <div className="flex-1 relative">
              {ticks.map((t, i) => {
                const percentFromTop = (1 - t / ticks[0]) * 100;
                return (
                  <div
                    key={t}
                    className={`absolute left-0 right-0 ${
                      i === ticks.length - 1
                        ? "border-t border-gray-200"
                        : "border-t border-dashed border-gray-200"
                    }`}
                    style={{ top: `${percentFromTop}%` }}
                  />
                );
              })}
            </div>
          </div>

          {/* Bars Layer */}
          <div
            className="absolute flex justify-between z-10"
            style={{
              left: gutterWidth,
              right: 20,
              bottom: 32, // visually matches grid base
              height: gridHeight,
              alignItems: "flex-end",
            }}
          >
            {bars.map((b) => (
              <div key={b.day} className="flex flex-col items-center justify-end flex-1">
                <div className="flex items-end gap-1 justify-center">
                  <div
                    style={{
                      height: toPx(b.commission),
                      width: 18,
                      borderTopLeftRadius: 6,
                    borderTopRightRadius: 6,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                      backgroundColor: color1,
                      transition: "height 0.3s ease",
                    }}
                  />
                  <div
                    style={{
                      height: toPx(b.deduction),
                      width: 18,
                      borderTopLeftRadius: 6,
                        borderTopRightRadius: 6,
                        borderBottomLeftRadius: 0,
                        borderBottomRightRadius: 0,
                      backgroundColor: color2,
                      transition: "height 0.3s ease",
                    }}
                  />
                </div>
                {/* Day labels */}
                <div className="text-xs text-gray-700 mt-3">{b.day}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
