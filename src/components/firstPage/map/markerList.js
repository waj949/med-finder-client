import React, { Component } from "react";
import MarkerWithInfoWindow from "./MarkerWithInformation";
const locations = [
  {
    lat: 37.431489,
    lng: -122.163719,
    label: "S",
    draggable: false,
    title: "Hopitale Militaire"
    // www: 'https://www.stanford.edu/'
  },
  {
    lat: 37.394694,
    lng: -122.150333,
    label: "T",
    draggable: false,
    title: "Hopitale Fatouma Bourguiba"
    // www: 'https://www.tesla.com/'
  },
  {
    lat: 37.331681,
    lng: -122.0301,
    label: "A",
    draggable: false,
    title: "Pharmacy Ghazela"
    // www: 'https://www.apple.com/'
  },
  {
    lat: 37.484722,
    lng: -122.148333,
    label: "F",
    draggable: false,
    title: "Pharmacy Ghazela"
    // www: 'https://www.facebook.com/'
  }
];

class MarkerList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return locations.map((location, index) => {
      return (
        <MarkerWithInfoWindow key={index.toString()} location={location} />
      );
    });
  }
}
export default MarkerList;
