import React from "react";

import AdminLateralBar from "../components/Admin/AdminLateralBar";
import AdminNavBar from "../components/Admin/AdminNavBar";
import RegistrosPendientes from "../components/Admin/RegistrosPendientes";

import "../styles/pagestyles/admindash.css";

const AdminDashRegistrosPendientes = ({ socket }) => {
  return (
    <div>
      <div className="adminDash">
        <AdminLateralBar />
        <div className="adminDashHeader">
          <AdminNavBar />
          <RegistrosPendientes socket={socket} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashRegistrosPendientes;
