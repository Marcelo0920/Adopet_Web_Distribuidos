import {
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAILED,
  LOGIN_SUCCCESS,
  LOG_OUT,
} from "../actions/types";

import Cookies from "js-cookie";

const initialState = {
  token: Cookies.get("token"),
  isAuthenticated: null,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    case LOGIN_SUCCCESS:
      localStorage.setItem("token", payload.token);
      return {
        ...state,
        payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_FAILED:
    case AUTH_ERROR:
    case LOG_OUT:
      Cookies.remove("token");
      return {
        ...state,
        token: null,
        isAuthenticated: false,
        loading: false,
      };
    default:
      return state;
  }
}
