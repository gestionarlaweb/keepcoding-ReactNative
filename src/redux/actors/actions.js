import * as types from './types';
import * as api_axios from '../../api_axios';
import {Alert} from 'react-native';
import {Actions} from 'react-native-router-flux';

// Para la paginación ...me pierdo en Video 6 -1h29'-
/*
const LIMIT = 6;
const updatePage = page => {
  const action = {
    type: types.UPDATE_PAGE,
    payload: {page: page},
  };
};
export const initList = () => {
  return (dispatch, getState) => {
    dispatch(updateList([]));
    dispatch(updatePage(1));
    dispatch(fetchActors());
  };
};
*/

export function updateList(newList) {
  const action = {
    type: types.UPDATE_LIST,
    payload: {list: newList},
  };
  return action;
}

export const setItem = item => {
  const action = {
    type: types.SET_ITEM,
    payload: {item: item},
  };
  return action;
};

export function setLoading(loading) {
  const action = {
    type: types.SET_LOADING,
    payload: {loading: loading},
  };
  return action;
}

// Lo que había en la función _initList de home/view.js lo adaptamos aquí con REDUX
// DESDE AQUÍ TENEMOS ACCESO A NUESTRO ESTADO GLOBAL
export const fetchActors = () => {
  // REDUX THUNK
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      // Para la paginación
      //const params = {
      //  actor: item.char_id,
      //  limit: LIMIT,
      //  offset: LIMIT,
      //};
      //const getRes = await api_axios.getApi(params);
      const getRes = await api_axios.getApi();
      const list = getRes.data;
      dispatch(updateList(list));
    } catch (e) {
      Alert.alert('Error', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const postActor = data => {
  return async dispatch => {
    try {
      dispatch(setLoading(true));
      //const postActorRes = await api_axios.postActor(data);
      // Recargo los Actores
      dispatch(fetchActors());
      // Navegar a la pantalla anterior
      Actions.popTo('Home');
    } catch (e) {
      Alert.alert('Error', e.message || 'Ha ocurrido un error');
    } finally {
      dispatch(setLoading(false));
    }
  };
};
