import React from "react";
import RegistroPasadoCard from "./RegistroPasadoCard";

const RegistrosPasadosWrap = () => {
  return (
    <div className="registrosPasadosWrap">
      <h3>Registros Pasados</h3>
      <ul className="ulOptions">
        <li>Tipo Registro</li>
        <li>Nombre Mascota</li>
        <li>Fecha</li>
        <li>Nombre Usuario</li>
        <li>Estado</li>
        <li>Nombre Admin</li>
      </ul>
      <div>
        <RegistroPasadoCard />
        <RegistroPasadoCard />
        <RegistroPasadoCard />
        <RegistroPasadoCard />
        <RegistroPasadoCard />
        <RegistroPasadoCard />
      </div>
    </div>
  );
};

export default RegistrosPasadosWrap;
