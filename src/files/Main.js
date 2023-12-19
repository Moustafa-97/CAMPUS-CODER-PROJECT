import React from "react";
import "./main.css";
import WeatherNow from "./WeatherNow";
import Forecast from "./Forecast";
import Today from "./Today";
import Map from "./Map";
// import { motion } from "framer-motion";
export default function Main(props) {
  return (
    <>
      {props?.weather?.data?.list ? (
        <div className="w-full h-full m-auto flex items-center justify-center">
          <div className="h-full w-full m-auto">
            <div className="w-full h-full m-auto">
              <div className="w-full lg:flex lg:items-center lg:justify-center lg:gap-5 m-auto h-1/2">
                <div className="  lg:w-3/12 w-full h-full lg:m-auto mb-3 m-auto">
                  <WeatherNow
                    temperature={props.temp}
                    icon={props.icon}
                    status={props.status}
                    date={props.date}
                    city={props.city}
                  />
                </div>
                <div className=" lg:w-8/12 w-full h-full lg:m-auto mb-3 m-auto">
                  <Today
                    temperature={props.temp}
                    icon={props.icon}
                    status={props.status}
                    date={props.date}
                    city={props.city}
                    weather={props.weather}
                  />
                </div>
              </div>
              <div className="w-full lg:flex items-center justify-center lg:gap-5 m-auto h-1/2 ">
                <div className=" lg:w-3/12 md:w-full w-full h-full m-auto">
                  <Forecast weather={props.weather} />
                </div>
                <div className=" lg:w-8/12 w-full h-full m-auto flex flex-col">
                  <Map lon={props.lon} lat={props.lat} />
                </div>
              </div> 
            </div>
          </div>
        </div>
      ) : (
        <div className="text-white text-5xl">Connecting!!!</div>
      )}
    </>
  );
}
