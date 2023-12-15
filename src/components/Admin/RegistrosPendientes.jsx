import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { getRegistroAdopcionesAdmin } from "../../actions/registroAdopcion";
import PropTypes from "prop-types";

import AdminPanelInfo from "./AdminPanelInfo";
import AdminCard from "./AdminCard";
import Modal from "../Modals/AdopcionModal";

const RegistrosPendientes = ({
  socket,
  getRegistroAdopcionesAdmin,
  registroAdopcion: { registrosAdmin, loading },
}) => {
  const [updatedRegistros, setUpdatedRegistros] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [modalInformation, setModalInformation] = useState();

  useEffect(() => {
    setUpdatedRegistros(registrosAdmin);
  }, [registrosAdmin]);

  useEffect(() => {
    getRegistroAdopcionesAdmin();

    console.log(updatedRegistros);

    socket.on("actualizacionRegistrosAdopcion", (nuevosRegistros) => {
      setUpdatedRegistros((prevRegistros) => [
        nuevosRegistros.data,
        ...prevRegistros,
      ]);
      //registros = [nuevosRegistros.data, ...registros];
    });

    return () => {
      socket.off("actualizacionRegistrosAdopcion");
    };
  }, [getRegistroAdopcionesAdmin, socket]);

  function handleModal(registrosAdmin) {
    setOpenModal(!openModal);
    const information = {
      id: registrosAdmin._id,
      date: registrosAdmin.date,
      edad: registrosAdmin.edad,
      especie: registrosAdmin.especie,
      image: registrosAdmin.image,
      nombre: registrosAdmin.nombre,
      raza: registrosAdmin.raza,
      user: registrosAdmin.user,
      descripcion: registrosAdmin.descripcion,
    };
    setModalInformation(information);
  }

  return (
    <>
      <Modal
        information={modalInformation}
        open={openModal}
        adminMode={true}
        onClose={() => setOpenModal(false)}
      />

      <div className="panelPrincipalContainer">
        <AdminPanelInfo />
        <div className="registrosPendientes">
          {updatedRegistros.map((registroAdmin) => (
            <div onClick={() => handleModal(registroAdmin)}>
              <AdminCard key={registroAdmin.id} registro={registroAdmin} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

RegistrosPendientes.propTypes = {
  getRegistroAdopcionesAdmin: PropTypes.func.isRequired,
  registroAdopcion: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  registroAdopcion: state.registroAdopcion,
});

export default connect(mapStateToProps, { getRegistroAdopcionesAdmin })(
  RegistrosPendientes
);
