import { AxiosResponse } from "axios";
import { WeatherSeven } from "./../types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type SevenWeather = {
  weather: WeatherSeven;
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};

const initialState: SevenWeather = {
  weather: {
    main: {
      temp: 0,
      feels_like: 0,
      pressure: 0,
      humidity: 0,
    },
    wind: {
      speed: 0,
    },
    weather: [
      {
        description: "",
        icon: 0,
      },
    ],
  },
  isLoading: false,
  response: { status: 0, message: "" },
};

export const SevenWeatherSlice = createSlice({
  name: "current_weather",
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<WeatherSeven>>
    ) {
      state.isLoading = false;
      state.weather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<WeatherSeven>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default SevenWeatherSlice.reducer;
