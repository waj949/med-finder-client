import React, { Component } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class SimpleMap extends Component {
  async componentDidMount() {
    await navigator.geolocation.getCurrentPosition(position => {
      this.setState({
        center: {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
        zoom: 11
      });
    });
  }

  render() {
    return (
      // Important! Always set the container height explicitly
      this.state?.center && this.state?.zoom ? (
        <div style={{ height: "70vh", width: "80%", margin: "auto" }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAP_API_KEY }}
            defaultCenter={this.state.center}
            defaultZoom={this.state.zoom}
          >
            <AnyReactComponent
              lat={this.state.center.lat}
              lng={this.state.center.lng}
              text="where you are"
            />
          </GoogleMapReact>
        </div>
      ) : (
        <h1 style={{ width: "80%", margin: "auto 40%" }}>
          we can't find it
          <span role="img" aria-label="cry">
            😢
          </span>
        </h1>
      )
    );
  }
}

export default SimpleMap;
