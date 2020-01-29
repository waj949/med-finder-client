import React, { Component } from "react";
import { Card, CardHeader, CardBody, NavLink } from "reactstrap";
import GoogleMapsComponent from "./googleMapsComponent";

class ReactGoogleMaps extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        className="animated fadeIn"
        style={{ height: "75vh", width: "80%", margin: "auto" }}
      >
        <Card>
          <CardHeader style={{ textAlign: "center" }}>
            <i className="icon-map"> Find your medicine on map </i>{" "}
            {/* <a href="https://coreui.io/pro/react/" className="badge badge-danger">CoreUI Pro Component</a> */}
            {/* <div className="card-header-actions">
              <a href="https://github.com/tomchentw/react-google-maps" rel="noreferrer noopener" target="_blank" className="card-header-action">
                <small className="text-muted">docs</small>
              </a>
            </div> */}
          </CardHeader>
          <CardBody>
            <GoogleMapsComponent
              key="map"
              googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_MAP_API_KEY}`}
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `400px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ReactGoogleMaps;
