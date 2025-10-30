import React, { useEffect, useState } from "react";
import UserProfile from "./UserProfile";
import Notifications from "./Notifications";
import HeaderSearch from "./HeaderSearch";
import { useNavigate } from "react-router-dom";
import MobileSearchBar from "./MobileSearchBar";
import NotificationCenter from "../components/NotificationCenter";

const Header = ({ onMenuClick,pageTitle}) => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className={`${isMobile ? "bg-white" : "bg-greywhite"} shadow-sm w-full`}
    >
      {" "}
      {/* Mobile Header */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        <div className="">
          <button onClick={onMenuClick} className="p-2">
            <img src="/icons/menu-icon.svg" alt="menu" />
          </button>
          <span className="text-black text-base pl-3 font-semibold">{pageTitle}</span>
        </div>

        <div className="flex items-center gap-3">
          <NotificationCenter
          />
          <UserProfile onClick={() => alert("Profile clicked!")} />
        </div>
      </div>
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between">
        <div className="flex items-center pl-60">
          <button onClick={() => navigate("/")} className="pt-12">
            <img
              width={131}
              height={45}
              src={"/Proptelli_Logo.svg"}
              alt="Proptelli Logo"
            />
          </button>
        </div>
        <div className="flex items-center justify-between pt-28 pb-20 pr-74">
          <div className="flex items-center gap-4">
            <HeaderSearch
              placeholder="Search leads, users ..."
              onChange={(val) => console.log("Typing:", val)}
              onSubmit={(val) => console.log("Search submitted:", val)}
            />
            <div>
              <NotificationCenter />
            </div>
            <div className="relative">
              <UserProfile onClick={() => alert("Profile clicked!")} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;