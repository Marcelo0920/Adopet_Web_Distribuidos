import React from "react";

import { FaSearch } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

import "../../styles/components/admin/adminnavbar.css";

const AdminNavBar = () => {
  return (
    <div className="adminnavbar">
      <div className="navIcons">
        <FaSearch />
        <FaBell />
      </div>
      <div className="selectionButton">
        Admin
        <FaAngleDown />
      </div>
    </div>
  );
};

export default AdminNavBar;
