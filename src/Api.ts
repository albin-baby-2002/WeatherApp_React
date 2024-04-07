export const geoUrl = "https://wft-geo-db.p.rapidapi.com/v1/geo/cities";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5/";

export const WEATHER_API_KEY = "5fae1469ba46d753969c8dd166049f98";

export const liveLocationOptionsCreater = (iso6709Format:string) => {
  return {
    method: "GET",
    url: "https://wft-geo-db.p.rapidapi.com/v1/geo/places",
    params: {
      location: `${iso6709Format}`,
    },
    headers: {
      "X-RapidAPI-Key": "a5e7cb4bcbmsh0359a619527d0d8p1adc28jsnd8fbc6062a01",
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
    },
  };
};

export const geoApioptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "a5e7cb4bcbmsh0359a619527d0d8p1adc28jsnd8fbc6062a01",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};
