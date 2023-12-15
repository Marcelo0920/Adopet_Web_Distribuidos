import React from "react";
import { Link } from "react-router-dom";

import { MdOutlineDashboard } from "react-icons/md";
import { VscFileSubmodule } from "react-icons/vsc";
import { PiFilesLight } from "react-icons/pi";

import logo from "../../assets/logo.png";

import "../../styles/components/admin/adminlateralbar.css";

const AdminLateralBar = () => {
  return (
    <div className="lateralBar">
      <Link to="/">
        <img src={logo} />
      </Link>
      <div className="lateralItem">
        <MdOutlineDashboard size={20} />
        <p>
          <Link to="/admin"> Panel Principal </Link>
        </p>
      </div>
      <div className="lateralItem">
        <VscFileSubmodule size={20} />
        <p>
          <Link to="/admin/registrospendientes">Registros Pendientes</Link>
        </p>
      </div>
      <div className="lateralItem">
        <PiFilesLight size={20} />
        <p>
          <Link to="/admin/registrospasados">Registros Pasados</Link>
        </p>
      </div>
    </div>
  );
};

export default AdminLateralBar;
