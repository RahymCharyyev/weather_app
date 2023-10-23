import axios from 'axios';
import { API_URL } from './urls';
import { WeatherResponseData } from './types';
import './urls';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: false,
});

export const getWeather = async (street: string, API_KEY: string) => {
  const response = await api.get<WeatherResponseData>(
    `weather?q=${street}&units=metric&&appid=${API_KEY}`
  );
  return response.data;
};
