import React from "react";
import NavbarPage from "./navbarPage";
import SearchBar from "./searchBar";
import Map from "./map-card";
export default function index() {
  return (
    <div>
      <NavbarPage />
      <SearchBar />
      <Map />
      {/* commented for less calls */}
    </div>
  );
}
