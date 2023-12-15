import React from "react";

import PropTypes from "prop-types";
import { connect } from "react-redux";

import "../styles/pagestyles/card.css";

const Card = ({
  registro: { _id, image, nombre, edad, especie, raza, descripcion },
}) => {
  return (
    <article className="card">
      <img className="card__background" src={image[0]} />
      {console.log(image[0])}
      <div className="card__content | flow">
        <div className="card__content--container | flow">
          <h2 className="card__description">{nombre}</h2>
          <p>{descripcion}</p>
        </div>
        <button className="card__button">Conocer mas</button>
      </div>
    </article>
  );
};

Card.propTypes = {
  registro: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(Card);
