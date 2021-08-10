import React, { Component } from "react";
import Spinner from "react-bootstrap/Spinner";
export class Header extends Component {
  render() {
    return (
      <div className="m-5">
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="secondary" />
        <Spinner animation="grow" variant="success" />
        <Spinner animation="grow" variant="danger" />
        <h1>Gallery of Hornes</h1>
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="primary" />
        <Spinner animation="grow" variant="dark" />
        
      </div>
    );
  }
}

export default Header;
