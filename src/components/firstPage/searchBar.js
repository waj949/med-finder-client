import React from "react";
import { MDBCol, MDBFormInline, MDBBtn } from "mdbreact";

const SearchBar = ({ handleSearchBar, handleSearchSubmit }) => {
  return (
    <MDBCol md="12">
      <MDBFormInline
        className="md-form mr-auto mb-4"
        style={{ marginLeft: "40%" }}
      >
        <input
          className="form-control mr-sm-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={e => {
            handleSearchBar(e.target.value);
          }}
        />
        <MDBBtn
          gradient="aqua"
          rounded
          size="sm"
          type="submit"
          className="mr-auto"
          onClick={e => {
            handleSearchSubmit(e);
          }}
        >
          Search
        </MDBBtn>
      </MDBFormInline>
    </MDBCol>
  );
};

export default  SearchBar;
