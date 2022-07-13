import { GET_WEATHER_INFO } from "./schema";

export async function getWeatherInfo(lat: string, lon: string) {
  console.log(process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_URL, "sass");

  try {
    const { data } = await GET_WEATHER_INFO(lat, lon);

    return data.weather;
  } catch (error) {
    return { error: "Something went wrong, please try again." };
  }
}
