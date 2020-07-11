import axios from 'axios';
import {BASE_URL} from '../config/api';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

export const getApi = () => {
  // Soccer
  // const url = '/search/shows?q=soccer';

  // Tv Video
  //const url = '/v1';
  const url = '/api/characters';
  return instance.get(url);
};
