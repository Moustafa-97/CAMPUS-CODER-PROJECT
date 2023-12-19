import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectPlace } from "./redux/place";
import "./menu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFeatherPointed,
  faTableCellsLarge,
  faMap,
  faLocationDot,
  faCalendar,
  faGear,
  faBell,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";

export default function Menu(props) {
  const dispatch = useDispatch();
  const handlePlace = (place) => {
    dispatch(selectPlace(place));
  };
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const search = document.getElementById("search");

  return (
    <div className=" text-white m-auto w-full lg:h-full menu-list z-40 relative shadow-inner shadow-gray-700">
      <div className="lg:h-full container w-full m-auto flex lg:flex-col justify-between items-center">
        <div className="lg:h-full w-full  m-auto flex lg:flex-col justify-around items-center lg:pt-10 py-4">
          {/* logo app */}
          <div
            className="w-full lg-pb-7 p-4 app-icon cursor-pointer"
            onClick={() => {
              if (window.screen.width <= 1023) {
                document.getElementById("myMenu").classList.toggle("show");
                props.back.classList.toggle("back-show");
              }
            }}
          >
            <ul className=" list-none lg:border-b-slate-700 lg:border-b-2 m-auto">
              <li>
                <div>
                  <FontAwesomeIcon
                    icon={faFeatherPointed}
                    style={{ color: "#ffffff", fontSize: "3rem" }}
                    onClick={() => {
                      if (window.screen.width > 1023) {
                        navigate("/");
                      }
                    }}
                  />
                </div>
                <div className="lg:pb-6 pt-5">
                  <span>Myapp</span>
                </div>
              </li>
            </ul>
          </div>
          {/* start responsive menu */}
          <div
            id="myMenu"
            className=" top-44 absolute left-0 dropdown-menu-content lg:hidden"
          >
            <span
              className=" inline-block"
              onClick={() => {
                navigate("/");
                if (window.screen.width <= 1023) {
                  document.getElementById("myMenu").classList.toggle("show");
                  props.back.classList.toggle("back-show");
                }
              }}
            >
              <FontAwesomeIcon
                icon={faTableCellsLarge}
                style={{ color: "#ffffff", fontSize: "1.5rem" }}
              />
            </span>
            <span
              onClick={() => {
                navigate("/map");
                if (window.screen.width <= 1023) {
                  document.getElementById("myMenu").classList.toggle("show");
                  props.back.classList.toggle("back-show");
                }
              }}
            >
              <FontAwesomeIcon
                icon={faMap}
                style={{ color: "#ffffff", fontSize: "1.5rem" }}
              />
            </span>
            <span
              onClick={() => {
                navigate("/today");
                if (window.screen.width <= 1023) {
                  document.getElementById("myMenu").classList.toggle("show");
                  props.back.classList.toggle("back-show");
                }
              }}
            >
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ color: "#ffffff", fontSize: "1.5rem" }}
              />
            </span>
            <div className="flex w-full items-center justify-center absolute gap-1 px-3 py-1 bg-slate-700 rounded-xl z-50 search-country-resp">
              <input
                type="search"
                id="input"
                value={searchValue}
                placeholder="Enter your Country"
                className=" w-full bg-slate-700 p-5 focus:outline-none"
                onChange={(e) => {
                  setSearchValue(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handlePlace(searchValue.toLowerCase());
                    setSearchValue("");
                    if (window.screen.width <= 1023) {
                      document
                        .getElementById("myMenu")
                        .classList.toggle("show");
                      props.back.classList.toggle("back-show");
                    }
                  }
                }}
              />

              <FontAwesomeIcon
                icon={faSearch}
                style={{ fontSize: "1.5rem" }}
                className=" text-slate-300 z-50"
                onClick={() => {
                  handlePlace(searchValue);
                  setSearchValue("");
                  if (window.screen.width <= 1023) {
                    document.getElementById("myMenu").classList.toggle("show");
                    props.back.classList.toggle("back-show");
                  }
                }}
              />
            </div>
            <span
              onClick={() => {
                document
                  .getElementById("search")
                  .classList.toggle("search-country-show");
                if (search.className.includes("search-country-show")) {
                  props.back.classList.remove("back-show");
                } else {
                  props.back.classList.add("back-show");
                }
              }}
            >
              <FontAwesomeIcon
                icon={faSearch}
                className="relative"
                style={{ color: "#ffffff", fontSize: "1.5rem" }}
              />
            </span>
            <span
              onClick={() => {
                navigate("/forecast");
                if (window.screen.width <= 1023) {
                  document.getElementById("myMenu").classList.toggle("show");
                  props.back.classList.toggle("back-show");
                }
              }}
            >
              <FontAwesomeIcon
                icon={faCalendar}
                style={{ color: "#ffffff", fontSize: "1.5rem" }}
              />
            </span>
            <span>
              <FontAwesomeIcon
                icon={faGear}
                style={{ color: "#ffffff", fontSize: "1.5rem" }}
              />
            </span>
          </div>
          {/* end responsive menu */}
          {/* end logo*/}
          {/* start menu */}
          <div className="w-full app-icon list-control lg:pb-20 lg:block hidden">
            <ul className="h-full w-full m-auto flex lg:flex-col justify-start items-center lg:pt-10">
              <li className=" inline-block" onClick={() => navigate("/")}>
                <FontAwesomeIcon
                  icon={faTableCellsLarge}
                  style={{ color: "#ffffff", fontSize: "1.5rem" }}
                />
              </li>
              <li onClick={() => navigate("/map")}>
                <FontAwesomeIcon
                  icon={faMap}
                  style={{ color: "#ffffff", fontSize: "1.5rem" }}
                />
              </li>
              <li onClick={() => navigate("/today")}>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#ffffff", fontSize: "1.5rem" }}
                />
              </li>
              {/* start search bar */}
              <div
                id="search"
                className="flex items-center justify-center absolute gap-1 px-3 py-3 bg-slate-700 rounded-xl z-50 search-country"
              >
                <input
                  type="search"
                  value={searchValue}
                  id="input"
                  placeholder="Enter your Country..."
                  className=" bg-slate-700 p-4 relative focus:outline-none text-xl"
                  onChange={(e) => {
                    setSearchValue(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handlePlace(searchValue.toLowerCase());
                      search.classList.toggle("search-country-show");
                      if (search.className.includes("search-country-show")) {
                        props.back.classList.remove("back-show");
                      } else {
                        props.back.classList.add("back-show");
                      }
                      setSearchValue("");
                    }
                  }}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ fontSize: "1.5rem" }}
                  className=" text-slate-300 z-50 cursor-pointer"
                  onClick={() => {
                    handlePlace(searchValue);
                    search.classList.toggle("search-country-show");
                    if (search.className.includes("search-country-show")) {
                      props.back.classList.remove("back-show");
                    } else {
                      props.back.classList.add("back-show");
                    }
                    console.log(search);
                    setSearchValue("");
                  }}
                  onKeyDown={(e) => console.log(e.target)}
                />
              </div>
              {/* end search bar*/}
              <li
                className="relative"
                onClick={() => {
                  search.classList.toggle("search-country-show");
                  if (search.className.includes("search-country-show")) {
                    props.back.classList.remove("back-show");
                  } else {
                    props.back.classList.add("back-show");
                  }
                }}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  style={{ color: "#ffffff", fontSize: "1.5rem" }}
                />
              </li>
              <li onClick={() => navigate("/forecast")}>
                <FontAwesomeIcon
                  icon={faCalendar}
                  style={{ color: "#ffffff", fontSize: "1.5rem" }}
                />
              </li>
              <li>
                <FontAwesomeIcon
                  icon={faGear}
                  style={{ color: "#ffffff", fontSize: "1.5rem" }}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="h-full w-full m-auto flex lg:flex-col justify-start items-center">
          <div className="w-full app-icon list-control">
            <ul className=" h-full w-full m-auto flex lg:flex-col justify-start items-center lg:pt-10">
              <li className="lg:block hidden">
                <FontAwesomeIcon
                  icon={faBell}
                  style={{ color: "#ffffff", fontSize: "1.1rem" }}
                />
              </li>
              <li>
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <img
                  src="https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/default-profile-picture-male-icon.png"
                  className=" m-auto lg:w-20 lg:h-18 w-1/4 h-1/2"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
