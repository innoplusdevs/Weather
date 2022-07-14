import { axiosLocation } from "data/axios";
import { IPlace } from "interfaces/place";

export function GET_PLACE_INFO(place: string): Promise<IPlace> {
  return axiosLocation.get(`${place}.json`);
}
