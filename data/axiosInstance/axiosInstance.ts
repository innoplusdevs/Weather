import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_OPEN_WEATHER_MAP_API_URL,
  params: {
    appid: process.env.NEXT_PUBLIC_OPEN_WEATHER_MAPS_API_KEY,
  },
});

export default axiosInstance;
