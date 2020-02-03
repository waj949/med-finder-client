import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import MarkerList from "./markerList";
export class GoogleMapsComponent extends React.Component {
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

  render() {
    return (
      <div>
        {this?.state?.location ? (
          <GoogleMap
            zoom={11}
            center={
              this.props?.searchResult?.length
                ? {
                    lat: this.props.searchResult[0].lat,
                    lng: this.props.searchResult[0].lng
                  }
                : this.state.location
            }
          >
            {<MarkerList locations={this.props.searchResult ?? []} />}
          </GoogleMap>
        ) : (
          <h1 style={{ width: "80%", margin: "auto 40%" }}>we can't find it</h1>
        )}
      </div>
    );
  }
}

export default  GoogleMapsComponent = withScriptjs(
  withGoogleMap(GoogleMapsComponent)
);
