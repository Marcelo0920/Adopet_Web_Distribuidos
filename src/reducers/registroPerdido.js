import {
  GET_REGISTRO_PERDIDO,
  GET_REGISTRO_PERDIDOS,
  GET_REGISTRO_PERDIDOS_ADMIN,
  POST_REGISTRO_PERDIDO,
  REGISTRO_PERDIDO_ERROR,
  UPDATE_REGISTRO_PERDIDO_ADMIN,
} from "../actions/types";

const initialState = {
  registrosPerdidos: [],
  registrosPerdidosAdmin: [],
  registroPerdidoAdmin: null,
  registroPerdido: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_REGISTRO_PERDIDO:
      return {
        ...state,
        registrosPerdido: payload,
        loading: false,
      };
    case GET_REGISTRO_PERDIDOS_ADMIN:
      return {
        ...state,
        registrosPerdidosAdmin: payload,
        loading: false,
      };

    case UPDATE_REGISTRO_PERDIDO_ADMIN:
      return {
        ...state,
        registroPerdidoAdmin: payload,
        loading: false,
      };
    case GET_REGISTRO_PERDIDOS:
      return {
        ...state,
        registrosPerdidos: payload,
        loading: false,
      };
    case POST_REGISTRO_PERDIDO:
      return {
        ...state,
        registrosPerdidos: [payload, ...state.registrosPerdidos],
      };
    case REGISTRO_PERDIDO_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default: {
      return state;
    }
  }
}
