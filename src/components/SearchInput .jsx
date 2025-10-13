import React, { useState } from "react";
import { Search } from "lucide-react";

const SearchInput = ({
  placeholder = "Search Roles ...",
  onChange,
  onSubmit,
}) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    if (onChange) onChange(e.target.value); // send value to parent
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(query); // send query on submit
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-center w-372 h-42  px-3 py-2 border border-gray-300 rounded-full bg-white"
    >
      <Search className="text-black" size={18} />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 ml-2 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
      />
    </form>
  );
};

export default SearchInput;
