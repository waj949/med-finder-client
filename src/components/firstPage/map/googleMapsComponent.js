import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MarkerList from "./markerList";
const defaultZoom = 11;
const defaultCenter = { lat: 37.431489, lng: -122.163719 };
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

const GoogleMapsComponent = withScriptjs(
  withGoogleMap(props => {
    return (
      <GoogleMap defaultZoom={defaultZoom} defaultCenter={defaultCenter}>
        {<MarkerList locations={locations} />}
      </GoogleMap>
    );
  })
);

export default GoogleMapsComponent;
