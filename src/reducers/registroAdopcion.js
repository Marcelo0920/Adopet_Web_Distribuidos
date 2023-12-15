import {
  GET_REGISTRO_ADOPCION,
  GET_REGISTRO_ADOPCIONES,
  GET_REGISTRO_ADOPCIONES_ADMIN,
  POST_REGISTRO_ADOPCION,
  REGISTRO_ADOPCION_ERROR,
  UPDATE_REGISTRO_ADOPCION_ADMIN,
} from "../actions/types";

const initialState = {
  registros: [],
  registrosAdmin: [],
  registroAdmin: null,
  registro: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_REGISTRO_ADOPCIONES:
      return {
        ...state,
        registros: payload,
        loading: false,
      };
    case GET_REGISTRO_ADOPCIONES_ADMIN:
      return {
        ...state,
        registrosAdmin: payload,
        loading: false,
      };
    case UPDATE_REGISTRO_ADOPCION_ADMIN:
      return {
        ...state,
        registroAdmin: payload,
        loading: false,
      };
    case GET_REGISTRO_ADOPCION:
      return {
        ...state,
        registro: payload,
        loading: false,
      };
    case REGISTRO_ADOPCION_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case POST_REGISTRO_ADOPCION:
      return {
        ...state,
        registros: [payload, ...state.registros],
        loading: false,
      };

    default: {
      return state;
    }
  }
}
