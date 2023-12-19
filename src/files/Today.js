import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faCloud,
  faDroplet,
  faIndustry,
  faUmbrella,
  faWind,
} from "@fortawesome/free-solid-svg-icons";
import "./main.css";

export default function Today(props) {
  const [posibilityRain, setPosibilityRain] = useState(null);
  const [time, setTime] = useState(null);
  useEffect(() => {
    if (props.weather.data.list) {
      props?.weather?.data?.list[0]?.rain
        ? setPosibilityRain(Object.values(props?.weather?.data?.list[0]?.rain))
        : setPosibilityRain(0);
      setTime(new Date(props?.weather?.data?.list[0]?.dt * 1000).getUTCHours());
    }
  }, [props.weather.data.list]);

  function positionSun(hour) {
    const sun = document.querySelector(".sun");
    const percentage = (hour - 6) / 12;
    const topPosition = percentage * 100;
    if (sun) sun.style.top = topPosition + "%";
  }
  const hour = time;
  positionSun(hour);

  return (
    <>

      <div className="group cursor-default hover:duration-500 duration-500 group-hover:duration-500 overflow-hidden relative  rounded-2xl shadow-inner shadow-gray-700 flex justify-around items-center m-0 card-background w-full h-full">
        <div className="after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-10 after:h-10 after:bg-blue-800 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-sky-700 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 flex flex-col font-extrabold text-6xl z-10"></div>
        {props.weather.data.list ? (
          <div className="lg:flex items-start justify-center w-full m-auto">
            {/* tempz&hum. */}
            <div className="lg:h-full p-5 lg:w-1/3 w-full m-auto">
              <div className="minicard-background w-full rounded-2xl p-4">
                <div className="m-auto p-2">
                  <span className="text-2xl text-white">Temperatue</span>
                  <div className="flex items-center justify-around">
                    <div className="w-1/4">
                      {/* eslint-disable-next-line jsx-a11y/alt-text */}
                      <img
                        src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
                      />
                    </div>
                    <div>
                      <span className="text-5xl text-slate-300">
                        {props.temperature}°C
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="minicard-background w-full rounded-2xl my-8 p-4">
                <div className="m-auto p-4">
                  <span className="text-2xl text-white">Humidity</span>
                  <div className="flex justify-around items-center">
                    <div className="w-1/2">
                      <span className="text-3xl text-slate-400">
                        {props.weather.data?.list[0]?.main.humidity}%
                      </span>
                      <div className="testround w-4/5 h-3 bg-slate-800 rounded">
                        <div
                          className="testround h-3 bg-slate-500 "
                          style={{
                            width: `${props.weather.data?.list[0]?.main.humidity}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                    <div className=" w-1/2 flex flex-col justify-start items-start">
                      <span>
                        <FontAwesomeIcon
                          icon={faDroplet}
                          style={{ color: "#6f90c4", fontSize: "1rem" }}
                        />
                      </span>
                      <span
                        className="text-xl
                       text-slate-400"
                      >
                        the humidity is{" "}
                        {props.weather.data?.list[0]?.main.humidity}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* wind&sun */}
            <div className="lg:h-full p-5 lg:w-1/3 w-full m-auto">
              <div className="minicard-background w-full rounded-2xl p-4">
                <div className="m-auto p-2">
                  <span className="text-2xl text-white">Wind Status</span>
                </div>
                <div className="text-slate-400">
                  <span>
                    <span>
                      <FontAwesomeIcon
                        icon={faWind}
                        style={{ color: "#6f90c4", fontSize: "1rem" }}
                      />
                    </span>
                    <span className="  text-xl pl-2">Speed: </span>
                  </span>
                  <span className="text-xl">
                    {props.weather.data?.list[0]?.wind.speed} km/hr
                  </span>
                </div>
                <div className="text-slate-400">
                  <span>
                    <span>
                      <FontAwesomeIcon
                        icon={faArrowUp}
                        style={{
                          color: "#6f90c4",
                          fontSize: "1rem",
                          transform: `rotateZ(${props.weather.data?.list[0]?.wind.deg}deg)`,
                        }}
                      />
                    </span>
                    <span className="  text-xl pl-2">Degree: </span>
                  </span>
                  <span>{props.weather.data?.list[0]?.wind.deg}°</span>
                </div>
                <div className="text-slate-400">
                  <span>
                    <span>
                      <FontAwesomeIcon
                        icon={faIndustry}
                        style={{
                          color: "#6f90c4",
                          fontSize: "1rem",
                        }}
                      />
                    </span>
                    <span className="text-xl pl-2">Gust: </span>
                  </span>
                  <span>{props.weather.data?.list[0]?.wind.gust}</span>
                </div>
              </div>
              <div className="minicard-background w-full rounded-2xl my-8 p-4">
                <div className="m-auto p-2 mb-5">
                  <span className="text-2xl text-white ">Sun position</span>
                </div>
                <div className="half-circle overflow-hidden m-auto">
                  <div className="sun">
                  </div>
                </div>
              </div>
            </div>
            {/* rain&clouds */}
            <div className="lg:h-full p-5 lg:w-1/3 w-full m-auto">
              <div className="minicard-background w-full rounded-2xl my-8 p-4">
                <div className="m-auto p-2">
                  <span className="text-2xl text-white">
                    Posibility of rain
                  </span>
                </div>
                <div className=" w-full flex justify-start items-start">
                  <span>
                    <FontAwesomeIcon
                      icon={faUmbrella}
                      style={{ color: "#6f90c4", fontSize: "1rem" }}
                    />
                  </span>
                  <span
                    className="text-xl pl-2
                       text-slate-400"
                  >
                    {posibilityRain}%
                  </span>
                </div>
              </div>
              <div className="minicard-background w-full rounded-2xl my-8 p-4">
                <div className="m-auto p-2">
                  <span className="text-2xl text-white">Clouds</span>
                </div>
                <div className=" w-full flex justify-start items-start">
                  <span>
                    <FontAwesomeIcon
                      icon={faCloud}
                      style={{ color: "#6f90c4", fontSize: "1rem" }}
                    />
                  </span>
                  <span
                    className="text-xl pl-2
                       text-slate-400"
                  >
                    {props.weather.data?.list[0]?.clouds.all}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        ):<div className="text-5xl text-white">Laaaaaaaaaa</div>}
      </div>
    </>
  );
}
