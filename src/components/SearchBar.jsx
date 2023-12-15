import React from "react";

import "../styles/searchbar.css";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="box">
      <div className="search-box">
        <input type="text" placeholder="Escribe aqui..." />
        <label>
          <IoIosSearch className="search" size={3} />
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
