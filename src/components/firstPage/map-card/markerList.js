import React from "react";
import MarkerWithInfoWindow from "./MarkerWithInformation";

export default function markerList({ locations }) {
  console.log(locations);
  return locations.map((location, index) => {
    return <MarkerWithInfoWindow key={index.toString()} location={location} />;
  });
}
