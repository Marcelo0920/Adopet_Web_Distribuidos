import axios from "axios";
import {
  USER_LOADED,
  LOGIN_FAILED,
  LOGIN_SUCCCESS,
  LOG_OUT,
  AUTH_ERROR,
} from "./types";

import setAuthToken from "../utils/setAuthToken";

//LOAD USER
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get("/api/v1/user/me");

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//LOGIN
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post("/api/v1/user/login", body, config);

    dispatch({
      type: LOGIN_SUCCCESS,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    console.log(error);

    dispatch({
      type: LOGIN_FAILED,
    });
  }
};

//LOGOUT
export const logout = () => (dispatch) => {
  dispatch({ type: LOG_OUT });
};
