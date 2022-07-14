import { GET_WEATHER_INFO } from "./schema";

// interfaces && types
import { TWeather } from "interfaces/weather";

export async function getWeatherInfo(
  lat: number,
  lon: number
): Promise<TWeather | { error: string }> {
  try {
    const { data } = await GET_WEATHER_INFO(lat, lon);

    return data.weather;
  } catch (error) {
    return { error: "Something went wrong, please try again." };
  }
}
