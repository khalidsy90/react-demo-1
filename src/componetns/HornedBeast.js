import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
export class HornedBeast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vote: 0,
    };
  }
  getSelectedObj=() =>{
    this.props.selcObj(this.props.title)
  }
  increaseVotes = () => {
    this.setState({
      vote: this.state.vote + 1,
    });
  }
  render() {

    return (
<Card style={{ width: "18rem" }} className="m-3 col-3">
        <Card.Img variant="top" src={this.props.image_url} alt={this.props.keyword} width="100%" height="60%" onClick={this.getSelectedObj}/>
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text style={{ height: "100px" }}>
            {this.props.description}
          </Card.Text>
          <Card.Text>{this.state.vote}</Card.Text>
          <Button variant="success" className="w-50 position-relative bottom-5" onClick={this.increaseVotes}>Vote</Button>
        </Card.Body>
</Card>
    );
  }
}

export default HornedBeast;
