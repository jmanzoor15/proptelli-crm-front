import React from "react";
import TotalActiveCPCard from "../components/charts/TotalActiveCPCard";
import CPstat from "../components/charts/CPStat";
import StatusOverviewCard from "../components/charts/StatusOverviewCard";
import CommissionChartCard from "../components/charts/CommissionChartCard";
import NetRevenueCard from "../components/charts/net";
import CustomButton from "../components/buttons/Custombutton";
import ListButton from "../components/buttons/ListButton";
import TotalLeadsCard from "../components/charts/TotalLeadscard";

const ChannelPartner = () => {
  const leadsData = [
    { label: "Mon", value: 20 },
    { label: "Tue", value: 35 },
    { label: "Wed", value: 28 },
    { label: "Thu", value: 42 },
    { label: "Fri", value: 40 },
    { label: "Sat", value: 60 },
    { label: "Sun", value: 20 },
  ];

  const Netrev = [
    { name: "Mon", value: 60000 },
    { name: "Tue", value: 42000 },
    { name: "Wed", value: 88000 },
    { name: "Thu", value: 76000 },
    { name: "Fri", value: 52000 },
    { name: "Sat", value: 70000 },
    { name: "Sun", value: 86000 },
  ];

  const statusData = [
    { label: "Verified", value: 78, color: "#8b5cf6" },
    { label: "Pending", value: 34, color: "#b8860b" },
    { label: "Rejected", value: 13, color: "#ef4444" },
  ];

  const commissionData = [
    { day: "Mon", commission: 42000, deduction: 20000 },
    { day: "Tue", commission: 70000, deduction: 55000 },
    { day: "Wed", commission: 100000, deduction: 40000 },
    { day: "Thu", commission: 95000, deduction: 70000 },
    { day: "Fri", commission: 50000, deduction: 30000 },
    { day: "Sat", commission: 80000, deduction: 60000 },
    { day: "Sun", commission: 70000, deduction: 50000 },
  ];

  const CpData = {
    title: "Total Active CP",
    total: "34",
    percentage: "+23%",
    barColor: "#A9832C",
    bars: [
      { day: "Mon", heightPct: 58 },
      { day: "Tue", heightPct: 72 },
      { day: "Wed", heightPct: 78 },
      { day: "Thu", heightPct: 90 },
      { day: "Fri", heightPct: 67 },
      { day: "Sat", heightPct: 80 },
      { day: "Sun", heightPct: 86 },
    ],
  };

  const VopData = {
    title: "Total VOP Sold",
    total: "$3,494,290",
    percentage: "+14%",
    barColor: "#2563eb",
    bars: [
      { day: "Mon", heightPct: 60 },
      { day: "Tue", heightPct: 50 },
      { day: "Wed", heightPct: 85 },
      { day: "Thu", heightPct: 70 },
      { day: "Fri", heightPct: 75 },
      { day: "Sat", heightPct: 55 },
      { day: "Sun", heightPct: 35 },
    ],
  };

  return (
    <div className="bg-white p-8 space-y-8 ">
       <h1 className="text-xl font-semibold">CP Dashboard</h1>
      {/* ====== Top Bar ====== */}
      <div className="flex flex-wrap items-center gap-4">
        <ListButton label="Time Period" buttonWidth={239} />
        <ListButton label="Country" buttonWidth={239} />
        <ListButton label="State" buttonWidth={220} />
        <ListButton label="City" buttonWidth={220} />
        <ListButton label="Branch" buttonWidth={232} />
        <CustomButton label="Apply" />
      </div>

      {/* ====== Summary Stats ====== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <CPstat title="Total CP" value="450" percentage="+12%" subtitle="Last Week" />
        <CPstat title="Total Individual CP" value="256" percentage="+17%" subtitle="Last Week" />
        <CPstat title="Total Company CP" value="194" percentage="+14%" subtitle="Last Week" />
        <CPstat title="Total BDM" value="22" subtitle="Across all Region" />
        <StatusOverviewCard title="Status Overview" data={statusData} />
      </div>

      {/* ====== Middle Charts ====== */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <TotalActiveCPCard {...CpData} />
        <TotalLeadsCard
          title="Total Leads Received"
          percentage="+16%"
          subtitle="Last Week"
          data={leadsData}
          lineColor="#8b5cf6"
        />
        <TotalActiveCPCard {...VopData} roundedBars={false} />
      </div>

      {/* ====== Bottom Charts ====== */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CommissionChartCard
          title1="Gross Commission"
          title2="Deductions"
          value1="$4,734,049"
          value2="$15,089"
          subtitle="Last Week"
          percentage="+17%"
          bars={commissionData}
          maxValue={100000}
          color1="#2563eb"
          color2="#d1d5db"
        />
        <NetRevenueCard
          title="Net Revenue"
          value="$9,990,300"
          subtitle="Last Week"
          percentage="+47%"
          data={Netrev}
        />
      </div>
    </div>
  );
};

export default ChannelPartner;
