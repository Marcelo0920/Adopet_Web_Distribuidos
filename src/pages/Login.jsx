import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../actions/auth";

import logo from "../assets/logo.png";
import "../styles/pagestyles/login.css";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onSubmit = async (e) => {
    e.preventDefault();

    login(email, password);
  };

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  //redirecting if logged
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="contain">
      <div className="form-container">
        <div className="logo">
          <Link to="/">
            <img src={logo} />
          </Link>
        </div>
        <div className="form-title">
          <h2 className="black-text ">Adopta a un perrito en tu zona</h2>
        </div>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <p className="black-text register-link">
            Eres nuevo? Create una cuenta!
          </p>
          <div className="form-input">
            <p className="black-text ">Correo electronico</p>
            <input
              type="email"
              placeholder="ejemplo@gmail.com"
              value={email}
              required
              onChange={(e) => onChange(e)}
              name="email"
            />
          </div>
          <div className="form-input">
            <p className="black-text ">Correo electronico</p>
            <input
              type="password"
              placeholder="contrasenia123"
              name="password"
              value={password}
              onChange={(e) => onChange(e)}
            />
          </div>
          <div className="button-login">
            <button type="submit" value="Login">
              Iniciar Sesion
            </button>
          </div>
        </form>
      </div>
      <div className="hero-login">
        <div className="hero-box">
          <h2>Huesitos</h2>
          <p>
            “Huesitos es un perrito muy juguetón y energético. Cada mañana, al
            despertar, corretea por toda la casa, jugando con cualquier cosa que
            encuentre a su paso”
          </p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

export default connect(mapStateToProps, { login })(Login);
