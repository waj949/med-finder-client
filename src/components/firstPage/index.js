import React from "react";
import NavbarPage from "./navbarPage";
import SearchBar from "./searchBar";
import SimpleMap from "./mapTest";
export default function index() {
  return (
    <div>
      <NavbarPage />
      <SearchBar />
      <SimpleMap />
    </div>
  );
}
