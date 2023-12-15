import { combineReducers } from "@reduxjs/toolkit";
import registroAdopcion from "./registroAdopcion";
import registroPerdido from "./registroPerdido";
import auth from "./auth";

export default combineReducers({ registroAdopcion, registroPerdido, auth });
