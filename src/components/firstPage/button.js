import React, { Fragment } from "react";
import { MDBBtn } from "mdbreact";

const ButtonPage = ({ text }) => {
  // should be revised : do we need to pass login as a props ? maybe to reuse it for sign out ?
  return (
    <Fragment>
      <MDBBtn gradient="aqua"> {text} </MDBBtn>
    </Fragment>
  );
};

export default ButtonPage;
