import React, { useState } from "react";
import CPStatusCard from "../components/CPStatusCard";
import CPTable from "../components/CPTable";
import BackArrowButton from "../components/buttons/BackArrowButton";

const RefferalChannelPartners = () => {

   const [data] = useState([
    {
      id: 1,
      name: "Javed Leon",
      type: "Individual",
      contact: "javedleon@gmail.com",
      created: "Aug 2, 2025",
      bdm: "David Butler",
      status: "Verified",
      verified: true,
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Alexandra",
      type: "Individual",
      contact: "alexandra@gmail.com",
      created: "Aug 3, 2025",
      bdm: "David Butler",
      status: "Verified",
      verified: true,
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    {
      id: 3,
      name: "John Peter",
      type: "Company",
      contact: "johnpeter@gmail.com",
      created: "Aug 5, 2025",
      bdm: "David Butler",
      status: "Pending",
      verified: false,
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: 4,
      name: "Javed Leon",
      type: "Individual",
      contact: "javedleon@gmail.com",
      created: "Aug 2, 2025",
      bdm: "David Butler",
      status: "Rejected",
      verified: false,
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 5,
      name: "Javed Leon",
      type: "Individual",
      contact: "javedleon@gmail.com",
      created: "Aug 2, 2025",
      bdm: "David Butler",
      status: "Verified",
      verified: true,
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 6,
      name: "Alexandra",
      type: "Individual",
      contact: "alexandra@gmail.com",
      created: "Aug 3, 2025",
      bdm: "David Butler",
      status: "Verified",
      verified: true,
      avatar: "https://i.pravatar.cc/150?img=47",
    },
    {
      id: 7,
      name: "John Peter",
      type: "Company",
      contact: "johnpeter@gmail.com",
      created: "Aug 5, 2025",
      bdm: "David Butler",
      status: "Pending",
      verified: false,
      avatar: "https://i.pravatar.cc/150?img=13",
    },
    {
      id: 8,
      name: "Javed Leon",
      type: "Individual",
      contact: "javedleon@gmail.com",
      created: "Aug 2, 2025",
      bdm: "David Butler",
      status: "Rejected",
      verified: false,
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      id: 9,
      name: "Javed Leon",
      type: "Individual",
      contact: "javedleon@gmail.com",
      created: "Aug 2, 2025",
      bdm: "David Butler",
      status: "Verified",
      verified: true,
      avatar: "https://i.pravatar.cc/150?img=12",
    },
  ]);
  return (
    <div className="pt-25 px-39  bg-white pb-25 ">
      {/* Header Section */}
      <div className="mb-28">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="hidden md:block pt-2">
            <BackArrowButton/>
           </div>
            <h1 className="text-2.5xl font-semibold text-black">
              Refferal Channel Partners
            </h1>
          </div>
        </div>

        <div className="pt-24 flex gap-18">
          <CPStatusCard
            count={18}
            src={"/icons/total-cp-icon.svg"}
            title={"Total Referred CP"}
            iconBg={"#A9832C"}
            onClick={() => console.log("Clicked...")}
          />
          <CPStatusCard
            count={6}
            src={"/icons/verified-cp-icon.svg"}
            title={"Verified CP"}
            iconBg={"#FB8C00"}
            onClick={() => console.log("Clicked...")}
          />
          <CPStatusCard
            count={2}
            src={"/icons/pending-cp-icon.svg"}
            title={"Pending CP"}
            iconBg={"#2B63FF"}
            onClick={() => console.log("Clicked...")}
          />
          <CPStatusCard
            count={2}
            src={"/icons/rejected-cp-icon.svg"}
            title={"Rejected CP"}
            iconBg={"#FF0000"}
            onClick={() => console.log("Clicked...")}
          />
        </div>
        <div className=" pl-5 pt-4">
          <p className="text-md font-semibold text-black">Showing 10 out 18</p>
        </div>
        <div className="pt-4">
          <CPTable name={"CP Name"} data={data} />
        </div>
      </div>
    </div>
  );
};

export default RefferalChannelPartners;
