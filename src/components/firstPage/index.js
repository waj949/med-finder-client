import React from "react";
import NavbarPage from "./navbarPage";
import SearchBar from "./searchBar";
import ReactGoogleMaps from "./mapTest";
export default function index() {
  return (
    <div>
      <NavbarPage />
      <SearchBar />
      <ReactGoogleMaps />
      {/* commented for less calls */}
    </div>
  );
}


