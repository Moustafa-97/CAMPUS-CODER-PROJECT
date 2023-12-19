import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faCalendar } from "@fortawesome/free-solid-svg-icons";

export default function WeatherNow(props) {
  return (
    <>
      <div className=" min-h-full group cursor-default hover:duration-500 duration-500 group-hover:duration-500 overflow-hidden relative  rounded-2xl shadow-inner shadow-gray-700 flex justify-around items-center m-0 card-background ">
        <div className="after:duration-500 before:duration-500 duration-500  group-hover:before:translate-x-11 group-hover:before:-translate-y-11  group-hover:after:translate-x-11 group-hover:after:translate-y-16 after:absolute after:w-10 after:h-10 after:bg-blue-800 after:rounded-full after:-z-10 after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-sky-700 before:rounded-full before:-z-10 before:blur-xl before:top-20 before:right-16 flex flex-col font-extrabold text-6xl z-10"></div>
        <div className="w-full min-h-full flex flex-col item-center justify-center">
          <div className="w-full m-auto pl-10 pt-8">
            {/* eslint-disable-next-line jsx-a11y/alt-text */}
            <img
              src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`}
            />
          </div>
          <div className="w-full m-auto pl-10 pb-8 text-white border-blue-300 border-b-2">
            <p className="text-5xl pt-5 pb-8">{props.temperature}°C</p>
            <p className="">{}</p>
            <p className="text-2xl pb-10">{props.status}</p>
          </div>
          <div className="w-full m-auto pl-10 text-white ">
            <p className=" text-white pb-5 pt-8">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#ffffff", fontSize: "1rem" }}
              />
              <span className="pl-4">{props.city}</span>
            </p>
            <p className="text-xl pb-10">
              <FontAwesomeIcon
                icon={faCalendar}
                style={{ color: "#ffffff", fontSize: "1rem" }}
              />
              <span className="pl-4">{props.date}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
