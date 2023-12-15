import axios from "axios";

import {
  GET_REGISTRO_ADOPCION,
  GET_REGISTRO_ADOPCIONES,
  POST_REGISTRO_ADOPCION,
  REGISTRO_ADOPCION_ERROR,
  DELETE_REGISTRO_ADOPCION,
  GET_REGISTRO_ADOPCIONES_ADMIN,
  UPDATE_REGISTRO_ADOPCION_ADMIN,
} from "./types";

//GET REGISTRO ADOPCIONES
export const getRegistroAdopciones = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/adopcion");

    console.log(res);

    dispatch({
      type: GET_REGISTRO_ADOPCIONES,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTRO_ADOPCION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//GET REGISTRO ADOPCIONES ADMIN
export const getRegistroAdopcionesAdmin = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/adopcion/admin");

    console.log(res);

    dispatch({
      type: GET_REGISTRO_ADOPCIONES_ADMIN,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTRO_ADOPCION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const updateRegistroAdopcionAdmin = (result) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    console.log({ resultadoAdmin: result.resultadoAdmin });

    const res = await axios.put(
      `/api/v1/adopcion/registroadmin/${result.id}`,
      { resultadoAdmin: result.resultadoAdmin },
      config
    );

    dispatch({
      type: UPDATE_REGISTRO_ADOPCION_ADMIN,
      payload: res.data,
    });
  } catch (error) {}
};

export const addRegistroAdopcion = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/adopcion", formData);

    dispatch({
      type: POST_REGISTRO_ADOPCION,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTRO_ADOPCION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const deleteRegistroAdopcion = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/adopcion/${id}`);

    dispatch({
      type: DELETE_REGISTRO_ADOPCION,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: REGISTRO_ADOPCION_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
