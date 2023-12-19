import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import "./main.css";

export default function Map(props) {
  const libraries = ["places"];
  const location = useLocation();
  const [map, setMap] = useState("map");
  useEffect(() => {
    if (location.pathname === "/map") {
      setMap("mapL");
    } else {
      setMap("map");
    }
  }, [location]);

  const mapContainerStyle = {
    width: "100%",
    height: "100%",
    filter: "invert(100%) grayScale(50%)",
  };
  const center = {
    lat: props.lat,
    lng: props.lon,
  };
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: "AIzaSyC-6lowWDcVddSwebKxK8jzToXnCntyxQU",
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <>
      <div className="h-full w-full overflow-hidden relative  rounded-2xl shadow-inner shadow-gray-700 flex items-center m-auto card-background ">
        <div className={`w-full ${map}`}>
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            zoom={12}
            center={center}
          >
            <Marker position={center} />
          </GoogleMap>
        </div>
      </div>
    </>
  );
}
