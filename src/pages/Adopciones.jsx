import React, { useEffect, useState } from "react";
import Hearder from "../components/Hearder";
import SearchBar from "../components/SearchBar";

import { connect } from "react-redux";
import { getRegistroAdopciones } from "../actions/registroAdopcion";
import PropTypes from "prop-types";

import "../styles/pagestyles/adopciones.css";
import Card from "../components/Card";
import Modal from "../components/Modals/AdopcionModal";

const Adopciones = ({
  socket,
  getRegistroAdopciones,
  registroAdopcion: { registros, loading },
}) => {
  const [updatedRegistros, setUpdatedRegistros] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalInformation, setModalInformation] = useState();

  useEffect(() => {
    setUpdatedRegistros(registros);
  }, [registros]);

  useEffect(() => {
    getRegistroAdopciones();

    socket.on("actualizacionRegistrosAdopcion", (nuevosRegistros) => {
      console.log(nuevosRegistros);
      setUpdatedRegistros((prevRegistros) => [
        nuevosRegistros.data,
        ...prevRegistros,
      ]);
      //registros = [nuevosRegistros.data, ...registros];
    });

    return () => {
      socket.off("actualizacionRegistrosAdopcion");
    };
  }, [getRegistroAdopciones, socket]);

  function handleModal(registro) {
    setOpenModal(!openModal);
    const information = {
      id: registro._id,
      date: registro.date,
      edad: registro.edad,
      especie: registro.especie,
      image: registro.image,
      nombre: registro.nombre,
      raza: registro.raza,
      user: registro.user,
      descripcion: registro.descripcion,
    };
    setModalInformation(information);
  }

  return (
    <>
      <Modal
        information={modalInformation}
        open={openModal}
        onClose={() => setOpenModal(false)}
      />
      <Hearder />
      <div className="content">
        <SearchBar />
        <div className="container">
          {updatedRegistros.map((registro) => (
            <div onClick={() => handleModal(registro)}>
              <Card key={registro.id} registro={registro} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

Adopciones.propTypes = {
  getRegistroAdopciones: PropTypes.func.isRequired,
  registroAdopcion: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  registroAdopcion: state.registroAdopcion,
});

export default connect(mapStateToProps, { getRegistroAdopciones })(Adopciones);
