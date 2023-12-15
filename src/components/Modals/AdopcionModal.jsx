import React from "react";

import { connect } from "react-redux";
import { updateRegistroAdopcionAdmin } from "../../actions/registroAdopcion";
import PropTypes from "prop-types";

import { IoMdMale } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { IoFemale } from "react-icons/io5";
import { LuMapPin } from "react-icons/lu";
import { FaRegCommentDots } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

import "../../styles/components/adopcionModal.css";

const Modal = ({
  updateRegistroAdopcionAdmin,
  open,
  information,
  onClose,
  adminMode,
}) => {
  function handleResult(resultadoAdmin, id) {
    updateRegistroAdopcionAdmin(resultadoAdmin, id);
    onClose();
  }

  if (!open) return null;
  return (
    <div className="overlay">
      <div className="modalContainer">
        <p className="adopcionModalClose" onClick={onClose}>
          X
        </p>
        <div className="modalContent">
          <img
            className="adopcionModalImage"
            src={information.image ? information.image : "Imagen"}
          />
          <div className="adopcionModalTitle">
            <div className="adopcionModalContentTitle">
              <p className="adopcionModalText margin-right-15">
                {information.nombre ? information.nombre : "Information nombre"}
              </p>
              {(information.sexo = "hembra" ? <IoFemale /> : <IoMdMale />)}
            </div>
            <div className="adopcionModalContentTitle">
              <p className="adopcionModalText margin-right-15">Rescate</p>
              <div className="adopcionModalState"></div>
            </div>
          </div>

          <div className="adopcionModalLocation">
            <LuMapPin />
            <p className="adopcionModalText">Montero</p>
            <p className="adopcionModalText">5 km</p>
          </div>
          <div className="adopcionModalDatos">
            <div>
              <p className="adopcionModalText">
                {information.edad ? information.edad : "Information Edad"} años
              </p>
            </div>
            <div>
              <p className="adopcionModalText">
                {information.especie
                  ? information.especie
                  : "information especie"}
              </p>
            </div>
            <div>
              <p className="adopcionModalText">Activo</p>
            </div>
          </div>
          <p className="adopcionModalText adopcionModalDescription">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequatur laborum magnam est corporis voluptatibus animi omnis
            assumenda quasi, doloribus neque inventore veniam id illo harum
            beatae impedit, ad accusantium alias.
          </p>
          <div className="adopcionModalActions">
            {adminMode ? (
              <>
                <FaCheck
                  size={25}
                  onClick={() =>
                    handleResult({
                      resultadoAdmin: "validado",
                      id: information.id,
                    })
                  }
                />
                <FaXmark
                  size={25}
                  onClick={() =>
                    handleResult({
                      resultadoAdmin: "rechazado",
                      id: information.id,
                    })
                  }
                />
              </>
            ) : (
              <>
                <FaRegHeart size={25} />
                <FaRegCommentDots size={25} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  updateRegistroAdopcionAdmin: PropTypes.func.isRequired,
};

export default connect(null, { updateRegistroAdopcionAdmin })(Modal);
