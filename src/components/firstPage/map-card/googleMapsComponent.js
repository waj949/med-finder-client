import React, { useEffect, useState } from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MarkerList from "./markerList";

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
  },
  {
    "lat": 38.8091524,
    "lng": -9.1166554,
    "label": "K",
    "draggable": false,
    "title": "Pharmacy Sagent Pharmaceuticals, Inc.",
    //"www": "https://www.Pharmacy-Sagen.com/"
}
];

const GoogleMapsComponent = withScriptjs(
  withGoogleMap(props => {
    const [location, setLocation] = useState();
    useEffect(() => {
      navigator.geolocation.getCurrentPosition(position => {
        setLocation({
          lat: position.coords.latitude, //location
          lng: position.coords.longitude
        });
      });
    });
    return location ? (
      <GoogleMap defaultZoom={11} defaultCenter={location}>
        {<MarkerList locations={locations} />}
      </GoogleMap>
    ) : (
      <h1 style={{ width: "80%", margin: "auto 40%" }}>we can't find it</h1>
    );
  })
);

export default GoogleMapsComponent;
