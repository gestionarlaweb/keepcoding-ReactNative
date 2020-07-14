// Importar los Types
import * as types from './types';
import {floor} from 'react-native-reanimated';

const initialState = {
  loading: false,
  list: [],
  item: null,
};

// STATE es el estado actual del reducer lo inicializo con valores por defecto, (Keys)
// ACTION la acción que queremos que se ejecute que cambiará los valores que le devuelvo un objeto vació para que no me pete
// REDUCER
// Por convención metemos los datos por (payload.)
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_LIST:
      return {...state, list: action.payload.list};
    // return {...state}  Significa que todos los state (keys) se van ir pegando una a una
    // seria lo mismo que poner return { loading: state.loading, list: state.list, item: state.item}

    case types.SET_LOADING:
      const newState = {...state, loading: action.payload.loading};
      return newState;

    case types.SET_ITEM:
      return {...state, item: action.payload.item};

    default:
      return state; // Al inicio de la App nos devolerá el state vacio
  }
};

export default reducer;
