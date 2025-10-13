

const MobileSearchBar = ({
  placeholder = "Search Roles ...",
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center w-full  h-50 px-4 bg-white border border-darkgreywhite rounded-full shadow-sm focus-within:ring-2 focus-within:ring-goldgreen">
      <img
        width={20}
        height={20}
        src={"src/assets/icons/search_icon.svg"}
        alt="Search"
      />{" "}
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full px-3 h-50 text-gray-700 placeholder-gray-400 bg-transparent border-none outline-none"
      />
    </div>
  );
};

export default MobileSearchBar;
