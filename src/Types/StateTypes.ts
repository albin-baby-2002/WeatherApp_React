import { TForeCastData, TTodaysWeatherData } from "./Types";

export interface TtodaysWeather {
  city: string;
  TodaysWeather: TTodaysWeatherData;
}

export interface TforeCast {
  city: string;
  ForeCast: TForeCastData;
}

export interface TSearch {
  value: string;
  label: string;
}
