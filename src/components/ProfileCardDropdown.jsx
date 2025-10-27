import { useState } from "react";

export default function ProfileCardDropdown({ name, profileImg }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleArrow = (e) => {
  e.stopPropagation();
  setIsOpen(!isOpen); // Toggle between true and false
};
  return (
    <button onClick={toggleArrow} className="flex items-center justify-between w-full  min-h-[60px] p-[10px] bg-white rounded-15  hover:shadow-md transition-shadow cursor-pointer  border border-darkgreywhite">
      <div className="flex items-center gap-3">
        <img
          src={profileImg}
          alt="Profile"
          className="w-[40px] h-[40px] rounded-full object-cover"
        />
        <span className="text-black text-base font-semibold">{name}</span>
      </div>
      <img
        className={`w-[7px] h-[12px] mr-[23px] transition-transform duration-300 cursor-pointer ${
          isOpen ? "rotate-90" : "rotate-0"
        }`}
        src="/icons/dropdownarrow-icon.svg"
        alt="arrow"
      />
    </button>
  );
}
