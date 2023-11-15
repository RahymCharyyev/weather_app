import axios from 'axios';
import { API_URL } from './urls';
import { ResponseType2 } from './types';
import './urls';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: false,
});

export const getWeather = async () => {
  const response = await api.get<ResponseType2>(
    `resources/weather/actions/list`
  );

  if (response.data) {
    return { data: response.data.records };
  } else {
    throw new Error('error');
  }
};
