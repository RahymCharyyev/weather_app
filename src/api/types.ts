export interface SuccessResponse<T> {
  success: true;
  data: T;
}

export interface WeatherItemResponseData {
  id: number;
  place: string;
  weather_condition: string;
  wind_direction: string;
  air_pressure: number;
  temperature: string;
  wind_speed: number;
  humidity: number;
}

export interface ResponseData {
  records: {
    params: WeatherItemResponseData;
  }[];
}

export interface ResponseVideoData {
  records: {
    params: VideoResponseData;
  }[];
}

export interface VideoResponseData {
  id: number;
  filename: string;
}

export type WeatherResponseData = WeatherItemResponseData;
export type WeatherResponse = SuccessResponse<WeatherResponseData>;
