import axios from 'axios';
import { API_URL } from './urls';
import { ResponseType } from './types';
import './urls';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: false,
});

export const getWeather = async () => {
  const response = await api.get<ResponseType>(`/current-weather`);
  if (response.data.success) {
    return response.data.data;
  } else {
    throw new Error('error');
  }
};
