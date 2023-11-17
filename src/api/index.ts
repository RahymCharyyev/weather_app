import axios from 'axios';
import { API_URL } from './urls';
import { ResponseData, ResponseVideoData } from './types';
import './urls';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: false,
});

export const getWeather = async () => {
  const response = await api.get<ResponseData>(
    `resources/weather/actions/list`
  );

  if (response.data) {
    return { data: response.data.records };
  } else {
    throw new Error('error');
  }
};

export const getBackgroundVideo = async () => {
  const response = await api.get<ResponseVideoData>(
    `resources/video/actions/list`
  );
  if (response.data) {
    return { data: response.data.records };
  } else {
    throw new Error('error');
  }
};
