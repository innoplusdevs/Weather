import { GET_PLACE_INFO } from "./schema";

interface IPlaceInfo {
  data?: {
    place: string;
    center: number[];
  };
  error?: string;
}

export async function getPlaceInfo(place: string): Promise<IPlaceInfo> {
  try {
    const { data } = await GET_PLACE_INFO(place);

    console.log(data, "place");

    return {
      data: {
        place: data.features[0].place_name,
        center: data.features[0].center,
      },
    };
  } catch (error) {
    return { error: "Something went wrong, please try again." };
  }
}
