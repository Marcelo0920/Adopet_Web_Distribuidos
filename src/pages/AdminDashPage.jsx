import React from "react";
import AdminLateralBar from "../components/Admin/AdminLateralBar";

import "../styles/pagestyles/admindash.css";
import AdminNavBar from "../components/Admin/AdminNavBar";
import PanelPrincipal from "../components/Admin/PanelPrincipal";

const AdminDashPage = () => {
  return (
    <div>
      <div className="adminDash">
        <AdminLateralBar />
        <div className="adminDashHeader">
          <AdminNavBar />
          <PanelPrincipal />
        </div>
      </div>
    </div>
  );
};

export default AdminDashPage;
