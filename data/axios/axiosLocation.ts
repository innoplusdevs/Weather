import axios from "axios";

const axiosLocation = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MAPBOX_API_URL,
  params: {
    access_token: process.env.NEXT_PUBLIC_MAPBOX_API_KEY,
    limit: 5,
    language: "en",
  },
});

export default axiosLocation;
