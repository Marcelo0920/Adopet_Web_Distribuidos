import React from "react";

import { IoCalendarOutline } from "react-icons/io5";

const AdminPanelInfo = () => {
  return (
    <div className="panelPrincipalInfo">
      <div>
        <h4>Panel</h4>
        <p>Inicio {">"} Panel</p>
      </div>
      <div className="panelPrincipalInfoIcons">
        <IoCalendarOutline />
        <p>Oct 11, 2023 - Nov 11, 2023</p>
      </div>
    </div>
  );
};

export default AdminPanelInfo;
