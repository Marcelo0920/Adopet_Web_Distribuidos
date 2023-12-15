import React from "react";
import { Link } from "react-router-dom";

import img_cuidado from "../assets/cuidados.png";
import img_salud from "../assets/salud.png";
import img_extraviado from "../assets/extraviados.png";
import img_adoptar from "../assets/adopciones.png";
import img_limpieza from "../assets/limpieza.png";

import "../styles/iconbar.css";

const IconBar = () => {
  return (
    <div className="icon-bar">
      <div className="icon-bar-title">
        <h3>Encuentra lo que necesitas</h3>
      </div>
      <div className="icon-bar-list">
        <Link className="icon-bar-item">
          <img src={img_cuidado} />
          <p>Cuidados</p>
        </Link>
        <Link className="icon-bar-item">
          <img src={img_salud} />
          <p>Salud</p>
        </Link>
        <Link className="icon-bar-item">
          <img src={img_extraviado} />
          <p>Extraviados</p>
        </Link>
        <Link className="icon-bar-item">
          <img src={img_adoptar} />
          <p>Adopciones</p>
        </Link>
        <Link className="icon-bar-item">
          <img src={img_limpieza} />
          <p>Limpieza</p>
        </Link>
      </div>
    </div>
  );
};

export default IconBar;
