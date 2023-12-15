import React from "react";

import "../../styles/components/admin/panelprincipal.css";

import AdminStatusBox from "./AdminStatusBox";
import AdminPanelInfo from "./AdminPanelInfo";

const PanelPrincipal = () => {
  return (
    <div className="panelPrincipalContainer">
      <AdminPanelInfo />
      <div className="adminStatusBox">
        <AdminStatusBox />
        <AdminStatusBox />
        <AdminStatusBox />
        <AdminStatusBox />
      </div>
    </div>
  );
};

export default PanelPrincipal;
