import React from "react";

import AdminPanelInfo from "./AdminPanelInfo";
import RegistrosPasadosWrap from "./RegistrosPasadosWrap";

const RegistrosPasados = () => {
  return (
    <div className="panelPrincipalContainer">
      <AdminPanelInfo />
      <RegistrosPasadosWrap />
    </div>
  );
};

export default RegistrosPasados;
