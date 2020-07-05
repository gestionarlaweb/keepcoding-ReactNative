import axios from 'axios';
import {BASE_URL} from '../config/api';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

export const getHouses = () => {
  // Soccer
  // const url = '/search/shows?q=soccer';

  // Tv Video
  const url = '/v1';
  return instance.get(url);
};
