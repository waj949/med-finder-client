import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MarkerList from "./markerList";
import searchServices from "../../../services/googleMapsComponent";
export class GoogleMapsComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: [
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
      ]
    };
    this.query = "Mission Pharmacal Company";
    this.button = this.button.bind(this);
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        location: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
      });
    });
  }

  button = () => {
    searchServices
      .searchPharmacies(this.query)
      .then(res => {
        console.log(res);
        this.setState({ location: res });
        return res[0];
      })
      .then(res => {
        this.setState({
          location: {
            lat: Number(res.lat),
            lng: Number(res.lng)
          }
        });
      })
      .catch(err => {
        console.log("err in front", err);
      });
  };

  render() {
    return (
      <div>
        {this?.state?.location ? (
          <GoogleMap zoom={11} center={this.state.location}>
            {<MarkerList locations={this.state.locations} />}
          </GoogleMap>
        ) : (
          <h1 style={{ width: "80%", margin: "auto 40%" }}>we can't find it</h1>
        )}
        <button onClick={this.button}>what Zver</button>
      </div>
    );
  }
}

export default GoogleMapsComponent = withScriptjs(
  withGoogleMap(GoogleMapsComponent)
);
