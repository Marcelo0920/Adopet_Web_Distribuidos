import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import io from "socket.io-client";

import Home from "../pages/Home";
import Adopciones from "../pages/Adopciones";
import Perdidos from "../pages/Perdidos";
import Login from "../pages/Login";
import Cookies from "js-cookie";
import setAuthToken from "../utils/setAuthToken";

import store from "../store";
import { loadUser } from "../actions/auth";
import AdminDashPage from "../pages/AdminDashPage";
import AdminDashRegistrosPendientes from "../pages/AdminDashRegistrosPendientes";
import AdminRegistrosPasados from "../pages/AdminRegistrosPasados";

const socket = io("http://localhost:5000");

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adopciones" element={<Adopciones socket={socket} />} />
        <Route path="/perdidos" element={<Perdidos socket={socket} />} />
        <Route path="/admin" element={<AdminDashPage />} />
        <Route
          path="/admin/registrospendientes"
          element={<AdminDashRegistrosPendientes socket={socket} />}
        />
        <Route
          path="/admin/registrospasados"
          element={<AdminRegistrosPasados />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
