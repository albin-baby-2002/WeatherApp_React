import { WEEK_DAYS } from "../Data";
import { TForeCastProps } from "../Types/PropsTypes";

const ForeCast: React.FC<TForeCastProps> = ({ data }) => {
  const today = new Date().getDay();

  const foreCastDays = WEEK_DAYS.slice(today, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, today + 2)
  );

  return (
    <div className=" px-6 flex  flex-col justify- h-full">
      <div className=" grid grid-cols-3 gap-6 h-full py-4  content-center">
        {data?.ForeCast.list.splice(0, 9).map((item, index) => (
          <div key={index}>
            <div className=" peer hover:hidden cursor-pointer">
              <div>
                <div className=" rounded-md  shadow-md z-10 bg-white px-5  py-3 mt-3  justify-between  items-center">
                  <div className=" flex  items-center justify-between">
                    <img
                      src={`/icons/${item.weather[0].icon}.png`}
                      className=" w-10"
                      alt=""
                    />

                    <p className=" mt-1">{foreCastDays[index]}</p>
                  </div>

                  <p className=" my-2 ">{item.weather[0].description}</p>
                  <p className=" my-2">
                    {item.main.temp_min} - {item.main.temp_max} °c
                  </p>
                </div>
              </div>
            </div>

            <div className=" hidden   peer-hover:block   rounded-md  bg-white  px-5  py-2 mt-3  justify-between  items-center h-full ">
              <div className=" flex flex-col h-full py-1 justify-between text-sm">
                <div className=" flex justify-between  ">
                  <div>
                    <p className=" text-center my-1">Pressure</p>
                    <p className=" text-center my-1 text-xs font-semibold">
                      {item.main.pressure} hPa
                    </p>
                  </div>

                  <div>
                    <p className=" text-center my-1">Humidity</p>
                    <p className=" text-center my-1 ext-xs font-semibold">
                      {item.main.humidity} hPa
                    </p>
                  </div>
                </div>

                <div className=" flex justify-between">
                  <div>
                    <p className=" text-center my-1">Clouds</p>
                    <p className=" text-center my-1 ext-xs font-semibold">
                      {item.clouds.all} %
                    </p>
                  </div>

                  <div>
                    <p className=" text-center my-1">Wind</p>
                    <p className=" text-center my-1 ext-xs font-semibold">
                      {item.wind.speed} m/s
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForeCast;
