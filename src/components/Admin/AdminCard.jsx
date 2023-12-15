import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import "../../styles/components/admin/admincard.css";

const AdminCard = ({
  registro: { _id, image, nombre, edad, especie, raza, descripcion },
}) => {
  return (
    <article className="card">
      <img className="card__background" src={image[0]} />

      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__description">{nombre}</h2>
          <p className="text">{descripcion}</p>
        </div>
        <button className="card__button">Conocer mas</button>
      </div>
    </article>
  );
};

AdminCard.propTypes = {
  registro: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(AdminCard);
