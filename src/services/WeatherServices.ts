import { Weather, WeatherSeven } from "./../store/types/types";
import { AxiosResponse } from "axios";
import api from "../axios";

export class WeatherService {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<Weather>(`/weather?q=${city}&lang=ru`);
  }
}

export class WeatherServiceSeven {
  static getCurrentWeather(city: string): Promise<AxiosResponse<Weather>> {
    return api.get<WeatherSeven>(`/forecast/daily?q=${city}&lang=ru&cnt=7`);
  }
}
