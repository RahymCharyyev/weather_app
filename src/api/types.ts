export interface SuccessResponse<T> {
  success: true;
  data: T;
}

export interface WeatherItemResponseData {
  place: string;
  weather_condition: string;
  wind_direction: string;
  air_pressure: number;
  temperature: string;
  wind_speed: number;
  humidity: number;
}

export interface ResponseType {
  success: boolean;
  data: WeatherItemResponseData[];
}

export interface ResponseType2 {
  records: {
    params: WeatherItemResponseData;
  }[];
}

export type WeatherResponseData = WeatherItemResponseData;
export type WeatherResponse = SuccessResponse<WeatherResponseData>;
