import CPStatusCard from "../components/CPStatusCard";
import CPTable from "../components/CPTable";
import BackArrowButton from "../components/buttons/BackArrowButton";
import SearchInput from "../components/SearchInput ";
import FilterButton from "../components/buttons/FilterButton";
import SendMessageDropdown from "../components/SendMessageDropdown";
import EditMobileButton from "../components/buttons/EditMobileButton";
import PrimaryButton from "../components/buttons/PrimaryButton";
import TrashButton from "../components/buttons/TrashButton";
import ProfileCard from "../components/ProfileCard";
import InformationTable from "../components/InformationTable";
import BalanceCard from "../components/BalanceCard";
import ViewCard from "../components/ViewCard";
import ProfileCardDropdown from "../components/ProfileCardDropdown";
import ReferralPartnersList from "../components/ReferralPartnersList";

const CPProfileView = () => {
  const basicFields = [
    { label: "First Name", value: "Javed" },
    { label: "Last Name", value: "Leon" },
    {
      label: "Residence Address",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    },
    {
      label: "Office Address",
      value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.",
    },
    { label: "Secondary Number", value: "Not Provided" },
    { label: "CP Code", value: "CKRE-AA-BB-CC (jonas)" },
    { label: "Remarks", value: "No Remarks" },
  ];

  const samplePartners = [
    {
      id: 1,
      name: "Alen Paul",
      email: "alenpaul@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=12",
      status: "Verified",
    },
    {
      id: 2,
      name: "Ariana",
      email: "ariana@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=5",
      status: "Verified",
    },
    {
      id: 3,
      name: "Jake",
      email: "jake@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=13",
      status: "Pending",
    },
    {
      id: 4,
      name: "Jessy",
      email: "jessy@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=9",
      status: "Rejected",
    },
    {
      id: 5,
      name: "Paul",
      email: "Pauli@gmail.com",
      avatar: "https://i.pravatar.cc/150?img=15",
      status: "Verified",
    },
  ];

  const handleViewAll = () => {
    console.log("View All clicked");
  };

  const handlePartnerClick = (partner) => {
    console.log("Partner clicked:", partner);
  };
  return (
    <div className="pt-25 px-39  bg-white pb-25 ">
      {/* Header Section */}
      <div className="mb-28">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="hidden md:block pt-2">
              <BackArrowButton />
            </div>
            <h1 className="text-2.5xl font-semibold text-black">
              Channel Partners Details
            </h1>
          </div>
          <div className=" flex gap-3">
            <SendMessageDropdown />
            <PrimaryButton
              label="Edit CP"
              onClick={() => alert("Edit Role Clicked!")}
              src={"/icons/edit-w-icon.svg"}
              bgcolor={"black"}
              iconheight={24}
              iconwidth={24}
            />
            <TrashButton onClick={() => alert("Clicked...")} />
          </div>
        </div>
        <div className="pt-3">
          <ProfileCard />
        </div>
        <div className=" pt-[35px]">
          <h3 className="md:text-xl text-lg md:pl-1 font-semibold text-black md:mb-10">
            User Overview
          </h3>
          <div className="flex gap-[63px]">
            <InformationTable fields={basicFields} />
            <BalanceCard />
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[600px] md:mb-8">
        <div>
          <h3 className="md:text-xl text-lg md:pl-1 font-semibold text-black md:mb-10">
            User Overview
          </h3>
          <div className="flex gap-[22px]">
            <ViewCard title="Aadhaar Card" />
            <ViewCard title="PAN Card" />
            <ViewCard title="Other Documents" />
          </div>
        </div>
        <div>
          <h3 className="md:text-xl text-lg md:pl-1 ml-[18px] font-semibold text-black md:mb-10">
            BDM
          </h3>
          <div className="pl-[23px]">
          <ProfileCardDropdown
            name={"David Buttler"}
            profileImg={
              "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
            }
          />
          </div>
        </div>
      </div>
      <div className="pt-8 flex gap-[41px]">
      <ReferralPartnersList
        title="Referred Channel Partners"
        partners={samplePartners}
        onViewAll={handleViewAll}
        onPartnerClick={handlePartnerClick}
      />
      <ReferralPartnersList
        title="Referred Clients"
        partners={samplePartners}
        onViewAll={handleViewAll}
        onPartnerClick={handlePartnerClick}
      />
      </div>
    </div>
  );
};

export default CPProfileView;
