import React from "react";

const Header = () => {
  return (
    <header className="bg-greywhite shadow-sm w-full flex justify-between">
      <div className="flex items-center pl-60">
        <div className="pt-12">
          <img
            width={131}
            height={45}
            src={"src/assets/Proptelli_Logo.svg"}
          />
        </div>
      </div>
      <div className="flex items-center justify-between pt-28 pb-20 pr-74">
        <div className="flex items-center gap-4">
          <button className="p-2 bg-white border border-darkgreywhite hover:bg-gray-100 rounded-full w-50 h-50 flex justify-center transition-colors">
            <img
              width={24}
              height={24}
              src={"src/assets/icons/search_icon.svg"}
            />
          </button>

          <button className="relative p-2 bg-white border border-darkgreywhite hover:bg-gray-100 w-50 h-50 flex justify-center items-center rounded-full transition-colors">
             <img width={21} height={21} src={"src/assets/icons/notification_icon.svg"} alt="Notifications"/>
            <span className="absolute -top-1 -right-1 bg-yellow-500 text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">
              3
            </span>
          </button>

          <button className="relative ">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
              alt="Profile"
              className="w-10 h-10 rounded-full w-[50px] h-[50px] flex justify-center object-cover border-4 border-gray-200 hover:border-yellow-500 transition-colors"
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;