import React from "react";

const SearchBar = ({ query, setQuery }) => {
  return (
    <input
      type="search"
      name="search"
      id="search"
      placeholder="Search here..."
      className=" w-full py-2 ps-2 outline-0"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
};

export default SearchBar;
