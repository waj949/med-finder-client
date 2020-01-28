import React, { Component } from "react";
import NavbarPage from "./components/navbarPage";
import ButtonPage from "./components/button";
import SearchBar from "./components/searchBar";
import SimpleMap from "./components/mapTest";
export default class App extends Component {
  render() {
    return (
      <div>
        <NavbarPage />
        <SearchBar />
        <SimpleMap />
      </div>
    );
  }
}
