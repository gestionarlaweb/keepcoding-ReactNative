import * as types from './types';
import * as api_axios from '../../api_axios';
import {Alert} from 'react-native';

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
