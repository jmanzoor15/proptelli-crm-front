import React from "react";
import StatBadge from "./StatBadge";

export default function TotalLeadsCard({
  title = "Total Leads Received",
  data = [],
  total = null,
  periodLabel = "Last Week",
  changePct = "+16%",
  accentColor = "#7C3AED", // customizable accent color (purple by default)
}) {
  const totalValue = total ?? data.reduce((s, d) => s + d.value, 0);

  // SVG chart setup
  const width = 640;
  const height = 240;
  const paddingLeft = 50;
  const paddingRight = 50;
  const paddingTop = 40;
  const paddingBottom = 60;

  const values = data.map((d) => d.value);
  const max = Math.max(...values) || 1;
  const min = 10;
  const innerWidth = width - paddingLeft - paddingRight;
  const innerHeight = height - paddingTop - paddingBottom;

  const points = data.map((d, i) => {
    const x = paddingLeft + (innerWidth * i) / (data.length - 1);
    const y =
      paddingTop + innerHeight - ((d.value - min) / (max - min)) * innerHeight;
    return { x, y };
  });

  // Bezier curve generator
  const pathD = (() => {
    if (points.length < 2) return "";
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const curr = points[i];
      const prev = points[i - 1];
      const next = points[i + 1];

      const cp1x = prev.x + (curr.x - prev.x) / 3;
      const cp1y = prev.y + (curr.y - prev.y) / 3;
      let cp2x, cp2y;
      if (next) {
        cp2x = curr.x - (next.x - curr.x) / 3;
        cp2y = curr.y - (next.y - curr.y) / 3;
      } else {
        cp2x = curr.x;
        cp2y = curr.y;
      }

      path += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${curr.x} ${curr.y}`;
    }
    return path;
  })();

  return (
    <div className="w-full max-w-2xl mx-auto ">
      <div className="bg-white rounded-3xl border border-gray-200 min-h-[270px] p-8">
        {/* Header */}
        <div className="flex flex-row items-start justify-between p-8 gap-4 mb-8">
          <div>
            <h2 className="text-sm font-medium text-gray-900">{title}</h2>
            <div className="mt-3 text-3xl font-bold text-gray-900">
              {totalValue}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-xs text-black">{periodLabel}</div>
            <div className="p-6 flex gap-4">
            <StatBadge value={changePct} />
            </div>
              
          </div>
        </div>

        {/* Chart */}
        <div className="w-full pt-[34px]">
          <svg
            width="100%"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="none"
            className="h-[120px]"
          >
            
            {points.map((p, i) => (
              <line
                key={`v-${i}`}
                x1={p.x}
                x2={p.x}
                y1={paddingTop}
                y2={height - paddingBottom}
                stroke="#F5F5F5"
                strokeWidth={1}
              />
            ))}

            <line
              x1={paddingLeft}
              y1={height - paddingBottom}
              x2={width - paddingRight}
              y2={height - paddingBottom}
              stroke="#F5F5F5"
              strokeWidth={1.5}
            />

            {/* Fill area */}
            <path
              d={`${pathD} L ${points[points.length - 1].x} ${
                height - paddingBottom
              } L ${points[0].x} ${height - paddingBottom} Z`}
              fill="url(#areaGradient)"
              stroke="none"
            />

            {/* Main line */}
            <path
              d={pathD}
              fill="none"
              stroke={accentColor}
              strokeWidth={3}
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {/* Circles */}
            {points.map((p, i) => (
              <circle
                key={`pt-${i}`}
                cx={p.x}
                cy={p.y}
                r={5.5}
                fill={accentColor}
                stroke="#FFFFFF"
                strokeWidth={2.5}
              />
            ))}

            {/* Labels */}
            {points.map((p, i) => (
              <text
                key={`lbl-${i}`}
                x={p.x}
                y={height - paddingBottom + 35}
                textAnchor="middle"
                fontSize={16}
                fontWeight="600"
                fill="#000000"
                fontFamily="system-ui, -apple-system, sans-serif"
                className="text-xs font-medium"
              >
                {data[i].label}
              </text>
            ))}
          </svg>
        </div>
      </div>
    </div>
  );
}

