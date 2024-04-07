import axios from "axios";
import CurrentWeather from "./Components/CurrentWeather";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./Api";
import { useState } from "react";
import { TForeCastData, TTodaysWeatherData } from "./Types/Types";
import ForeCast from "./Components/ForeCast";
import { TSearch, TforeCast, TtodaysWeather } from "./Types/StateTypes";
import Search from "./Components/Search";

function App() {
  // global state of weather and forecast

  const [todaysWeather, setTodaysWeather] = useState<TtodaysWeather>();

  const [forecast, setForecast] = useState<TforeCast>();

  // function to fetch data of newly selected location

  const handleOnSearchChange = async (city: TSearch) => {
    // destructued lat and lon

    const [latitude, longitude] = city.value.split(" ");

    try {
      const TodaysWeatherResp = await axios.get<TTodaysWeatherData>(
        `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`
      );

      const WeatherForeCastResp = await axios.get<TForeCastData>(
        `${WEATHER_API_URL}/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${WEATHER_API_KEY}`
      );

      setTodaysWeather({
        TodaysWeather: TodaysWeatherResp.data,
        city: city.label,
      });

      setForecast({ ForeCast: WeatherForeCastResp.data, city: city.label });
    } catch (err) {
      console.error("failed to get weather of selected location");
    }
  };

  return (
    <div className=" mx-auto   overflow-y-hidden  max-h-screen ">
      <div className=" flex">
        <div className=" w-[40%] px-10 pt-10 pb-4 grid grid-rows-[40px_1fr] ">
          <Search onSearchChange={handleOnSearchChange} />
          <CurrentWeather data={todaysWeather} />
        </div>

        <div className=" w-[60%] h-screen  bg-gray-200 ">
          <ForeCast data={forecast} />
        </div>
      </div>
    </div>
  );
}

export default App;
