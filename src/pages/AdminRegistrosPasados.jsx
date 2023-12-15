import React from "react";
import AdminLateralBar from "../components/Admin/AdminLateralBar";

import "../styles/pagestyles/admindash.css";
import AdminNavBar from "../components/Admin/AdminNavBar";
import RegistrosPasados from "../components/Admin/RegistrosPasados";

const AdminRegistrosPasados = () => {
  return (
    <div>
      <div className="adminDash">
        <AdminLateralBar />
        <div className="adminDashHeader">
          <AdminNavBar />
          <RegistrosPasados />
        </div>
      </div>
    </div>
  );
};

export default AdminRegistrosPasados;
