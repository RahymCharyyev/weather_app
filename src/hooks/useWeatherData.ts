import { useEffect, useState } from 'react';
import { WeatherResponseData } from '../api/types';
import { getWeather } from '../api';

export const useWeatherData = () => {
  const [data, setData] = useState<WeatherResponseData[]>();

  const fetchWeatherData = async () => {
    const response = await getWeather();
    const getData = response?.data.map((el) => el.params);
    setData(getData);
  };

  useEffect(() => {
    fetchWeatherData();
    const interval = setInterval(fetchWeatherData, 3 * 60 * 60 * 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};
