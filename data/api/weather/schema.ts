import { axiosWeather } from "data/axios";

// interfaces && types
import { IWeather } from "interfaces/weather";

export function GET_WEATHER_INFO(lon: number, lat: number): Promise<IWeather> {
  return axiosWeather.get(`/`, {
    params: {
      lon,
      lat,
    },
  });
}
