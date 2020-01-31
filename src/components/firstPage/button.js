import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const ButtonPage = ({ text }) => {
  return (
    <Fragment>
      <MDBBtn gradient="aqua"> {text} </MDBBtn>
    </Fragment>
  );
};

export default ButtonPage;
