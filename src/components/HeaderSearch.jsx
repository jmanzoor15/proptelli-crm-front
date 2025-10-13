import React, { useState } from "react";

const HeaderSearch = ({ placeholder = "Search leads, users ...", onChange, onSubmit }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleToggle = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (onChange) onChange(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(query);
  };

  return (
    <div className="flex items-center">
      <button
        onClick={handleToggle}
        className="p-2 bg-white border border-darkgreywhite hover:bg-gray-100 rounded-full w-12 h-12 flex justify-center items-center transition-colors"
      >
        <img width={20} height={20} src={"src/assets/icons/search_icon.svg"} alt="Search" />
      </button>

      {isOpen && (
        <form onSubmit={handleSubmit} className="ml-2 flex items-center">
          <input
            type="text"
            value={query}
            onChange={handleChange}
            placeholder={placeholder}
            className="px-3 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all w-64"
          />
        </form>
      )}
    </div>
  );
};

export default HeaderSearch;
