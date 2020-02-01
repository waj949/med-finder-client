import React, { useState } from "react";
import NavbarPage from "./navbarPage";
import SearchBar from "./searchBar";
import Map from "./map-card";

import searchServices from "../../services/googleMapsComponent";

export default function Index() {
  const [searchTerm, setTerm] = useState("");
  const [searchResult, setResult] = useState([]);

  const handleSearchBar = searchTerm => {
    setTerm(searchTerm);
  };

  const handleSearchSubmit = e => {
    e.preventDefault();
    searchServices
      .searchPharmacies(searchTerm)
      .then(res => {
        setResult(res);
      })
      .catch(err => {
        console.log("err in front", err);
      });
  };

  return (
    <div>
      <NavbarPage />
      <SearchBar
        handleSearchBar={handleSearchBar}
        handleSearchSubmit={handleSearchSubmit}
      />
      <Map searchResult={searchResult} />
      {/* comment it for less calls */}
    </div>
  );
}
