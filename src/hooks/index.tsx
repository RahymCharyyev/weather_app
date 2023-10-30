import { useEffect, useState } from 'react';
import { WeatherResponseData } from '../api/types';
import { getWeather } from '../api';
export const useWeatherData = () => {
  const [data, setData] = useState<WeatherResponseData[]>();

  const fetchWeatherData = async () => {
    try {
      const response = await getWeather();
      setData(response);
    } catch (error) {
      console.error('Error fetching weather data', error);
    }
  };

  useEffect(() => {
    fetchWeatherData();
    const interval = setInterval(fetchWeatherData, 3 * 60 * 60 * 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return data;
};
