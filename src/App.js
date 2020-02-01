import React, { Component } from "react";
import FirstPage from "./components/firstPage";
// import request from './services/request'
export default class App extends Component {
  componentDidMount() {
    // console.log("trying")
    // request.example()
  }
  render() {
    return (
      <div>
        <FirstPage />
      </div>
    );
  }
}
