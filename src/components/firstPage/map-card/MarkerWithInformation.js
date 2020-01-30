import React, { Component } from "react";
import { NavLink } from "reactstrap";
import { Marker, InfoWindow } from "react-google-maps";

class MarkerWithInfoWindow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    const { location } = this.props;

    return (
      <Marker
        onClick={this.toggle}
        position={location}
        title={location.title}
        label={location.label}
      >
        {this.state.isOpen && (
          <InfoWindow onCloseClick={this.toggle}>
            <NavLink href={location.www} target="_blank">
              {location.title}
            </NavLink>
          </InfoWindow>
        )}
      </Marker>
    );
  }
}

export default MarkerWithInfoWindow;
