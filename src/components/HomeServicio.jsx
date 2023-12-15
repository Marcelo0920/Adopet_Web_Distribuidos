import React from "react";
import { Link } from "react-router-dom";

import img_servicio from "../assets/servicios3.png";
import "../styles/homeservicio.css";

const HomeServicio = () => {
  return (
    <div className="servicio-section">
      <div className="servicio-img">
        <img src={img_servicio} />
      </div>
      <div className="servicio-title">
        <h3>Descubre los mejores servicios para tu mejor amigo</h3>
        <p>
          Sweet roll ice cream powder candy canes ice cream donut pudding
          biscuit ice cream. Cupcake tootsie roll sugar plum danish pudding
          fruitcake cheesecake jelly-o. Pie muffin topping cake. Pudding biscuit
          caramels topb
        </p>
        <Link className="btn">
          <button>Explorar mas</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServicio;
