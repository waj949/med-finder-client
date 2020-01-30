import React from "react";
import NavbarPage from "./navbarPage";
import SearchBar from "./searchBar";
// import SimpleMap from "./mapTest";
import Map from "./map-card";
export default function index() {
  return (
    <div>
      <NavbarPage />
      <SearchBar />
      {/* <SimpleMap /> */}
      <Map />
      {/* commented for less calls */}
    </div>
  );
}
