import React from "react";

import { BsThreeDotsVertical } from "react-icons/bs";
import { FaPlusCircle } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";

import "../../styles/components/admin/adminstatusbox.css";

const AdminStatusBox = () => {
  return (
    <div className="adminStatusBoxContainer">
      <div className="boxFlex">
        <h5>Total Mascotas en Adopcion</h5>
        <BsThreeDotsVertical />
      </div>
      <div className="boxFlex">
        <div className="margin">
          <div className="iconPadding">
            <FaPlusCircle />
          </div>
          <p className="boldText">34</p>
        </div>
        <div className="margin">
          <FaArrowUp />
          <p>34.5%</p>
        </div>
      </div>
      <p className="compareDate">Comparado con 24 de Octubre</p>
    </div>
  );
};

export default AdminStatusBox;
