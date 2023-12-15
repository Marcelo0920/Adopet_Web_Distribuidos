import React, { useEffect, useState } from "react";
import Hearder from "../components/Hearder";
import SearchBar from "../components/SearchBar";

import { connect } from "react-redux";
import { getRegistroPerdidos } from "../actions/registroPerdido";
import PropTypes from "prop-types";

import "../styles/pagestyles/adopciones.css";
import Card from "../components/Card";

const Perdidos = ({
  socket,
  getRegistroPerdidos,
  registroPerdido: { registrosPerdidos, loading },
}) => {
  const [updatedRegistros, setUpdatedRegistros] = useState([]);

  useEffect(() => {
    setUpdatedRegistros(registrosPerdidos);
  }, [registrosPerdidos]);

  useEffect(() => {
    getRegistroPerdidos();

    socket.on("actualizacionRegistrosPerdido", (nuevoRegistro) => {
      setUpdatedRegistros((prevRegistros) => [
        nuevoRegistro.data,
        ...prevRegistros,
      ]);
    });

    return () => {
      socket.off("actualizacionRegistrosAdopcion");
    };
  }, [getRegistroPerdidos, socket]);

  return (
    <>
      <Hearder />
      <div className="content">
        <SearchBar />
        <div className="container">
          {updatedRegistros.map((registro) => (
            <Card key={registro.id} registro={registro} />
          ))}
        </div>
      </div>
    </>
  );
};

Perdidos.propTypes = {
  getRegistroPerdidos: PropTypes.func.isRequired,
  registroPerdido: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  registroPerdido: state.registroPerdido,
});

export default connect(mapStateToProps, { getRegistroPerdidos })(Perdidos);
