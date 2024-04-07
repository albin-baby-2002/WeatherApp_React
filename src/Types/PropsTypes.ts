import { TforeCast, TtodaysWeather } from "./StateTypes";

export interface TSearchProps {
  onSearchChange: (city: any) => void;
}

export interface TCurrentWeatherProps {
  data: TtodaysWeather | undefined;
}

export interface TForeCastProps {
  data: TforeCast | undefined;
}