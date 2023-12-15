import axios from "axios";

import {
  DELETE_REGISTRO_PERDIDO,
  GET_REGISTRO_PERDIDO,
  GET_REGISTRO_PERDIDOS,
  GET_REGISTRO_PERDIDOS_ADMIN,
  POST_REGISTRO_PERDIDO,
  REGISTRO_PERDIDO_ERROR,
  UPDATE_REGISTRO_PERDIDO_ADMIN,
} from "./types";

//GET REGISTRO PERDIDOS
export const getRegistroPerdidos = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/perdido");

    dispatch({
      type: GET_REGISTRO_PERDIDOS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTRO_PERDIDO_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

//GET REGISTRO PERDIDOS ADMIN
export const getRegistroPerdidosAdmin = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/v1/perdido/admin");

    dispatch({
      type: GET_REGISTRO_PERDIDOS_ADMIN,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTRO_PERDIDO_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const updateRegistroPerdidoAdmin =
  (formData, id) => async (dispatch) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const res = await axios.put(
        `/api/v1/perdido/registroadmin/${id}`,
        formData,
        config
      );

      dispatch({
        type: UPDATE_REGISTRO_PERDIDO_ADMIN,
        payload: res.data,
      });
    } catch (error) {}
  };

export const addRegistroPerdido = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/v1/perdido", formData);

    dispatch({
      type: POST_REGISTRO_PERDIDO,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: REGISTRO_PERDIDO_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};

export const deleteRegistroPerdido = (id) => async (dispatch) => {
  try {
    await axios.delete(`/api/v1/adopcion/${id}`);

    dispatch({
      type: DELETE_REGISTRO_PERDIDO,
      payload: id,
    });
  } catch (error) {
    dispatch({
      type: REGISTRO_PERDIDO_ERROR,
      payload: {
        msg: error.response.statusText,
        status: error.response.status,
      },
    });
  }
};
