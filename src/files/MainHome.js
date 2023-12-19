import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import Main from "./Main";
import Forecast from "./Forecast";
import Map from "./Map";
import Today from "./Today";
import Menu from "./Menu";
import { useSelector, useDispatch } from "react-redux";
import { selectPlace } from "./redux/place";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function MainHome() {
  // redux define location::
  const place = useSelector((state) => state.place.place);
  // openWeaterMap ID
  const appID = "8381b3e7461bf0fdbb626719e2f96bb0";
  // units can be changed
  // eslint-disable-next-line no-unused-vars
  const [unit, setUnit] = useState("metric");
  // API url::
  const [url, seturl] = useState(null);
  useEffect(() => {
    if (place !== "" && place !== null) {
      seturl(
        `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${appID}&units=${unit}`
      );
    } else {
      seturl(
        `https://api.openweathermap.org/data/2.5/forecast?q=london&appid=${appID}&units=${unit}`
      );
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [place]);

  // handling fetched data
  const weather = useFetch(url, "weater");
  const [temp, setTemp] = useState(null);
  const [icon, setIcon] = useState(null);
  const [status, setStatus] = useState(null);
  const [date, setDate] = useState(null);
  const [city, setCity] = useState(null);
  const [lon, setLon] = useState(null);
  const [lat, setLat] = useState(null);

  useEffect(() => {
    if (!weather.isPending && weather.data.list) {
      // Forecast
      setTemp(Math.round(weather?.data?.list[0]?.main?.temp));
      setIcon(weather?.data?.list[0]?.weather[0]?.icon);
      setStatus(
        `${weather?.data?.list[0]?.weather[0]?.main} | ${weather?.data?.list[0]?.weather[0]?.description}`
      );
      setDate(weather?.data?.list[0]?.dt_txt);
      setCity(weather?.data?.city?.name);
      setLon(weather?.data?.city?.coord?.lon);
      setLat(weather?.data?.city?.coord?.lat);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    weather?.data?.list?.weather?.description,
    weather.data?.city?.name,
    weather?.data?.list,
    weather?.isPending,
  ]);
  const dispatch = useDispatch();
  const handlePlace = (place) => {
    dispatch(selectPlace(place));
  };

  const [searchValue, setSearchValue] = useState("");

  const back = document.getElementById("back");
  return (
    <>
      {weather.error ? (
        weather.error.message === "Request failed with status code 404" ? (
          <div className=" text-white text-5xl flex flex-col justify-center items-center m-auto h-screen w-screen">
            <div>
              <div className="text-center mb-9">
                <span>Please enter your Country name correctly...</span>
              </div>
              <div className="flex items-center justify-center bg-slate-700 px-4 rounded-md py-5">
                <div>
                  <input
                    type="search"
                    value={searchValue}
                    id="input"
                    placeholder="Enter your Country..."
                    className=" bg-slate-700 relative focus:outline-none text-xl"
                    onChange={(e) => {
                      setSearchValue(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handlePlace(searchValue.toLowerCase());
                        setSearchValue("");
                      }
                    }}
                  />
                </div>
                <div
                className="pl-4"
                  onClick={() => {
                    handlePlace(searchValue);
                    setSearchValue("");
                  }}
                >
                  <FontAwesomeIcon
                    icon={faSearch}
                    style={{ fontSize: "1.5rem" }}
                    className=" text-slate-300 z-50 cursor-pointer"
                    onKeyDown={(e) => console.log(e.target)}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className=" text-white text-5xl flex justify-center items-center m-auto h-screen w-screen">
            <div className="lds-roller">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        )
      ) : weather.data.list ? (
        <div className="relative w-full lg:h-full m-auto">
          <div className=" lg:flex lg:items-center lg:justify-center lg:gap-4 h-full m-auto container w-full">
            <BrowserRouter>
              <div className="text-center lg:w-1/12 w-full px-0 h-full m-auto">
                <Menu back={back} />
              </div>
              <div
                id="back"
                className=" background back-show"
                onClick={(e) => {
                  e.target.classList.add("back-show");
                  if (window.screen.width > 1023) {
                    document
                      .getElementById("search")
                      .classList.toggle("search-country-show");
                  }
                  if (window.screen.width <= 1023) {
                    document.getElementById("myMenu").classList.toggle("show");
                  }
                }}
              ></div>
              <Routes>
                <Route
                  path="/"
                  element={
                    <Main
                      weather={weather}
                      temp={temp}
                      icon={icon}
                      status={status}
                      date={date}
                      city={city}
                      lon={lon}
                      lat={lat}
                    />
                  }
                />

                <Route
                  path="/forecast"
                  element={<Forecast weather={weather} />}
                />
                <Route path="/map" element={<Map lon={lon} lat={lat} />} />
                <Route
                  path="/today"
                  element={
                    <Today
                      temperature={temp}
                      icon={icon}
                      status={status}
                      date={date}
                      city={city}
                      weather={weather}
                    />
                  }
                />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      ) : (
        <div className=" text-white text-5xl flex justify-center items-center m-auto h-screen w-screen">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
}
