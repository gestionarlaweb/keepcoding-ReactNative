import axios from 'axios';
import {BASE_URL} from '../config/api';
// Para la paginación
import qs from 'qs';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

export const getApi = () => {
  const url = '/api/characters';
  return instance.get(url);
};

// Con paginación
/*
export const getApi = params => {
  const url = `/api/characters?${qs.stringify(params, {skipNulls: true})}`;
  return instance.get(url);
};
*/
