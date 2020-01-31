import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MarkerList from "./markerList";
import searchServices from "../../../services/googleMapsComponent";
export class GoogleMapsComponent extends React.Component {
  constructor() {
    super();
    this.query = "pharmci beb il fala";
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
        this.setState({ locations: res });
        return res[0];
      })
      .then(res => {
        this.setState({
          location: {
            lat: res.lat,
            lng: res.lng
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
            {<MarkerList locations={this.state.locations ?? []} />}
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
