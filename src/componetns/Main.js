import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import HornedBeast from "./HornedBeast";
import info from "./hornesData.json";

export class Main extends Component {
  render() {
    return (
      <Container>
       <Row className="text-center justify-content-center">
        {info.map((item,idx) => (         
            <HornedBeast image_url={item.image_url} title={item.title} description={item.description} keyword={item.keyword} horns={item.horns} key={idx}/>          
        ))}
        </Row>
      </Container>
    );
  }
}

export default Main;
