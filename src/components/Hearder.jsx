import React from "react";
import { Link } from "react-router-dom";

import "../styles/header.css";
import { IoIosNotifications } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import logo from "../assets/logo.png";
import { connect } from "react-redux";

const Hearder = ({ isAuthenticated }) => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo} />
        </Link>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <Link className="link">Nuestros servicios</Link>
          </li>
          <li>
            <Link className="link">Sobre nosotros</Link>
          </li>
          <li>
            <Link to="/adopciones" className="link">
              Adopciones
            </Link>
          </li>
          <li>
            <Link to="/perdidos" className="link">
              Perdidos
            </Link>
          </li>
          <li>
            <Link className="link">Contacto</Link>
          </li>
        </ul>
      </nav>
      {!isAuthenticated ? (
        <div className="btn-wrap">
          <Link to="/login" className="btn">
            <button>Iniciar Sesion</button>
          </Link>
          <Link className="btn">
            <button>Registrarse</button>
          </Link>
        </div>
      ) : (
        <div className="logged">
          <div className="notification">
            <IoIosNotifications size={25} />
          </div>
          <div className="user">
            <FaRegUserCircle size={25} />
          </div>
        </div>
      )}
    </header>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {})(Hearder);
