import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import StatBadge from "./StatBadge";

export default function NetRevenueCard({
  title = "Net Revenue",
  value = "$9,990,300",
  subtitle = "Last Week",
  percentage = "+47%",
  data = [
    { name: "Mon", value: 60000 },
    { name: "Tue", value: 42000 },
    { name: "Wed", value: 88000 },
    { name: "Thu", value: 76000 },
    { name: "Fri", value: 52000 },
    { name: "Sat", value: 70000 },
    { name: "Sun", value: 86000 },
  ],
}) {
  // Chart configuration
  const width = 700;
  const height = 240;
  const paddingX = 70;
  const paddingY = 30;

  const maxValue = 100000;
  const minValue = 0;

  // Scales
  const xScale = (index) =>
    (index / (data.length - 1)) * (width - paddingX * 2) + paddingX;

  const yScale = (val) =>
    height -
    paddingY -
    ((val - minValue) / (maxValue - minValue)) * (height - paddingY * 2);

  // Smooth cubic Bézier curve
  const getSmoothPath = (points) => {
    if (points.length < 2) return "";
    let d = `M${points[0].x},${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const p0 = points[i];
      const p1 = points[i + 1];
      const midX = (p0.x + p1.x) / 2;
      d += ` C${midX},${p0.y} ${midX},${p1.y} ${p1.x},${p1.y}`;
    }
    return d;
  };

  const points = data.map((d, i) => ({
    x: xScale(i),
    y: yScale(d.value),
  }));

  const path = getSmoothPath(points);
  const yTicks = [0, 20000, 40000, 60000, 80000, 100000];
  const xTicks = data.map((d) => d.name); // ✅ Fix: Define xTicks

  return (
    <Card className="w-full bg-white border rounded-2xl p-2 shadow-sm overflow-hidden">
      <CardContent className="p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="text-sm font-medium text-gray-700">{title}</h2>
            <p className="text-3xl sm:text-4xl font-bold mt-1">{value}</p>
          </div>
          <div className="flex flex-col items-end sm:items-center sm:flex-row gap-2">
            <span className="text-black text-xs">{subtitle}</span>
            <StatBadge value={percentage} />
          </div>
        </div>

        {/* Chart */}
        <div className="relative mt-4 w-full pt-4 h-64">
          <svg
            viewBox={`0 0 ${width} ${height + 20}`}
            preserveAspectRatio="none"
            className="w-full h-full"
          >
            {/* Grid lines */}
            {yTicks.map((v, i) => {
              const y = yScale(v);
              const isZeroLine = v === 0;

              return (
                <g key={i}>
                  <line
                    x1={paddingX}
                    x2={width - paddingX}
                    y1={y}
                    y2={y}
                    stroke="#E5E7EB"
                    strokeWidth={isZeroLine ? "1.5" : "1"}
                    strokeDasharray={isZeroLine ? "0" : "4 4"}
                  />
                  <text
                    x={paddingX - 45}
                    y={y + 4}
                    fontSize="12"
                    fill="#9CA3AF"
                    className="select-none"
                  >{`$${v / 1000}k`}</text>
                </g>
              );
            })}
{/* Vertical grid + X-axis labels + midlines */}
{xTicks.map((tick, i) => {
  const x = xScale(i);
  const nextX = i < xTicks.length - 1 ? xScale(i + 1) : null;
  const midX = nextX ? (x + nextX) / 2 : null;

  return (
    <g key={tick}>
      {/* Regular day line */}
      <line
        x1={x}
        x2={x}
        y1={paddingY}
        y2={height - paddingY}
        stroke="#E5E7EB"
        strokeWidth="1"
        
      />

            {/* Midpoint line (between two days) */}
            {midX && (
              <line
                x1={midX}
                x2={midX}
                y1={paddingY}
                y2={height - paddingY}
                stroke="#E5E7EB"
                strokeWidth="1"
              
              />
            )}

            {/* X-axis label */}
            <text
              x={x}
              y={height}
              textAnchor="middle"
              fontSize="12"
              fill="#000000"
              className="select-none"
            >
              {tick}
            </text>
          </g>
        );
      })}


            {/* Line path */}
            <path d={path} fill="none" stroke="#8B5CF6" strokeWidth="3" />

            {/* Data points */}
            {points.map((p, i) => (
              <circle
                key={i}
                cx={p.x}
                cy={p.y}
                r="4.5"
                fill="#8B5CF6"
                stroke="white"
                strokeWidth="1.5"
              />
            ))}
          </svg>
        </div>
      </CardContent>
    </Card>
  );
}
