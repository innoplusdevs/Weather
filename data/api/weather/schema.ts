import axiosInstance from "data/axiosInstance";
import { IWeather } from "interfaces/weather";

export function GET_WEATHER_INFO(lat: string, lon: string): Promise<IWeather> {
  return axiosInstance.get(`/`, {
    params: {
      lat,
      lon,
    },
  });
}
