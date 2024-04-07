import { TCurrentWeatherProps } from "../Types/PropsTypes";

const CurrentWeather: React.FC<TCurrentWeatherProps> = ({ data }) => {
  return (
    <div className="  flex flex-col justify-around  w-[90%] max-w-[700px] mx-auto  mt-6 ps-1    rounded-md">
      <div className=" flex justify-between mb-12 ">
        <div className=" w-1/2 mt-3">
          <p className=" text-lg font-bold">{data?.city.split(" ")[0]}</p>
          <p className=" mt-2 font-semibold capitalize text-lg">
            {data?.TodaysWeather.weather[0].description}
          </p>
        </div>

        <div className=" w-1/3 flex   justify-end rounded-md bg-white">
          <img
            className=" w-[80px] object-contain"
            src={`/icons/${data?.TodaysWeather.weather[0].icon}.png`}
            alt=""
          />
        </div>
      </div>

      <div className=" flex justify-center ">
        <p className="  text-5xl font-bold">
          {data?.TodaysWeather.main.temp} °c
        </p>
      </div>

      <div className=" flex justify-center mt-6">
        <p className=" px-2"> Min : {data?.TodaysWeather.main.temp_min} °c </p>
        <p className=" px-2"> Max : {data?.TodaysWeather.main.temp_max} °c</p>
      </div>

      <div className=" flex mt-8 mx-3">
        <div className="   flex w-full  ">
          <div className=" flex  w-full justify-between   ">
            <div className=" flex flex-col ">
              <p className=" text-center py-2  font-semibold"> Feels Like </p>
              <p className=" text-center py-2">
                {data?.TodaysWeather.main.feels_like} °c
              </p>
            </div>

            <div className=" flex flex-col">
              <p className=" text-center py-2  font-semibold">Wind </p>
              <p className=" text-center py-2">
                {data?.TodaysWeather.wind.speed}m/s
              </p>
            </div>

            <div className=" flex flex-col">
              <p className=" text-center py-2  font-semibold">Humidity</p>
              <p className=" text-center py-2">
                {data?.TodaysWeather.main.humidity}%
              </p>
            </div>

            <div className=" flex flex-col">
              <p className=" text-center py-2  font-semibold">Pressure </p>

              <p className=" text-center py-2">
                {data?.TodaysWeather.main.pressure} hPa
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
