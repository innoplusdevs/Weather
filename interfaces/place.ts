export interface IPlace {
  data: {
    type: string;
    query: string[];
    features: [
      {
        id: string;
        type: string;
        place_type: string[];
        relevance: number;
        properties: {
          foursquare: string;
          landmark: true;
          address: string;
          category: string;
        };
        text: string;
        place_name: string;
        center: number[];
        geometry: {
          coordinates: number[];
          type: string;
        };
        context: [
          {
            id: string;
            wikidata?: string;
            short_code?: string;
            text: string;
          }
        ];
      }
    ];
    attribution: string;
  };
}
