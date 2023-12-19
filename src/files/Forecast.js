import React, { useEffect, useState } from "react";
import "./main.css";

export default function Forecast(props) {
  const [dailyData, setDailyData] = useState(null);

  useEffect(() => {
    if (!props.weather.isPending && props.weather?.data?.list && !dailyData) {
      let moo = [];
      for (let i = 8; i <= props.weather?.data?.list?.length; i += 8) {
        moo.push(props?.weather?.data?.list[i]);
      }
      setDailyData(moo);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.weather.data?.list, props.weather.isPending]);
  return (
    <>
      <div className="h-full w-full group cursor-pointer hover:duration-500 duration-500 group-hover:duration-500 overflow-hidden relative  rounded-2xl shadow-inner shadow-gray-700 flex justify-around items-center m-auto card-background ">
        <div className="after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-10 after:h-10 after:bg-blue-800 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-sky-800 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 flex flex-col font-extrabold text-6xl z-10"></div>
        <div className="w-full flex item-center justify-center ">
          <div className="w-full items-center justify-center m-auto">
            <div className="forecast text-slate-400 pt-3 pb-3 w-full">
              <div className="text-center">
                <div>
                  <span className="text-2xl ">4days forecast</span>
                </div>
              </div>
            </div>
            <ul>
              {dailyData &&
                dailyData.slice(0, 4).map((data) => (
                  <li key={Math.random()} className="pb-5">
                    <div className="flex w-full m-auto text-white">
                      <div className="w-1/5 h-1/5">
                        {/* eslint-disable-next-line jsx-a11y/alt-text */}
                        <img
                          key={Math.random()}
                          src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                        />
                      </div>
                      <div className="w-2/5 m-auto">
                        <p>
                          <span key={Math.random()} className="text-3xl">
                            {data?.main.temp_max}°C
                          </span>{" "}
                          /{" "}
                          <span
                            key={Math.random()}
                            className="text-sm text-gray-500"
                          >
                            {data?.main.temp_min}
                          </span>
                        </p>
                      </div>
                      <div className="w-2/5 m-auto">
                        <p key={Math.random()} className=" text-2xl w-full">
                          {data?.dt_txt.slice(0, 10)}
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
